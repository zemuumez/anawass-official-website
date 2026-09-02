import { defineField, defineType } from 'sanity';

export const pageLocations = defineType({
  name: 'pageLocations',
  title: 'Locations Page Content',
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
      name: 'pilotBadge',
      title: 'Pilot Status Badge Text',
      type: 'localeString',
    }),
    defineField({
      name: 'pilotHeading',
      title: 'Pilot Status Heading',
      type: 'localeString',
    }),
    defineField({
      name: 'pilotDescription',
      title: 'Pilot Status Description',
      type: 'localeText',
    }),
    defineField({
      name: 'locationsList',
      title: 'Featured Machine Locations',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'locationItem' }] }],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Locations Page (Bilingual)',
      };
    },
  },
});
