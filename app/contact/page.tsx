import { Building2, Clock3, Mail, MapPin, ShieldCheck, Stethoscope } from 'lucide-react';
import { ContactForm } from '@/components/contact-form';
import { EducationCarousel } from '@/components/education-carousel';
import { PageIntro, SiteFooter, SiteHeader } from '@/components/site-chrome';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-canvas text-forest-950">
      <SiteHeader />
      <main id="main-content">
        <PageIntro
          eyebrow="Contact ANAWASS"
          title="Let's talk about private health access."
          description="Whether you have questions about HIV education, hosting a smart vending machine at your venue, or partnering with our clinical and tech teams—we are here to help."
        />

        <section className="mx-auto max-w-[1240px] px-5 py-20 sm:px-8 sm:py-28">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            {/* Left Column: Interactive Contact Form */}
            <div className="rounded-[2.4rem] bg-white p-8 shadow-[0_24px_70px_rgba(5,60,48,.08)] sm:p-12">
              <div className="mb-8">
                <span className="inline-flex items-center gap-2 rounded-full bg-mint-100 px-4 py-2 text-xs font-bold uppercase tracking-[.14em] text-emerald-800">
                  <Mail className="size-3.5" /> Send a message
                </span>
                <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-forest-950 sm:text-4xl">
                  How can we assist you?
                </h2>
                <p className="mt-3 text-base leading-7 text-forest-800/70">
                  Fill out the form below. All inquiries are treated with privacy and directed to the appropriate team.
                </p>
              </div>

              <ContactForm locale="en" />
            </div>

            {/* Right Column: Key Contacts & Emergency Callout */}
            <div className="space-y-6">
              {/* Urgent PEP Notice Card */}
              <div className="rounded-[2.2rem] bg-forest-950 p-8 text-white shadow-lg">
                <div className="flex items-center gap-3">
                  <span className="grid size-11 place-items-center rounded-full bg-emerald-300 text-forest-950">
                    <Clock3 className="size-5" />
                  </span>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[.14em] text-emerald-300">Urgent health alert</p>
                    <h3 className="text-xl font-semibold">Possible HIV Exposure?</h3>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-6 text-white/75">
                  PEP (Post-Exposure Prophylaxis) must be started as soon as possible, within <strong>72 hours</strong> of exposure. Do not wait for a website form reply—seek immediate care at a qualified medical clinic or emergency room.
                </p>
                <a
                  href="/learn/hiv#pep"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-emerald-300 underline decoration-emerald-400 underline-offset-4 hover:text-emerald-200"
                >
                  Learn more about PEP timing →
                </a>
              </div>

              {/* Venue Hosting Card */}
              <div className="rounded-[2.2rem] border border-emerald-950/10 bg-[#e9f6ed] p-8">
                <div className="flex items-center gap-3">
                  <span className="grid size-11 place-items-center rounded-full bg-white text-emerald-800 shadow-sm">
                    <Building2 className="size-5" />
                  </span>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[.14em] text-emerald-800">Venue Partnerships</p>
                    <h3 className="text-xl font-semibold text-forest-950">Host an ANAWASS Machine</h3>
                  </div>
                </div>
                <p className="mt-3 text-sm leading-6 text-forest-800/70">
                  Are you a hotel, entertainment venue, or commercial property manager in Addis Ababa? Partner with us to provide discreet health access to your guests and community.
                </p>
              </div>

              {/* Clinical & Health Inquiries Card */}
              <div className="rounded-[2.2rem] border border-emerald-950/10 bg-white p-8">
                <div className="flex items-center gap-3">
                  <span className="grid size-11 place-items-center rounded-full bg-mint-100 text-emerald-800">
                    <Stethoscope className="size-5" />
                  </span>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[.14em] text-emerald-800">Clinical Leadership</p>
                    <h3 className="text-xl font-semibold text-forest-950">Ananika Health Solutions</h3>
                  </div>
                </div>
                <p className="mt-3 text-sm leading-6 text-forest-800/70">
                  Our health education and clinical oversight is backed by Dr. Amanuel Lemma Jembere and the medical team at Ananika Medical Center.
                </p>
              </div>

              {/* Direct Info */}
              <div className="rounded-[2.2rem] bg-white p-8">
                <h4 className="text-sm font-bold uppercase tracking-[.14em] text-forest-800/50">Direct Contact &amp; Location</h4>
                <div className="mt-5 space-y-4 text-sm text-forest-900">
                  <div className="flex items-center gap-3">
                    <MapPin className="size-4 text-emerald-700 shrink-0" />
                    <span>Addis Ababa, Ethiopia</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="size-4 text-emerald-700 shrink-0" />
                    <span>contact@anawass.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <ShieldCheck className="size-4 text-emerald-700 shrink-0" />
                    <span>Strict privacy &amp; data protection standards</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <EducationCarousel topic="partners" />
      </main>
      <SiteFooter />
    </div>
  );
}
