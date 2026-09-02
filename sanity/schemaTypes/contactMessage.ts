/* eslint-disable @typescript-eslint/no-explicit-any */
import { defineField, defineType } from 'sanity';

export const contactMessage = defineType({
  name: 'contactMessage',
  title: 'Contact Form Submissions',
  type: 'document',
  readOnly: false,
  fields: [
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: '🟢 New / Unread', value: 'new' },
          { title: '🟡 In Progress', value: 'in_progress' },
          { title: '🔵 Replied', value: 'replied' },
          { title: '⚪ Archived', value: 'archived' },
        ],
        layout: 'radio',
      },
      initialValue: 'new',
    }),
    defineField({
      name: 'fullName',
      title: 'Full Name',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: 'email',
      title: 'Email Address',
      type: 'string',
      validation: (Rule: any) => Rule.required().email(),
    }),
    defineField({
      name: 'phone',
      title: 'Phone Number (Optional)',
      type: 'string',
    }),
    defineField({
      name: 'subject',
      title: 'Inquiry Subject / Category',
      type: 'string',
      options: {
        list: [
          { title: 'General Question', value: 'general' },
          { title: 'Host a Machine (Venue Partnership)', value: 'venue_partner' },
          { title: 'Clinical & Health Inquiry (Ananika)', value: 'clinical' },
          { title: 'Media & Communications', value: 'media' },
          { title: 'Technical / Other', value: 'other' },
        ],
      },
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: 'message',
      title: 'Message Content',
      type: 'text',
      rows: 6,
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: 'language',
      title: 'Preferred Language',
      type: 'string',
      options: {
        list: [
          { title: 'English', value: 'en' },
          { title: 'Amharic (አማርኛ)', value: 'am' },
        ],
      },
      initialValue: 'en',
    }),
    defineField({
      name: 'receivedAt',
      title: 'Received At',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: 'adminNotes',
      title: 'Internal Staff Notes / Follow-up Log',
      type: 'text',
      rows: 3,
      description: 'Notes on response, phone follow-up, or assigned team member.',
    }),
  ],
  preview: {
    select: {
      fullName: 'fullName',
      email: 'email',
      subject: 'subject',
      status: 'status',
      receivedAt: 'receivedAt',
    },
    prepare({ fullName, email, subject, status, receivedAt }: Record<string, any>) {
      const statusIcon =
        status === 'new'
          ? '🟢 [NEW]'
          : status === 'in_progress'
          ? '🟡 [IN PROGRESS]'
          : status === 'replied'
          ? '🔵 [REPLIED]'
          : '⚪ [ARCHIVED]';
      const dateStr = receivedAt ? new Date(receivedAt).toLocaleDateString() : '';
      return {
        title: `${statusIcon} ${fullName || 'Anonymous'} - ${subject || 'Inquiry'}`,
        subtitle: `${email || 'No email'} · ${dateStr}`,
      };
    },
  },
  orderings: [
    {
      title: 'Newest First',
      name: 'receivedAtDesc',
      by: [{ field: 'receivedAt', direction: 'desc' }],
    },
  ],
});
