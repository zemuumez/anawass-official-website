import { client, isSanityConfigured, urlForImage } from './sanity.client';
import {
  pageHomeQuery,
  pageAboutQuery,
  pageAccessQuery,
  pageLearnHivQuery,
  pageLearnStisQuery,
  pageLocationsQuery,
  pagePrivacyQuery,
  pageContactQuery,
  siteSettingsQuery,
  visualLessonsByTopicQuery,
} from './sanity.queries';

export type Locale = 'en' | 'am';

export interface VisualLessonSlide {
  src: string;
  alt: string;
  eyebrow: string;
  title: string;
  copy: string;
  href: string;
  linkLabel: string;
  badgeLabel?: string;
}

// Built-in Visual Lesson Fallbacks (English & Amharic)
const fallbackLessons: Record<string, { en: VisualLessonSlide[]; am: VisualLessonSlide[] }> = {
  home: {
    en: [
      {
        src: '/media/anawass-editorial-hero.png',
        alt: 'A young Ethiopian woman reading private health information on her phone',
        eyebrow: '01 · Learn',
        title: 'Start with clear HIV information.',
        copy: 'Understand transmission, prevention, testing, PEP, PrEP and treatment without fear-based language.',
        href: '/learn/hiv',
        linkLabel: 'Open the HIV guide',
      },
      {
        src: '/media/anawass-story-man.png',
        alt: 'An Ethiopian man using a private digital health screen',
        eyebrow: '02 · Choose',
        title: 'Explore prevention without an awkward conversation.',
        copy: 'The ANAWASS interface is designed for private bilingual learning and simple product selection.',
        href: '/access#how-it-works',
        linkLabel: 'See how it works',
      },
      {
        src: '/media/anawass-vending-machine.jpeg',
        alt: 'The real ANAWASS smart health vending machine',
        eyebrow: '03 · Collect',
        title: 'Use a verified ANAWASS machine.',
        copy: 'The location page will publish confirmed venues, map directions, hours and service status.',
        href: '/locations',
        linkLabel: 'Find a machine',
      },
    ],
    am: [
      {
        src: '/media/anawass-editorial-hero.png',
        alt: 'በስልክ የጤና መረጃ የምታነብ ሴት',
        eyebrow: '01 · ይወቁ',
        title: 'ኤችአይቪ በዕለታዊ ንክኪ አይተላለፍም።',
        copy: 'በመተቃቀፍ፣ ምግብ በመጋራት፣ በመጸዳጃ ቤት ወይም በትንኝ አይተላለፍም።',
        href: '/am#hiv',
        linkLabel: 'ስለ ኤችአይቪ ይወቁ',
      },
      {
        src: '/media/anawass-story-man.png',
        alt: 'የግል ዲጂታል የጤና መረጃ የሚያነብ ሰው',
        eyebrow: '02 · ይመርምሩ',
        title: 'ሁኔታዎን ለማወቅ ምርመራ ብቻ ነው።',
        copy: 'ምርመራውን መቼ እንደሚያደርጉ ከብቃት ያለው የጤና ባለሙያ ጋር ይወያዩ።',
        href: '/am#hiv',
        linkLabel: 'ዋና መረጃውን ይመልከቱ',
      },
      {
        src: '/media/anawass-vending-machine.jpeg',
        alt: 'የANAWASS ስማርት ጤና ቬንዲንግ ማሽን',
        eyebrow: '03 · በግል ያግኙ',
        title: 'የተረጋገጠ የANAWASS ማሽን ያግኙ።',
        copy: 'የተረጋገጡ ቦታዎች፣ የካርታ አቅጣጫ እና የስራ ሰዓት በመገኛ ገጹ ይታያሉ።',
        href: '/locations',
        linkLabel: 'ማሽን ይፈልጉ',
      },
    ],
  },
  hiv: {
    en: [
      {
        src: '/media/anawass-story-friends.png',
        alt: 'Two Ethiopian friends talking comfortably',
        eyebrow: 'HIV basics',
        title: 'HIV is not spread by everyday contact.',
        copy: 'Hugging, sharing food, toilets, handshakes and mosquito bites do not transmit HIV.',
        href: '/learn/hiv#basics',
        linkLabel: 'Understand transmission',
      },
      {
        src: '/media/anawass-editorial-hero.png',
        alt: 'A woman reviewing private health information on her phone',
        eyebrow: 'Testing',
        title: 'A test—not appearance—reveals HIV status.',
        copy: 'Testing windows differ. A qualified provider can help choose the right test and timing.',
        href: '/learn/hiv#testing',
        linkLabel: 'Learn about testing',
      },
      {
        src: '/media/anawass-story-man.png',
        alt: 'A man privately reading a digital health screen',
        eyebrow: 'Time-sensitive',
        title: 'Possible exposure? PEP must begin within 72 hours.',
        copy: 'Seek qualified care immediately. The sooner PEP starts, the better.',
        href: '/learn/hiv#pep',
        linkLabel: 'What to do now',
      },
    ],
    am: [
      {
        src: '/media/anawass-story-friends.png',
        alt: 'በነፃነት የሚወያዩ ጓደኛሞች',
        eyebrow: 'የኤችአይቪ መሠረታዊ መረጃ',
        title: 'ኤችአይቪ በዕለታዊ ንክኪ አይተላለፍም።',
        copy: 'በመተቃቀፍ፣ ምግብ በመጋራት ወይም በመጨባበጥ አይተላለፍም።',
        href: '/am#hiv',
        linkLabel: 'ስለ መተላለፊያ መንገዶች ይወቁ',
      },
      {
        src: '/media/anawass-editorial-hero.png',
        alt: 'የጤና መረጃ የምትመረምር ሴት',
        eyebrow: 'ምርመራ',
        title: 'ሁኔታዎን ለማወቅ ምርመራ ወሳኝ ነው።',
        copy: 'ትክክለኛውን የምርመራ ጊዜ ከጤና ባለሙያ ጋር ያረጋግጡ።',
        href: '/am#hiv',
        linkLabel: 'ስለ ምርመራ ይወቁ',
      },
      {
        src: '/media/anawass-story-man.png',
        alt: 'አስቸኳይ መረጃ የሚያነብ ሰው',
        eyebrow: 'አስቸኳይ መረጃ',
        title: 'ለኤችአይቪ ከተጋለጡ? PEP በ72 ሰዓት ውስጥ መጀመር አለበት።',
        copy: 'ወዲያውኑ ወደ ጤና ተቋም በመሄድ የድንገተኛ መከላከያ ያግኙ።',
        href: '/am#pep',
        linkLabel: 'አሁን ምን ማድረግ እንዳለብዎ',
      },
    ],
  },
  stis: {
    en: [
      {
        src: '/media/anawass-story-friends.png',
        alt: 'Two Ethiopian friends having a calm conversation',
        eyebrow: 'Often silent',
        title: 'An STI may have no visible symptoms.',
        copy: 'Feeling well does not always rule out infection. Testing can provide clarity.',
        href: '/learn/stis#testing',
        linkLabel: 'When testing helps',
      },
      {
        src: '/media/anawass-editorial-hero.png',
        alt: 'A woman accessing health education privately',
        eyebrow: 'Qualified care',
        title: 'Avoid guessing or self-medicating.',
        copy: 'The correct test and treatment depend on the infection. Seek a qualified health professional.',
        href: '/learn/stis#care',
        linkLabel: 'Know when to seek care',
      },
      {
        src: '/media/anawass-vending-machine.jpeg',
        alt: 'The ANAWASS smart prevention vending machine',
        eyebrow: 'Prevention',
        title: 'Barrier protection and education belong together.',
        copy: 'ANAWASS connects understandable guidance with discreet access to approved prevention products.',
        href: '/access',
        linkLabel: 'Explore private access',
      },
    ],
    am: [
      {
        src: '/media/anawass-story-friends.png',
        alt: 'የጤና ውይይት የሚያደርጉ ጓደኛሞች',
        eyebrow: 'ምልክት የሌላቸው',
        title: 'የአባላዘር ኢንፌክሽኖች ምልክት ላያሳዩ ይችላሉ።',
        copy: 'ምንም ዓይነት ሕመም ባይሰማዎትም ምርመራ ግልጽነትን ይሰጣል።',
        href: '/am#stis',
        linkLabel: 'ስለ ምርመራ አስፈላጊነት',
      },
      {
        src: '/media/anawass-editorial-hero.png',
        alt: 'ብቃት ያለው የጤና ምክር',
        eyebrow: 'የባለሙያ ድጋፍ',
        title: 'በራስ መድሃኒት ከመውሰድ ይቆጠቡ።',
        copy: 'ትክክለኛው ምርመራ እና ሕክምና ከብቃት ካለው የጤና ባለሙያ መገኘት አለበት።',
        href: '/am#stis',
        linkLabel: 'የጤና እርዳታ መቼ እንደሚፈለግ',
      },
      {
        src: '/media/anawass-vending-machine.jpeg',
        alt: 'የANAWASS ስማርት ማሽን',
        eyebrow: 'መከላከያ',
        title: 'መረጃ እና የመከላከያ አቅርቦት አብረው ይሄዳሉ።',
        copy: 'ANAWASS ግልጽ መረጃን እና የግል ምርት አቅርቦትን ያቀላጥፋል።',
        href: '/am#access',
        linkLabel: 'የግል አቅርቦትን ይመልከቱ',
      },
    ],
  },
  access: {
    en: [
      {
        src: '/media/anawass-vending-machine.jpeg',
        alt: 'The real ANAWASS smart vending machine',
        eyebrow: '01 · Find',
        title: 'Go to a verified ANAWASS location.',
        copy: 'Only confirmed venues will appear in the public locator, with directions, hours and service status.',
        href: '/locations',
        linkLabel: 'Open machine locator',
      },
      {
        src: '/media/anawass-story-man.png',
        alt: 'A man using a private digital health interface',
        eyebrow: '02 · Learn and choose',
        title: 'Use the screen privately.',
        copy: 'Review clear prevention guidance and select an approved product without a public counter conversation.',
        href: '/access#how-it-works',
        linkLabel: 'How the machine works',
      },
      {
        src: '/media/anawass-vending-machine.jpeg',
        alt: 'The secure dispensing area of the ANAWASS machine',
        eyebrow: '03 · Pay and collect',
        title: 'Complete the transaction and collect discreetly.',
        copy: 'The machine confirms payment and dispenses through a secure collection opening.',
        href: '/access#how-it-works',
        linkLabel: 'Review all three steps',
      },
    ],
    am: [
      {
        src: '/media/anawass-vending-machine.jpeg',
        alt: 'የተረጋገጠ የANAWASS ማሽን',
        eyebrow: '01 · ይፈልጉ',
        title: 'የተረጋገጠ የANAWASS ማሽን ወዳለበት ቦታ ይሂዱ።',
        copy: 'የተረጋገጡ ቦታዎች አድራሻ፣ የስራ ሰዓት እና የማሽን ሁኔታ በመገኛ ገጻችን ላይ ይገኛሉ።',
        href: '/locations',
        linkLabel: 'ማሽን ይፈልጉ',
      },
      {
        src: '/media/anawass-story-man.png',
        alt: 'የማሽኑን ስክሪን በግል መጠቀም',
        eyebrow: '02 · ይማሩ እና ይምረጡ',
        title: 'ስክሪኑን በግል እና በክብር ይጠቀሙ።',
        copy: 'የመከላከያ መመሪያውን በስክሪኑ ላይ በማየት የሚፈልጉትን ምርት ያለ ሰው እገዛ ይምረጡ።',
        href: '/am#access',
        linkLabel: 'አሰራሩን ይመልከቱ',
      },
      {
        src: '/media/anawass-vending-machine.jpeg',
        alt: 'ምርቱን በግል መውሰድ',
        eyebrow: '03 · ይክፈሉ እና ይውሰዱ',
        title: 'ክፍያዎን አጠናቀው ምርትዎን በሚስጥር ይውሰዱ።',
        copy: 'ማሽኑ ክፍያዎን ሲያረጋግጥ ምርቱን በአስተማማኝ መውጫ በኩል ያቀርባል።',
        href: '/am#access',
        linkLabel: '3ቱን ደረጃዎች ይመልከቱ',
      },
    ],
  },
  partners: {
    en: [
      {
        src: '/media/anawass-story-friends.png',
        alt: 'A respectful private health conversation',
        eyebrow: 'Ananika Health Solutions',
        title: 'Clinical guidance and health-content review.',
        copy: 'Ananika supports evidence-led education, professional-care guidance and clinical accountability.',
        href: '/about#ananika',
        linkLabel: 'Meet Ananika',
      },
      {
        src: '/media/anawass-story-man.png',
        alt: 'A private digital health experience',
        eyebrow: 'WASS Global Solutions',
        title: 'Digital product and connected operations.',
        copy: 'WASS supports brand, website, machine-interface, software and data-system development.',
        href: '/about#wass',
        linkLabel: 'Meet WASS',
      },
      {
        src: '/media/anawass-vending-machine.jpeg',
        alt: 'The real ANAWASS smart health vending machine',
        eyebrow: 'ANAWASS',
        title: 'One accountable public experience.',
        copy: 'ANAWASS owns the mission, product experience, venue relationships and responsible machine rollout.',
        href: '/access',
        linkLabel: 'Explore the solution',
      },
    ],
    am: [
      {
        src: '/media/anawass-story-friends.png',
        alt: 'አናኒካ ጤና መፍትሄዎች',
        eyebrow: 'አናኒካ ጤና መፍትሄዎች',
        title: 'የክሊኒካል መመሪያ እና የትምህርት ይዘት አመራር።',
        copy: 'አናኒካ በማስረጃ የተደገፈ ትምህርትን፣ የባለሙያ እንክብካቤን እና የክሊኒካል ተጠያቂነትን ይመራል።',
        href: '/about#ananika',
        linkLabel: 'አናኒካን ይወቁ',
      },
      {
        src: '/media/anawass-story-man.png',
        alt: 'ዋስ ግሎባል ሶሉሽንስ',
        eyebrow: 'ዋስ ግሎባል ሶሉሽንስ',
        title: 'ዲጂታል ምርት እና ኦፕሬሽንስ።',
        copy: 'ዋስ የብራንድ፣ የድረ-ገጽ፣ የማሽን ሶፍትዌር እና የዳታ ስርዓቶችን ይገነባል።',
        href: '/about#wass',
        linkLabel: 'ዋስን ይወቁ',
      },
      {
        src: '/media/anawass-vending-machine.jpeg',
        alt: 'አናዋስ ስማርት ጤና ቬንዲንግ',
        eyebrow: 'አናዋስ',
        title: 'አንድ ተጠያቂ የህዝብ ተሞክሮ።',
        copy: 'አናዋስ ራዕዩን፣ የምርት ተሞክሮውን እና ኃላፊነት የተሞላበት የማሽን ዝርጋታን ይመራል።',
        href: '/access',
        linkLabel: 'መፍትሔውን ይመልከቱ',
      },
    ],
  },
  privacy: {
    en: [
      {
        src: '/media/anawass-editorial-hero.png',
        alt: 'A woman reading private health information on her phone',
        eyebrow: 'Public education',
        title: 'Read without creating an account.',
        copy: 'The HIV and STI guides do not require a profile or personal health information.',
        href: '/privacy',
        linkLabel: 'Read the privacy commitments',
      },
      {
        src: '/media/anawass-vending-machine.jpeg',
        alt: 'The ANAWASS machine in a private indoor location',
        eyebrow: 'Machine operations',
        title: 'Monitor service—not private health identities.',
        copy: 'Operational systems focus on stock, transactions and machine performance.',
        href: '/access',
        linkLabel: 'See the vending model',
      },
      {
        src: '/media/anawass-story-friends.png',
        alt: 'Two people speaking comfortably and without stigma',
        eyebrow: 'Dignity',
        title: 'Privacy should support access, not isolation.',
        copy: 'ANAWASS explains sensitive health topics calmly while keeping professional care visible.',
        href: '/learn/hiv',
        linkLabel: 'Explore HIV education',
      },
    ],
    am: [
      {
        src: '/media/anawass-editorial-hero.png',
        alt: 'ያለ አካውንት መረጃ ማንበብ',
        eyebrow: 'ትምህርት',
        title: 'ያለ ምንም አካውንት መረጃ ያግኙ።',
        copy: 'የኤችአይቪ እና የአባላዘር መረጃዎችን ለማንበብ ምንም የግል መረጃ አያስፈልግም።',
        href: '/privacy',
        linkLabel: 'የግላዊነት ቃል ኪዳኑን ያንብቡ',
      },
      {
        src: '/media/anawass-vending-machine.jpeg',
        alt: 'የማሽን አስተዳደር',
        eyebrow: 'የማሽን አሰራር',
        title: 'የማሽን አገልግሎት ቁጥጥር እንጂ የግል ማንነት አይሰበሰብም።',
        copy: 'የስርዓቱ ትኩረት በማሽኑ ክምችት፣ ክፍያ እና የቴክኒክ ብቃት ላይ ብቻ ነው።',
        href: '/access',
        linkLabel: 'የቬንዲንግ ሞዴሉን ይመልከቱ',
      },
      {
        src: '/media/anawass-story-friends.png',
        alt: 'ክብር እና ግላዊነት',
        eyebrow: 'ክብር',
        title: 'ግላዊነት ወደ መፍትሔ እንጂ ወደ መገለል አይወስድም።',
        copy: 'አናዋስ የጤና ጉዳዮችን በክብር እና በግልጽነት ያብራራል።',
        href: '/am#hiv',
        linkLabel: 'ኤችአይቪ ትምህርትን ይመልከቱ',
      },
    ],
  },
  am: {
    en: [
      {
        src: '/media/anawass-editorial-hero.png',
        alt: 'A young Ethiopian woman reading private health information',
        eyebrow: '01 · Learn',
        title: 'HIV is not spread by everyday contact.',
        copy: 'Understand transmission, testing, and private prevention access.',
        href: '/am#hiv',
        linkLabel: 'Learn about HIV',
      },
      {
        src: '/media/anawass-story-man.png',
        alt: 'An Ethiopian man reading private health information',
        eyebrow: '02 · Test',
        title: 'Only a test reveals your status.',
        copy: 'Consult with a qualified healthcare provider for proper timing.',
        href: '/am#hiv',
        linkLabel: 'View key facts',
      },
      {
        src: '/media/anawass-vending-machine.jpeg',
        alt: 'The ANAWASS smart health vending machine',
        eyebrow: '03 · Access',
        title: 'Find a verified ANAWASS machine.',
        copy: 'Confirmed locations, map directions, and hours will be published.',
        href: '/locations',
        linkLabel: 'Find a machine',
      },
    ],
    am: [
      {
        src: '/media/anawass-editorial-hero.png',
        alt: 'በስልክ የጤና መረጃ የምታነብ ሴት',
        eyebrow: '01 · ይወቁ',
        title: 'ኤችአይቪ በዕለታዊ ንክኪ አይተላለፍም።',
        copy: 'በመተቃቀፍ፣ ምግብ በመጋራት፣ በመጸዳጃ ቤት ወይም በትንኝ አይተላለፍም።',
        href: '/am#hiv',
        linkLabel: 'ስለ ኤችአይቪ ይወቁ',
      },
      {
        src: '/media/anawass-story-man.png',
        alt: 'የግል ዲጂታል የጤና መረጃ የሚያነብ ሰው',
        eyebrow: '02 · ይመርምሩ',
        title: 'ሁኔታዎን ለማወቅ ምርመራ ብቻ ነው።',
        copy: 'ምርመራውን መቼ እንደሚያደርጉ ከብቃት ያለው የጤና ባለሙያ ጋር ይወያዩ።',
        href: '/am#hiv',
        linkLabel: 'ዋና መረጃውን ይመልከቱ',
      },
      {
        src: '/media/anawass-vending-machine.jpeg',
        alt: 'የANAWASS ስማርት ጤና ቬንዲንግ ማሽን',
        eyebrow: '03 · በግል ያግኙ',
        title: 'የተረጋገጠ የANAWASS ማሽን ያግኙ።',
        copy: 'የተረጋገጡ ቦታዎች፣ የካርታ አቅጣጫ እና የስራ ሰዓት በመገኛ ገጹ ይታያሉ።',
        href: '/locations',
        linkLabel: 'ማሽን ይፈልጉ',
      },
    ],
  },
};

// Fetch Visual Lessons with live Sanity support and rich fallback
export async function getVisualLessons(topic: string, locale: Locale = 'en'): Promise<VisualLessonSlide[]> {
  if (isSanityConfigured) {
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const sanitySlides = await client.fetch<any[]>(visualLessonsByTopicQuery, { topic });
      if (sanitySlides && sanitySlides.length > 0) {
        return sanitySlides.map((s) => ({
          src: s.image?.asset ? urlForImage(s.image)?.url() || '/media/anawass-editorial-hero.png' : '/media/anawass-editorial-hero.png',
          alt: s.image?.alt?.[locale] || s.title?.[locale] || 'ANAWASS Visual Lesson',
          eyebrow: s.eyebrow?.[locale] || s.eyebrow?.en || '',
          title: s.title?.[locale] || s.title?.en || '',
          copy: s.copy?.[locale] || s.copy?.en || '',
          href: s.href || '/learn/hiv',
          linkLabel: s.linkLabel?.[locale] || s.linkLabel?.en || (locale === 'am' ? 'ይመልከቱ' : 'Learn more'),
          badgeLabel: s.badgeLabel?.[locale] || s.badgeLabel?.en,
        }));
      }
    } catch {
      // Return fallback gracefully
    }
  }

  const topicSet = fallbackLessons[topic] || fallbackLessons.home;
  return topicSet[locale] || topicSet.en;
}

// Fetch Page Content helpers
export async function getHomePageContent() {
  if (isSanityConfigured) {
    try {
      return await client.fetch(pageHomeQuery);
    } catch {
      return null;
    }
  }
  return null;
}

export async function getAboutPageContent() {
  if (isSanityConfigured) {
    try {
      return await client.fetch(pageAboutQuery);
    } catch {
      return null;
    }
  }
  return null;
}

export async function getAccessPageContent() {
  if (isSanityConfigured) {
    try {
      return await client.fetch(pageAccessQuery);
    } catch {
      return null;
    }
  }
  return null;
}

export async function getLearnHivPageContent() {
  if (isSanityConfigured) {
    try {
      return await client.fetch(pageLearnHivQuery);
    } catch {
      return null;
    }
  }
  return null;
}

export async function getLearnStisPageContent() {
  if (isSanityConfigured) {
    try {
      return await client.fetch(pageLearnStisQuery);
    } catch {
      return null;
    }
  }
  return null;
}

export async function getLocationsPageContent() {
  if (isSanityConfigured) {
    try {
      return await client.fetch(pageLocationsQuery);
    } catch {
      return null;
    }
  }
  return null;
}

export async function getPrivacyPageContent() {
  if (isSanityConfigured) {
    try {
      return await client.fetch(pagePrivacyQuery);
    } catch {
      return null;
    }
  }
  return null;
}

export async function getContactPageContent() {
  if (isSanityConfigured) {
    try {
      return await client.fetch(pageContactQuery);
    } catch {
      return null;
    }
  }
  return null;
}

export async function getSiteSettings() {
  if (isSanityConfigured) {
    try {
      return await client.fetch(siteSettingsQuery);
    } catch {
      return null;
    }
  }
  return null;
}
