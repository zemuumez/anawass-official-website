import { defineField, defineType } from 'sanity';

export const pageLearnHiv = defineType({
  name: 'pageLearnHiv',
  title: 'HIV Education Guide Content',
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
      name: 'basicsTitle',
      title: 'HIV Basics Section Title',
      type: 'localeString',
    }),
    defineField({
      name: 'basicsBody',
      title: 'HIV Basics Explanation',
      type: 'localeText',
    }),
    defineField({
      name: 'pepTitle',
      title: 'PEP Urgent Action Title',
      type: 'localeString',
    }),
    defineField({
      name: 'pepTimelineNotice',
      title: 'PEP 72-Hour Urgency Notice',
      type: 'localeText',
    }),
    defineField({
      name: 'testingTitle',
      title: 'Testing Guidance Title',
      type: 'localeString',
    }),
    defineField({
      name: 'testingBody',
      title: 'Testing Guidance Explanation',
      type: 'localeText',
    }),
    defineField({
      name: 'mythsAndFacts',
      title: 'Myths & Facts List',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'myth', title: 'Myth', type: 'localeString' },
            { name: 'fact', title: 'Fact / Reality', type: 'localeText' },
          ],
        },
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'HIV Education Guide (Bilingual)',
      };
    },
  },
});
