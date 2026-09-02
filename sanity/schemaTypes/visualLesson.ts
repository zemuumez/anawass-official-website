/* eslint-disable @typescript-eslint/no-explicit-any */
import { defineField, defineType } from 'sanity';

export const visualLesson = defineType({
  name: 'visualLesson',
  title: 'Visual Lesson Slide',
  type: 'document',
  fields: [
    defineField({
      name: 'topic',
      title: 'Topic / Page Section',
      type: 'string',
      options: {
        list: [
          { title: 'Home Page Visual Journey', value: 'home' },
          { title: 'HIV Education Guide', value: 'hiv' },
          { title: 'STI Education Guide', value: 'stis' },
          { title: 'Smart Vending Access Walkthrough', value: 'access' },
          { title: 'Partnership in Action', value: 'partners' },
          { title: 'Privacy Explained', value: 'privacy' },
          { title: 'Amharic Dedicated Visuals', value: 'am' },
        ],
        layout: 'dropdown',
      },
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: 'order',
      title: 'Display Order / Sequence',
      type: 'number',
      initialValue: 1,
      description: 'Used to sort slides within the topic carousel (e.g. 1, 2, 3...)',
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: 'badgeLabel',
      title: 'Slide Badge Label',
      type: 'localeString',
      description: 'e.g., "Visual lesson 1" / "ትምህርት 1"',
    }),
    defineField({
      name: 'eyebrow',
      title: 'Eyebrow / Sub-tag',
      type: 'localeString',
      description: 'e.g., "01 · Learn" / "01 · ይወቁ"',
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Slide Title',
      type: 'localeString',
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: 'copy',
      title: 'Slide Copy / Description',
      type: 'localeText',
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Slide Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          title: 'Alt Text (Accessibility)',
          type: 'localeString',
        },
      ],
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: 'href',
      title: 'Target Link URL',
      type: 'string',
      description: 'e.g. /learn/hiv or /access#how-it-works',
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: 'linkLabel',
      title: 'Link Button Label',
      type: 'localeString',
      description: 'e.g. "Open the HIV guide" / "ስለ ኤችአይቪ ይወቁ"',
      validation: (Rule: any) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title.en',
      subtitle: 'topic',
      order: 'order',
      media: 'image',
    },
    prepare({ title, subtitle, order, media }: Record<string, any>) {
      return {
        title: title ? `${order ? `[#${order}] ` : ''}${title}` : 'Untitled Slide',
        subtitle: `Topic: ${subtitle || 'general'}`,
        media,
      };
    },
  },
  orderings: [
    {
      title: 'Order by Topic & Sequence',
      name: 'topicOrderAsc',
      by: [
        { field: 'topic', direction: 'asc' },
        { field: 'order', direction: 'asc' },
      ],
    },
  ],
});
