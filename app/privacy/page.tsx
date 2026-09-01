import { Database, EyeOff, LockKeyhole, ShieldCheck } from 'lucide-react';

import { EducationCarousel } from '@/components/education-carousel';
import { PageIntro, SiteFooter, SiteHeader } from '@/components/site-chrome';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-canvas text-forest-950">
      <SiteHeader compact />
      <main id="main-content">
        <PageIntro eyebrow="Privacy" title="Privacy is part of the service—not an afterthought." description="This page explains the principles guiding ANAWASS’s public website and planned smart vending solution. A final legal policy will be published before launch." />
        <EducationCarousel topic="privacy" />
        <section className="mx-auto max-w-[1000px] px-5 py-24 sm:px-8 sm:py-32">
          <div className="grid gap-5 md:grid-cols-3">{[
            [EyeOff, 'Read without an account', 'The public education pages do not require you to create a profile or provide personal health information.'],
            [Database, 'Collect less', 'The production system will be designed to collect only information necessary for operations, payments, safety and legal compliance.'],
            [LockKeyhole, 'Separate sensitive systems', 'Public education, operational management and payment integrations are designed as separate, controlled parts of the platform.'],
          ].map(([Icon, title, copy]) => { const ItemIcon = Icon as typeof EyeOff; return <article key={String(title)} className="rounded-[1.8rem] bg-white p-7"><ItemIcon className="size-6 text-emerald-650" /><h2 className="mt-10 text-xl font-semibold">{String(title)}</h2><p className="mt-3 text-sm leading-6 text-forest-800/62">{String(copy)}</p></article>; })}</div>

          <div className="mt-20 grid gap-12 lg:grid-cols-[.75fr_1.25fr]"><div><ShieldCheck className="size-7 text-emerald-650" /><h2 className="mt-6 text-4xl font-semibold tracking-[-.05em]">Our working commitments</h2></div><div className="divide-y divide-emerald-950/10 border-y border-emerald-950/10">{[
            ['No diagnosis from browsing', 'Reading an HIV or STI article does not create a health diagnosis or clinical record.'],
            ['No hidden health profiling', 'Operational analytics should measure content use, machine performance and service quality without building unnecessary personal health profiles.'],
            ['Controlled staff access', 'The management platform will use role-based permissions and audit history so access and changes can be reviewed.'],
            ['Secure production hosting', 'ANAWASS will require encrypted connections, backups, monitoring and clear incident procedures before public launch.'],
            ['Clear third-party boundaries', 'Payment providers, analytics tools and other integrations will be documented in the final privacy notice before they are activated.'],
          ].map(([title, copy]) => <article key={title} className="py-6"><h3 className="font-semibold">{title}</h3><p className="mt-2 text-sm leading-6 text-forest-800/62">{copy}</p></article>)}</div></div>

          <div className="mt-20 rounded-[2rem] bg-amber-100 p-7 sm:p-10"><p className="text-xs font-bold uppercase tracking-[.16em] text-amber-900">Development-stage notice</p><h2 className="mt-4 text-3xl font-semibold tracking-[-.04em]">This website is not yet collecting public submissions.</h2><p className="mt-4 max-w-3xl leading-7 text-forest-800/65">Official contact details, analytics choices, payment partners, data-retention periods and user rights will be confirmed in the final legal privacy policy before the production domain and public service launch.</p></div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
