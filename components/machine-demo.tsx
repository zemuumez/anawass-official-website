'use client';

import { ArrowLeft, ArrowRight, Check, CreditCard, Globe2, PackageCheck, QrCode, RotateCcw, ShieldCheck } from 'lucide-react';
import { useState } from 'react';

const products = [
  { name: 'Classic', detail: 'Regular fit', color: 'from-blue-500 to-blue-800' },
  { name: 'Ultra thin', detail: 'Enhanced sensitivity', color: 'from-cyan-400 to-cyan-700' },
  { name: 'Ribbed', detail: 'Textured', color: 'from-violet-400 to-violet-800' },
];

export function MachineDemo() {
  const [step, setStep] = useState(0);
  const [language, setLanguage] = useState<'en' | 'am'>('en');
  const [selectedProduct, setSelectedProduct] = useState('');

  const reset = () => {
    setStep(0);
    setSelectedProduct('');
  };

  return (
    <section id="try-demo" className="overflow-hidden bg-[#e9f6ed] py-20 sm:py-28">
      <div className="mx-auto max-w-[1180px] px-5 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[.74fr_1.26fr] lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[.2em] text-emerald-700">Interactive machine trial</p>
            <h2 className="mt-5 text-balance text-4xl font-semibold leading-[1.02] tracking-[-.055em] sm:text-6xl">Try the ANAWASS journey before you visit.</h2>
            <p className="mt-6 text-lg leading-8 text-forest-800/68">This guided demonstration shows how someone can learn, choose, simulate payment and collect privately at an ANAWASS machine.</p>
            <div className="mt-8 rounded-[1.5rem] border border-emerald-950/10 bg-white p-5 text-sm leading-6 text-forest-800/65"><strong className="text-forest-950">Demonstration only:</strong> no order is placed, no payment is taken and no personal information is collected.</div>
            <a href="/locations" className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-emerald-700">Find a machine <ArrowRight className="size-4" /></a>
          </div>

          <div className="rounded-[2.8rem] bg-[#e8e8e4] p-4 shadow-[0_34px_90px_rgba(5,60,48,.18)] sm:p-7">
            <div className="overflow-hidden rounded-[2rem] border-[10px] border-[#0a2634] bg-[#071f31] text-white shadow-inner">
              <div className="flex min-h-[610px] flex-col">
                <div className="flex items-center justify-between border-b border-white/10 px-5 py-4 sm:px-7">
                  <div><p className="text-xs font-bold tracking-[.14em] text-emerald-300">ANAWASS</p><p className="mt-1 text-[.66rem] uppercase tracking-[.12em] text-white/42">Interactive machine demo</p></div>
                  <div className="flex items-center gap-2 rounded-full bg-white/8 px-3 py-2 text-xs font-semibold"><ShieldCheck className="size-4 text-emerald-300" /> Private session</div>
                </div>

                <div className="flex gap-1.5 px-5 pt-5 sm:px-7" aria-label={`Demo step ${step + 1} of 5`}>
                  {[0, 1, 2, 3, 4].map((item) => <span key={item} className={`h-1.5 flex-1 rounded-full ${item <= step ? 'bg-emerald-300' : 'bg-white/12'}`} />)}
                </div>

                <div className="flex flex-1 flex-col p-5 sm:p-7" aria-live="polite">
                  {step === 0 && (
                    <div className="flex flex-1 flex-col justify-center">
                      <span className="grid size-14 place-items-center rounded-2xl bg-emerald-300 text-forest-950"><Globe2 className="size-7" /></span>
                      <p className="mt-8 text-xs font-bold uppercase tracking-[.16em] text-emerald-300">Step 1 · Language</p>
                      <h3 className="mt-4 text-4xl font-semibold tracking-[-.05em]">Welcome. Choose your language.</h3>
                      <div className="mt-8 grid gap-3 sm:grid-cols-2">
                        <button type="button" onClick={() => setLanguage('en')} className={`rounded-2xl border p-5 text-left transition ${language === 'en' ? 'border-emerald-300 bg-emerald-300 text-forest-950' : 'border-white/12 bg-white/6 hover:bg-white/10'}`}><span className="text-lg font-semibold">English</span><span className="mt-1 block text-sm opacity-65">Continue in English</span></button>
                        <button type="button" onClick={() => setLanguage('am')} className={`rounded-2xl border p-5 text-left transition ${language === 'am' ? 'border-emerald-300 bg-emerald-300 text-forest-950' : 'border-white/12 bg-white/6 hover:bg-white/10'}`}><span className="text-lg font-semibold">አማርኛ</span><span className="mt-1 block text-sm opacity-65">በአማርኛ ይቀጥሉ</span></button>
                      </div>
                      <button type="button" onClick={() => setStep(1)} className="mt-7 inline-flex h-13 items-center justify-center gap-2 rounded-full bg-white px-6 font-bold text-forest-950 transition hover:bg-emerald-100">Start demonstration <ArrowRight className="size-4" /></button>
                    </div>
                  )}

                  {step === 1 && (
                    <div className="flex flex-1 flex-col">
                      <p className="text-xs font-bold uppercase tracking-[.16em] text-emerald-300">Step 2 · Learn first</p>
                      <h3 className="mt-4 text-3xl font-semibold tracking-[-.045em]">{language === 'am' ? 'ከመምረጥዎ በፊት ዋናውን መረጃ ይወቁ።' : 'Know the essential fact before choosing.'}</h3>
                      <div className="mt-7 flex-1 rounded-[1.6rem] bg-gradient-to-br from-emerald-300 to-teal-200 p-7 text-forest-950">
                        <p className="text-xs font-bold uppercase tracking-[.14em]">HIV prevention</p>
                        <p className="mt-6 text-3xl font-semibold leading-tight tracking-[-.04em]">{language === 'am' ? 'ኮንዶምን በትክክል እና ሁልጊዜ መጠቀም የኤችአይቪ እና የብዙ ኢንፌክሽኖች እድልን ይቀንሳል።' : 'Correct and consistent condom use reduces the risk of HIV and many other STIs.'}</p>
                        <p className="mt-8 text-sm leading-6 opacity-65">Education does not replace advice, diagnosis or treatment from a qualified healthcare professional.</p>
                      </div>
                      <div className="mt-6 flex gap-3"><button type="button" onClick={() => setStep(0)} className="grid size-13 shrink-0 place-items-center rounded-full border border-white/15"><ArrowLeft className="size-4" /></button><button type="button" onClick={() => setStep(2)} className="inline-flex h-13 flex-1 items-center justify-center gap-2 rounded-full bg-white px-6 font-bold text-forest-950">I understand—choose <ArrowRight className="size-4" /></button></div>
                    </div>
                  )}

                  {step === 2 && (
                    <div className="flex flex-1 flex-col">
                      <p className="text-xs font-bold uppercase tracking-[.16em] text-emerald-300">Step 3 · Private selection</p>
                      <h3 className="mt-4 text-3xl font-semibold tracking-[-.045em]">Select a demonstration product.</h3>
                      <div className="mt-7 grid flex-1 gap-3 sm:grid-cols-3">
                        {products.map((product) => <button key={product.name} type="button" onClick={() => setSelectedProduct(product.name)} className={`rounded-[1.4rem] border p-4 text-left transition ${selectedProduct === product.name ? 'border-emerald-300 bg-white/14' : 'border-white/10 bg-white/6 hover:bg-white/10'}`}><span className={`mx-auto block h-28 max-w-24 rounded-xl bg-gradient-to-b ${product.color} shadow-lg`} /><span className="mt-6 block font-semibold">{product.name}</span><span className="mt-1 block text-xs text-white/50">{product.detail}</span>{selectedProduct === product.name && <span className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-emerald-300"><Check className="size-3.5" /> Selected</span>}</button>)}
                      </div>
                      <div className="mt-6 flex gap-3"><button type="button" onClick={() => setStep(1)} className="grid size-13 shrink-0 place-items-center rounded-full border border-white/15"><ArrowLeft className="size-4" /></button><button type="button" disabled={!selectedProduct} onClick={() => setStep(3)} className="inline-flex h-13 flex-1 items-center justify-center gap-2 rounded-full bg-emerald-300 px-6 font-bold text-forest-950 disabled:cursor-not-allowed disabled:opacity-35">Continue to demo payment <ArrowRight className="size-4" /></button></div>
                    </div>
                  )}

                  {step === 3 && (
                    <div className="flex flex-1 flex-col items-center justify-center text-center">
                      <span className="grid size-14 place-items-center rounded-2xl bg-white/8 text-emerald-300"><QrCode className="size-7" /></span>
                      <p className="mt-6 text-xs font-bold uppercase tracking-[.16em] text-emerald-300">Step 4 · Payment demonstration</p>
                      <h3 className="mt-4 text-3xl font-semibold tracking-[-.045em]">Scan, pay and confirm privately.</h3>
                      <div className="mt-7 grid size-40 grid-cols-5 gap-1 rounded-2xl bg-white p-4" aria-label="Demonstration QR pattern">{Array.from({ length: 25 }).map((_, index) => <span key={index} className={`rounded-[2px] ${(index * 7 + index % 3) % 4 === 0 || [0, 1, 5, 6, 18, 19, 23, 24].includes(index) ? 'bg-forest-950' : 'bg-emerald-100'}`} />)}</div>
                      <p className="mt-5 text-sm text-white/55"><span className="font-semibold text-white">{selectedProduct}</span> · Demo only · ETB 0.00</p>
                      <button type="button" onClick={() => setStep(4)} className="mt-7 inline-flex h-13 w-full items-center justify-center gap-2 rounded-full bg-emerald-300 px-6 font-bold text-forest-950"><CreditCard className="size-4" /> Simulate successful payment</button>
                    </div>
                  )}

                  {step === 4 && (
                    <div className="flex flex-1 flex-col items-center justify-center text-center">
                      <span className="grid size-18 place-items-center rounded-full bg-emerald-300 text-forest-950"><PackageCheck className="size-8" /></span>
                      <p className="mt-7 text-xs font-bold uppercase tracking-[.16em] text-emerald-300">Step 5 · Collect</p>
                      <h3 className="mt-4 text-4xl font-semibold tracking-[-.05em]">Demo complete.</h3>
                      <p className="mt-4 max-w-md leading-7 text-white/62">The machine confirms the transaction and releases the product through the secure collection opening.</p>
                      <div className="mt-8 h-20 w-full max-w-sm rounded-2xl border-[8px] border-[#183c4b] bg-black/55 shadow-inner"><span className="mx-auto mt-5 block h-1.5 w-24 rounded-full bg-emerald-300 shadow-[0_0_18px_rgba(110,231,183,.8)]" /></div>
                      <div className="mt-8 grid w-full gap-3 sm:grid-cols-2"><button type="button" onClick={reset} className="inline-flex h-13 items-center justify-center gap-2 rounded-full border border-white/15 px-6 font-bold"><RotateCcw className="size-4" /> Start again</button><a href="/locations" className="inline-flex h-13 items-center justify-center gap-2 rounded-full bg-emerald-300 px-6 font-bold text-forest-950">Find a machine <ArrowRight className="size-4" /></a></div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="mx-auto mt-5 h-16 w-[48%] rounded-b-[2rem] bg-[#d2d2cf] shadow-inner" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  );
}
