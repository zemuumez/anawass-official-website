/* eslint-disable @typescript-eslint/no-explicit-any */
import { defineField, defineType } from 'sanity';

export const locationItem = defineType({
  name: 'locationItem',
  title: 'Vending Machine Location',
  type: 'document',
  fields: [
    defineField({
      name: 'venueName',
      title: 'Venue Name',
      type: 'localeString',
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: 'neighborhood',
      title: 'City / Neighborhood / Zone',
      type: 'localeString',
      description: 'e.g. Bole / Kazanchis / Piassa, Addis Ababa',
    }),
    defineField({
      name: 'address',
      title: 'Address & Entrance Directions',
      type: 'localeText',
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: 'status',
      title: 'Operational Status',
      type: 'string',
      options: {
        list: [
          { title: '🟢 Operational / Active', value: 'active' },
          { title: '🟡 Pilot Preparation', value: 'pilot' },
          { title: '🔴 Maintenance', value: 'maintenance' },
        ],
        layout: 'radio',
      },
      initialValue: 'pilot',
    }),
    defineField({
      name: 'operatingHours',
      title: 'Operating Hours',
      type: 'localeString',
      description: 'e.g. "24/7 Access" or "Open daily 08:00 - 23:00"',
    }),
    defineField({
      name: 'mapLink',
      title: 'Google Maps Link',
      type: 'url',
    }),
    defineField({
      name: 'image',
      title: 'Location Photo',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      initialValue: 1,
    }),
  ],
  preview: {
    select: {
      title: 'venueName.en',
      subtitle: 'neighborhood.en',
      status: 'status',
      media: 'image',
    },
    prepare({ title, subtitle, status, media }: Record<string, any>) {
      const badge = status === 'active' ? '🟢' : status === 'pilot' ? '🟡' : '🔴';
      return {
        title: `${badge} ${title || 'Unnamed Venue'}`,
        subtitle: subtitle || 'Addis Ababa',
        media,
      };
    },
  },
});
