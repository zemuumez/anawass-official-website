/* eslint-disable @typescript-eslint/no-explicit-any */
import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '';
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-03-01';

export const isSanityConfigured = Boolean(
  projectId && projectId !== 'anawass-cms' && projectId !== 'placeholder'
);

// Public read client
export const client = createClient({
  projectId: projectId || 'placeholder',
  dataset,
  apiVersion,
  useCdn: process.env.NODE_ENV === 'production',
});

// Authenticated write client for submitting contact form messages
export const writeClient = createClient({
  projectId: projectId || 'placeholder',
  dataset,
  apiVersion,
  token: process.env.SANITY_API_WRITE_TOKEN || '',
  useCdn: false,
});

// Helper for generating responsive Sanity image URLs
export const urlForImage = (source: any) => {
  if (!source || !source.asset) {
    return null;
  }
  try {
    const builder = imageUrlBuilder(client);
    return builder.image(source).auto('format').fit('max');
  } catch {
    return null;
  }
};
