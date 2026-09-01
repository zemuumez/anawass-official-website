import { ArrowRight, Check, Clock3, ExternalLink, ShieldCheck, TestTube2, X } from 'lucide-react';

import { EducationCarousel } from '@/components/education-carousel';
import { PageIntro, SiteFooter, SiteHeader } from '@/components/site-chrome';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const prevention = [
  ['Condoms', 'Correct and consistent condom use reduces the risk of HIV and many other STIs.'],
  ['PrEP', 'Medicine used before possible exposure by people without HIV. Availability and choice should be discussed with a qualified provider.'],
  ['PEP', 'Emergency medicine used after a possible exposure. It is time-sensitive and must be started within 72 hours.'],
  ['Testing & treatment', 'Knowing your status connects you to prevention or treatment. Effective HIV treatment protects health and prevents sexual transmission when viral suppression is maintained.'],
];

export default function HivPage() {
  return (
    <div className="min-h-screen bg-canvas text-forest-950">
      <SiteHeader />
      <main id="main-content">
        <PageIntro eyebrow="ANAWASS HIV education" title="Clear facts replace fear." description="ANAWASS explains transmission, prevention, PEP, testing and treatment in plain language—then connects education to private prevention access." />

        <EducationCarousel topic="hiv" />

        <nav className="sticky top-0 z-30 border-b border-emerald-950/10 bg-white/92 backdrop-blur-xl" aria-label="On this page">
          <div className="mx-auto flex max-w-[1100px] gap-6 overflow-x-auto px-5 py-4 text-sm font-semibold text-forest-800 sm:px-8">
            {['Basics', 'Prevention', 'PEP', 'Testing', 'Treatment', 'Myths'].map((item) => <a key={item} href={`#${item.toLowerCase()}`} className="whitespace-nowrap hover:text-emerald-700">{item}</a>)}
          </div>
        </nav>

        <section id="basics" className="mx-auto grid max-w-[1100px] gap-12 px-5 py-24 sm:px-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div><p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-700">Start here</p><h2 className="mt-5 text-4xl font-semibold leading-[1.05] tracking-[-0.05em] sm:text-5xl">What HIV is</h2></div>
          <div className="space-y-6 text-lg leading-8 text-forest-800/72">
            <p>HIV is a virus that attacks the immune system. Without treatment, it can weaken the body’s ability to fight infections. AIDS is the most advanced stage of HIV infection—it is not a separate virus.</p>
            <p>There is currently no cure, but effective antiretroviral treatment can make HIV a manageable long-term health condition. People receiving effective treatment can live long, healthy lives.</p>
            <div className="rounded-[1.6rem] border border-emerald-700/15 bg-mint-100 p-6 text-base leading-7 text-forest-900"><strong>Important:</strong> You cannot know someone’s HIV status by appearance. Testing is the only way to know.</div>
          </div>
        </section>

        <section className="bg-white py-24">
          <div className="mx-auto max-w-[1100px] px-5 sm:px-8">
            <div className="grid gap-5 md:grid-cols-2">
              <article className="rounded-[2rem] bg-mint-100 p-7 sm:p-9">
                <div className="flex items-center gap-3"><span className="grid size-10 place-items-center rounded-full bg-emerald-650 text-white"><Check className="size-5" /></span><h3 className="text-2xl font-semibold tracking-tight">HIV can be transmitted through</h3></div>
                <ul className="mt-7 space-y-4 text-forest-800/72"><li>Blood</li><li>Semen and pre-seminal fluid</li><li>Vaginal and rectal fluids</li><li>Breast milk</li><li>Pregnancy and birth without effective prevention and care</li></ul>
              </article>
              <article className="rounded-[2rem] bg-[#fff6df] p-7 sm:p-9">
                <div className="flex items-center gap-3"><span className="grid size-10 place-items-center rounded-full bg-amber-800 text-white"><X className="size-5" /></span><h3 className="text-2xl font-semibold tracking-tight">HIV is not transmitted by</h3></div>
                <ul className="mt-7 space-y-4 text-forest-800/72"><li>Hugging, touching or sharing a room</li><li>Sharing food, cups or toilets</li><li>Coughing, sneezing, sweat or tears</li><li>Mosquitoes or other insects</li><li>Working, studying or socializing together</li></ul>
              </article>
            </div>
          </div>
        </section>

        <section id="prevention" className="mx-auto max-w-[1100px] px-5 py-24 sm:px-8 sm:py-32">
          <div className="max-w-3xl"><p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-700">Prevention</p><h2 className="mt-5 text-4xl font-semibold tracking-[-0.055em] sm:text-6xl">Protection is not one-size-fits-all.</h2><p className="mt-6 text-lg leading-8 text-forest-800/68">Different tools can be combined depending on a person’s situation, preferences and access to care.</p></div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {prevention.map(([title, copy], index) => <article key={title} className="rounded-[1.6rem] border border-emerald-950/10 bg-white p-7"><p className="text-xs font-bold text-emerald-700">0{index + 1}</p><h3 className="mt-8 text-2xl font-semibold tracking-tight">{title}</h3><p className="mt-3 leading-7 text-forest-800/65">{copy}</p></article>)}
          </div>
        </section>

        <section className="bg-white py-20 sm:py-24">
          <div className="mx-auto grid max-w-[1100px] gap-10 px-5 sm:px-8 lg:grid-cols-[.78fr_1.22fr] lg:items-center">
            <div className="relative min-h-[440px] overflow-hidden rounded-[2rem]"><img src="/media/anawass-vending-machine.jpeg" alt="The ANAWASS smart vending machine" className="absolute inset-0 size-full object-cover" /></div>
            <div><p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-700">Education connected to action</p><h2 className="mt-5 text-4xl font-semibold tracking-[-0.055em] sm:text-5xl">The ANAWASS vending solution brings prevention closer.</h2><p className="mt-6 text-lg leading-8 text-forest-800/68">Clear HIV education is the first step. The ANAWASS smart vending machine is designed to make approved prevention products easier to understand and obtain privately in trusted locations.</p><a href="/access" className={cn(buttonVariants({ size: 'lg' }), 'mt-8 h-12 rounded-full bg-forest-950 px-6 text-white')}>Explore the ANAWASS machine <ArrowRight className="size-4" /></a></div>
          </div>
        </section>

        <section id="pep" className="bg-forest-950 py-24 text-white sm:py-32">
          <div className="mx-auto grid max-w-[1100px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div><span className="grid size-14 place-items-center rounded-full bg-emerald-300 text-forest-950"><Clock3 className="size-6" /></span><p className="mt-8 text-xs font-bold uppercase tracking-[0.18em] text-emerald-300">Urgent: PEP</p><h2 className="mt-5 text-5xl font-semibold leading-[1] tracking-[-0.055em]">Do not wait for symptoms.</h2></div>
            <div>
              <p className="text-xl leading-9 text-white/75">PEP—post-exposure prophylaxis—is emergency HIV prevention medicine taken after a possible exposure. It must be started as soon as possible and no later than 72 hours.</p>
              <div className="mt-8 rounded-[1.6rem] border border-white/12 bg-white/7 p-6"><p className="font-semibold text-emerald-200">What to do now</p><ol className="mt-4 space-y-3 text-white/68"><li>1. Go to a qualified health facility urgently.</li><li>2. Explain when and how the possible exposure happened.</li><li>3. Let a healthcare professional assess PEP, testing and follow-up.</li></ol></div>
              <p className="mt-5 text-sm leading-6 text-white/48">Do not delay care while trying to calculate your risk online. A qualified provider should assess the situation.</p>
            </div>
          </div>
        </section>

        <section id="testing" className="mx-auto grid max-w-[1100px] gap-12 px-5 py-24 sm:px-8 sm:py-32 lg:grid-cols-[0.8fr_1.2fr]">
          <div><span className="grid size-12 place-items-center rounded-full bg-mint-200 text-forest-950"><TestTube2 className="size-5" /></span><h2 className="mt-7 text-4xl font-semibold tracking-[-0.055em] sm:text-5xl">Testing gives clarity</h2></div>
          <div className="space-y-6 text-lg leading-8 text-forest-800/70">
            <p>Different HIV tests detect infection at different times. A test taken very soon after exposure may not detect HIV, so a healthcare professional may recommend another test later.</p>
            <p>Testing should be voluntary, confidential and connected to clear information before and after the result. A positive screening result must be confirmed according to the national testing process before treatment begins.</p>
            <div className="rounded-[1.5rem] bg-white p-6 text-base"><strong>Testing after a recent exposure?</strong> Tell the provider when the exposure occurred so they can recommend the right test and follow-up timing.</div>
          </div>
        </section>

        <section id="treatment" className="bg-[#e9f6ed] py-24 sm:py-32">
          <div className="mx-auto max-w-[1100px] px-5 sm:px-8">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-700">Treatment & U=U</p>
            <div className="mt-6 grid gap-10 lg:grid-cols-[1fr_1fr]">
              <h2 className="text-4xl font-semibold leading-[1.04] tracking-[-0.055em] sm:text-6xl">Treatment protects health—and can prevent sexual transmission.</h2>
              <div className="text-lg leading-8 text-forest-800/70"><p>Antiretroviral therapy (ART) stops HIV from multiplying. With consistent treatment and care, the amount of virus in the blood can become undetectable.</p><p className="mt-5"><strong>U=U</strong> means Undetectable = Untransmittable: a person taking effective ART who maintains an undetectable viral load does not sexually transmit HIV. Viral-load monitoring and ongoing care matter.</p></div>
            </div>
          </div>
        </section>

        <section id="myths" className="mx-auto max-w-[1100px] px-5 py-24 sm:px-8 sm:py-32">
          <div className="max-w-3xl"><p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-700">Myths & facts</p><h2 className="mt-5 text-4xl font-semibold tracking-[-0.055em] sm:text-6xl">Questions people are often afraid to ask.</h2></div>
          <div className="mt-12 divide-y divide-emerald-950/10 border-y border-emerald-950/10">
            {[
              ['Can I get HIV from kissing?', 'Ordinary social kissing does not transmit HIV. HIV is not spread through saliva.'],
              ['Does an HIV diagnosis mean AIDS?', 'No. AIDS is the most advanced stage of untreated HIV. Early diagnosis and effective treatment prevent progression for most people.'],
              ['Can someone look healthy and have HIV?', 'Yes. Appearance cannot show HIV status. Testing is the only way to know.'],
              ['Does PrEP protect against every STI?', 'No. PrEP prevents HIV but does not prevent other STIs or pregnancy. Condoms can reduce the risk of many STIs.'],
            ].map(([question, answer]) => <details key={question} className="group py-6"><summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-semibold marker:hidden">{question}<span className="text-2xl font-light text-emerald-700 transition group-open:rotate-45">+</span></summary><p className="max-w-3xl pb-2 pt-4 leading-7 text-forest-800/65">{answer}</p></details>)}
          </div>
        </section>

        <section className="px-5 pb-24 sm:px-8 sm:pb-32">
          <div className="mx-auto max-w-[1100px] rounded-[2.4rem] bg-emerald-650 p-8 text-white sm:p-14">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center"><div><ShieldCheck className="size-7 text-emerald-100" /><h2 className="mt-5 text-3xl font-semibold tracking-[-0.045em] sm:text-4xl">Ready for the next step?</h2><p className="mt-3 max-w-2xl text-white/70">See how the ANAWASS smart vending machine supports private prevention access, or continue learning about other STIs.</p></div><div className="flex flex-col gap-3 sm:flex-row"><a href="/access" className={cn(buttonVariants({ size: 'lg' }), 'h-12 rounded-full bg-white px-6 text-forest-950')}>See the vending solution</a><a href="/learn/stis" className={cn(buttonVariants({ variant: 'outline', size: 'lg' }), 'h-12 rounded-full border-white/30 bg-transparent px-6 text-white hover:bg-white/10 hover:text-white')}>Learn about STIs <ArrowRight className="size-4" /></a></div></div>
          </div>
        </section>

        <section className="border-t border-emerald-950/10 bg-white py-14">
          <div className="mx-auto max-w-[1100px] px-5 text-sm leading-6 text-forest-800/58 sm:px-8"><p className="font-semibold text-forest-950">Trusted sources</p><div className="mt-4 flex flex-wrap gap-x-6 gap-y-3"><a href="https://www.who.int/news-room/fact-sheets/detail/hiv-aids" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 hover:text-emerald-700">WHO: HIV and AIDS <ExternalLink className="size-3.5" /></a><a href="https://www.who.int/publications/i/item/9789240031593" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 hover:text-emerald-700">WHO consolidated HIV guidelines <ExternalLink className="size-3.5" /></a><a href="https://www.moh.gov.et/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 hover:text-emerald-700">Ethiopian Ministry of Health <ExternalLink className="size-3.5" /></a></div><p className="mt-5">Last clinical-content review: September 2026. This page is educational and does not replace professional medical advice.</p></div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
