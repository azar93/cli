import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';
import Image from 'next/image';

export default function SEOCoursePage() {
  return (
    <main className="bg-gradient-to-b from-gray-900 to-black text-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-40 pb-20 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text">
              Professional SEO Kursu
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Axtarış sistemlərində yüksək sıralamalar üçün bütün texniki bilikləri öyrənin
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

      {/* SEO Types Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-bold text-center mb-16 gradient-text">
            SEO Növləri
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Texniki SEO',
                description: 'Saytın texniki aspektləri, sürət, mobil uyğunluq və indeksləmə',
                icon: (
                  <svg className="w-12 h-12 text-[#7C3AED]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                ),
              },
              {
                title: 'Kontent SEO',
                description: 'Keyfiyyətli məzmun yaratma, açar sözlər və meta məlumatlar',
                icon: (
                  <svg className="w-12 h-12 text-[#0EA5E9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                ),
              },
              {
                title: 'Off-Page SEO',
                description: 'Backlink strategiyaları, sosial media və brend reputasiyası',
                icon: (
                  <svg className="w-12 h-12 text-[#7C3AED]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
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
                <p className="text-gray-400">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why SEO Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-bold text-center mb-16 gradient-text">
            SEO Nə Üçün Lazımdır?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Trafik Artımı',
                description: 'Axtarış sistemlərindən daha çox istifadəçi cəlb edin',
              },
              {
                title: 'Brend Məşhurluğu',
                description: 'Brendinizi daha görünən edin və etibarlılığı artırın',
              },
              {
                title: 'ROI',
                description: 'Aşağı xərclə yüksək gəlir əldə edin',
              },
              {
                title: 'Rəqabət Üstünlüyü',
                description: 'Rəqiblərinizdən öndə olun',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10"
              >
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
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
                title: 'SEO-nun Əsasları',
                topics: ['SEO konsepsiyası', 'Axtarış sistemləri', 'Açar sözlər'],
              },
              {
                week: 'Həftə 2',
                title: 'Texniki SEO',
                topics: ['Sayt strukturu', 'Sürət optimallaşdırma', 'Mobil uyğunluq'],
              },
              {
                week: 'Həftə 3',
                title: 'Kontent SEO',
                topics: ['Məzmun strategiyası', 'Meta məlumatlar', 'URL strukturu'],
              },
              {
                week: 'Həftə 4',
                title: 'Off-Page SEO',
                topics: ['Backlink strategiyası', 'Sosial media', 'Brend reputasiyası'],
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
                question: 'SEO kursu nə qədər davam edir?',
                answer: 'Kurs 4 həftə davam edir, hər həftə 2 dərs keçirilir.',
              },
              {
                question: 'Kursa qoşulmaq üçün təcrübə lazımdır?',
                answer: 'Xeyr, kurs həm yeni başlayanlar, həm də təcrübəli mütəxəssislər üçün nəzərdə tutulub.',
              },
              {
                question: 'Kurs materiallarına nə qədər müddətə giriş var?',
                answer: 'Kurs materiallarına 6 ay müddətində giriş təmin edilir.',
              },
              {
                question: 'Sertifikat verilir?',
                answer: 'Bəli, kursu uğurla başa vurduqdan sonra sertifikat təqdim edilir.',
              },
              {
                question: 'Ödəniş necə həyata keçirilir?',
                answer: 'Ödəniş kartı və ya bank köçürməsi ilə həyata keçirilə bilər.',
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
            SEO Blog
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'SEO Trendləri 2024',
                excerpt: '2024-cü ildə SEO sahəsində əsas trendlər və yeniliklər',
                link: '/blog/seo-trends-2024',
              },
              {
                title: 'Local SEO',
                excerpt: 'Yerli axtarışlarda yüksək sıralamalar üçün strategiyalar',
                link: '/blog/local-seo',
              },
              {
                title: 'Content Marketing',
                excerpt: 'SEO üçün effektiv kontent marketing strategiyaları',
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
              SEO Kursuna Qoşulun
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Professional SEO mütəxəssisi olmaq üçün ilk addımı atın
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