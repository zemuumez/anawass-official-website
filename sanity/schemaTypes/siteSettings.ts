import { defineField, defineType } from 'sanity';

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Global Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'topBannerNotice',
      title: 'Top Announcement Banner Text',
      type: 'localeString',
      description: 'e.g., "Possible HIV exposure? Seek qualified care immediately—PEP must be started within 72 hours."',
    }),
    defineField({
      name: 'topBannerLinkText',
      title: 'Top Banner Link Text',
      type: 'localeString',
      description: 'e.g., "Learn about PEP"',
    }),
    defineField({
      name: 'topBannerLinkHref',
      title: 'Top Banner Link URL',
      type: 'string',
      initialValue: '/learn/hiv#pep',
    }),
    defineField({
      name: 'footerMission',
      title: 'Footer Mission Statement',
      type: 'localeString',
    }),
    defineField({
      name: 'footerDisclaimer',
      title: 'Footer Medical Disclaimer',
      type: 'localeString',
    }),
    defineField({
      name: 'contactPhone',
      title: 'Support / Contact Phone Number',
      type: 'string',
    }),
    defineField({
      name: 'contactEmail',
      title: 'Contact Email Address',
      type: 'string',
    }),
    defineField({
      name: 'emergencyNotice',
      title: 'Emergency Guidance Notice',
      type: 'localeText',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Global Site Settings & Navigation',
      };
    },
  },
});
