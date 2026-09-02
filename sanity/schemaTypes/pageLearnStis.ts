import { defineField, defineType } from 'sanity';

export const pageLearnStis = defineType({
  name: 'pageLearnStis',
  title: 'STI Education Guide Content',
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
      name: 'silentTitle',
      title: 'Asymptomatic / Silent Infections Section Title',
      type: 'localeString',
    }),
    defineField({
      name: 'silentBody',
      title: 'Asymptomatic Explanation',
      type: 'localeText',
    }),
    defineField({
      name: 'testingTitle',
      title: 'Testing Section Title',
      type: 'localeString',
    }),
    defineField({
      name: 'testingBody',
      title: 'Testing Guidance Explanation',
      type: 'localeText',
    }),
    defineField({
      name: 'careTitle',
      title: 'When to Seek Clinical Care Title',
      type: 'localeString',
    }),
    defineField({
      name: 'careBody',
      title: 'Clinical Care Advice',
      type: 'localeText',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'STI Education Guide (Bilingual)',
      };
    },
  },
});
