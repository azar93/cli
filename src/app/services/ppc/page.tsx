import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';

export default function PPCServicePage() {
  return (
    <main className="bg-gradient-to-b from-gray-900 to-black text-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-[#7C3AED]/20 to-[#0EA5E9]/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            PPC Marketing
          </h1>
          <p className="text-xl max-w-2xl text-gray-300 mb-8">
            Effektiv PPC kampaniyaları ilə dərhal nəticələr əldə edin.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 gradient-bg rounded-full text-lg font-semibold hover:shadow-lg hover:shadow-[#7C3AED]/30 transition-all duration-300 hover:scale-105"
          >
            PPC Marketing Xidməti Al
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl font-bold text-center mb-16 gradient-text">
            PPC Marketing Xidmətlərimiz
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-[#7C3AED]/50 transition-all duration-500 hover:shadow-2xl hover:shadow-[#7C3AED]/20">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-xl bg-[#7C3AED]/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                  <svg className="w-6 h-6 text-[#7C3AED]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4 gradient-text">Google Ads</h3>
                  <p className="text-gray-300 mb-6">Google Ads kampaniyaları:</p>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#0EA5E9]"></div>
                      <span>Axtarış kampaniyaları</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#0EA5E9]"></div>
                      <span>Display kampaniyaları</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#0EA5E9]"></div>
                      <span>Remarketing</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-[#7C3AED]/50 transition-all duration-500 hover:shadow-2xl hover:shadow-[#7C3AED]/20">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-xl bg-[#7C3AED]/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                  <svg className="w-6 h-6 text-[#7C3AED]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4 gradient-text">Facebook Ads</h3>
                  <p className="text-gray-300 mb-6">Facebook kampaniyaları:</p>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#0EA5E9]"></div>
                      <span>Audience targeting</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#0EA5E9]"></div>
                      <span>Carousel ads</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#0EA5E9]"></div>
                      <span>Video ads</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-[#7C3AED]/50 transition-all duration-500 hover:shadow-2xl hover:shadow-[#7C3AED]/20">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-xl bg-[#7C3AED]/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                  <svg className="w-6 h-6 text-[#7C3AED]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4 gradient-text">Analitika</h3>
                  <p className="text-gray-300 mb-6">Kampaniya analizi:</p>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#0EA5E9]"></div>
                      <span>ROI hesablaması</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#0EA5E9]"></div>
                      <span>A/B testləri</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#0EA5E9]"></div>
                      <span>Hedef optimallaşdırma</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-[#7C3AED]/50 transition-all duration-500 hover:shadow-2xl hover:shadow-[#7C3AED]/20">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-xl bg-[#7C3AED]/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                  <svg className="w-6 h-6 text-[#7C3AED]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4 gradient-text">Optimallaşdırma</h3>
                  <p className="text-gray-300 mb-6">Kampaniya optimallaşdırması:</p>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#0EA5E9]"></div>
                      <span>Keyword optimallaşdırma</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#0EA5E9]"></div>
                      <span>Bid strategiyası</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#0EA5E9]"></div>
                      <span>Landing page optimallaşdırma</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl font-bold text-center mb-16 gradient-text">
            PPC Marketing Prosesimiz
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                title: 'Analiz',
                description: 'Hədəf auditoriyanı müəyyən edirik',
                icon: (
                  <svg className="w-8 h-8 text-[#7C3AED]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                )
              },
              {
                title: 'Strategiya',
                description: 'PPC strategiyası hazırlayırıq',
                icon: (
                  <svg className="w-8 h-8 text-[#7C3AED]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                )
              },
              {
                title: 'İcra',
                description: 'Kampaniyaları başladırıq',
                icon: (
                  <svg className="w-8 h-8 text-[#7C3AED]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                )
              },
              {
                title: 'Monitorinq',
                description: 'Performansı izləyirik',
                icon: (
                  <svg className="w-8 h-8 text-[#7C3AED]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                )
              }
            ].map((step, index) => (
              <div key={index} className="group bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-[#7C3AED]/50 transition-all duration-500 hover:shadow-2xl hover:shadow-[#7C3AED]/20">
                <div className="w-12 h-12 rounded-xl bg-[#7C3AED]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 gradient-text">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-[#7C3AED]/20 to-[#0EA5E9]/20"></div>
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 gradient-text">
              PPC Marketing Xidmətimizdən İstifadə Etmək İstəyirsiniz?
            </h2>
            <p className="text-xl mb-12 max-w-2xl mx-auto text-gray-300">
              Professional PPC marketing xidmətimizlə dərhal nəticələr əldə edin.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 gradient-bg rounded-full text-lg font-semibold hover:shadow-lg hover:shadow-[#7C3AED]/30 transition-all duration-300 hover:scale-105"
              >
                Kampaniya Müzakirəsi
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm rounded-full text-lg font-semibold hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                Nəticələr
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 