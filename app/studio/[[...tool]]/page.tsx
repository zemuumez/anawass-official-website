'use client';

import { NextStudio } from 'next-sanity/studio';
import sanityConfig from '@/sanity.config';
import { projectId, isSanityConfigured } from '@/lib/sanity.client';
import { Sparkles } from 'lucide-react';

export default function StudioPage() {
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
