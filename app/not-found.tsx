import { ArrowLeft } from 'lucide-react';

import { Logo } from '@/components/site-chrome';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export default function NotFound() {
  return <main className="grid min-h-screen place-items-center bg-canvas px-5"><div className="max-w-xl text-center"><div className="flex justify-center"><Logo /></div><p className="mt-16 text-xs font-bold uppercase tracking-[.18em] text-emerald-700">Page not found</p><h1 className="mt-5 text-5xl font-semibold tracking-[-.06em] sm:text-6xl">This path does not lead anywhere yet.</h1><p className="mt-5 text-lg leading-8 text-forest-800/65">Return to ANAWASS for trusted HIV and STI information or the smart vending solution.</p><a href="/" className={cn(buttonVariants({ size: 'lg' }), 'mt-9 h-12 rounded-full bg-forest-950 px-6 text-white')}><ArrowLeft className="size-4" /> Back to ANAWASS</a></div></main>;
}
