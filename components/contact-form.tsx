'use client';

import { useState } from 'react';
import { CheckCircle2, AlertCircle, Loader2, Send } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ContactApiResponse {
  success?: boolean;
  message?: string;
  error?: string;
}

export function ContactForm({ locale = 'en' }: { locale?: 'en' | 'am' }) {
  const isAm = locale === 'am';

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: 'general',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [feedbackMessage, setFeedbackMessage] = useState('');

  const subjects = [
    {
      value: 'general',
      label: isAm ? 'አጠቃላይ ጥያቄ' : 'General Inquiry',
    },
    {
      value: 'venue_partner',
      label: isAm ? 'የማሽን መገኛ አጋርነት (ሆቴሎች/ቦታዎች)' : 'Host a Vending Machine (Hotels / Venues)',
    },
    {
      value: 'clinical',
      label: isAm ? 'የጤና እና የህክምና ትምህርት (አናኒካ)' : 'Clinical & Health Education (Ananika)',
    },
    {
      value: 'media',
      label: isAm ? 'የሚዲያ እና የአጋርነት ግንኙነት' : 'Media & Partnerships',
    },
  ];

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    setFeedbackMessage('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          language: locale,
        }),
      });

      const data = (await res.json()) as ContactApiResponse;

      if (res.ok && data.success) {
        setStatus('success');
        setFeedbackMessage(data.message || (isAm ? 'መልእክትዎ በተሳካ ሁኔታ ደርሶናል!' : 'Your message has been sent successfully!'));
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          subject: 'general',
          message: '',
        });
      } else {
        setStatus('error');
        setFeedbackMessage(data.error || (isAm ? 'ስህተት ተከስቷል። እባክዎ እንደገና ይሞክሩ።' : 'An error occurred. Please try again.'));
      }
    } catch {
      setStatus('error');
      setFeedbackMessage(
        isAm
          ? 'የኔትወርክ ስህተት ተከስቷል። እባክዎ ግንኙነትዎን ያረጋግጡ እና እንደገና ይሞክሩ።'
          : 'Network error. Please check your connection and try again.'
      );
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {status === 'success' && (
        <div className="flex items-start gap-3 rounded-2xl border border-emerald-500/20 bg-emerald-50 p-5 text-emerald-950">
          <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-emerald-600" />
          <div>
            <p className="font-semibold">{isAm ? 'መልእክትዎ ተልኳል' : 'Message Sent'}</p>
            <p className="mt-1 text-sm text-emerald-800">{feedbackMessage}</p>
          </div>
        </div>
      )}

      {status === 'error' && (
        <div className="flex items-start gap-3 rounded-2xl border border-rose-500/20 bg-rose-50 p-5 text-rose-950">
          <AlertCircle className="mt-0.5 size-5 shrink-0 text-rose-600" />
          <div>
            <p className="font-semibold">{isAm ? 'መልእክቱ አልተላከም' : 'Submission Failed'}</p>
            <p className="mt-1 text-sm text-rose-800">{feedbackMessage}</p>
          </div>
        </div>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="fullName" className="block text-sm font-semibold text-forest-900">
            {isAm ? 'ሙሉ ስም' : 'Full Name'} <span className="text-emerald-650">*</span>
          </label>
          <input
            type="text"
            id="fullName"
            required
            placeholder={isAm ? 'አበበ ከበደ' : 'Abebe Kebede'}
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            className="mt-2 w-full rounded-2xl border border-emerald-950/15 bg-white px-4 py-3.5 text-base text-forest-950 placeholder:text-forest-800/40 focus:border-emerald-600 focus:outline-none focus:ring-4 focus:ring-emerald-500/10"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-forest-900">
            {isAm ? 'የኢሜይል አድራሻ' : 'Email Address'} <span className="text-emerald-650">*</span>
          </label>
          <input
            type="email"
            id="email"
            required
            placeholder="example@anawass.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="mt-2 w-full rounded-2xl border border-emerald-950/15 bg-white px-4 py-3.5 text-base text-forest-950 placeholder:text-forest-800/40 focus:border-emerald-600 focus:outline-none focus:ring-4 focus:ring-emerald-500/10"
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-forest-900">
            {isAm ? 'ስልክ ቁጥር (አማራጭ)' : 'Phone Number (Optional)'}
          </label>
          <input
            type="tel"
            id="phone"
            placeholder="+251 91 234 5678"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="mt-2 w-full rounded-2xl border border-emerald-950/15 bg-white px-4 py-3.5 text-base text-forest-950 placeholder:text-forest-800/40 focus:border-emerald-600 focus:outline-none focus:ring-4 focus:ring-emerald-500/10"
          />
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-semibold text-forest-900">
            {isAm ? 'የጉዳዩ ዓይነት' : 'Subject / Inquiry Category'}
          </label>
          <select
            id="subject"
            value={formData.subject}
            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
            className="mt-2 w-full rounded-2xl border border-emerald-950/15 bg-white px-4 py-3.5 text-base text-forest-950 focus:border-emerald-600 focus:outline-none focus:ring-4 focus:ring-emerald-500/10"
          >
            {subjects.map((item) => (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-forest-900">
          {isAm ? 'መልእክት' : 'Your Message'} <span className="text-emerald-650">*</span>
        </label>
        <textarea
          id="message"
          required
          rows={5}
          placeholder={isAm ? 'ጥያቄዎን ወይም አስተያየትዎን እዚህ ይጻፉ...' : 'Write your question or partnership proposal here...'}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="mt-2 w-full rounded-2xl border border-emerald-950/15 bg-white p-4 text-base text-forest-950 placeholder:text-forest-800/40 focus:border-emerald-600 focus:outline-none focus:ring-4 focus:ring-emerald-500/10"
        />
      </div>

      <button
        type="submit"
        disabled={status === 'loading'}
        className={cn(
          'inline-flex h-14 w-full items-center justify-center gap-2 rounded-full bg-forest-950 px-8 text-base font-semibold text-white shadow-lg transition hover:bg-emerald-800 focus:outline-none focus:ring-4 focus:ring-emerald-500/20 disabled:opacity-60 sm:w-auto',
          status === 'loading' && 'cursor-not-allowed'
        )}
      >
        {status === 'loading' ? (
          <>
            <Loader2 className="size-5 animate-spin" />
            <span>{isAm ? 'በመላክ ላይ...' : 'Sending message...'}</span>
          </>
        ) : (
          <>
            <span>{isAm ? 'መልእክት ይላኩ' : 'Send Message'}</span>
            <Send className="size-4" />
          </>
        )}
      </button>
    </form>
  );
}
