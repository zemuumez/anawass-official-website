import { defineField, defineType } from 'sanity';

export const pagePrivacy = defineType({
  name: 'pagePrivacy',
  title: 'Privacy Commitments Page Content',
  type: 'document',
  fields: [
    defineField({
      name: 'introEyebrow',
      title: 'Page Intro Eyebrow',
      type: 'localeString',
    }),
    defineField({
      name: 'introTitle',
      title: 'Page Intro Title',
      type: 'localeString',
    }),
    defineField({
      name: 'introDescription',
      title: 'Page Intro Description',
      type: 'localeText',
    }),
    defineField({
      name: 'principles',
      title: 'Privacy Principles List',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', title: 'Principle Title', type: 'localeString' },
            { name: 'body', title: 'Principle Details', type: 'localeText' },
          ],
        },
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Privacy Commitments Page (Bilingual)',
      };
    },
  },
});
