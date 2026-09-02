import { defineField, defineType } from 'sanity';

export const pageContact = defineType({
  name: 'pageContact',
  title: 'Contact Us Page Content',
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
      name: 'generalInquiryTitle',
      title: 'General Inquiries Card Title',
      type: 'localeString',
    }),
    defineField({
      name: 'generalInquiryDescription',
      title: 'General Inquiries Card Description',
      type: 'localeText',
    }),
    defineField({
      name: 'venuePartnerTitle',
      title: 'Venue Partner Card Title',
      type: 'localeString',
    }),
    defineField({
      name: 'venuePartnerDescription',
      title: 'Venue Partner Card Description',
      type: 'localeText',
    }),
    defineField({
      name: 'clinicalPartnerTitle',
      title: 'Clinical Partner (Ananika) Card Title',
      type: 'localeString',
    }),
    defineField({
      name: 'clinicalPartnerDescription',
      title: 'Clinical Partner Card Description',
      type: 'localeText',
    }),
    defineField({
      name: 'emergencyCardTitle',
      title: 'Emergency Guidance Card Title',
      type: 'localeString',
    }),
    defineField({
      name: 'emergencyCardDescription',
      title: 'Emergency Guidance Card Description',
      type: 'localeText',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Contact Us Page (Bilingual)',
      };
    },
  },
});
