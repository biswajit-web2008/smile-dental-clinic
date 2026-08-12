import React, { useState } from 'react';
import {
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  Star,
  ShieldCheck,
  CheckCircle2,
  Menu,
  X,
  Smile,
  Sparkles,
  Heart,
  Calendar,
  Send,
  UserCheck,
  Wallet,
  HeartHandshake,
  Users,
  Award,
  ChevronDown
} from 'lucide-react';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'General Dentistry',
    message: ''
  });

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const faqs = [
    {
      question: 'Is root canal treatment painful?',
      answer: 'No. Modern root canal treatments are performed under effective local anesthesia, making the procedure virtually painless and comparable to getting a routine filling. Our team focuses on gentle techniques to keep you comfortable throughout.'
    },
    {
      question: 'How often should I visit the dentist for a routine checkup?',
      answer: 'It is recommended to schedule a routine dental checkup and professional cleaning every 6 months. Regular visits help detect potential issues early, keep your teeth clean, and ensure long-term oral health.'
    },
    {
      question: 'Is professional teeth whitening safe for my enamel?',
      answer: 'Yes. Professional teeth whitening performed at a dental clinic uses clinically tested, safe whitening agents that effectively remove stains without harming or weakening your tooth enamel.'
    },
    {
      question: 'How do I book an appointment at Smile Dental Clinic?',
      answer: 'Booking an appointment is simple! You can call us directly at 7847040917, send us a message on WhatsApp, or submit your details via the contact form on this page. We are open from 9:00 AM to 7:00 PM.'
    }
  ];

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setFormSubmitted(true);
  };

  const whyChooseUs = [
    {
      icon: UserCheck,
      title: 'Experienced Dentists',
      desc: 'Qualified and gentle dental professionals dedicated to personalized care and precise diagnoses.'
    },
    {
      icon: Sparkles,
      title: 'Modern Equipment',
      desc: 'Equipped with contemporary dental tools and sterilization technology for safe, high-standard procedures.'
    },
    {
      icon: Wallet,
      title: 'Affordable Pricing',
      desc: 'Transparent pricing and fair treatment plans ensuring quality dental care stays accessible to everyone.'
    },
    {
      icon: HeartHandshake,
      title: 'Painless Treatment',
      desc: 'Focus on patient comfort with gentle techniques aimed at minimizing anxiety and discomfort.'
    },
    {
      icon: Clock,
      title: 'Flexible Timing',
      desc: 'Convenient opening hours from 9:00 AM to 7:00 PM, making appointment scheduling easy for your routine.'
    },
    {
      icon: Users,
      title: 'Dedicated Patient Care',
      desc: 'Warm, welcoming environment with friendly staff focused on long-term patient satisfaction and follow-up.'
    }
  ];

  const services = [
    {
      title: 'General Dentistry',
      desc: 'Routine dental checkups, professional cleanings, and complete oral hygiene care.'
    },
    {
      title: 'Teeth Whitening',
      desc: 'Safe and effective whitening treatments to restore your natural bright smile.'
    },
    {
      title: 'Root Canal Treatment',
      desc: 'Gentle, modern root canal therapy aimed at relieving pain and preserving natural teeth.'
    },
    {
      title: 'Cosmetic Dentistry',
      desc: 'Aesthetic dental solutions tailored to enhance and perfect your smile alignment.'
    },
    {
      title: 'Orthodontic Care',
      desc: 'Braces and aligner consultations for proper teeth alignment and bite correction.'
    },
    {
      title: 'Preventive Care',
      desc: 'Comprehensive oral health assessments, fluoride application, and cavity prevention.'
    }
  ];

  const testimonials = [
    {
      name: 'Local Patient',
      rating: 5,
      comment: 'Very clean clinic and gentle treatment. The doctor explained everything clearly and made me feel completely comfortable.'
    },
    {
      name: 'Bhubaneswar Visitor',
      rating: 5,
      comment: 'Highly professional care with punctual appointment timings. Excellent experience at Smile Dental Clinic!'
    },
    {
      name: 'Verified Customer',
      rating: 5,
      comment: 'Gentle procedures, friendly environment, and convenient opening hours (9AM - 7PM). Highly recommended!'
    }
  ];

  return (
    <div className="min-h-screen bg-white text-black font-['Poppins',sans-serif] antialiased flex flex-col">
      {/* HEADER / NAVIGATION */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-neutral-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 text-neutral-900 group">
            <div className="w-10 h-10 rounded-full bg-teal-600 text-white flex items-center justify-center font-bold text-xl shadow-sm transition-transform group-hover:scale-105">
              <Smile className="w-6 h-6" />
            </div>
            <div>
              <span className="font-bold text-lg sm:text-xl tracking-tight block leading-none">
                Smile Dental Clinic
              </span>
              <span className="text-xs text-neutral-500 font-medium">Dental Clinic • Bhubaneswar</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-700">
            <a href="#about" className="hover:text-teal-600 transition-colors">About</a>
            <a href="#services" className="hover:text-teal-600 transition-colors">Services</a>
            <a href="#why-us" className="hover:text-teal-600 transition-colors">Why Choose Us</a>
            <a href="#faq" className="hover:text-teal-600 transition-colors">FAQ</a>
            <a href="#reviews" className="hover:text-teal-600 transition-colors">Reviews</a>
            <a href="#contact" className="hover:text-teal-600 transition-colors">Contact & Hours</a>
          </nav>

          {/* Call CTA & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href="tel:7847040917"
              className="hidden sm:inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white text-sm font-medium px-4 py-2.5 rounded-full shadow-sm transition-all hover:shadow"
            >
              <Phone className="w-4 h-4" />
              <span>Call Now</span>
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-neutral-700 hover:bg-neutral-100"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-neutral-200 px-4 pt-2 pb-6 space-y-3">
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-neutral-700 hover:text-teal-600 font-medium"
            >
              About
            </a>
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-neutral-700 hover:text-teal-600 font-medium"
            >
              Services
            </a>
            <a
              href="#why-us"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-neutral-700 hover:text-teal-600 font-medium"
            >
              Why Choose Us
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-neutral-700 hover:text-teal-600 font-medium"
            >
              FAQ
            </a>
            <a
              href="#reviews"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-neutral-700 hover:text-teal-600 font-medium"
            >
              Reviews
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-neutral-700 hover:text-teal-600 font-medium"
            >
              Contact & Hours
            </a>
            <div className="pt-2 flex flex-col gap-2">
              <a
                href="tel:7847040917"
                className="w-full text-center bg-teal-600 text-white font-medium py-2.5 rounded-full flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>Call 7847040917</span>
              </a>
              <a
                href="https://wa.me/917847040917"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center bg-emerald-600 text-white font-medium py-2.5 rounded-full flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>
        )}
      </header>

      <main className="flex-grow">
        {/* HERO SECTION */}
        <section className="relative py-16 sm:py-24 bg-gradient-to-b from-teal-50/50 via-white to-white border-b border-neutral-100">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              {/* Category & Badge */}
              <div className="inline-flex items-center gap-2 bg-teal-100 text-teal-800 text-xs sm:text-sm font-semibold px-3.5 py-1.5 rounded-full">
                <Sparkles className="w-4 h-4 text-teal-600" />
                <span>Dental Clinic • Bhubaneswar, Odisha</span>
              </div>

              {/* Business Name & Tagline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-900 leading-tight">
                Smile Dental Clinic
              </h1>
              
              <p className="text-lg sm:text-xl text-neutral-600 font-normal leading-relaxed max-w-2xl mx-auto">
                Gentle, comprehensive oral healthcare for your complete family. Delivering confident, healthy smiles in Bhubaneswar.
              </p>

              {/* Hero Action Buttons */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="tel:7847040917"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-teal-600 hover:bg-teal-700 text-white font-semibold text-base px-8 py-3.5 rounded-full shadow-md transition-all hover:shadow-lg active:scale-95"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call Now</span>
                </a>

                <a
                  href="https://wa.me/917847040917"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-base px-8 py-3.5 rounded-full shadow-md transition-all hover:shadow-lg active:scale-95"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>WhatsApp Us</span>
                </a>
              </div>

              {/* Key Quick Info Bar */}
              <div className="pt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto text-left">
                <div className="bg-white p-4 rounded-2xl border border-neutral-200 shadow-xs flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-500 flex items-center justify-center shrink-0">
                    <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
                  </div>
                  <div>
                    <div className="font-bold text-neutral-900 text-base">4.8 Rating</div>
                    <div className="text-xs text-neutral-500">116 Google Reviews</div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-neutral-200 shadow-xs flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-neutral-900 text-base">9AM - 7PM</div>
                    <div className="text-xs text-neutral-500">Opening Hours</div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-neutral-200 shadow-xs flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-neutral-100 text-neutral-700 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-neutral-900 text-base">Bhubaneswar</div>
                    <div className="text-xs text-neutral-500">Odisha</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="py-16 sm:py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900">About the Business</h2>
              <div className="w-12 h-1 bg-teal-600 mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto">
              <div className="lg:col-span-7 space-y-5 text-neutral-700 leading-relaxed text-base">
                <p className="text-lg font-medium text-neutral-900">
                  Welcome to <span className="text-teal-600 font-semibold">Smile Dental Clinic</span>, your dedicated dental clinic located in Bhubaneswar, Odisha.
                </p>
                <p>
                  We are committed to providing gentle, high-quality oral care in a comfortable and hygienic environment. Our practice covers a broad range of dental solutions designed to preserve your natural smile and support long-term dental health.
                </p>
                <p>
                  Whether you need routine cleanings, preventive dental consultations, or specialized dental treatments, our goal is to deliver personalized care for patients of all ages.
                </p>

                <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm font-medium text-neutral-800">
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0" />
                    <span>Gentle & Patient-Focused Care</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0" />
                    <span>Clean & Hygienic Environment</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0" />
                    <span>Comprehensive Dental Services</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0" />
                    <span>Convenient Hours (9AM - 7PM)</span>
                  </div>
                </div>
              </div>

              {/* Highlight Card */}
              <div className="lg:col-span-5 bg-neutral-50 p-6 sm:p-8 rounded-3xl border border-neutral-200 text-center space-y-4">
                <div className="w-14 h-14 bg-teal-600 text-white rounded-2xl flex items-center justify-center mx-auto shadow-sm">
                  <ShieldCheck className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-neutral-900">Dedicated Dental Care</h3>
                <p className="text-sm text-neutral-600">
                  Serving Bhubaneswar with trusted dental solutions. Visit us for gentle consultations and treatment plans.
                </p>
                <div className="pt-2">
                  <a
                    href="tel:7847040917"
                    className="inline-flex items-center gap-2 bg-neutral-900 hover:bg-neutral-800 text-white text-sm font-medium px-6 py-2.5 rounded-full transition-colors"
                  >
                    <Phone className="w-4 h-4 text-teal-400" />
                    <span>Contact Clinic</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES SECTION */}
        <section id="services" className="py-16 sm:py-20 bg-neutral-50 border-y border-neutral-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900">Our Services</h2>
              <p className="text-neutral-600 text-base">
                Comprehensive dental treatments and preventive solutions provided at Smile Dental Clinic.
              </p>
              <div className="w-12 h-1 bg-teal-600 mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-2xl border border-neutral-200 shadow-xs hover:border-teal-300 transition-all hover:shadow-sm flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="w-12 h-12 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center font-bold text-lg">
                      {index + 1}
                    </div>
                    <h3 className="text-lg font-bold text-neutral-900">{service.title}</h3>
                    <p className="text-sm text-neutral-600 leading-relaxed">{service.desc}</p>
                  </div>
                  <div className="pt-4 border-t border-neutral-100 mt-4">
                    <a
                      href="#contact"
                      className="text-xs font-semibold text-teal-600 hover:text-teal-700 flex items-center gap-1"
                    >
                      <span>Inquire About Service</span>
                      <span>→</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHY CHOOSE US SECTION */}
        <section id="why-us" className="py-16 sm:py-20 bg-gradient-to-b from-teal-50/30 via-white to-white border-b border-neutral-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900">Why Choose Us</h2>
              <p className="text-neutral-600 text-base">
                Discover why patients trust Smile Dental Clinic for their oral healthcare in Bhubaneswar.
              </p>
              <div className="w-12 h-1 bg-teal-600 mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {whyChooseUs.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-2xl border border-neutral-200 shadow-xs hover:border-teal-300 transition-all hover:shadow-sm space-y-4"
                  >
                    <div className="w-12 h-12 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center shrink-0">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-bold text-neutral-900">{item.title}</h3>
                      <p className="text-sm text-neutral-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section id="faq" className="py-16 sm:py-20 bg-neutral-50/60 border-b border-neutral-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900">Frequently Asked Questions</h2>
              <p className="text-neutral-600 text-base">
                Common questions about dental procedures and patient care at Smile Dental Clinic.
              </p>
              <div className="w-12 h-1 bg-teal-600 mx-auto rounded-full"></div>
            </div>

            {/* Accordion List */}
            <div className="space-y-4">
              {faqs.map((faq, index) => {
                const isOpen = openFaqIndex === index;
                return (
                  <div
                    key={index}
                    className="border border-neutral-200 rounded-2xl overflow-hidden bg-white shadow-xs transition-colors"
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(index)}
                      className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 font-semibold text-neutral-900 text-base hover:bg-neutral-50/80 transition-colors cursor-pointer"
                      aria-expanded={isOpen}
                    >
                      <span>{faq.question}</span>
                      <ChevronDown
                        className={`w-5 h-5 text-teal-600 shrink-0 transition-transform duration-200 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-6 pb-5 text-sm text-neutral-600 leading-relaxed border-t border-neutral-100 pt-3">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* TRUSTED BY CUSTOMERS SECTION */}
        <section id="reviews" className="py-16 sm:py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900">Trusted by Customers</h2>
              <div className="w-12 h-1 bg-teal-600 mx-auto rounded-full"></div>
            </div>

            {/* Google Rating Banner */}
            <div className="max-w-3xl mx-auto mb-10 bg-neutral-900 text-white p-6 sm:p-8 rounded-3xl text-center space-y-3 shadow-md">
              <div className="flex items-center justify-center gap-1.5 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-amber-400" />
                ))}
              </div>
              <div className="text-4xl sm:text-5xl font-extrabold tracking-tight">4.8 / 5.0</div>
              <p className="text-neutral-300 font-medium text-base">
                Based on <span className="font-bold text-white">116 Google Reviews</span>
              </p>
              <p className="text-xs text-neutral-400">Smile Dental Clinic • Bhubaneswar, Odisha</p>
            </div>

            {/* Testimonials Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((review, idx) => (
                <div
                  key={idx}
                  className="bg-neutral-50 p-6 rounded-2xl border border-neutral-200 flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-3">
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400" />
                      ))}
                    </div>
                    <p className="text-sm text-neutral-700 italic leading-relaxed">
                      "{review.comment}"
                    </p>
                  </div>
                  <div className="pt-3 border-t border-neutral-200 flex items-center justify-between text-xs text-neutral-500 font-medium">
                    <span>{review.name}</span>
                    <span className="text-teal-600">Verified Patient</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="py-16 sm:py-20 bg-neutral-50 border-t border-neutral-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900">Contact & Visit Us</h2>
              <p className="text-neutral-600 text-base">Get in touch or request a appointment consultation.</p>
              <div className="w-12 h-1 bg-teal-600 mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl mx-auto">
              {/* Left Column: Business Contact Details */}
              <div className="lg:col-span-5 space-y-4">
                <div className="bg-white p-6 rounded-2xl border border-neutral-200 shadow-xs space-y-6">
                  <h3 className="text-xl font-bold text-neutral-900 border-b border-neutral-100 pb-3">
                    Clinic Details
                  </h3>

                  <div className="space-y-5">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center shrink-0">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs text-neutral-500 font-semibold uppercase tracking-wider">Address</div>
                        <div className="text-neutral-900 font-semibold text-base">Bhubaneswar, Odisha</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center shrink-0">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs text-neutral-500 font-semibold uppercase tracking-wider">Phone Number</div>
                        <a
                          href="tel:7847040917"
                          className="text-neutral-900 hover:text-teal-600 font-semibold text-base transition-colors"
                        >
                          7847040917
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center shrink-0">
                        <Clock className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs text-neutral-500 font-semibold uppercase tracking-wider">Opening Hours</div>
                        <div className="text-neutral-900 font-semibold text-base">9:00 AM – 7:00 PM</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center shrink-0">
                        <Smile className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs text-neutral-500 font-semibold uppercase tracking-wider">Category</div>
                        <div className="text-neutral-900 font-semibold text-base">Dental Clinic</div>
                      </div>
                    </div>
                  </div>

                  {/* Quick Action Buttons */}
                  <div className="pt-2 flex flex-col gap-2.5">
                    <a
                      href="tel:7847040917"
                      className="w-full bg-teal-600 hover:bg-teal-700 text-white font-medium py-3 rounded-full text-center flex items-center justify-center gap-2 transition-colors text-sm"
                    >
                      <Phone className="w-4 h-4" />
                      <span>Call Clinic: 7847040917</span>
                    </a>
                    <a
                      href="https://wa.me/917847040917"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-3 rounded-full text-center flex items-center justify-center gap-2 transition-colors text-sm"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Chat on WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Column: Contact Form */}
              <div className="lg:col-span-7">
                <div className="bg-white p-6 sm:p-8 rounded-2xl border border-neutral-200 shadow-xs space-y-6">
                  <h3 className="text-xl font-bold text-neutral-900">Send a Message / Request Appointment</h3>

                  {formSubmitted ? (
                    <div className="bg-teal-50 border border-teal-200 text-teal-900 p-6 rounded-2xl text-center space-y-3">
                      <div className="w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center mx-auto">
                        <CheckCircle2 className="w-6 h-6" />
                      </div>
                      <h4 className="text-lg font-bold">Thank You!</h4>
                      <p className="text-sm text-neutral-700">
                        Your request has been recorded. For immediate assistance, please feel free to call us directly at <strong>7847040917</strong>.
                      </p>
                      <button
                        type="button"
                        onClick={() => {
                          setFormSubmitted(false);
                          setFormData({ name: '', phone: '', service: 'General Dentistry', message: '' });
                        }}
                        className="text-xs font-semibold text-teal-700 underline mt-2"
                      >
                        Send another request
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleFormSubmit} className="space-y-4">
                      <div>
                        <label className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-1.5">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Your Name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl border border-neutral-300 focus:border-teal-600 focus:ring-2 focus:ring-teal-100 outline-none text-sm text-neutral-900"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-1.5">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="7847040917"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl border border-neutral-300 focus:border-teal-600 focus:ring-2 focus:ring-teal-100 outline-none text-sm text-neutral-900"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-1.5">
                          Service Requested
                        </label>
                        <select
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl border border-neutral-300 focus:border-teal-600 focus:ring-2 focus:ring-teal-100 outline-none text-sm text-neutral-900 bg-white"
                        >
                          <option value="General Dentistry">General Dentistry</option>
                          <option value="Teeth Whitening">Teeth Whitening</option>
                          <option value="Root Canal Treatment">Root Canal Treatment</option>
                          <option value="Cosmetic Dentistry">Cosmetic Dentistry</option>
                          <option value="Orthodontic Care">Orthodontic Care</option>
                          <option value="Preventive Care">Preventive Care</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-1.5">
                          Message / Preferred Time
                        </label>
                        <textarea
                          rows={3}
                          placeholder="Any specific detail or preferred appointment time..."
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl border border-neutral-300 focus:border-teal-600 focus:ring-2 focus:ring-teal-100 outline-none text-sm text-neutral-900"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 rounded-full flex items-center justify-center gap-2 transition-colors shadow-sm text-sm"
                      >
                        <Send className="w-4 h-4" />
                        <span>Submit Inquiry</span>
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-neutral-900 text-neutral-300 py-10 border-t border-neutral-800 text-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="space-y-1">
            <div className="font-bold text-white text-base flex items-center justify-center md:justify-start gap-2">
              <Smile className="w-5 h-5 text-teal-400" />
              <span>Smile Dental Clinic</span>
            </div>
            <p className="text-xs text-neutral-400">Dental Clinic in Bhubaneswar, Odisha • Phone: 7847040917</p>
          </div>

          <div className="flex items-center gap-6 text-xs text-neutral-400 font-medium">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#reviews" className="hover:text-white transition-colors">Reviews</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>

          <div className="text-xs text-neutral-500">
            © {new Date().getFullYear()} Smile Dental Clinic. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
