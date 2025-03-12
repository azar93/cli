'use client';

import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const serviceCategories = {
  marketing: {
    label: 'Digital Marketing Xidmətləri',
    services: [
      'SEO Optimallaşdırma',
      'Sosial Media Marketing',
      'Google Ads & SEM',
      'Email Marketing'
    ]
  },
  development: {
    label: 'Development Xidmətləri',
    services: [
      'Web Development',
      'E-commerce Development',
      'Mobile App Development'
    ]
  },
  courses: {
    label: 'Təlim və Kurslar',
    services: [
      'SEO kursları',
      'SEM kursları',
      'Rəqəmsal marketinq kursları'
    ]
  }
};

export default function ContactPage() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSubmitting(true);
    try {
      await emailjs.sendForm(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        formRef.current,
        'YOUR_PUBLIC_KEY'
      );
      setIsSuccess(true);
      formRef.current.reset();
    } catch (error) {
      console.error('Error:', error);
    }
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Left Side - Info */}
            <div className="bg-gradient-to-br from-purple-600 to-blue-600 p-12 text-white">
              <div className="max-w-md">
                <h2 className="text-3xl font-bold mb-8">Bizimlə Əlaqə</h2>
                
                <div className="space-y-8">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                        📧
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-1">Email</h3>
                      <p className="text-white/80">info@clickoptimize.az</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                        📱
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-1">Telefon</h3>
                      <p className="text-white/80">+994 50 123 45 67</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                        📍
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-1">Ünvan</h3>
                      <p className="text-white/80">Bakı, Azərbaycan</p>
                    </div>
                  </div>
                </div>

                <div className="mt-12 pt-12 border-t border-white/20">
                  <p className="text-white/80">
                    Professional komandamızla əlaqə saxlayın və biznesiniz üçün ən uyğun rəqəmsal marketinq strategiyasını hazırlayaq.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side - Form */}
            <div className="p-12">
              <form ref={formRef} onSubmit={handleSubmit} className="max-w-md">
                <div className="space-y-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all"
                      placeholder="Email ünvanınızı daxil edin"
                    />
                  </div>

                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                      Ad Soyad
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all"
                      placeholder="Ad və soyadınızı daxil edin"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                      Hansı xidmət ilə bağlı müraciət edirsiz?
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all"
                    >
                      <option value="">Xidmət seçin</option>
                      {Object.entries(serviceCategories).map(([key, category]) => (
                        <optgroup key={key} label={category.label}>
                          {category.services.map((service) => (
                            <option key={service} value={service}>
                              {service}
                            </option>
                          ))}
                        </optgroup>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Mesajınız
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all"
                      placeholder="Mesajınızı daxil edin"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:opacity-90 transition-all duration-200 disabled:opacity-50"
                  >
                    {isSubmitting ? 'Göndərilir...' : 'Müraciəti Göndər'}
                  </button>

                  {isSuccess && (
                    <p className="text-green-600 text-center mt-4">
                      Müraciətiniz uğurla göndərildi! Tezliklə sizinlə əlaqə saxlayacağıq.
                    </p>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 