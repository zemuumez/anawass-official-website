// GROQ queries for all pages and collections

export const pageHomeQuery = `*[_type == "pageHome"][0]`;

export const pageAboutQuery = `*[_type == "pageAbout"][0]`;

export const pageAccessQuery = `*[_type == "pageAccess"][0]`;

export const pageLearnHivQuery = `*[_type == "pageLearnHiv"][0]`;

export const pageLearnStisQuery = `*[_type == "pageLearnStis"][0]`;

export const pageLocationsQuery = `*[_type == "pageLocations"][0]{
  ...,
  locationsList[]->{
    _id,
    venueName,
    neighborhood,
    address,
    status,
    operatingHours,
    mapLink,
    image,
    order
  }
}`;

export const pagePrivacyQuery = `*[_type == "pagePrivacy"][0]`;

export const pageContactQuery = `*[_type == "pageContact"][0]`;

export const siteSettingsQuery = `*[_type == "siteSettings"][0]`;

export const locationItemsQuery = `*[_type == "locationItem"] | order(order asc)`;

export const visualLessonsByTopicQuery = `*[_type == "visualLesson" && topic == $topic] | order(order asc){
  _id,
  topic,
  order,
  badgeLabel,
  eyebrow,
  title,
  copy,
  image,
  href,
  linkLabel
}`;

export const allVisualLessonsQuery = `*[_type == "visualLesson"] | order(topic asc, order asc){
  _id,
  topic,
  order,
  badgeLabel,
  eyebrow,
  title,
  copy,
  image,
  href,
  linkLabel
}`;
