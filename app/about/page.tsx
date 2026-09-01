import { ArrowRight, Building2, ExternalLink, HeartHandshake, Lightbulb, Network, ShieldCheck } from 'lucide-react';

import { EducationCarousel } from '@/components/education-carousel';
import { PageIntro, SiteFooter, SiteHeader } from '@/components/site-chrome';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-canvas text-forest-950">
      <SiteHeader />
      <main id="main-content">
        <PageIntro eyebrow="Our mission" title="Turn HIV knowledge into private, practical prevention." description="ANAWASS combines evidence-led education with its own smart health vending solution so people can learn and act without shame." />

        <EducationCarousel topic="partners" />

        <section className="mx-auto grid max-w-[1100px] gap-12 px-5 py-24 sm:px-8 sm:py-32 lg:grid-cols-[0.85fr_1.15fr]">
          <div><p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-700">Why ANAWASS exists</p><h2 className="mt-5 text-4xl font-semibold leading-[1.04] tracking-[-0.055em] sm:text-5xl">Privacy should not become a barrier to prevention.</h2></div>
          <div className="space-y-6 text-lg leading-8 text-forest-800/70"><p>Questions about HIV and other sexually transmitted infections are often surrounded by embarrassment, misinformation and fear of being judged. Even when prevention products exist, the experience of asking for them can stop people from acting.</p><p>ANAWASS is designed around a simple belief: people deserve accurate information and practical access without sacrificing dignity.</p><p>Our smart vending machine is the practical bridge. It connects HIV education, private product selection and secure dispensing while the operating platform manages stock, service and accountability behind the scenes.</p></div>
        </section>

        <section className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-[1100px] px-5 sm:px-8"><div className="grid gap-5 md:grid-cols-3">{[
            [HeartHandshake, 'Dignity', 'We communicate without shame, stereotypes or fear-based messaging.'],
            [ShieldCheck, 'Privacy', 'We collect only what is necessary and design every public interaction to feel discreet.'],
            [Lightbulb, 'Clarity', 'We translate complex health guidance into understandable, actionable information.'],
          ].map(([Icon, title, copy]) => { const ValueIcon = Icon as typeof HeartHandshake; return <article key={String(title)} className="rounded-[2rem] bg-canvas p-8"><ValueIcon className="size-7 text-emerald-650" /><h3 className="mt-12 text-2xl font-semibold tracking-tight">{String(title)}</h3><p className="mt-4 leading-7 text-forest-800/62">{String(copy)}</p></article>; })}</div></div>
        </section>

        <section className="mx-auto grid max-w-[1100px] gap-12 px-5 py-24 sm:px-8 sm:py-32 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div className="relative min-h-[620px] overflow-hidden rounded-[2.4rem]">
            <img src="/media/anawass-vending-machine.jpeg" alt="The ANAWASS smart health vending machine" className="absolute inset-0 size-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-forest-950/80 via-transparent to-transparent" />
            <p className="absolute bottom-8 left-8 right-8 text-2xl font-semibold leading-tight tracking-[-0.04em] text-white">The ANAWASS solution brings private prevention access closer to everyday life.</p>
          </div>
          <div className="lg:pl-8"><p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-700">The model</p><h2 className="mt-5 text-4xl font-semibold leading-[1.04] tracking-[-0.055em] sm:text-5xl">One public experience. A disciplined system underneath.</h2><div className="mt-8 space-y-6">{[
            ['Education', 'Bilingual, evidence-led HIV and STI content from qualified health partners.'],
            ['Smart vending', 'Private product selection and secure dispensing in carefully chosen locations.'],
            ['Operations', 'Live stock, machine status, refill, maintenance and transaction controls.'],
            ['Accountability', 'Role-based permissions, audit history, reconciliation and impact reporting.'],
          ].map(([title, copy], index) => <div key={title} className="grid grid-cols-[42px_1fr] gap-4"><span className="grid size-10 place-items-center rounded-full bg-mint-100 text-xs font-bold text-emerald-700">0{index + 1}</span><div><h3 className="font-semibold">{title}</h3><p className="mt-1 text-sm leading-6 text-forest-800/62">{copy}</p></div></div>)}</div></div>
        </section>

        <section id="partners" className="bg-[#e9f6ed] py-24 sm:py-32">
          <div className="mx-auto max-w-[1100px] px-5 sm:px-8">
            <div className="max-w-3xl"><p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-700">Partners</p><h2 className="mt-5 text-4xl font-semibold tracking-[-0.055em] sm:text-6xl">Two disciplines. One accountable solution.</h2><p className="mt-6 text-lg leading-8 text-forest-800/68">ANAWASS connects clinical credibility from Ananika with the digital product and systems capability of WASS.</p></div>
            <div className="mt-12 grid gap-5 lg:grid-cols-2">
              <article id="ananika" className="rounded-[2.2rem] bg-white p-8 sm:p-10">
                <div className="flex items-start justify-between gap-5"><span className="grid size-13 place-items-center rounded-full bg-forest-950 text-xs font-bold text-white">AN</span><span className="rounded-full bg-mint-100 px-3 py-2 text-[.68rem] font-bold uppercase tracking-[.12em] text-emerald-800">Health partner</span></div>
                <p className="mt-10 text-xs font-bold uppercase tracking-[0.14em] text-emerald-700">Clinical and education leadership</p>
                <h3 className="mt-3 text-3xl font-semibold tracking-tight">Ananika Health Solutions PLC</h3>
                <div className="mt-7 grid gap-3 sm:grid-cols-[.38fr_.62fr]">
                  <figure className="overflow-hidden rounded-[1.5rem] bg-canvas"><img src="/media/ananika-dr-amanuel.jpg" alt="Dr. Amanuel Lemma Jembere of Ananika Medical Center" className="h-72 w-full object-cover object-top" /><figcaption className="p-4"><p className="font-semibold">Dr. Amanuel Lemma Jembere</p><p className="mt-1 text-xs text-forest-800/52">Co-founder · official Ananika media</p></figcaption></figure>
                  <figure className="overflow-hidden rounded-[1.5rem] bg-canvas"><img src="/media/ananika-team.jpg" alt="Ananika Health Solutions leadership and clinical team" className="h-72 w-full object-cover object-center" /><figcaption className="p-4"><p className="font-semibold">Ananika leadership and clinical team</p><p className="mt-1 text-xs text-forest-800/52">Official Ananika opening photograph</p></figcaption></figure>
                </div>
                <p className="mt-5 leading-7 text-forest-800/65">An Addis Ababa integrated medical and wellness provider established in 2024, with services spanning clinical care, diagnostics, rehabilitation, home care, ambulance support and professional training.</p>
                <div className="mt-8 border-t border-emerald-950/10 pt-7">
                  <p className="text-xs font-bold uppercase tracking-[.14em] text-forest-800/45">Co-founders</p>
                  <div className="mt-4 grid gap-3 sm:grid-cols-2"><div className="rounded-2xl bg-canvas p-4"><p className="font-semibold">Dr. Amanuel Lemma Jembere</p><p className="mt-1 text-sm text-forest-800/55">Co-founder</p></div><div className="rounded-2xl bg-canvas p-4"><p className="font-semibold">Mrs. Debela Mulatu Tefera</p><p className="mt-1 text-sm text-forest-800/55">Co-founder</p></div></div>
                </div>
                <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold"><a href="https://ananikamedicalcenter.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-emerald-700">Visit medical center <ExternalLink className="size-4" /></a><a href="https://ananikaet.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-forest-800/65">Ananika services <ExternalLink className="size-4" /></a></div>
              </article>

              <article id="wass" className="rounded-[2.2rem] bg-forest-950 p-8 text-white sm:p-10">
                <div className="flex items-start justify-between gap-5"><span className="grid size-13 place-items-center rounded-full bg-emerald-300 text-xs font-bold text-forest-950">WG</span><span className="rounded-full bg-white/10 px-3 py-2 text-[.68rem] font-bold uppercase tracking-[.12em] text-emerald-200">Technology partner</span></div>
                <p className="mt-10 text-xs font-bold uppercase tracking-[0.14em] text-emerald-300">Digital product and operations</p>
                <h3 className="mt-3 text-3xl font-semibold tracking-tight">WASS Global Solutions</h3>
                <p className="mt-5 leading-7 text-white/65">WASS brings the brand, website, machine interface, software architecture and connected operating systems that turn ANAWASS from a single machine into a managed service.</p>
                <div className="mt-8 grid gap-3 sm:grid-cols-2">{['Public website and education experience', 'Vending-machine interface', 'Inventory, service and reporting systems', 'Secure platform integrations'].map((item) => <div key={item} className="rounded-2xl border border-white/10 bg-white/6 p-4 text-sm leading-6 text-white/72">{item}</div>)}</div>
                <a href="https://wassweb.netlify.app/" target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-emerald-300">Visit WASS <ExternalLink className="size-4" /></a>
              </article>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1100px] px-5 py-24 sm:px-8 sm:py-32"><div className="grid gap-5 md:grid-cols-2"><article className="rounded-[2rem] bg-forest-950 p-8 text-white sm:p-10"><Network className="size-7 text-emerald-300" /><h2 className="mt-10 text-3xl font-semibold tracking-[-0.045em]">Designed to scale responsibly</h2><p className="mt-4 leading-7 text-white/65">The operating platform is structured for a pilot network first, then controlled expansion across hotels and other approved locations as performance and public-health value are demonstrated.</p></article><article className="rounded-[2rem] bg-amber-100 p-8 sm:p-10"><Building2 className="size-7 text-amber-900" /><h2 className="mt-10 text-3xl font-semibold tracking-[-0.045em]">Built for accountable partnerships</h2><p className="mt-4 leading-7 text-forest-800/65">Hotel partners, health experts and technology providers receive clear roles, reporting and escalation processes—not a disconnected machine project.</p></article></div></section>

        <section className="px-5 pb-24 sm:px-8 sm:pb-32"><div className="mx-auto max-w-[1100px] rounded-[2.4rem] bg-emerald-650 p-8 text-white sm:p-14"><div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center"><div><h2 className="text-3xl font-semibold tracking-[-0.045em] sm:text-4xl">See the public experience in action.</h2><p className="mt-3 max-w-2xl text-white/70">Explore the health guides or understand how the ANAWASS smart vending solution is designed to work.</p></div><div className="flex flex-col gap-3 sm:flex-row"><a href="/learn/hiv" className={cn(buttonVariants({ size: 'lg' }), 'h-12 rounded-full bg-white px-6 text-forest-950')}>Explore health guidance</a><a href="/access" className={cn(buttonVariants({ variant: 'outline', size: 'lg' }), 'h-12 rounded-full border-white/30 bg-transparent px-6 text-white hover:bg-white/10 hover:text-white')}>Smart vending <ArrowRight className="size-4" /></a></div></div></div></section>
      </main>
      <SiteFooter />
    </div>
  );
}
