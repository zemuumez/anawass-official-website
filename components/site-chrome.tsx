import { ChevronDown, MapPin, Menu, ShieldCheck } from 'lucide-react';

import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export function Logo({ inverse = false }: { inverse?: boolean }) {
  return (
    <a href="/" className={cn('relative block h-11 w-[174px] overflow-hidden rounded-xl', inverse ? 'bg-white' : 'bg-white/80')} aria-label="ANAWASS home">
      <img
        src="/brand/anawass-logo-approved.png"
        alt=""
        aria-hidden="true"
        className="absolute left-0 top-1/2 w-[174px] max-w-none -translate-y-1/2"
      />
    </a>
  );
}

const links = [
  { href: '/learn/hiv', label: 'HIV' },
  { href: '/learn/stis', label: 'STIs' },
  { href: '/access', label: 'Smart vending' },
  { href: '/locations', label: 'Find a machine' },
  { href: '/about', label: 'Our mission' },
  { href: '/contact', label: 'Contact us' },
];

const amharicLinks = [
  { href: '/am#hiv', label: 'ኤችአይቪ' },
  { href: '/am#stis', label: 'የግብረ-ሥጋ በሽታዎች' },
  { href: '/am#access', label: 'ስማርት ቬንዲንግ' },
  { href: '/locations', label: 'ማሽን ይፈልጉ' },
  { href: '/am#mission', label: 'ራዕያችን' },
  { href: '/contact', label: 'ያግኙን' },
];

export function SiteHeader({ compact = false, locale = 'en' }: { compact?: boolean; locale?: 'en' | 'am' }) {
  const navigation = locale === 'am' ? amharicLinks : links;
  return (
    <>
      <a href="#main-content" className="fixed left-4 top-4 z-[100] -translate-y-24 rounded-full bg-white px-4 py-2 text-sm font-semibold text-forest-950 shadow-lg transition focus:translate-y-0">
        {locale === 'am' ? 'ወደ ዋናው ይዘት ይሂዱ' : 'Skip to content'}
      </a>
      {!compact && (
        <div className="border-b border-white/10 bg-forest-950 px-4 py-2.5 text-center text-[0.76rem] font-medium leading-5 text-white sm:text-sm">
          {locale === 'am' ? 'ለኤችአይቪ ተጋልጠው ሊሆን ይችላል? ወዲያውኑ ብቃት ያለው የጤና እርዳታ ያግኙ—PEP በ72 ሰዓት ውስጥ መጀመር አለበት።' : 'Possible HIV exposure? Seek qualified care immediately—PEP must be started within 72 hours.'}
          <a href={locale === 'am' ? '/am#pep' : '/learn/hiv#pep'} className="ml-1.5 underline decoration-emerald-300 underline-offset-4">{locale === 'am' ? 'ስለ PEP ይወቁ' : 'Learn about PEP'}</a>
        </div>
      )}
      <header className="relative z-40 border-b border-emerald-950/10 bg-canvas/90 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-[1240px] items-center justify-between px-5 sm:px-8">
          <Logo />
          <nav className="hidden items-center gap-8 text-sm font-medium text-forest-800 lg:flex" aria-label="Primary navigation">
            {navigation.map((link) => (
              <a key={link.href} href={link.href} className="transition-colors hover:text-emerald-700">{link.label}</a>
            ))}
          </nav>
          <div className="flex items-center gap-2.5">
            <a href={locale === 'am' ? '/' : '/am'} className="hidden rounded-full border border-emerald-950/15 bg-white px-3.5 py-2 text-xs font-semibold text-forest-900 transition hover:border-emerald-700 sm:inline-flex">{locale === 'am' ? 'EN / አማ' : 'አማ / EN'}</a>
            <a href="/locations" className={cn(buttonVariants({ size: 'lg' }), 'hidden h-11 rounded-full bg-forest-950 px-5 text-white hover:bg-emerald-800 sm:inline-flex')}><MapPin className="size-4" />{locale === 'am' ? 'ማሽን ይፈልጉ' : 'Find a machine'}</a>
            <details className="group relative lg:hidden">
              <summary className="grid size-11 cursor-pointer list-none place-items-center rounded-full border border-emerald-950/15 bg-white text-forest-950 marker:hidden" aria-label={locale === 'am' ? 'የገጽ ምናሌን ይክፈቱ' : 'Open navigation'}>
                <Menu className="size-5" />
              </summary>
              <div className="absolute right-0 top-14 w-[min(88vw,320px)] rounded-3xl border border-emerald-950/10 bg-white p-3 shadow-[0_24px_70px_rgba(5,60,48,.18)]">
                <nav className="flex flex-col" aria-label="Mobile navigation">
                  {navigation.map((link) => (
                    <a key={link.href} href={link.href} className="rounded-2xl px-4 py-3.5 text-base font-semibold text-forest-900 hover:bg-mint-100">{link.label}</a>
                  ))}
                  <a href={locale === 'am' ? '/' : '/am'} className="mt-2 flex items-center justify-between rounded-2xl bg-mint-100 px-4 py-3.5 text-sm font-semibold text-forest-900">
                    {locale === 'am' ? 'English' : 'አማርኛ'} <ChevronDown className="size-4 -rotate-90" />
                  </a>
                </nav>
              </div>
            </details>
          </div>
        </div>
      </header>
      <a href="/locations" className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-emerald-300 px-5 py-3 text-sm font-bold text-forest-950 shadow-[0_16px_46px_rgba(5,60,48,.28)] transition hover:-translate-y-0.5 hover:bg-emerald-200 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-emerald-300/45 sm:hidden">
        <MapPin className="size-4" /> {locale === 'am' ? 'ማሽን ይፈልጉ' : 'Find a machine'}
      </a>
    </>
  );
}

export function SiteFooter({ locale = 'en' }: { locale?: 'en' | 'am' }) {
  const isAmharic = locale === 'am';
  return (
    <footer className="bg-forest-950 text-white">
      <div className="mx-auto max-w-[1240px] px-5 py-16 sm:px-8 sm:py-20">
        <div className="grid gap-12 border-b border-white/12 pb-14 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div className="max-w-md">
            <Logo inverse />
            <p className="mt-5 text-base leading-7 text-white/65">{isAmharic ? 'ግልጽ የኤችአይቪ ትምህርት፤ ከANAWASS ስማርት ቬንዲንግ የግል መከላከያ አቅርቦት ጋር።' : 'Clear HIV education connected to private prevention access through the ANAWASS smart vending solution.'}</p>
            <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-white/8 px-4 py-2 text-xs font-semibold text-emerald-200">
              <ShieldCheck className="size-4" /> {isAmharic ? 'ግላዊነት የአገልግሎቱ አካል ነው' : 'Privacy is part of the product'}
            </div>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-300">{isAmharic ? 'ይወቁ' : 'Learn'}</p>
            <div className="mt-5 flex flex-col gap-3 text-sm text-white/70">
              <a href={isAmharic ? '/am#hiv' : '/learn/hiv'}>{isAmharic ? 'የኤችአይቪ መሠረታዊ መረጃ' : 'HIV essentials'}</a>
              <a href={isAmharic ? '/am#pep' : '/learn/hiv#pep'}>PEP &amp; PrEP</a>
              <a href={isAmharic ? '/am#stis' : '/learn/stis'}>{isAmharic ? 'የአባላዘር በሽታ መረጃ' : 'STI essentials'}</a>
              <a href={isAmharic ? '/am#stis' : '/learn/stis#testing'}>{isAmharic ? 'የምርመራ መመሪያ' : 'Testing guidance'}</a>
            </div>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-300">ANAWASS</p>
            <div className="mt-5 flex flex-col gap-3 text-sm text-white/70">
              <a href={isAmharic ? '/am#mission' : '/about'}>{isAmharic ? 'ራዕያችን' : 'Our mission'}</a>
              <a href="/about#partners">{isAmharic ? 'አጋሮች' : 'Partners'}</a>
              <a href={isAmharic ? '/am#access' : '/access'}>{isAmharic ? 'ANAWASS ስማርት ቬንዲንግ' : 'Smart vending solution'}</a>
              <a href="/access#try-demo">{isAmharic ? 'የማሽኑን ሙከራ ይዩ' : 'Try the machine demo'}</a>
              <a href="/locations">{isAmharic ? 'ማሽን ይፈልጉ' : 'Machine locator'}</a>
              <a href="/contact">{isAmharic ? 'ያግኙን' : 'Contact us'}</a>
              <a href="/privacy">{isAmharic ? 'ግላዊነት' : 'Privacy'}</a>
            </div>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-300">{isAmharic ? 'ቋንቋዎች' : 'Languages'}</p>
            <div className="mt-5 flex flex-col gap-3 text-sm text-white/70">
              <a href="/">English</a>
              <a href="/am">አማርኛ</a>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 pt-7 text-xs leading-5 text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 ANAWASS Trading PLC. All rights reserved.</p>
          <p className="max-w-2xl sm:text-right">{isAmharic ? 'የጤና መረጃው ለትምህርት ዓላማ ሲሆን፣ ከብቃት ያለው የጤና ባለሙያ የሚሰጥ ምክር፣ ምርመራ ወይም ሕክምናን አይተካም።' : 'Health information is educational and does not replace advice, diagnosis or treatment from a qualified healthcare professional.'}</p>
        </div>
      </div>
    </footer>
  );
}

export function PageIntro({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <section className="relative overflow-hidden border-b border-emerald-950/10 bg-forest-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,rgba(50,184,106,.26),transparent_32%)]" />
      <div className="relative mx-auto max-w-[1100px] px-5 py-20 sm:px-8 sm:py-28">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-300">{eyebrow}</p>
        <h1 className="mt-6 max-w-4xl text-balance text-5xl font-semibold leading-[0.98] tracking-[-0.06em] sm:text-7xl">{title}</h1>
        <p className="mt-7 max-w-3xl text-lg leading-8 text-white/68 sm:text-xl">{description}</p>
      </div>
    </section>
  );
}
