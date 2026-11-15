const SAFE_INTERNAL_X_HEADERS = new Set([
  'x-forwarded-for',
  'x-forwarded-host',
  'x-forwarded-port',
  'x-forwarded-proto',
  'x-nextjs-request-id',
  'x-nextjs-html-request-id',
  'x-nextjs-data',
  'x-deployment-id',
]);

/**
 * Checks whether the incoming request carries external `x-*` headers beyond
 * the standard `x-forwarded-*` and Next.js internal App Router / debug headers.
 */
export const hasExternalXHeaders = (incomingHeaders: Headers): boolean => {
  let foundExternal = false;

  incomingHeaders.forEach((_value, name) => {
    const lowerName = name.toLowerCase();
    if (lowerName.startsWith('x-') && !SAFE_INTERNAL_X_HEADERS.has(lowerName)) {
      foundExternal = true;
    }
  });

  return foundExternal;
};

/**
 * Defensive Header Filtering (CVE-2025-29927 Mitigation).
 *
 * Strips all external headers starting with `x-` (specifically `x-middleware-subrequest`,
 * `x-middleware-*`, `x-invoke-*`, `x-prerender-*`) from incoming client requests,
 * while preserving Next.js internal forwarding/debug-channel headers and decoded
 * `next-router-state-tree` so client-side RSC navigations never hang.
 */
export const scrubExternalHeaders = (incomingHeaders: Headers): Headers => {
  const sanitized = new Headers(incomingHeaders);
  const headersToDelete: string[] = [];
  const preservedInternal: Array<[string, string]> = [];

  sanitized.forEach((value, name) => {
    const lowerName = name.toLowerCase();
    if (lowerName.startsWith('x-')) {
      headersToDelete.push(name);
      if (SAFE_INTERNAL_X_HEADERS.has(lowerName)) {
        preservedInternal.push([lowerName, value]);
      }
    }
  });

  for (const name of headersToDelete) {
    sanitized.delete(name);
  }

  for (const [name, value] of preservedInternal) {
    sanitized.set(name, value);
  }

  const rawRouterState = sanitized.get('next-router-state-tree');
  if (rawRouterState && (rawRouterState.startsWith('%5B') || rawRouterState.startsWith('%5b'))) {
    try {
      sanitized.set('next-router-state-tree', decodeURIComponent(rawRouterState));
    } catch {
      // Keep original header if percent-decoding fails
    }
  }

  return sanitized;
};
