'use client';

import { useEffect, useState } from 'react';
import { NextStudio } from 'next-sanity/studio';
import sanityConfig from '@/sanity.config';
import { projectId, isSanityConfigured } from '@/lib/sanity.client';
import { ShieldCheck, Sparkles } from 'lucide-react';

export default function StudioPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-forest-950 text-white">
        <div className="text-center">
          <div className="mx-auto size-10 animate-spin rounded-full border-4 border-emerald-400 border-t-transparent" />
          <p className="mt-4 text-sm font-semibold tracking-wide text-emerald-200">Loading ANAWASS Sanity Studio...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#101112]">
      {!isSanityConfigured && (
        <div className="border-b border-amber-500/20 bg-amber-500/10 px-5 py-3 text-center text-xs font-medium text-amber-200">
          <span className="inline-flex items-center gap-1.5">
            <Sparkles className="size-3.5" />
            Tip: Connect your Sanity Project ID (currently using default &quot;{projectId || 'anawass-cms'}&quot;) in <code className="rounded bg-white/10 px-1 py-0.5 font-mono">.env.local</code> to sync live changes to production.
          </span>
        </div>
      )}
      <NextStudio config={sanityConfig} />
    </div>
  );
}
