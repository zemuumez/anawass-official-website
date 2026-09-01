import { ArrowRight, CheckCircle2, Clock3, MapPin, Navigation, RadioTower } from 'lucide-react';

import { EducationCarousel } from '@/components/education-carousel';
import { PageIntro, SiteFooter, SiteHeader } from '@/components/site-chrome';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export default function LocationsPage() {
  return (
    <div className="min-h-screen bg-canvas text-forest-950">
      <SiteHeader />
      <main id="main-content">
        <PageIntro
          eyebrow="ANAWASS machine locator"
          title="Find an ANAWASS machine."
          description="Confirmed venues, directions, opening hours and live service status will appear here as the Addis Ababa pilot network opens."
        />

        <section className="mx-auto grid max-w-[1180px] gap-10 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[1.03fr_.97fr] lg:items-stretch">
          <div className="relative min-h-[620px] overflow-hidden rounded-[2.5rem] bg-forest-950">
            <img src="/media/anawass-vending-machine.jpeg" alt="The real ANAWASS smart health vending machine" className="absolute inset-0 size-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-forest-950/88 via-forest-950/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-7 text-white sm:p-10">
              <p className="text-xs font-bold uppercase tracking-[.16em] text-emerald-300">The real ANAWASS solution</p>
              <h2 className="mt-4 max-w-lg text-4xl font-semibold leading-[1.02] tracking-[-.05em]">Private prevention access, placed where people already are.</h2>
            </div>
          </div>

          <article className="flex flex-col justify-between rounded-[2.5rem] bg-white p-8 shadow-[0_24px_70px_rgba(5,60,48,.09)] sm:p-11">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-2 text-xs font-bold uppercase tracking-[.13em] text-amber-950"><RadioTower className="size-4" /> Pilot status</span>
              <h2 className="mt-8 text-4xl font-semibold leading-[1.03] tracking-[-.05em] sm:text-5xl">Public locations are being finalized.</h2>
              <p className="mt-6 text-lg leading-8 text-forest-800/68">ANAWASS will publish a venue only after the machine, host location and operating readiness have been verified. We will not send visitors to an unconfirmed site.</p>
              <div className="mt-9 space-y-4 border-t border-emerald-950/10 pt-8">
                {[
                  [MapPin, 'Exact venue and address'],
                  [Navigation, 'Map directions and entrance guidance'],
                  [Clock3, 'Opening hours and access times'],
                  [CheckCircle2, 'Current machine service status'],
                ].map(([Icon, label]) => {
                  const ItemIcon = Icon as typeof MapPin;
                  return <div key={String(label)} className="flex items-center gap-3 text-sm font-semibold text-forest-800/72"><span className="grid size-9 place-items-center rounded-full bg-mint-100 text-emerald-700"><ItemIcon className="size-4" /></span>{String(label)}</div>;
                })}
              </div>
            </div>
            <p className="mt-10 rounded-[1.4rem] bg-[#e9f6ed] p-5 text-sm leading-6 text-forest-800/68"><strong className="text-forest-950">Addis Ababa pilot:</strong> the first network is planned for carefully selected hotels and other approved settings.</p>
          </article>
        </section>

        <EducationCarousel topic="access" />

        <section className="px-5 py-24 sm:px-8 sm:py-32">
          <div className="mx-auto max-w-[1100px] rounded-[2.5rem] bg-forest-950 p-8 text-white sm:p-14">
            <div className="grid gap-9 lg:grid-cols-[1fr_auto] lg:items-center">
              <div><p className="text-xs font-bold uppercase tracking-[.18em] text-emerald-300">Before you visit</p><h2 className="mt-5 text-4xl font-semibold tracking-[-.05em] sm:text-5xl">Learn first, then choose privately.</h2><p className="mt-5 max-w-2xl text-lg leading-8 text-white/68">Understand HIV prevention, PEP, PrEP and testing before using the ANAWASS smart vending experience.</p></div>
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col"><a href="/learn/hiv" className={cn(buttonVariants({ size: 'lg' }), 'h-12 rounded-full bg-emerald-300 px-6 text-forest-950 hover:bg-emerald-200')}>Open HIV guide <ArrowRight className="size-4" /></a><a href="/access#how-it-works" className={cn(buttonVariants({ variant: 'outline', size: 'lg' }), 'h-12 rounded-full border-white/25 bg-transparent px-6 text-white hover:bg-white/10 hover:text-white')}>How the machine works</a></div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
