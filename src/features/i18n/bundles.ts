import deUi from '../../../messages/de.json';
import bgUi from '../../../messages/bg.json';
import enUi from '../../../messages/en.json';
import trUi from '../../../messages/tr.json';

import deCatalog from '../../../messages/demos/de.json';
import bgCatalog from '../../../messages/demos/bg.json';
import enCatalog from '../../../messages/demos/en.json';
import trCatalog from '../../../messages/demos/tr.json';

import type { AllMessages } from './global';
import type { SupportedLocale } from './types';

export const ALL_MESSAGE_BUNDLES: Record<SupportedLocale, AllMessages> = {
  de: { ...deUi, catalog: deCatalog },
  bg: { ...bgUi, catalog: bgCatalog },
  en: { ...enUi, catalog: enCatalog },
  tr: { ...trUi, catalog: trCatalog },
};
