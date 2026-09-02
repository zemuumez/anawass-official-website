import { defineField, defineType } from 'sanity';

export const pageAbout = defineType({
  name: 'pageAbout',
  title: 'About / Mission Page Content',
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
      name: 'whyTitle',
      title: 'Why ANAWASS Exists Section Title',
      type: 'localeString',
    }),
    defineField({
      name: 'whyParagraphs',
      title: 'Why ANAWASS Exists Paragraphs',
      type: 'array',
      of: [{ type: 'localeText' }],
    }),
    defineField({
      name: 'valuesTitle',
      title: 'Core Values Section Title',
      type: 'localeString',
    }),
    defineField({
      name: 'valuesList',
      title: 'Core Values (Dignity, Privacy, Clarity, etc.)',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', title: 'Value Title', type: 'localeString' },
            { name: 'copy', title: 'Value Explanation', type: 'localeText' },
          ],
        },
      ],
    }),
    defineField({
      name: 'ananikaTitle',
      title: 'Ananika Health Partner Title',
      type: 'localeString',
    }),
    defineField({
      name: 'ananikaDescription',
      title: 'Ananika Health Partner Description',
      type: 'localeText',
    }),
    defineField({
      name: 'wassTitle',
      title: 'WASS Global Partner Title',
      type: 'localeString',
    }),
    defineField({
      name: 'wassDescription',
      title: 'WASS Global Partner Description',
      type: 'localeText',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'About / Mission Page (Bilingual)',
      };
    },
  },
});
