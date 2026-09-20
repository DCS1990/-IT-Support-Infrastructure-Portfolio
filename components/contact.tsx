'use client';

import React, { useState } from 'react';
import {
  Mail,
  Linkedin,
  Github,
  MapPin,
  Phone,
  Send,
  CheckCircle2,
  AlertCircle,
  MessageSquare,
  Clock,
  Loader2
} from 'lucide-react';
import { personalInfo } from '@/src/data/profile';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Failed to send message.');
      }

      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err: any) {
      setSubmitError(
        err.message || 'Something went wrong. Please email chaminda.d.sampath@gmail.com directly.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-16 md:py-24 bg-white/70 dark:bg-[#020612]/70 border-b border-blue-100/80 dark:border-[#0f234e] backdrop-blur-xs"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-12">
          <div className="text-xs sm:text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-2 font-mono">
            08. Get In Touch
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight font-display">
            Contact Chaminda Sampath
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Available for enterprise IT infrastructure, site support administration, and IT asset management
            roles. Reach out directly via email, WhatsApp, or the inquiry form below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          
          {/* Left Column: Direct Contact Details & Availability (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-[#060e22] border border-blue-100/90 dark:border-[#0f234e] space-y-5">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white font-display">
                Direct Channels
              </h3>

              <div className="space-y-4 text-sm">
                
                {/* Email */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-blue-100 dark:bg-[#020612] text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-[#0f234e] flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">Email Address</div>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="font-semibold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors break-all"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-emerald-100 dark:bg-[#020612] text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-[#0f234e] flex items-center justify-center shrink-0">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">WhatsApp Direct</div>
                    <a
                      href="https://wa.me/94776496163"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-slate-900 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                    >
                      {personalInfo.whatsapp}
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-blue-100 dark:bg-[#020612] text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-[#0f234e] flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">Phone Support</div>
                    <a
                      href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                      className="font-semibold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-slate-200 dark:bg-[#020612] text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-[#0f234e] flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">Location</div>
                    <span className="font-semibold text-slate-900 dark:text-white">
                      {personalInfo.location}
                    </span>
                  </div>
                </div>

                {/* Social Profiles */}
                <div className="pt-4 border-t border-blue-100 dark:border-[#0f234e] flex items-center gap-3">
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2 px-3 rounded-lg text-xs font-semibold bg-white dark:bg-[#020612] border border-blue-200 dark:border-[#0f234e] text-slate-800 dark:text-slate-200 hover:border-blue-500 flex items-center justify-center gap-2 transition-colors"
                  >
                    <Linkedin className="w-3.5 h-3.5 text-blue-600" />
                    <span>LinkedIn Profile</span>
                  </a>

                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2 px-3 rounded-lg text-xs font-semibold bg-white dark:bg-[#020612] border border-blue-200 dark:border-[#0f234e] text-slate-800 dark:text-slate-200 hover:border-blue-500 flex items-center justify-center gap-2 transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>GitHub Activity</span>
                  </a>
                </div>

              </div>
            </div>

            {/* Response Time & References note */}
            <div className="p-4 rounded-xl bg-blue-50/70 dark:bg-[#060e22] border border-blue-100 dark:border-[#0f234e] flex items-start gap-3">
              <Clock className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-0.5 shrink-0" />
              <div className="text-xs text-slate-600 dark:text-slate-300">
                <strong className="text-slate-900 dark:text-white">Professional References:</strong> Verified management references from MAS Technology Services and Brandix Apparel Solutions are available upon interview request.
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#060e22] border border-blue-100/90 dark:border-[#0f234e] shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white font-display mb-1">
                Send an Inquiry
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-6">
                Have an infrastructure question, ITAM project, or employment opportunity? Leave a message.
              </p>

              {submitted ? (
                <div className="p-6 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800 text-center space-y-3 animate-fade-in">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-900/80 text-emerald-600 dark:text-emerald-300 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-bold text-emerald-900 dark:text-emerald-200">
                    Message Received!
                  </h4>
                  <p className="text-xs sm:text-sm text-emerald-800 dark:text-emerald-300 max-w-md mx-auto">
                    Thank you for reaching out. Chaminda will review your inquiry and respond shortly at the email you provided.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-2 text-xs font-semibold text-emerald-700 dark:text-emerald-400 underline hover:no-underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        Your Name *
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. John Perera"
                        className="w-full px-3.5 py-2.5 rounded-lg text-sm bg-blue-50/50 dark:bg-[#020612] border border-blue-200 dark:border-[#0f234e] text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        Email Address *
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. john@company.com"
                        className="w-full px-3.5 py-2.5 rounded-lg text-sm bg-blue-50/50 dark:bg-[#020612] border border-blue-200 dark:border-[#0f234e] text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-subject" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Subject
                    </label>
                    <select
                      id="contact-subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-lg text-sm bg-blue-50/50 dark:bg-[#020612] border border-blue-200 dark:border-[#0f234e] text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Select a subject...</option>
                      <option value="Job Opportunity – IT Support / ITAM Specialist">Job Opportunity – IT Support / ITAM Specialist</option>
                      <option value="IT Infrastructure Inquiry">IT Infrastructure Inquiry</option>
                      <option value="IT Asset Management Project">IT Asset Management Project</option>
                      <option value="Collaboration / Partnership">Collaboration / Partnership</option>
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Message *
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Describe the opportunity, infrastructure inquiry, or collaboration..."
                      className="w-full px-3.5 py-2.5 rounded-lg text-sm bg-blue-50/50 dark:bg-[#020612] border border-blue-200 dark:border-[#0f234e] text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-y"
                    />
                  </div>

                  {/* Error feedback */}
                  {submitError && (
                    <div className="flex items-start gap-2.5 p-3.5 rounded-lg bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800 text-sm text-red-700 dark:text-red-300">
                      <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                      <span>{submitError}</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 px-6 rounded-lg text-sm font-semibold bg-blue-600 hover:bg-blue-700 text-white shadow-xs transition-all flex items-center justify-center gap-2 disabled:opacity-70 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
