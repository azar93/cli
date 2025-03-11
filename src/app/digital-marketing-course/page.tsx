import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';
import Image from 'next/image';

export default function DigitalMarketingCoursePage() {
  return (
    <main className="bg-gradient-to-b from-gray-900 to-black text-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-40 pb-20 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text">
              Professional Rəqəmsal Marketinq Kursu
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Rəqəmsal dünyada uğur qazanmaq üçün bütün texniki bilikləri öyrənin
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 gradient-bg rounded-full text-lg font-semibold hover:shadow-lg hover:shadow-[#7C3AED]/30 transition-all duration-300"
            >
              Kursa Qoşul
            </Link>
          </div>
        </div>
      </section>

      {/* Digital Marketing Types Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-bold text-center mb-16 gradient-text">
            Rəqəmsal Marketinqin Növləri
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Sosial Media Marketinqi',
                description: 'Facebook, Instagram, LinkedIn və digər platformalarda brendinizi gücləndirin',
                features: [
                  'Sosial media strategiyası',
                  'Kontent planlaması',
                  'Auditoriya analizi',
                  'Reklam kampaniyaları',
                  'Engagement artırma'
                ],
                icon: (
                  <svg className="w-12 h-12 text-[#7C3AED]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                  </svg>
                ),
              },
              {
                title: 'SEO və Kontent Marketinqi',
                description: 'Axtarış sistemlərində yüksək sıralamalar və keyfiyyətli trafik',
                features: [
                  'Texniki SEO',
                  'Kontent strategiyası',
                  'Açar söz araşdırması',
                  'Link building',
                  'Analitika'
                ],
                icon: (
                  <svg className="w-12 h-12 text-[#0EA5E9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                ),
              },
              {
                title: 'Email Marketinqi',
                description: 'Effektiv email kampaniyaları ilə müştərilərinizə çatın',
                features: [
                  'Email list yaratma',
                  'Kampaniya dizaynı',
                  'A/B testləri',
                  'Avtomatizasiya',
                  'Analitika'
                ],
                icon: (
                  <svg className="w-12 h-12 text-[#7C3AED]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                ),
              },
              {
                title: 'PPC və Reklam',
                description: 'Google Ads, Facebook Ads və digər reklam platformaları',
                features: [
                  'Kampaniya planlaması',
                  'Büdcə idarəetməsi',
                  'A/B testləri',
                  'Landing page optimallaşdırma',
                  'ROI analizi'
                ],
                icon: (
                  <svg className="w-12 h-12 text-[#0EA5E9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                  </svg>
                ),
              },
              {
                title: 'Video Marketinqi',
                description: 'YouTube və digər video platformalarda kontent yaratma',
                features: [
                  'Video strategiyası',
                  'Script yazma',
                  'Çəkiliş və montaj',
                  'SEO optimallaşdırma',
                  'Analitika'
                ],
                icon: (
                  <svg className="w-12 h-12 text-[#7C3AED]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                ),
              },
              {
                title: 'Analitika və Data',
                description: 'Data analizi və marketinq strategiyalarının optimallaşdırılması',
                features: [
                  'Google Analytics',
                  'Data vizualizasiya',
                  'A/B testləri',
                  'ROI hesablaması',
                  'Hesabat yaratma'
                ],
                icon: (
                  <svg className="w-12 h-12 text-[#0EA5E9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                ),
              },
            ].map((type, index) => (
              <div
                key={index}
                className="group p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#7C3AED]/50 transition-all duration-300"
              >
                <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {type.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{type.title}</h3>
                <p className="text-gray-400 mb-4">{type.description}</p>
                <ul className="space-y-2">
                  {type.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm text-gray-300">
                      <svg className="w-4 h-4 mr-2 text-[#7C3AED]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Can Do Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-bold text-center mb-16 gradient-text">
            Rəqəmsal Marketinq ilə Nələr Edə Bilərsiniz?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Brend Məşhurluğu',
                description: 'Sosial media və digər rəqəmsal kanallar vasitəsilə brendinizi tanıdın',
                icon: (
                  <svg className="w-8 h-8 text-[#7C3AED]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                ),
              },
              {
                title: 'Satış Artımı',
                description: 'Online satışları artırın və yeni müştərilər cəlb edin',
                icon: (
                  <svg className="w-8 h-8 text-[#0EA5E9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
              },
              {
                title: 'Müştəri Əlaqələri',
                description: 'Müştərilərinizlə effektiv əlaqə saxlayın və onların etibarlılığını artırın',
                icon: (
                  <svg className="w-8 h-8 text-[#7C3AED]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                ),
              },
              {
                title: 'Market Araşdırması',
                description: 'Rəqəmsal alətlər vasitəsilə marketi analiz edin və rəqiblərinizi izləyin',
                icon: (
                  <svg className="w-8 h-8 text-[#0EA5E9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                ),
              },
            ].map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10"
              >
                <div className="flex items-center mb-4">
                  {item.icon}
                  <h3 className="text-xl font-bold ml-3">{item.title}</h3>
                </div>
                <p className="text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Plan Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-bold text-center mb-16 gradient-text">
            Kurs Planı
          </h2>
          
          <div className="max-w-3xl mx-auto space-y-8">
            {[
              {
                week: 'Həftə 1',
                title: 'Rəqəmsal Marketinqin Əsasları',
                topics: [
                  'Rəqəmsal marketinq konsepsiyası',
                  'Marketinq strategiyası',
                  'Auditoriya analizi',
                  'Rəqib analizi',
                  'KPI-lərin müəyyənləşdirilməsi'
                ],
              },
              {
                week: 'Həftə 2',
                title: 'Sosial Media və Kontent Marketinqi',
                topics: [
                  'Sosial media strategiyası',
                  'Kontent planlaması',
                  'Kontent yaratma',
                  'Sosial media reklamları',
                  'Engagement artırma'
                ],
              },
              {
                week: 'Həftə 3',
                title: 'SEO və Email Marketinqi',
                topics: [
                  'SEO texnikaları',
                  'Kontent optimallaşdırma',
                  'Email kampaniyaları',
                  'Landing page dizaynı',
                  'A/B testləri'
                ],
              },
              {
                week: 'Həftə 4',
                title: 'PPC və Analitika',
                topics: [
                  'Google Ads',
                  'Facebook Ads',
                  'Google Analytics',
                  'Data analizi',
                  'Hesabat yaratma'
                ],
              },
            ].map((week, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10"
              >
                <div className="text-[#7C3AED] font-semibold mb-2">{week.week}</div>
                <h3 className="text-xl font-bold mb-3">{week.title}</h3>
                <ul className="list-disc list-inside text-gray-400 space-y-1">
                  {week.topics.map((topic, i) => (
                    <li key={i}>{topic}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-bold text-center mb-16 gradient-text">
            Tərəfdaşlarımız
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {[1, 2, 3, 4].map((partner) => (
              <div
                key={partner}
                className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center"
              >
                <div className="w-32 h-32 bg-gray-800 rounded-lg"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-bold text-center mb-16 gradient-text">
            Tez-tez Verilən Suallar
          </h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: 'Rəqəmsal marketinq kursu nə qədər davam edir?',
                answer: 'Kurs 4 həftə davam edir, hər həftə 2 dərs keçirilir. Hər dərs 2 saat davam edir.',
              },
              {
                question: 'Kursa qoşulmaq üçün təcrübə lazımdır?',
                answer: 'Xeyr, kurs həm yeni başlayanlar, həm də təcrübəli mütəxəssislər üçün nəzərdə tutulub. Hər kəs öz səviyyəsinə uyğun biliklər əldə edə bilər.',
              },
              {
                question: 'Kurs materiallarına nə qədər müddətə giriş var?',
                answer: 'Kurs materiallarına 6 ay müddətində giriş təmin edilir. Bu müddət ərzində bütün video dərslərə və materiallara girişiniz olacaq.',
              },
              {
                question: 'Sertifikat verilir?',
                answer: 'Bəli, kursu uğurla başa vurduqdan sonra sertifikat təqdim edilir. Sertifikat beynəlxalq standartlara uyğundur.',
              },
              {
                question: 'Ödəniş necə həyata keçirilir?',
                answer: 'Ödəniş kartı və ya bank köçürməsi ilə həyata keçirilə bilər. Həmçinin taksit imkanı da mövcuddur.',
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10"
              >
                <h3 className="text-xl font-bold mb-3">{faq.question}</h3>
                <p className="text-gray-400">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-bold text-center mb-16 gradient-text">
            Rəqəmsal Marketinq Blog
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Rəqəmsal Marketinq Trendləri 2024',
                excerpt: '2024-cü ildə rəqəmsal marketinq sahəsində əsas trendlər və yeniliklər',
                link: '/blog/digital-marketing-trends-2024',
              },
              {
                title: 'Sosial Media Strategiyası',
                excerpt: 'Effektiv sosial media marketinqi üçün əsas strategiyalar',
                link: '/blog/social-media-strategy',
              },
              {
                title: 'Kontent Marketinqi',
                excerpt: 'Uğurlu kontent marketinqi üçün əsas prinsiplər',
                link: '/blog/content-marketing',
              },
            ].map((post, index) => (
              <Link
                key={index}
                href={post.link}
                className="group p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#7C3AED]/50 transition-all duration-300"
              >
                <h3 className="text-xl font-bold mb-3 group-hover:text-[#7C3AED] transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-400">{post.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Rəqəmsal Marketinq Kursuna Qoşulun
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Professional rəqəmsal marketinq mütəxəssisi olmaq üçün ilk addımı atın
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-4 gradient-bg rounded-full text-lg font-semibold hover:shadow-lg hover:shadow-[#7C3AED]/30 transition-all duration-300"
              >
                Kursa Qoşul
              </Link>
              <Link
                href="/contact"
                className="px-8 py-4 bg-white/10 backdrop-blur-sm rounded-full text-lg font-semibold hover:bg-white/20 transition-all duration-300"
              >
                Ətraflı Məlumat
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 