import { defineField, defineType } from 'sanity';

export const pageHome = defineType({
  name: 'pageHome',
  title: 'Home Page Content',
  type: 'document',
  fields: [
    defineField({
      name: 'heroEyebrow',
      title: 'Hero Eyebrow Tag',
      type: 'localeString',
    }),
    defineField({
      name: 'heroTitle',
      title: 'Hero Title',
      type: 'localeString',
      description: 'Main heading on the home page',
    }),
    defineField({
      name: 'heroDescription',
      title: 'Hero Description',
      type: 'localeText',
    }),
    defineField({
      name: 'heroPrimaryBtn',
      title: 'Primary Button Label',
      type: 'localeString',
    }),
    defineField({
      name: 'heroSecondaryBtn',
      title: 'Secondary Button Label',
      type: 'localeString',
    }),
    defineField({
      name: 'pepBoxEyebrow',
      title: 'PEP Emergency Box Eyebrow',
      type: 'localeString',
    }),
    defineField({
      name: 'pepBoxTitle',
      title: 'PEP Emergency Box Title',
      type: 'localeString',
    }),
    defineField({
      name: 'pepBoxDescription',
      title: 'PEP Emergency Box Description',
      type: 'localeText',
    }),
    defineField({
      name: 'pepBoxAction',
      title: 'PEP Action Callout',
      type: 'localeString',
    }),
    defineField({
      name: 'journeyEyebrow',
      title: 'Three-Step Journey Eyebrow',
      type: 'localeString',
    }),
    defineField({
      name: 'journeyTitle',
      title: 'Three-Step Journey Title',
      type: 'localeString',
    }),
    defineField({
      name: 'journeyDescription',
      title: 'Three-Step Journey Description',
      type: 'localeText',
    }),
    defineField({
      name: 'journeySteps',
      title: 'Journey Step Cards',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'stepNumber', title: 'Step Number (e.g. 01)', type: 'string' },
            { name: 'title', title: 'Step Title', type: 'localeString' },
            { name: 'copy', title: 'Step Description', type: 'localeText' },
            { name: 'href', title: 'Link URL', type: 'string' },
            { name: 'label', title: 'Button Label', type: 'localeString' },
          ],
        },
      ],
    }),
    defineField({
      name: 'vendingSpotlightTitle',
      title: 'Vending Spotlight Title',
      type: 'localeString',
    }),
    defineField({
      name: 'vendingSpotlightCopy',
      title: 'Vending Spotlight Copy',
      type: 'localeText',
    }),
    defineField({
      name: 'finalCtaTitle',
      title: 'Bottom CTA Title',
      type: 'localeString',
    }),
    defineField({
      name: 'finalCtaCopy',
      title: 'Bottom CTA Copy',
      type: 'localeText',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Home Page Content (Bilingual)',
      };
    },
  },
});
