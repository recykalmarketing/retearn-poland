'use client';

import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function LeadForm() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    fullName: '',
    workEmail: '',
    phone: '',
    organisation: '',
    role: '',
    audienceType: '',
    locations: '',
    timeline: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // TODO: Integrate with email service/CRM
    console.log('Form submitted:', formData);
    // Example integration point for:
    // - SendGrid
    // - Mailchimp
    // - HubSpot
    // - Calendly API
    // - Zapier webhook

    setSubmitted(true);
    setShowCalendar(true);

    // Reset form after submission
    setTimeout(() => {
      setFormData({
        fullName: '',
        workEmail: '',
        phone: '',
        organisation: '',
        role: '',
        audienceType: '',
        locations: '',
        timeline: '',
        message: '',
      });
    }, 2000);
  };

  return (
    <section id="book-meeting" className="w-full py-20 bg-primary text-white">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
          {t('form.heading')}
        </h2>

        <p className="text-lg text-gray-300 text-center mb-12">
          {t('form.supporting')}
        </p>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Full Name */}
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium mb-2">
                {t('form.fields.fullName')} *
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                required
                value={formData.fullName}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-primary"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="workEmail" className="block text-sm font-medium mb-2">
                {t('form.fields.workEmail')} *
              </label>
              <input
                type="email"
                id="workEmail"
                name="workEmail"
                required
                value={formData.workEmail}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-primary"
              />
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block text-sm font-medium mb-2">
                {t('form.fields.phone')} *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-primary"
              />
            </div>

            {/* Organisation */}
            <div>
              <label htmlFor="organisation" className="block text-sm font-medium mb-2">
                {t('form.fields.organisation')} *
              </label>
              <input
                type="text"
                id="organisation"
                name="organisation"
                required
                value={formData.organisation}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-primary"
              />
            </div>

            {/* Role */}
            <div>
              <label htmlFor="role" className="block text-sm font-medium mb-2">
                {t('form.fields.role')} *
              </label>
              <input
                type="text"
                id="role"
                name="role"
                required
                value={formData.role}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-primary"
              />
            </div>

            {/* Audience Type */}
            <div>
              <label htmlFor="audienceType" className="block text-sm font-medium mb-2">
                {t('form.fields.audienceType')} *
              </label>
              <select
                id="audienceType"
                name="audienceType"
                required
                value={formData.audienceType}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-primary"
              >
                <option value="">{t('form.fields.audienceType')}</option>
                {[
                  t('form.audienceOptions.0'),
                  t('form.audienceOptions.1'),
                  t('form.audienceOptions.2'),
                  t('form.audienceOptions.3'),
                  t('form.audienceOptions.4'),
                  t('form.audienceOptions.5'),
                  t('form.audienceOptions.6'),
                ].map((option, i) => (
                  <option key={i} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>

            {/* Locations */}
            <div>
              <label htmlFor="locations" className="block text-sm font-medium mb-2">
                {t('form.fields.locations')}
              </label>
              <input
                type="text"
                id="locations"
                name="locations"
                value={formData.locations}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-primary"
              />
            </div>

            {/* Timeline */}
            <div>
              <label htmlFor="timeline" className="block text-sm font-medium mb-2">
                {t('form.fields.timeline')}
              </label>
              <input
                type="text"
                id="timeline"
                name="timeline"
                value={formData.timeline}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-primary"
              />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                {t('form.fields.message')}
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-primary"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-white text-primary font-semibold py-4 rounded-lg hover:bg-gray-100 transition-all duration-200"
            >
              {t('form.submit')}
            </button>
          </form>
        ) : (
          <div className="bg-white/10 border border-white/20 p-8 rounded-lg text-center">
            <svg className="w-16 h-16 mx-auto mb-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="text-2xl font-bold mb-4">Thank you!</h3>
            <p className="mb-6 text-gray-300">
              {t('form.reassurance')}
            </p>

            {/* Calendly embed placeholder */}
            {showCalendar && (
              <div className="mt-8 bg-white text-primary p-8 rounded-lg">
                <p className="text-center mb-4 font-semibold">📅 {t('form.reassurance')}</p>
                <div className="bg-gray-100 p-8 rounded-lg text-gray-600 text-center">
                  <p>TODO: Embed Calendly or Scheduling Widget here</p>
                  <p className="text-sm mt-2">
                    Integration points: Calendly iFrame, Cal.com, Acuity Scheduling, Google Calendar
                  </p>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
