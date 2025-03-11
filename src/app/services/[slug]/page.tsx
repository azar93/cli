'use client';

import { motion } from 'framer-motion';
import { FaSearch, FaChartLine, FaTools, FaRocket, FaCheckCircle, FaCogs } from 'react-icons/fa';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const services = {
  seo: {
    title: "SEO Xidməti",
    subtitle: "Veb saytınızı axtarış sistemlərində ön sıralara daşıyırıq",
    description: "Müasir SEO strategiyaları ilə biznesinizi inkişaf etdirin və daha çox müştəri qazanın.",
    features: [
      {
        icon: <FaSearch />,
        title: "Açar Söz Analizi",
        description: "Hədəf auditoriyaya uyğun açar sözlərin müəyyən edilməsi və rəqib analizi"
      },
      {
        icon: <FaChartLine />,
        title: "SEO Audit",
        description: "Saytınızın texniki və kontent baxımından tam analizi"
      },
      {
        icon: <FaTools />,
        title: "Texniki Optimizasiya",
        description: "Saytın sürəti, mobil uyğunluğu və texniki problemlərin həlli"
      },
      {
        icon: <FaRocket />,
        title: "Kontent Strategiyası",
        description: "SEO-ya uyğun məzmun planlaması və yaradılması"
      },
      {
        icon: <FaCheckCircle />,
        title: "Link Qurma",
        description: "Keyfiyyətli backlink strategiyasının hazırlanması"
      },
      {
        icon: <FaCogs />,
        title: "Performans İzləmə",
        description: "Aylıq hesabatlar və davamlı optimizasiya"
      }
    ],
    benefits: [
      "Google sıralamasında yüksəliş",
      "Üzvi trafikin artması",
      "Daha çox potensial müştəri",
      "Brend dəyərinin artması",
      "Rəqiblərdən öndə olma",
      "ROI-nin yüksəlməsi"
    ]
  }
};

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = services[params.slug as keyof typeof services];

  if (!service) {
    return <div>Xidmət tapılmadı</div>;
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-blue-50 opacity-50" />
        <div className="container mx-auto px-4 relative">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              {service.title}
            </h1>
            <p className="text-2xl text-gray-600 mb-4">{service.subtitle}</p>
            <p className="text-lg text-gray-500 mb-8 max-w-2xl mx-auto">{service.description}</p>
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-medium hover:from-purple-700 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Pulsuz Audit Alın
            </a>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"
            {...fadeInUp}
          >
            Xidmətlərimiz
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {service.features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center text-white mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            {...fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-16 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Nə Əldə Edəcəksiniz?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {service.benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="flex items-center p-4 bg-white rounded-xl shadow-md"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white mr-4">
                    <FaCheckCircle className="w-4 h-4" />
                  </div>
                  <p className="text-gray-700 font-medium">{benefit}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            {...fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Biznesinizi İnkişaf Etdirməyə Hazırsınız?
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              Pulsuz SEO auditindən yararlanın və saytınızın potensialını kəşf edin
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-medium hover:from-purple-700 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Pulsuz Audit Alın
              </a>
              <a
                href="/contact"
                className="px-8 py-4 bg-white text-gray-800 rounded-full font-medium border-2 border-gray-200 hover:border-purple-500 transform hover:scale-105 transition-all duration-300"
              >
                Bizimlə Əlaqə Saxlayın
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 