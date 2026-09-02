import { defineType } from 'sanity';

export const localeText = defineType({
  name: 'localeText',
  title: 'Localized Text',
  type: 'object',
  fields: [
    {
      name: 'en',
      title: 'English',
      type: 'text',
      rows: 4,
    },
    {
      name: 'am',
      title: 'Amharic (አማርኛ)',
      type: 'text',
      rows: 4,
    },
  ],
});
