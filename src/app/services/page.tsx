import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';

const services = [
  {
    id: 'seo',
    title: 'SEO Optimallaşdırma',
    description: 'Google sıralamasında yüksəlin və daha çox müştəri qazanın',
    icon: '🎯'
  },
  {
    id: 'social-media',
    title: 'Sosial Media Marketing',
    description: 'Sosial media platformalarında effektiv marketinq strategiyaları',
    icon: '📱'
  },
  {
    id: 'content-marketing',
    title: 'Kontent Marketinq',
    description: 'Keyfiyyətli və SEO dostu kontent yaradılması',
    icon: '✍️'
  }
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-purple-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Xidmətlərimiz
            </h1>
            <p className="text-xl text-gray-600 mb-12">
              Biznesinizi böyütmək üçün professional həllər təqdim edirik
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link 
                key={service.id}
                href={`/services/${service.id}`}
                className="group p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-200"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-purple-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
                <div className="flex items-center text-purple-600">
                  Ətraflı <FiArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Layihənizi Müzakirə Edək
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            Professional komandamızla əlaqə saxlayın və biznesiniz üçün ən uyğun həlləri tapaq
          </p>
          <Link 
            href="/contact"
            className="inline-flex items-center px-8 py-4 rounded-full bg-white text-purple-600 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
          >
            İndi Müraciət Et <FiArrowRight className="ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
} 