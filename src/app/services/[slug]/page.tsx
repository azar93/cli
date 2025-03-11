'use client';

import Link from 'next/link';
import { FiSearch, FiBarChart, FiSettings, FiActivity } from 'react-icons/fi';

const services = {
  'seo': {
    title: 'SEO Optimallaşdırma',
    description: 'Google sıralamasında yüksəlin və daha çox müştəri qazanın',
    features: [
      {
        title: 'Texniki SEO',
        description: 'Saytın texniki problemlərinin həlli',
        icon: <FiSearch className="w-6 h-6" />
      },
      {
        title: 'Açar Söz Analizi',
        description: 'Hədəf açar sözlərin müəyyən edilməsi',
        icon: <FiBarChart className="w-6 h-6" />
      }
    ]
  }
};

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = services[params.slug as keyof typeof services];

  if (!service) {
    return <div>Xidmət tapılmadı</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">
          {service.title}
        </h1>
        <p className="text-xl text-gray-600 text-center mb-12">
          {service.description}
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {service.features.map((feature, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-md">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 