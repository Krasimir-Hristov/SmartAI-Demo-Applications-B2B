/**
 * Defensive Header Filtering (CVE-2025-29927 Mitigation).
 *
 * Strips all external headers starting with `x-` (specifically `x-middleware-subrequest`,
 * `x-middleware-*`, `x-invoke-*`, `x-prerender-*`) from incoming client requests.
 */
export const scrubExternalHeaders = (incomingHeaders: Headers): Headers => {
  const sanitized = new Headers(incomingHeaders);
  const headersToDelete: string[] = [];

  sanitized.forEach((_value, name) => {
    if (name.toLowerCase().startsWith('x-')) {
      headersToDelete.push(name);
    }
  });

  for (const name of headersToDelete) {
    sanitized.delete(name);
  }

  return sanitized;
};
