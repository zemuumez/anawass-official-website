import { ArrowRight, Building2, Check, Clock3, MapPin, PackageCheck, ShieldCheck, Smartphone } from 'lucide-react';

import { EducationCarousel } from '@/components/education-carousel';
import { MachineDemo } from '@/components/machine-demo';
import { PageIntro, SiteFooter, SiteHeader } from '@/components/site-chrome';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export default function AccessPage() {
  return (
    <div className="min-h-screen bg-canvas text-forest-950">
      <SiteHeader />
      <main id="main-content">
        <PageIntro
          eyebrow="ANAWASS smart health vending"
          title="A private bridge from HIV education to prevention."
          description="The ANAWASS vending machine combines trustworthy health information, private product selection and secure dispensing in one dignified experience."
        />

        <EducationCarousel topic="access" />

        <section className="mx-auto grid max-w-[1180px] gap-12 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div className="relative min-h-[680px] overflow-hidden rounded-[2.5rem] bg-white shadow-[0_28px_80px_rgba(5,60,48,.12)]">
            <img src="/media/anawass-vending-machine.jpeg" alt="The ANAWASS smart health vending machine" className="absolute inset-0 size-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-forest-950/75 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 rounded-full bg-white px-4 py-2 text-xs font-bold uppercase tracking-[.14em] text-forest-950">Actual ANAWASS machine</div>
          </div>

          <div className="lg:pl-5">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-700">The solution</p>
            <h2 className="mt-5 text-4xl font-semibold leading-[1.03] tracking-[-0.055em] sm:text-6xl">Prevention access without the awkward counter.</h2>
            <p className="mt-7 text-lg leading-8 text-forest-800/68">ANAWASS is designed for people who may delay buying condoms or other approved prevention products because of embarrassment, fear of judgment or lack of privacy.</p>
            <div className="mt-9 grid gap-3 sm:grid-cols-2">
              {[
                [ShieldCheck, 'Privacy-first', 'A calm self-service experience with no public conversation required.'],
                [Smartphone, 'Clear interface', 'Bilingual education and product guidance on a simple screen.'],
                [PackageCheck, 'Secure dispensing', 'Controlled product selection, payment confirmation and collection.'],
                [Clock3, 'Available when needed', 'Designed for convenient access in trusted approved locations.'],
              ].map(([Icon, title, copy]) => {
                const FeatureIcon = Icon as typeof ShieldCheck;
                return <article key={String(title)} className="rounded-[1.4rem] border border-emerald-950/10 bg-white p-5"><FeatureIcon className="size-5 text-emerald-650" /><h3 className="mt-6 font-semibold">{String(title)}</h3><p className="mt-2 text-sm leading-6 text-forest-800/60">{String(copy)}</p></article>;
              })}
            </div>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href="#try-demo" className={cn(buttonVariants({ size: 'lg' }), 'h-13 rounded-full bg-emerald-650 px-7 text-white hover:bg-emerald-700')}>Try the machine demo <ArrowRight className="size-4" /></a>
              <a href="/locations" className={cn(buttonVariants({ variant: 'outline', size: 'lg' }), 'h-13 rounded-full border-emerald-950/15 bg-white px-7 text-forest-950')}><MapPin className="size-4" /> Find a machine</a>
            </div>
            <a href="/learn/hiv" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-emerald-700">Start with HIV education <ArrowRight className="size-4" /></a>
          </div>
        </section>

        <MachineDemo />

        <section id="how-it-works" className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-[1100px] px-5 sm:px-8">
            <div className="max-w-3xl"><p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-700">The ANAWASS experience</p><h2 className="mt-5 text-4xl font-semibold tracking-[-0.055em] sm:text-6xl">Learn, choose and collect privately.</h2></div>
            <div className="mt-14 grid gap-5 md:grid-cols-3">
              {[
                [Building2, 'Find a trusted location', 'ANAWASS machines are intended for carefully selected hotels and approved public settings.'],
                [Smartphone, 'Learn and choose', 'Read clear HIV-prevention guidance and select an approved product on the private screen.'],
                [PackageCheck, 'Pay and collect securely', 'The machine confirms the transaction and dispenses through a discreet collection door.'],
              ].map(([Icon, title, copy], index) => {
                const StepIcon = Icon as typeof Building2;
                return <article key={String(title)} className="rounded-[1.8rem] bg-canvas p-7"><span className="text-xs font-bold text-emerald-700">0{index + 1}</span><StepIcon className="mt-10 size-6 text-forest-950" /><h3 className="mt-6 text-xl font-semibold tracking-tight">{String(title)}</h3><p className="mt-3 text-sm leading-6 text-forest-800/62">{String(copy)}</p></article>;
              })}
            </div>
          </div>
        </section>

        <section id="find-a-machine" className="bg-[#e9f6ed] py-24 sm:py-32">
          <div className="mx-auto grid max-w-[1100px] gap-10 px-5 sm:px-8 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
            <div><MapPin className="size-8 text-emerald-650" /><p className="mt-7 text-xs font-bold uppercase tracking-[0.18em] text-emerald-700">Addis Ababa pilot</p><h2 className="mt-5 text-4xl font-semibold tracking-[-0.055em] sm:text-5xl">A trusted network, introduced responsibly.</h2></div>
            <div className="rounded-[2rem] bg-forest-950 p-8 text-white sm:p-10"><p className="text-xs font-bold uppercase tracking-[0.15em] text-emerald-300">Current status</p><h3 className="mt-4 text-2xl font-semibold">Pilot locations are being finalized.</h3><p className="mt-4 leading-7 text-white/65">Verified machine locations, opening hours and service availability will appear before public operation. ANAWASS will not publish unconfirmed locations.</p><a href="/locations" className="mt-7 inline-flex items-center gap-2 font-semibold text-emerald-300">Open machine locator <ArrowRight className="size-4" /></a></div>
          </div>
        </section>

        <section className="mx-auto grid max-w-[1100px] gap-12 px-5 py-24 sm:px-8 sm:py-32 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div><p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-700">Inside the solution</p><h2 className="mt-5 text-4xl font-semibold leading-[1.04] tracking-[-0.055em] sm:text-5xl">Responsible products and education together.</h2><p className="mt-6 text-lg leading-8 text-forest-800/65">Final products will follow Ethiopian regulatory requirements, ANAWASS quality standards and confirmed machine compatibility.</p></div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ['Barrier protection', 'Quality-assured condoms in discreet packaging.'],
              ['HIV education', 'Clear information on prevention, PEP, PrEP, testing and treatment.'],
              ['Trusted guidance', 'QR-linked education reviewed with qualified health partners.'],
              ['Bilingual support', 'Clear use, storage and safety information in accessible language.'],
            ].map(([title, copy]) => <article key={title} className="rounded-[1.5rem] border border-emerald-950/10 bg-white p-6"><span className="grid size-9 place-items-center rounded-full bg-mint-100 text-emerald-700"><Check className="size-4" /></span><h3 className="mt-7 text-lg font-semibold">{title}</h3><p className="mt-3 text-sm leading-6 text-forest-800/60">{copy}</p></article>)}
          </div>
        </section>

        <section className="bg-forest-950 py-24 text-white sm:py-32">
          <div className="mx-auto grid max-w-[1100px] gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_1fr] lg:items-center"><div><ShieldCheck className="size-8 text-emerald-300" /><h2 className="mt-7 text-4xl font-semibold tracking-[-0.055em] sm:text-6xl">Privacy is more than appearance.</h2></div><div className="space-y-5 text-lg leading-8 text-white/68"><p>ANAWASS is designed to minimize the personal information required for education and product access. The public website does not require an account to read health guidance.</p><p>Operational records focus on transactions, stock and machine performance—not building sensitive personal health profiles.</p><a href="/privacy" className="inline-flex items-center gap-2 font-semibold text-emerald-300">Read our privacy approach <ArrowRight className="size-4" /></a></div></div>
        </section>

        <section className="mx-auto max-w-[1100px] px-5 py-24 sm:px-8 sm:py-32"><div className="rounded-[2.4rem] bg-emerald-650 p-8 text-white sm:p-14"><div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center"><div><h2 className="text-3xl font-semibold tracking-[-0.045em] sm:text-4xl">Education comes before the transaction.</h2><p className="mt-3 max-w-xl text-white/70">Start with the HIV guide, understand prevention choices, then explore the ANAWASS vending solution.</p></div><div className="flex flex-col gap-3 sm:flex-row"><a href="/learn/hiv" className={cn(buttonVariants({ size: 'lg' }), 'h-12 rounded-full bg-white px-6 text-forest-950')}>HIV guidance</a><a href="/learn/stis" className={cn(buttonVariants({ variant: 'outline', size: 'lg' }), 'h-12 rounded-full border-white/30 bg-transparent px-6 text-white hover:bg-white/10 hover:text-white')}>STI guidance <ArrowRight className="size-4" /></a></div></div></div></section>
      </main>
      <SiteFooter />
    </div>
  );
}
