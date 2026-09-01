import { ArrowRight, BookOpenText, Clock3, HeartHandshake, MapPin, ShieldCheck, TestTube2 } from 'lucide-react';

import { EducationCarousel } from '@/components/education-carousel';
import { SiteFooter, SiteHeader } from '@/components/site-chrome';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export default function AmharicHome() {
  return (
    <div className="min-h-screen bg-canvas text-forest-950" lang="am">
      <SiteHeader locale="am" />
      <main id="main-content">
        <section className="hero-wash">
          <div className="mx-auto grid min-h-[700px] max-w-[1240px] items-center gap-14 px-5 py-20 sm:px-8 lg:grid-cols-[1.05fr_.95fr]">
            <div><p className="inline-flex rounded-full border border-emerald-700/15 bg-white px-4 py-2 text-xs font-bold tracking-[.08em] text-emerald-800">የኤችአይቪ ትምህርት። የግል መከላከያ አቅርቦት።</p><h1 className="mt-7 text-balance text-[clamp(3.1rem,7vw,6.8rem)] font-semibold leading-[1.02] tracking-[-0.065em]">ጤናዎ።<span className="block text-emerald-650">ግላዊነትዎ።</span>ምርጫዎ።</h1><p className="mt-8 max-w-2xl text-lg leading-9 text-forest-800/72">ANAWASS ግልጽ የኤችአይቪ እና የጾታዊ ጤና ትምህርትን ከራሱ የስማርት ጤና ቬንዲንግ ማሽን ጋር በማገናኘት የመከላከያ ምርቶችን በግል እና በክብር ማግኘትን ያቀላጥፋል።</p><div className="mt-10 flex flex-col gap-3 sm:flex-row"><a href="#hiv" className={cn(buttonVariants({ size: 'lg' }), 'h-14 rounded-full bg-emerald-650 px-7 text-base text-white')}>ስለ ኤችአይቪ ይወቁ <ArrowRight className="size-4" /></a><a href="#access" className={cn(buttonVariants({ variant: 'outline', size: 'lg' }), 'h-14 rounded-full border-emerald-950/15 bg-white px-7 text-base')}>የቬንዲንግ መፍትሔውን ይዩ</a></div></div>
            <div id="pep" className="rounded-[2.2rem] bg-forest-950 p-7 text-white shadow-[0_35px_90px_rgba(6,66,49,.16)] sm:p-10"><span className="grid size-13 place-items-center rounded-full bg-emerald-300 text-forest-950"><Clock3 className="size-5" /></span><p className="mt-8 text-xs font-bold tracking-[.1em] text-emerald-300">አስቸኳይ መረጃ</p><h2 className="mt-4 text-3xl font-semibold tracking-tight">ለኤችአይቪ ከተጋለጡ በኋላ</h2><p className="mt-5 leading-8 text-white/70">PEP ለኤችአይቪ ከተጋለጡ በኋላ የሚወሰድ የአደጋ ጊዜ መከላከያ መድሃኒት ነው። በተቻለ ፍጥነት፣ ከ72 ሰዓት በፊት መጀመር አለበት።</p><p className="mt-6 text-sm font-semibold text-emerald-300">ወዲያውኑ ብቃት ወዳለው የጤና ተቋም ይሂዱ።</p></div>
          </div>
        </section>

        <section id="hiv" className="mx-auto max-w-[1100px] px-5 py-24 sm:px-8 sm:py-32"><div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]"><div><p className="text-xs font-bold text-emerald-700">ኤችአይቪ</p><h2 className="mt-5 text-4xl font-semibold tracking-[-.045em] sm:text-5xl">ፍርሃትን በትክክለኛ መረጃ እንተካ።</h2></div><div className="space-y-5 text-lg leading-9 text-forest-800/70"><p>ኤችአይቪ የሰውነትን የበሽታ መከላከያ አቅም የሚያጠቃ ቫይረስ ነው። ውጤታማ ሕክምና ሲደረግ የረጅም ጊዜ ቁጥጥር ሊደረግበት ይችላል።</p><p>በመተቃቀፍ፣ ምግብ በመጋራት፣ በመጸዳጃ ቤት ወይም በትንኝ አይተላለፍም። የአንድን ሰው ሁኔታ በመልክ ማወቅ አይቻልም፤ መመርመር ብቻ ነው የሚያረጋግጠው።</p></div></div></section>

        <section id="stis" className="bg-white py-24 sm:py-32"><div className="mx-auto max-w-[1100px] px-5 sm:px-8"><div className="max-w-3xl"><p className="text-xs font-bold text-emerald-700">የግብረ-ሥጋ ኢንፌክሽኖች</p><h2 className="mt-5 text-4xl font-semibold tracking-[-.045em] sm:text-6xl">ምልክት ሳይታይ ሊኖሩ ይችላሉ።</h2><p className="mt-6 text-lg leading-9 text-forest-800/68">አንዳንድ ኢንፌክሽኖች ምልክት አያሳዩም። ስለዚህ በራስ መድሃኒት ከመውሰድ ይልቅ ትክክለኛ ምርመራ እና ብቃት ያለው የጤና እርዳታ አስፈላጊ ነው።</p></div><div className="mt-12 grid gap-4 sm:grid-cols-3">{[
              [ShieldCheck, 'መከላከያ', 'ኮንዶምን በትክክል እና ሁልጊዜ መጠቀም ኤችአይቪን እና ብዙ ኢንፌክሽኖችን የመያዝ እድል ይቀንሳል።'],
              [TestTube2, 'ምርመራ', 'ምንም ምልክት ባይኖርም በተገቢው ጊዜ መመርመር ግልጽነትን ያመጣል።'],
              [HeartHandshake, 'ክብር', 'በሚስጥር፣ ያለ አድልዎ እና ግልጽ ማብራሪያ የሚሰጥ እንክብካቤ ይገባዎታል።'],
            ].map(([Icon, title, copy]) => { const ItemIcon = Icon as typeof ShieldCheck; return <article key={String(title)} className="rounded-[1.7rem] bg-canvas p-7"><ItemIcon className="size-6 text-emerald-650" /><h3 className="mt-8 text-xl font-semibold">{String(title)}</h3><p className="mt-3 text-sm leading-7 text-forest-800/62">{String(copy)}</p></article>; })}</div></div></section>

        <section id="access" className="bg-[#e9f6ed] py-24 sm:py-32"><div className="mx-auto grid max-w-[1100px] gap-12 px-5 sm:px-8 lg:grid-cols-[.9fr_1.1fr] lg:items-center"><div className="relative min-h-[560px] overflow-hidden rounded-[2.2rem]"><img src="/media/anawass-vending-machine.jpeg" alt="የANAWASS ስማርት ጤና ቬንዲንግ ማሽን" className="absolute inset-0 size-full object-cover" /></div><div className="text-lg leading-9 text-forest-800/70"><MapPin className="size-7 text-emerald-650" /><h2 className="mt-7 text-4xl font-semibold tracking-[-.045em] text-forest-950 sm:text-5xl">የANAWASS ስማርት ቬንዲንግ መፍትሔ</h2><p className="mt-6">ይህ ማሽን የኤችአይቪ መከላከያ ትምህርትን፣ የግል የምርት ምርጫን እና ደህንነቱ የተጠበቀ አቅርቦትን በአንድ ጸጥ ያለ ሂደት ያገናኛል።</p><p className="mt-5">የሙከራ ቦታዎች ሲረጋገጡ አድራሻ፣ የስራ ሰዓት እና የማሽኑ አገልግሎት ሁኔታ እዚህ ይታያሉ።</p></div></div></section>

        <section id="mission" className="mx-auto max-w-[1100px] px-5 py-24 sm:px-8 sm:py-32"><div className="rounded-[2.4rem] bg-forest-950 p-8 text-white sm:p-14"><BookOpenText className="size-7 text-emerald-300" /><h2 className="mt-8 max-w-4xl text-4xl font-semibold tracking-[-.045em] sm:text-6xl">ግላዊነት ወደ መከላከያ የሚወስድ መንገድ እንጂ እንቅፋት መሆን የለበትም።</h2><p className="mt-7 max-w-3xl text-lg leading-9 text-white/68">ANAWASS ትክክለኛ የጤና መረጃን፣ ክብር ያለውን የምርት አቅርቦት እና ተጠያቂ ቴክኖሎጂን በአንድ ላይ ያገናኛል።</p><a href="/about" className={cn(buttonVariants({ size: 'lg' }), 'mt-9 h-12 rounded-full bg-emerald-300 px-6 text-forest-950')}>ስለ ANAWASS ይወቁ <ArrowRight className="size-4" /></a></div><p className="mt-6 text-sm leading-7 text-forest-800/52">ይህ የጤና መረጃ ለትምህርት የተዘጋጀ ነው፤ የብቃት ያለውን የጤና ባለሙያ ምክር፣ ምርመራ ወይም ሕክምና አይተካም።</p></section>
        <EducationCarousel topic="am" />
      </main>
      <SiteFooter locale="am" />
    </div>
  );
}
