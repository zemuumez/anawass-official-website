'use client';

import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';

import {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';

export type Topic = 'home' | 'hiv' | 'stis' | 'access' | 'partners' | 'privacy' | 'am';

export type Slide = {
  src: string;
  alt: string;
  eyebrow: string;
  title: string;
  copy: string;
  href: string;
  linkLabel: string;
  badgeLabel?: string;
};

const topics: Record<Topic, { eyebrow: string; title: string; description: string; slides: Slide[] }> = {
  home: {
    eyebrow: 'Visual learning',
    title: 'Learn it. See it. Act privately.',
    description: 'Swipe through the ANAWASS journey—from clear HIV education to discreet prevention access.',
    slides: [
      { src: '/media/anawass-editorial-hero.png', alt: 'A young Ethiopian woman reading private health information on her phone', eyebrow: '01 · Learn', title: 'Start with clear HIV information.', copy: 'Understand transmission, prevention, testing, PEP, PrEP and treatment without fear-based language.', href: '/learn/hiv', linkLabel: 'Open the HIV guide' },
      { src: '/media/anawass-story-man.png', alt: 'An Ethiopian man using a private digital health screen', eyebrow: '02 · Choose', title: 'Explore prevention without an awkward conversation.', copy: 'The ANAWASS interface is designed for private bilingual learning and simple product selection.', href: '/access#how-it-works', linkLabel: 'See how it works' },
      { src: '/media/anawass-vending-machine.jpeg', alt: 'The real ANAWASS smart health vending machine', eyebrow: '03 · Collect', title: 'Use a verified ANAWASS machine.', copy: 'The location page will publish confirmed venues, map directions, hours and service status.', href: '/locations', linkLabel: 'Find a machine' },
    ],
  },
  hiv: {
    eyebrow: 'HIV in pictures',
    title: 'Three facts worth remembering.',
    description: 'Use the arrows or swipe to move through the essentials.',
    slides: [
      { src: '/media/anawass-story-friends.png', alt: 'Two Ethiopian friends talking comfortably', eyebrow: 'HIV basics', title: 'HIV is not spread by everyday contact.', copy: 'Hugging, sharing food, toilets, handshakes and mosquito bites do not transmit HIV.', href: '/learn/hiv#basics', linkLabel: 'Understand transmission' },
      { src: '/media/anawass-editorial-hero.png', alt: 'A woman reviewing private health information on her phone', eyebrow: 'Testing', title: 'A test—not appearance—reveals HIV status.', copy: 'Testing windows differ. A qualified provider can help choose the right test and timing.', href: '/learn/hiv#testing', linkLabel: 'Learn about testing' },
      { src: '/media/anawass-story-man.png', alt: 'A man privately reading a digital health screen', eyebrow: 'Time-sensitive', title: 'Possible exposure? PEP must begin within 72 hours.', copy: 'Seek qualified care immediately. The sooner PEP starts, the better.', href: '/learn/hiv#pep', linkLabel: 'What to do now' },
    ],
  },
  stis: {
    eyebrow: 'STI visual guide',
    title: 'Symptoms are not the whole story.',
    description: 'Many infections can be managed well when testing and qualified care happen early.',
    slides: [
      { src: '/media/anawass-story-friends.png', alt: 'Two Ethiopian friends having a calm conversation', eyebrow: 'Often silent', title: 'An STI may have no visible symptoms.', copy: 'Feeling well does not always rule out infection. Testing can provide clarity.', href: '/learn/stis#testing', linkLabel: 'When testing helps' },
      { src: '/media/anawass-editorial-hero.png', alt: 'A woman accessing health education privately', eyebrow: 'Qualified care', title: 'Avoid guessing or self-medicating.', copy: 'The correct test and treatment depend on the infection. Seek a qualified health professional.', href: '/learn/stis#care', linkLabel: 'Know when to seek care' },
      { src: '/media/anawass-vending-machine.jpeg', alt: 'The ANAWASS smart prevention vending machine', eyebrow: 'Prevention', title: 'Barrier protection and education belong together.', copy: 'ANAWASS connects understandable guidance with discreet access to approved prevention products.', href: '/access', linkLabel: 'Explore private access' },
    ],
  },
  access: {
    eyebrow: 'Machine walkthrough',
    title: 'See the ANAWASS experience step by step.',
    description: 'A private journey built around learning, choosing and collecting.',
    slides: [
      { src: '/media/anawass-vending-machine.jpeg', alt: 'The real ANAWASS smart vending machine', eyebrow: '01 · Find', title: 'Go to a verified ANAWASS location.', copy: 'Only confirmed venues will appear in the public locator, with directions, hours and service status.', href: '/locations', linkLabel: 'Open machine locator' },
      { src: '/media/anawass-story-man.png', alt: 'A man using a private digital health interface', eyebrow: '02 · Learn and choose', title: 'Use the screen privately.', copy: 'Review clear prevention guidance and select an approved product without a public counter conversation.', href: '/access#how-it-works', linkLabel: 'How the machine works' },
      { src: '/media/anawass-vending-machine.jpeg', alt: 'The secure dispensing area of the ANAWASS machine', eyebrow: '03 · Pay and collect', title: 'Complete the transaction and collect discreetly.', copy: 'The machine confirms payment and dispenses through a secure collection opening.', href: '/access#how-it-works', linkLabel: 'Review all three steps' },
    ],
  },
  partners: {
    eyebrow: 'The partnership in action',
    title: 'Health credibility meets responsible technology.',
    description: 'ANAWASS brings the solution together with defined clinical and digital responsibilities.',
    slides: [
      { src: '/media/anawass-story-friends.png', alt: 'A respectful private health conversation', eyebrow: 'Ananika Health Solutions', title: 'Clinical guidance and health-content review.', copy: 'Ananika supports evidence-led education, professional-care guidance and clinical accountability.', href: '/about#ananika', linkLabel: 'Meet Ananika' },
      { src: '/media/anawass-story-man.png', alt: 'A private digital health experience', eyebrow: 'WASS Global Solutions', title: 'Digital product and connected operations.', copy: 'WASS supports brand, website, machine-interface, software and data-system development.', href: '/about#wass', linkLabel: 'Meet WASS' },
      { src: '/media/anawass-vending-machine.jpeg', alt: 'The real ANAWASS smart health vending machine', eyebrow: 'ANAWASS', title: 'One accountable public experience.', copy: 'ANAWASS owns the mission, product experience, venue relationships and responsible machine rollout.', href: '/access', linkLabel: 'Explore the solution' },
    ],
  },
  privacy: {
    eyebrow: 'Privacy explained visually',
    title: 'Learn without being turned into a profile.',
    description: 'The public experience is designed around dignity and data minimisation.',
    slides: [
      { src: '/media/anawass-editorial-hero.png', alt: 'A woman reading private health information on her phone', eyebrow: 'Public education', title: 'Read without creating an account.', copy: 'The HIV and STI guides do not require a profile or personal health information.', href: '/privacy', linkLabel: 'Read the privacy commitments' },
      { src: '/media/anawass-vending-machine.jpeg', alt: 'The ANAWASS machine in a private indoor location', eyebrow: 'Machine operations', title: 'Monitor service—not private health identities.', copy: 'Operational systems focus on stock, transactions and machine performance.', href: '/access', linkLabel: 'See the vending model' },
      { src: '/media/anawass-story-friends.png', alt: 'Two people speaking comfortably and without stigma', eyebrow: 'Dignity', title: 'Privacy should support access, not isolation.', copy: 'ANAWASS explains sensitive health topics calmly while keeping professional care visible.', href: '/learn/hiv', linkLabel: 'Explore HIV education' },
    ],
  },
  am: {
    eyebrow: 'በምስል ይማሩ',
    title: 'ይወቁ። ይምረጡ። በግል ያግኙ።',
    description: 'ስለ ኤችአይቪ፣ ምርመራ እና የANAWASS ማሽን ዋና መረጃዎች።',
    slides: [
      { src: '/media/anawass-editorial-hero.png', alt: 'በስልክ የጤና መረጃ የምታነብ ሴት', eyebrow: '01 · ይወቁ', title: 'ኤችአይቪ በዕለታዊ ንክኪ አይተላለፍም።', copy: 'በመተቃቀፍ፣ ምግብ በመጋራት፣ በመጸዳጃ ቤት ወይም በትንኝ አይተላለፍም።', href: '/am#hiv', linkLabel: 'ስለ ኤችአይቪ ይወቁ' },
      { src: '/media/anawass-story-man.png', alt: 'የግል ዲጂታል የጤና መረጃ የሚያነብ ሰው', eyebrow: '02 · ይመርምሩ', title: 'ሁኔታዎን ለማወቅ ምርመራ ብቻ ነው።', copy: 'ምርመራውን መቼ እንደሚያደርጉ ከብቃት ያለው የጤና ባለሙያ ጋር ይወያዩ።', href: '/am#hiv', linkLabel: 'ዋና መረጃውን ይመልከቱ' },
      { src: '/media/anawass-vending-machine.jpeg', alt: 'የANAWASS ስማርት ጤና ቬንዲንግ ማሽን', eyebrow: '03 · በግል ያግኙ', title: 'የተረጋገጠ የANAWASS ማሽን ያግኙ።', copy: 'የተረጋገጡ ቦታዎች፣ የካርታ አቅጣጫ እና የስራ ሰዓት በመገኛ ገጹ ይታያሉ።', href: '/locations', linkLabel: 'ማሽን ይፈልጉ' },
    ],
  },
};

export function EducationCarousel({
  topic,
  customSlides,
  locale = 'en',
}: {
  topic: Topic;
  customSlides?: Slide[];
  locale?: 'en' | 'am';
}) {
  const content = topics[topic] || topics.home;
  const activeSlides = customSlides && customSlides.length > 0 ? customSlides : content.slides;
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;
    const update = () => setCurrent(api.selectedScrollSnap());
    update();
    api.on('select', update);
    api.on('reInit', update);
    return () => {
      api.off('select', update);
      api.off('reInit', update);
    };
  }, [api]);

  const slideBadgePrefix = locale === 'am' ? 'የትምህርት ስላይድ' : 'Visual lesson';

  return (
    <section className="overflow-hidden bg-white py-20 sm:py-28" aria-label={`${content.eyebrow}: ${content.title}`}>
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        <div className="mb-10 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="max-w-4xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-700">{content.eyebrow}</p>
            <h2 className="mt-5 text-balance text-4xl font-semibold leading-[1.02] tracking-[-0.055em] sm:text-6xl">{content.title}</h2>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-forest-800/65">{content.description}</p>
          </div>
          <div className="flex items-center gap-3">
            <span className="mr-2 text-sm font-semibold tabular-nums text-forest-800/55">
              0{current + 1} / 0{activeSlides.length}
            </span>
            <button
              type="button"
              onClick={() => api?.scrollPrev()}
              className="grid size-12 place-items-center rounded-full border border-emerald-950/15 bg-white text-forest-950 transition hover:bg-mint-100"
              aria-label="Previous teaching slide"
            >
              <ArrowLeft className="size-5" />
            </button>
            <button
              type="button"
              onClick={() => api?.scrollNext()}
              className="grid size-12 place-items-center rounded-full bg-forest-950 text-white transition hover:bg-emerald-800"
              aria-label="Next teaching slide"
            >
              <ArrowRight className="size-5" />
            </button>
          </div>
        </div>

        <Carousel setApi={setApi} opts={{ loop: true }} aria-label={content.title}>
          <CarouselContent>
            {activeSlides.map((slide, index) => (
              <CarouselItem key={`${topic}-${slide.title}-${index}`}>
                <article className="grid min-h-[560px] overflow-hidden rounded-[2.4rem] bg-forest-950 text-white lg:grid-cols-[1.08fr_.92fr]">
                  <div className="relative min-h-[330px] lg:min-h-full">
                    <img
                      src={slide.src}
                      alt={slide.alt}
                      className="absolute inset-0 size-full object-cover"
                      loading={index === 0 ? 'eager' : 'lazy'}
                      decoding="async"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-forest-950/60 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-forest-950/20" />
                    <span className="absolute left-6 top-6 rounded-full bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-forest-950">
                      {slide.badgeLabel || `${slideBadgePrefix} ${index + 1}`}
                    </span>
                  </div>
                  <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-16">
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-300">{slide.eyebrow}</p>
                    <h3 className="mt-6 text-balance text-4xl font-semibold leading-[1.04] tracking-[-0.05em] sm:text-5xl">{slide.title}</h3>
                    <p className="mt-6 text-lg leading-8 text-white/68">{slide.copy}</p>
                    <a
                      href={slide.href}
                      className="mt-9 inline-flex w-fit items-center gap-2 rounded-full bg-emerald-300 px-6 py-3.5 text-sm font-semibold text-forest-950 transition hover:bg-emerald-200"
                    >
                      {slide.linkLabel}
                      <ArrowRight className="size-4" />
                    </a>
                  </div>
                </article>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        <div className="mt-6 flex justify-center gap-2">
          {activeSlides.map((slide, index) => (
            <button
              key={`${slide.title}-${index}`}
              type="button"
              onClick={() => api?.scrollTo(index)}
              className={`h-2 rounded-full transition-all ${index === current ? 'w-10 bg-emerald-650' : 'w-5 bg-emerald-950/18 hover:bg-emerald-950/35'}`}
              aria-label={`Show teaching slide ${index + 1}`}
              aria-current={index === current}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
