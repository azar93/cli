import Link from 'next/link';
import { FiArrowRight, FiCheck } from 'react-icons/fi';

export default function HomePage() {
  const services = [
    {
      title: 'SEO Optimallaşdırma',
      description: 'Google sıralamasında yüksəlin və daha çox müştəri qazanın',
      icon: '🎯',
      link: '/services/seo'
    },
    {
      title: 'Sosial Media Marketing',
      description: 'Sosial media platformalarında effektiv marketinq strategiyaları',
      icon: '📱',
      link: '/services/social-media'
    },
    {
      title: 'Kontent Marketinq',
      description: 'Keyfiyyətli və SEO dostu kontent yaradılması',
      icon: '✍️',
      link: '/services/content-marketing'
    }
  ];

  const features = [
    {
      title: 'Peşəkar Komanda',
      description: '10+ illik təcrübəyə malik mütəxəssislər',
      icon: '👥'
    },
    {
      title: 'Data-driven Yanaşma',
      description: 'Analitik və data əsaslı strategiyalar',
      icon: '📊'
    },
    {
      title: 'İnnovativ Həllər',
      description: 'Ən son texnologiya və trendlərdən istifadə',
      icon: '💡'
    },
    {
      title: '24/7 Dəstək',
      description: 'Həftənin 7 günü texniki dəstək',
      icon: '🔧'
    }
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
        
        <div className="hero-content">
          <div className="mb-4 text-sm uppercase tracking-wider text-primary font-semibold">
            Rəqəmsal Marketinq Agentliyi
          </div>
          <h1 className="hero-title">
            Biznesinizi <span className="gradient-text">Rəqəmsal Dünyada</span><br />
            İnkişaf Etdirin
          </h1>
          <p className="hero-subtitle">
            Professional komandamız və innovativ həllərimizlə biznesinizi online məkanda böyüdün.
            SEO, Sosial Media və Kontent Marketinq xidmətlərimizlə hədəf müştərilərinizə çatın.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              Pulsuz Konsultasiya
            </Link>
            <Link href="/services" className="btn-secondary">
              Xidmətlərimiz
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">Xidmətlərimiz</span>
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Biznesinizi böyütmək üçün lazım olan bütün rəqəmsal marketinq xidmətləri
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-card-icon">{service.icon}</div>
                <h3 className="service-card-title">{service.title}</h3>
                <p className="service-card-description">{service.description}</p>
                <Link 
                  href={service.link}
                  className="inline-flex items-center text-primary hover:translate-x-2 transition-transform duration-300"
                >
                  Ətraflı <FiArrowRight className="ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Niyə <span className="gradient-text">Bizi Seçməlisiniz?</span>
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Uğurlu nəticələr əldə etmək üçün lazım olan bütün üstünlüklər
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-card-icon">{feature.icon}</div>
                <h3 className="feature-card-title">{feature.title}</h3>
                <p className="feature-card-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Biznesinizi Böyütməyə Hazırsınız?
          </h2>
          <p className="max-w-2xl mx-auto mb-8">
            Pulsuz konsultasiya üçün müraciət edin və biznesiniz üçün ən uyğun rəqəmsal marketinq strategiyasını hazırlayaq
          </p>
          <Link href="/contact" className="btn-white">
            İndi Müraciət Et
          </Link>
        </div>
      </section>
    </main>
  );
} 