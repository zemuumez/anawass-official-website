import { contactMessage } from './contactMessage';
import { localeBlock } from './localeBlock';
import { localeString } from './localeString';
import { localeText } from './localeText';
import { locationItem } from './locationItem';
import { pageAbout } from './pageAbout';
import { pageAccess } from './pageAccess';
import { pageContact } from './pageContact';
import { pageHome } from './pageHome';
import { pageLearnHiv } from './pageLearnHiv';
import { pageLearnStis } from './pageLearnStis';
import { pageLocations } from './pageLocations';
import { pagePrivacy } from './pagePrivacy';
import { siteSettings } from './siteSettings';
import { visualLesson } from './visualLesson';

export const schemaTypes = [
  // Localized Types
  localeString,
  localeText,
  localeBlock,

  // Global Settings
  siteSettings,

  // Dynamic Content Collections
  visualLesson,
  locationItem,
  contactMessage,

  // Page Singletons / Section-by-Section Documents
  pageHome,
  pageAbout,
  pageAccess,
  pageLearnHiv,
  pageLearnStis,
  pageLocations,
  pagePrivacy,
  pageContact,
];
