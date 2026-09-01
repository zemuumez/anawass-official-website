'use client';

import { ArrowLeft, ArrowRight, Pause, Play } from 'lucide-react';
import { useEffect, useState } from 'react';

const slides = [
  {
    src: '/media/anawass-editorial-hero.png',
    alt: 'A young Ethiopian woman privately reading health information on her phone',
    eyebrow: 'Knowledge in your hands',
    title: 'Explore sensitive questions in your own time.',
  },
  {
    src: '/media/anawass-story-man.png',
    alt: 'An Ethiopian man privately using a health-access screen in a hotel lobby',
    eyebrow: 'Dignified access',
    title: 'Essential products without the awkward counter.',
  },
  {
    src: '/media/anawass-story-friends.png',
    alt: 'Two Ethiopian friends having a warm private conversation',
    eyebrow: 'Stigma-free conversation',
    title: 'Health information belongs in normal life.',
  },
];

export function StoryCarousel() {
  const [active, setActive] = useState(0);
  const [pausedByUser, setPausedByUser] = useState(false);
  const [interacting, setInteracting] = useState(false);

  useEffect(() => {
    if (pausedByUser || interacting) return;
    const timer = window.setInterval(() => setActive((current) => (current + 1) % slides.length), 6500);
    return () => window.clearInterval(timer);
  }, [interacting, pausedByUser]);

  const move = (direction: number) => setActive((current) => (current + direction + slides.length) % slides.length);

  return (
    <section className="bg-forest-950 py-24 text-white sm:py-32" aria-roledescription="carousel" aria-label="ANAWASS stories">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        <div className="mb-10 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div><p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-300">A new normal for access</p><h2 className="mt-5 max-w-3xl text-4xl font-semibold leading-[1.02] tracking-[-0.055em] sm:text-6xl">Private does not have to feel hidden.</h2></div>
          <div className="flex gap-2">
            <button
              onClick={() => setPausedByUser((current) => !current)}
              className="grid size-12 place-items-center rounded-full border border-white/15 bg-white/5 text-white transition hover:bg-white/12"
              aria-label={pausedByUser ? 'Play stories' : 'Pause stories'}
              aria-pressed={pausedByUser}
            >
              {pausedByUser ? <Play className="size-5" /> : <Pause className="size-5" />}
            </button>
            <button onClick={() => move(-1)} className="grid size-12 place-items-center rounded-full border border-white/15 bg-white/5 text-white transition hover:bg-white/12" aria-label="Previous story"><ArrowLeft className="size-5" /></button>
            <button onClick={() => move(1)} className="grid size-12 place-items-center rounded-full bg-emerald-300 text-forest-950 transition hover:bg-emerald-200" aria-label="Next story"><ArrowRight className="size-5" /></button>
          </div>
        </div>
        <div className="relative min-h-[520px] overflow-hidden rounded-[2.5rem] bg-white/5 sm:min-h-[620px]" onMouseEnter={() => setInteracting(true)} onMouseLeave={() => setInteracting(false)} onFocus={() => setInteracting(true)} onBlur={() => setInteracting(false)}>
          {slides.map((slide, index) => (
            <article key={slide.src} className={`absolute inset-0 transition-all duration-700 ${index === active ? 'z-10 opacity-100' : 'pointer-events-none opacity-0'}`} aria-hidden={index !== active}>
              <img src={slide.src} alt={slide.alt} loading="lazy" decoding="async" className="absolute inset-0 size-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/15 to-transparent" />
              <div className="absolute bottom-0 left-0 max-w-3xl p-8 sm:p-12 lg:p-16"><p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-300">{slide.eyebrow}</p><h3 className="mt-5 text-balance text-4xl font-semibold leading-[1.05] tracking-[-0.055em] sm:text-6xl">{slide.title}</h3></div>
            </article>
          ))}
          <div className="absolute bottom-8 right-8 z-20 flex gap-2 sm:bottom-12 sm:right-12">
            {slides.map((slide, index) => <button key={slide.src} onClick={() => setActive(index)} className={`h-1.5 rounded-full transition-all ${index === active ? 'w-10 bg-emerald-300' : 'w-5 bg-white/45 hover:bg-white/75'}`} aria-label={`Show story ${index + 1}`} aria-current={index === active} />)}
          </div>
        </div>
      </div>
    </section>
  );
}
