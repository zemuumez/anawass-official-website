import { defineField, defineType } from 'sanity';

export const pageAccess = defineType({
  name: 'pageAccess',
  title: 'Smart Vending Access Page Content',
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
      name: 'howItWorksEyebrow',
      title: 'How It Works Eyebrow',
      type: 'localeString',
    }),
    defineField({
      name: 'howItWorksTitle',
      title: 'How It Works Title',
      type: 'localeString',
    }),
    defineField({
      name: 'howItWorksDescription',
      title: 'How It Works Description',
      type: 'localeText',
    }),
    defineField({
      name: 'steps',
      title: 'How It Works Steps (Find, Learn & Choose, Pay & Collect)',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'stepNumber', title: 'Step Number', type: 'string' },
            { name: 'title', title: 'Step Title', type: 'localeString' },
            { name: 'copy', title: 'Step Explanation', type: 'localeText' },
          ],
        },
      ],
    }),
    defineField({
      name: 'privacyCommitmentTitle',
      title: 'Privacy Commitment Title',
      type: 'localeString',
    }),
    defineField({
      name: 'privacyCommitmentCopy',
      title: 'Privacy Commitment Text',
      type: 'localeText',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Smart Vending Access Page (Bilingual)',
      };
    },
  },
});
