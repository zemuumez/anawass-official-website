import { AlertCircle, ArrowRight, Check, ExternalLink, ShieldCheck, Syringe, TestTube2 } from 'lucide-react';

import { EducationCarousel } from '@/components/education-carousel';
import { PageIntro, SiteFooter, SiteHeader } from '@/components/site-chrome';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const infections = [
  ['Chlamydia', 'Bacterial', 'Often has no symptoms. Curable with the right antibiotics prescribed by a qualified provider.'],
  ['Gonorrhoea', 'Bacterial', 'Can affect the genitals, rectum or throat. Drug resistance makes correct testing and treatment important.'],
  ['Syphilis', 'Bacterial', 'May begin with a painless sore and later become difficult to notice. Curable, but serious if untreated.'],
  ['Trichomoniasis', 'Parasitic', 'A common curable infection that may cause discharge or irritation, but can also be silent.'],
  ['Herpes', 'Viral', 'Can cause recurring sores, but many people have mild or unrecognized symptoms. Treatment can reduce outbreaks.'],
  ['HPV', 'Viral', 'Very common. Some types cause genital warts; others can cause cancers. Vaccination prevents many high-risk types.'],
  ['Hepatitis B', 'Viral', 'Affects the liver and can be sexually transmitted. A safe, effective vaccine is available.'],
  ['HIV', 'Viral', 'Affects the immune system. It is manageable with treatment and preventable with multiple proven tools.'],
];

export default function StiPage() {
  return (
    <div className="min-h-screen bg-canvas text-forest-950">
      <SiteHeader />
      <main id="main-content">
        <PageIntro eyebrow="STI essentials" title="Common. Often silent. Worth understanding." description="Sexually transmitted infections can affect anyone who is sexually active. Clear information, testing and timely care protect you and your partners." />

        <EducationCarousel topic="stis" />

        <section className="mx-auto grid max-w-[1100px] gap-12 px-5 py-24 sm:px-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div><p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-700">The essential fact</p><h2 className="mt-5 text-4xl font-semibold leading-[1.04] tracking-[-0.055em] sm:text-5xl">You can have an STI without knowing.</h2></div>
          <div className="space-y-6 text-lg leading-8 text-forest-800/70"><p>Many sexually transmitted infections cause no symptoms, especially early on. Feeling healthy does not always mean an infection is absent.</p><p>Some STIs are curable. Others can be managed. Testing, accurate diagnosis and treatment from a qualified provider are the safe way forward.</p><div className="rounded-[1.6rem] bg-mint-100 p-6 text-base leading-7"><strong>Avoid self-treatment.</strong> Similar symptoms can have different causes, and incorrect antibiotics can delay proper care or contribute to drug resistance.</div></div>
        </section>

        <section className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-[1100px] px-5 sm:px-8">
            <div className="max-w-3xl"><p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-700">Know the landscape</p><h2 className="mt-5 text-4xl font-semibold tracking-[-0.055em] sm:text-6xl">Eight infections to know</h2><p className="mt-5 text-lg leading-8 text-forest-800/65">These short summaries are orientation—not a diagnosis. Only appropriate testing and clinical assessment can identify an infection.</p></div>
            <div className="mt-12 grid gap-4 md:grid-cols-2">
              {infections.map(([name, type, copy]) => <article key={name} className="rounded-[1.5rem] border border-emerald-950/10 bg-canvas p-6"><div className="flex items-center justify-between"><h3 className="text-xl font-semibold tracking-tight">{name}</h3><span className="rounded-full bg-white px-3 py-1 text-[0.68rem] font-bold uppercase tracking-[0.12em] text-emerald-700">{type}</span></div><p className="mt-4 text-sm leading-6 text-forest-800/65">{copy}</p></article>)}
            </div>
          </div>
        </section>

        <section id="symptoms" className="mx-auto max-w-[1100px] px-5 py-24 sm:px-8 sm:py-32">
          <div className="grid gap-5 md:grid-cols-2">
            <article className="rounded-[2rem] bg-forest-950 p-8 text-white sm:p-10"><AlertCircle className="size-7 text-emerald-300" /><h2 className="mt-8 text-3xl font-semibold tracking-[-0.045em]">Possible symptoms</h2><ul className="mt-6 space-y-3 text-white/68"><li>Unusual discharge</li><li>Burning or pain when urinating</li><li>Sores, blisters, ulcers or warts</li><li>Lower abdominal or pelvic pain</li><li>Pain during sex</li><li>Rash or swollen lymph nodes</li></ul><p className="mt-7 text-sm leading-6 text-white/45">These symptoms can have causes other than an STI. A qualified provider should assess them.</p></article>
            <article className="rounded-[2rem] bg-amber-100 p-8 sm:p-10"><ShieldCheck className="size-7 text-amber-900" /><h2 className="mt-8 text-3xl font-semibold tracking-[-0.045em]">Consider testing even without symptoms</h2><ul className="mt-6 space-y-3 text-forest-800/68"><li>After sex without a condom or a condom break</li><li>When starting a new sexual relationship</li><li>If a partner has an STI or possible symptoms</li><li>During pregnancy or when planning pregnancy</li><li>When a healthcare professional recommends routine screening</li></ul></article>
          </div>
        </section>

        <section id="prevention" className="bg-[#e9f6ed] py-24 sm:py-32">
          <div className="mx-auto max-w-[1100px] px-5 sm:px-8">
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]"><div><p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-700">Prevention</p><h2 className="mt-5 text-4xl font-semibold tracking-[-0.055em] sm:text-5xl">Layer your protection</h2></div><div className="grid gap-4 sm:grid-cols-2">{[
              [Check, 'Use condoms correctly', 'Condoms are one of the most effective tools for preventing HIV and many STIs when used consistently and correctly.'],
              [TestTube2, 'Test when appropriate', 'Testing can find infections that have no symptoms and allows timely care.'],
              [Syringe, 'Use available vaccines', 'Vaccines prevent hepatitis B and many types of HPV. Ask a qualified provider what is appropriate for you.'],
              [ShieldCheck, 'Talk before treatment', 'If an STI is diagnosed, follow professional guidance about treatment, partners and when sexual activity can safely resume.'],
            ].map(([Icon, title, copy]) => { const ItemIcon = Icon as typeof Check; return <article key={String(title)} className="rounded-[1.5rem] bg-white p-6"><ItemIcon className="size-5 text-emerald-650" /><h3 className="mt-7 text-lg font-semibold">{String(title)}</h3><p className="mt-3 text-sm leading-6 text-forest-800/62">{String(copy)}</p></article>; })}</div></div>
          </div>
        </section>

        <section id="testing" className="mx-auto grid max-w-[1100px] gap-12 px-5 py-24 sm:px-8 sm:py-32 lg:grid-cols-[1fr_1fr]">
          <div><p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-700">Testing</p><h2 className="mt-5 text-4xl font-semibold leading-[1.04] tracking-[-0.055em] sm:text-6xl">The right test depends on the infection and the timing.</h2></div>
          <div className="space-y-5 text-lg leading-8 text-forest-800/70"><p>Testing may use blood, urine or a swab, depending on the infection and the part of the body that may have been exposed. A single test does not check for every STI.</p><p>Tell the healthcare provider about the type and timing of exposure. This helps them choose the appropriate tests and decide whether follow-up testing is needed.</p><div className="rounded-[1.5rem] border border-emerald-700/15 bg-white p-6 text-base"><strong>Confidential care matters.</strong> You deserve respectful explanations, informed consent and clear next steps.</div></div>
        </section>

        <section id="care" className="bg-forest-950 py-24 text-white sm:py-32">
          <div className="mx-auto max-w-[1100px] px-5 sm:px-8"><div className="max-w-4xl"><p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-300">Seek professional care</p><h2 className="mt-5 text-4xl font-semibold leading-[1.04] tracking-[-0.055em] sm:text-6xl">Early care protects more than today.</h2><p className="mt-7 text-xl leading-9 text-white/68">Untreated STIs can cause complications including infertility, pregnancy complications, chronic pain and increased HIV risk. Correct diagnosis also helps prevent reinfection and transmission.</p></div><div className="mt-10 grid gap-4 sm:grid-cols-3">{['Severe pelvic or testicular pain', 'Sores, rash or discharge after a recent exposure', 'Possible exposure during pregnancy'].map((item) => <div key={item} className="rounded-[1.4rem] border border-white/12 bg-white/7 p-5 text-sm leading-6 text-white/70">{item}</div>)}</div><p className="mt-7 text-sm text-white/45">For severe symptoms, pregnancy concerns or time-sensitive HIV exposure, seek qualified care promptly.</p></div>
        </section>

        <section className="mx-auto max-w-[1100px] px-5 py-24 sm:px-8 sm:py-32">
          <div className="rounded-[2.3rem] bg-emerald-650 p-8 text-white sm:p-14"><div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center"><div><h2 className="text-3xl font-semibold tracking-[-0.045em] sm:text-4xl">Prevention should be easy to access.</h2><p className="mt-3 max-w-2xl text-white/70">The ANAWASS smart vending machine connects reliable education with discreet access to approved prevention products.</p></div><div className="flex flex-col gap-3 sm:flex-row"><a href="/access" className={cn(buttonVariants({ size: 'lg' }), 'h-12 rounded-full bg-white px-6 text-forest-950')}>See the vending solution</a><a href="/learn/hiv" className={cn(buttonVariants({ variant: 'outline', size: 'lg' }), 'h-12 rounded-full border-white/30 bg-transparent px-6 text-white hover:bg-white/10 hover:text-white')}>HIV essentials <ArrowRight className="size-4" /></a></div></div></div>
        </section>

        <section className="border-t border-emerald-950/10 bg-white py-14"><div className="mx-auto max-w-[1100px] px-5 text-sm leading-6 text-forest-800/58 sm:px-8"><p className="font-semibold text-forest-950">Trusted sources</p><div className="mt-4 flex flex-wrap gap-x-6 gap-y-3"><a href="https://www.who.int/news-room/fact-sheets/detail/sexually-transmitted-infections-(stis)" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 hover:text-emerald-700">WHO: Sexually transmitted infections <ExternalLink className="size-3.5" /></a><a href="https://www.who.int/teams/global-hiv-hepatitis-and-stis-programmes/stis/prevention" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 hover:text-emerald-700">WHO: STI prevention <ExternalLink className="size-3.5" /></a><a href="https://www.moh.gov.et/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 hover:text-emerald-700">Ethiopian Ministry of Health <ExternalLink className="size-3.5" /></a></div><p className="mt-5">Last clinical-content review: September 2026. This page is educational and does not replace professional medical advice.</p></div></section>
      </main>
      <SiteFooter />
    </div>
  );
}
