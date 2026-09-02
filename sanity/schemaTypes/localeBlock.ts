import { defineType } from 'sanity';

export const localeBlock = defineType({
  name: 'localeBlock',
  title: 'Localized Rich Text',
  type: 'object',
  fields: [
    {
      name: 'en',
      title: 'English',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'am',
      title: 'Amharic (አማርኛ)',
      type: 'array',
      of: [{ type: 'block' }],
    },
  ],
});
