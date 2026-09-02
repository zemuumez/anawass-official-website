import { defineType } from 'sanity';

export const localeString = defineType({
  name: 'localeString',
  title: 'Localized String',
  type: 'object',
  fields: [
    {
      name: 'en',
      title: 'English',
      type: 'string',
    },
    {
      name: 'am',
      title: 'Amharic (አማርኛ)',
      type: 'string',
    },
  ],
});
