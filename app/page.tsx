import {
  ArrowRight,
  BookOpenText,
  Clock3,
  HeartHandshake,
  MapPin,
  PackageCheck,
  ScanLine,
  ShieldCheck,
  Sparkles,
  Stethoscope,
} from 'lucide-react';

import { SiteFooter, SiteHeader } from '@/components/site-chrome';
import { EducationCarousel } from '@/components/education-carousel';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const trustPoints = [
  { icon: ShieldCheck, label: 'Private by design' },
  { icon: HeartHandshake, label: 'Stigma-free guidance' },
  { icon: MapPin, label: 'Built for Ethiopia' },
];

const journeys = [
  {
    icon: BookOpenText,
    number: '01',
    title: 'Understand clearly',
    copy: 'Plain-language guidance about HIV, other STIs, prevention, testing and treatment—without shame or confusion.',
    href: '/learn/hiv',
    label: 'Start learning',
    color: 'bg-mint-100',
  },
  {
    icon: ScanLine,
    number: '02',
    title: 'Choose privately',
    copy: 'Explore prevention products and trusted resources without having to explain yourself at a public counter.',
    href: '/access',
    label: 'How access works',
    color: 'bg-amber-100',
  },
  {
    icon: Stethoscope,
    number: '03',
    title: 'Get the right care',
    copy: 'Know when professional testing or treatment matters, what is time-sensitive and where education ends.',
    href: '/learn/stis#care',
    label: 'When to seek care',
    color: 'bg-[#e8f2f8]',
  },
];

const topics = [
  { title: 'HIV basics', copy: 'How HIV is—and is not—transmitted.', href: '/learn/hiv#basics' },
  { title: 'Testing', copy: 'Why timing and the right test matter.', href: '/learn/hiv#testing' },
  { title: 'PEP & PrEP', copy: 'Two different tools for preventing HIV.', href: '/learn/hiv#prevention' },
  { title: 'STIs', copy: 'Symptoms, silent infections and testing.', href: '/learn/stis' },
  { title: 'Treatment', copy: 'Why early, qualified care protects health.', href: '/learn/stis#care' },
  { title: 'Myths & facts', copy: 'Replace fear with accurate knowledge.', href: '/learn/hiv#myths' },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-canvas text-forest-950">
      <SiteHeader />
      <main id="main-content">
        <section className="relative overflow-hidden">
          <div className="hero-wash absolute inset-0" aria-hidden="true" />
          <div className="relative mx-auto grid min-h-[720px] max-w-[1240px] items-center gap-14 px-5 py-20 sm:px-8 lg:grid-cols-[1.04fr_0.96fr] lg:py-24">
            <div className="max-w-3xl">
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-emerald-700/15 bg-white/75 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-emerald-800 shadow-sm backdrop-blur">
                <Sparkles className="size-3.5" /> HIV education. Private prevention access.
              </div>
              <h1 className="text-balance text-[clamp(3.45rem,7.8vw,7.5rem)] font-semibold leading-[0.88] tracking-[-0.075em] text-forest-950">
                Your health.<span className="block text-emerald-650">Your privacy.</span>Your choice.
              </h1>
              <p className="mt-8 max-w-2xl text-pretty text-lg leading-8 text-forest-800/78 sm:text-xl">
                ANAWASS turns clear HIV education into practical prevention through its own smart health vending machines—private, simple and built for Ethiopia.
              </p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <a href="/learn/hiv" className={cn(buttonVariants({ size: 'lg' }), 'h-14 rounded-full bg-emerald-650 px-7 text-base text-white shadow-[0_16px_40px_rgba(24,135,82,.22)] hover:bg-emerald-700')}>
                  Learn about HIV <ArrowRight className="ml-1 size-4" />
                </a>
                <a href="/locations" className={cn(buttonVariants({ variant: 'outline', size: 'lg' }), 'h-14 rounded-full border-emerald-950/15 bg-white/75 px-7 text-base text-forest-950 hover:bg-white')}>
                  <MapPin className="size-4" /> Find a machine
                </a>
              </div>
              <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3">
                {trustPoints.map(({ icon: Icon, label }) => (
                  <span key={label} className="inline-flex items-center gap-2 text-sm font-medium text-forest-800/72"><Icon className="size-4 text-emerald-650" /> {label}</span>
                ))}
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[520px]">
              <div className="absolute -inset-12 rounded-full bg-emerald-300/20 blur-3xl" aria-hidden="true" />
              <div className="relative overflow-hidden rounded-[2.2rem] border border-white/70 bg-white/78 p-4 shadow-[0_35px_90px_rgba(6,66,49,.14)] backdrop-blur-xl sm:p-6">
                <div className="rounded-[1.65rem] bg-forest-950 p-7 text-white sm:p-9">
                  <div className="flex items-start justify-between gap-6">
                    <div><p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">Time-sensitive support</p><h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em]">After a possible exposure</h2></div>
                    <span className="grid size-12 shrink-0 place-items-center rounded-full bg-emerald-300 text-forest-950"><Clock3 className="size-5" /></span>
                  </div>
                  <p className="mt-5 leading-7 text-white/72">PEP is emergency medicine that can prevent HIV after a possible exposure. It should be started as soon as possible, no later than 72 hours.</p>
                  <a href="/learn/hiv#pep" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-emerald-300">What to do now <ArrowRight className="size-4" /></a>
                </div>
                <div className="grid gap-3 pt-4 sm:grid-cols-2">
                  <a href="/learn/hiv#testing" className="group rounded-[1.35rem] bg-mint-100 p-5 transition hover:-translate-y-0.5 hover:bg-mint-200">
                    <p className="text-xs font-bold uppercase tracking-[0.15em] text-emerald-800">Testing</p><p className="mt-3 text-lg font-semibold tracking-tight">Know when to test</p><ArrowRight className="mt-6 size-4 text-emerald-700 transition group-hover:translate-x-1" />
                  </a>
                  <a href="/access" className="group rounded-[1.35rem] bg-amber-100 p-5 transition hover:-translate-y-0.5 hover:bg-amber-200">
                    <p className="text-xs font-bold uppercase tracking-[0.15em] text-amber-900">ANAWASS vending</p><p className="mt-3 text-lg font-semibold tracking-tight">Access prevention privately</p><ArrowRight className="mt-6 size-4 text-amber-900 transition group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-emerald-950/10 bg-white">
          <div className="mx-auto grid max-w-[1240px] gap-px bg-emerald-950/10 sm:grid-cols-3">
            {[
              ['HIV education first', 'Clear guidance grounded in trusted public-health sources'],
              ['ANAWASS smart vending', 'Private access without an awkward public counter'],
              ['Designed for dignity', 'No judgment, fear or unnecessary personal questions'],
            ].map(([title, copy]) => (
              <div key={title} className="bg-white px-6 py-8 sm:px-8"><p className="font-semibold tracking-tight">{title}</p><p className="mt-1 text-sm leading-6 text-forest-800/65">{copy}</p></div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-[1240px] px-5 py-24 sm:px-8 sm:py-32">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-700">A safer health journey</p>
            <h2 className="mt-5 text-balance text-4xl font-semibold leading-[1.02] tracking-[-0.055em] sm:text-6xl">Learn. Prevent. Access privately.</h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-forest-800/68">ANAWASS connects trusted HIV education to its own smart vending solution, so knowledge can become action while dignity remains intact.</p>
          </div>
          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {journeys.map(({ icon: Icon, number, title, copy, href, label, color }) => (
              <a key={title} href={href} className={cn('group rounded-[2rem] p-7 transition hover:-translate-y-1 hover:shadow-[0_22px_55px_rgba(5,60,48,.1)] sm:p-9', color)}>
                <div className="flex items-center justify-between"><span className="grid size-12 place-items-center rounded-full bg-white text-forest-950 shadow-sm"><Icon className="size-5" /></span><span className="text-xs font-bold tracking-[0.16em] text-forest-800/45">{number}</span></div>
                <h3 className="mt-14 text-2xl font-semibold tracking-[-0.04em]">{title}</h3>
                <p className="mt-4 min-h-24 leading-7 text-forest-800/70">{copy}</p>
                <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-forest-950">{label}<ArrowRight className="size-4 transition group-hover:translate-x-1" /></span>
              </a>
            ))}
          </div>
        </section>

        <section id="smart-vending" className="bg-forest-950 py-24 text-white sm:py-32">
          <div className="mx-auto grid max-w-[1240px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
            <div className="relative min-h-[620px] overflow-hidden rounded-[2.5rem] bg-white/5">
              <img src="/media/anawass-vending-machine.jpeg" alt="The ANAWASS smart health vending machine in a private indoor location" className="absolute inset-0 size-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 rounded-full bg-white px-4 py-2 text-xs font-bold uppercase tracking-[.14em] text-forest-950">Real ANAWASS solution</div>
            </div>
            <div className="lg:pl-8">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-300">The ANAWASS smart vending machine</p>
              <h2 className="mt-6 text-balance text-4xl font-semibold leading-[1.02] tracking-[-0.055em] sm:text-6xl">HIV prevention access—without the awkward counter.</h2>
              <p className="mt-7 text-lg leading-8 text-white/70">The ANAWASS machine brings education, discreet product selection and secure dispensing together in one calm experience. It is designed for trusted hotels and approved public locations.</p>
              <div className="mt-9 grid gap-3 sm:grid-cols-3">
                {[
                  ['01', 'Learn', 'Clear HIV and prevention information'],
                  ['02', 'Choose', 'Private bilingual product selection'],
                  ['03', 'Collect', 'Secure, discreet dispensing'],
                ].map(([number, title, copy]) => <div key={number} className="rounded-[1.35rem] border border-white/10 bg-white/6 p-5"><p className="text-xs font-bold text-emerald-300">{number}</p><h3 className="mt-5 font-semibold">{title}</h3><p className="mt-2 text-xs leading-5 text-white/55">{copy}</p></div>)}
              </div>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a href="/access" className={cn(buttonVariants({ size: 'lg' }), 'h-13 rounded-full bg-emerald-300 px-7 text-forest-950 hover:bg-emerald-200')}>Explore the machine <ArrowRight className="size-4" /></a>
                <a href="/access#try-demo" className={cn(buttonVariants({ variant: 'outline', size: 'lg' }), 'h-13 rounded-full border-white/25 bg-transparent px-7 text-white hover:bg-white/10 hover:text-white')}>Try the live demo</a>
              </div>
            </div>
          </div>
        </section>

        <EducationCarousel topic="home" />

        <section className="bg-white py-24 sm:py-32">
          <div className="mx-auto grid max-w-[1240px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="group relative min-h-[520px] overflow-hidden rounded-[2.5rem] bg-forest-950 text-white">
              <img src="/media/anawass-editorial-hero.png" alt="A young Ethiopian woman privately reading health information on her phone" className="absolute inset-0 size-full object-cover transition duration-700 group-hover:scale-[1.025]" />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/15 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-8 sm:p-10">
                <blockquote className="max-w-md text-2xl font-medium leading-[1.15] tracking-[-0.04em] sm:text-3xl">“Reliable information should feel private, calm and close at hand.”</blockquote>
                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.15em] text-emerald-200">The ANAWASS experience</p>
              </div>
            </div>
            <div className="lg:pl-8">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-700">Knowledge without stigma</p>
              <h2 className="mt-5 text-balance text-4xl font-semibold leading-[1.02] tracking-[-0.055em] sm:text-6xl">Sexual health belongs in normal conversation.</h2>
              <p className="mt-7 text-lg leading-8 text-forest-800/68">Fear and embarrassment can delay testing, prevention and care. ANAWASS explains sensitive topics calmly, accurately and respectfully—because privacy should never mean being left without information.</p>
              <a href="/about" className="mt-8 inline-flex items-center gap-2 font-semibold text-emerald-700">Why ANAWASS exists <ArrowRight className="size-4" /></a>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1240px] px-5 py-24 sm:px-8 sm:py-32">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div><p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-700">Explore the essentials</p><h2 className="mt-5 max-w-3xl text-4xl font-semibold leading-[1.02] tracking-[-0.055em] sm:text-6xl">Start with the question that brought you here.</h2></div>
            <p className="max-w-sm text-base leading-7 text-forest-800/65">Short, clear answers first. More detail when you want it. Sources are shown throughout.</p>
          </div>
          <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {topics.map((topic, index) => (
              <a key={topic.title} href={topic.href} className="group rounded-[1.6rem] border border-emerald-950/10 bg-white p-6 transition hover:-translate-y-1 hover:border-emerald-600/35 hover:shadow-[0_20px_50px_rgba(5,60,48,.08)] sm:p-7">
                <div className="flex items-start justify-between"><span className="text-xs font-bold text-emerald-700">0{index + 1}</span><ArrowRight className="size-4 text-forest-800/40 transition group-hover:translate-x-1 group-hover:text-emerald-700" /></div>
                <h3 className="mt-10 text-xl font-semibold tracking-[-0.035em]">{topic.title}</h3><p className="mt-2 text-sm leading-6 text-forest-800/62">{topic.copy}</p>
              </a>
            ))}
          </div>
        </section>

        <section className="bg-[#e9f6ed] py-24 sm:py-32">
          <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
            <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
              <div><p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-700">The ANAWASS vending model</p><h2 className="mt-5 text-4xl font-semibold leading-[1.02] tracking-[-0.055em] sm:text-6xl">Discreet by design, simple by choice.</h2></div>
              <div className="grid gap-4 sm:grid-cols-3">
                {[
                  [MapPin, 'Choose a machine', 'Find an ANAWASS smart vending point in a trusted public setting.'],
                  [PackageCheck, 'Select privately', 'Explore essential prevention products on a discreet interface.'],
                  [BookOpenText, 'Leave informed', 'Access clear educational resources before or after your purchase.'],
                ].map(([Icon, title, copy], index) => {
                  const StepIcon = Icon as typeof MapPin;
                  return <article key={String(title)} className="rounded-[1.6rem] bg-white p-6"><StepIcon className="size-5 text-emerald-650" /><p className="mt-9 text-xs font-bold text-forest-800/45">STEP {index + 1}</p><h3 className="mt-3 text-lg font-semibold">{String(title)}</h3><p className="mt-3 text-sm leading-6 text-forest-800/60">{String(copy)}</p></article>;
                })}
              </div>
            </div>
            <div className="mt-12 flex justify-end"><a href="/access" className={cn(buttonVariants({ size: 'lg' }), 'h-12 rounded-full bg-forest-950 px-6 text-white')}>Explore the vending solution <ArrowRight className="size-4" /></a></div>
          </div>
        </section>

        <section className="mx-auto max-w-[1240px] px-5 py-24 sm:px-8 sm:py-32">
          <div className="rounded-[2.5rem] bg-white p-7 shadow-[0_24px_80px_rgba(5,60,48,.07)] sm:p-12 lg:p-16">
            <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-center">
              <div><p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-700">Built through partnership</p><h2 className="mt-5 text-4xl font-semibold leading-[1.04] tracking-[-0.055em] sm:text-5xl">Health expertise and technology—working as one.</h2><a href="/about#partners" className="mt-8 inline-flex items-center gap-2 font-semibold text-emerald-700">Meet the partnership <ArrowRight className="size-4" /></a></div>
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  ['AN', 'Ananika Health Solutions', 'Clinical and health education partner'],
                  ['WG', 'WASS Global', 'Digital experience partner'],
                ].map(([letters, title, role]) => (
                  <a key={title} href="/about#partners" className="group rounded-[1.4rem] border border-emerald-950/10 bg-canvas p-5 transition hover:-translate-y-1 hover:border-emerald-600/35"><span className="grid size-11 place-items-center rounded-full bg-forest-950 text-xs font-bold text-white">{letters}</span><div className="mt-8 flex items-start justify-between gap-3"><div><p className="font-semibold">{title}</p><p className="mt-1 text-xs leading-5 text-forest-800/55">{role}</p></div><ArrowRight className="mt-1 size-4 text-emerald-700 transition group-hover:translate-x-1" /></div></a>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="px-5 pb-24 sm:px-8 sm:pb-32">
          <div className="mx-auto max-w-[1240px] overflow-hidden rounded-[2.6rem] bg-emerald-650 px-7 py-16 text-center text-white sm:px-12 sm:py-24">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-100">Start without embarrassment</p>
            <h2 className="mx-auto mt-6 max-w-4xl text-balance text-4xl font-semibold leading-[1] tracking-[-0.06em] sm:text-6xl">A private question deserves a clear answer.</h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/72">Choose the topic you need. No account, no judgment and no personal health information required.</p>
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row"><a href="/learn/hiv" className={cn(buttonVariants({ size: 'lg' }), 'h-13 rounded-full bg-white px-7 text-forest-950 hover:bg-mint-100')}>Explore HIV guidance</a><a href="/learn/stis" className={cn(buttonVariants({ variant: 'outline', size: 'lg' }), 'h-13 rounded-full border-white/30 bg-transparent px-7 text-white hover:bg-white/10 hover:text-white')}>Explore STI guidance</a></div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
