import Link from 'next/link';
import { FiArrowRight, FiClock, FiBook, FiAward } from 'react-icons/fi';

export default function CoursesPage() {
  const courses = [
    {
      id: 1,
      title: 'Digital Marketing Kursu',
      description: 'Digital marketinqin bütün aspektlərini əhatə edən hərtərəfli təlim proqramı.',
      duration: '3 ay',
      schedule: 'Həftədə 2 dəfə, 2 saat',
      price: '499 AZN',
      image: '/courses/digital-marketing.jpg',
      features: [
        'SEO əsasları və texniki optimizasiya',
        'Sosial Media Marketing strategiyaları',
        'Google Ads və Facebook Ads',
        'Kontent Marketing və copywriting',
        'Email Marketing kampaniyaları',
        'Analytics və hesabatlar'
      ],
      benefits: [
        'Real layihələr üzərində təcrübə',
        'Professional sertifikat',
        'Karyera dəstəyi',
        'Networking imkanları'
      ]
    },
    {
      id: 2,
      title: 'SEO Mütəxəssis Kursu',
      description: 'SEO sahəsində professional mütəxəssis olmaq istəyənlər üçün dərin təlim proqramı.',
      duration: '2 ay',
      schedule: 'Həftədə 2 dəfə, 2 saat',
      price: '399 AZN',
      image: '/courses/seo-specialist.jpg',
      features: [
        'Texniki SEO və sayt auditi',
        'Açar söz analizi və strategiyası',
        'Kontent optimallaşdırma',
        'Backlink strategiyaları',
        'SEO alətləri və sistemləri',
        'Analytics və hesabatlar'
      ],
      benefits: [
        'Real layihələr üzərində təcrübə',
        'Professional sertifikat',
        'Karyera dəstəyi',
        'SEO tools-lara giriş'
      ]
    },
    {
      id: 3,
      title: 'Sosial Media Marketing',
      description: 'Sosial media platformalarında effektiv marketing kampaniyaları yaratmağı öyrənin.',
      duration: '1.5 ay',
      schedule: 'Həftədə 2 dəfə, 2 saat',
      price: '299 AZN',
      image: '/courses/social-media.jpg',
      features: [
        'Platform strategiyaları',
        'Kontent planlaması',
        'Reklam kampaniyaları',
        'İnfluencer marketing',
        'Sosial media analitikası',
        'Community management'
      ],
      benefits: [
        'Real layihələr üzərində təcrübə',
        'Professional sertifikat',
        'Karyera dəstəyi',
        'Social media tools'
      ]
    }
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Professional <span className="gradient-text">Təlim Kursları</span>
            </h1>
            <p className="text-text-secondary max-w-2xl mx-auto text-lg">
              Digital marketing sahəsində karyeranızı inkişaf etdirmək üçün professional təlim proqramlarımız.
              Real layihələr üzərində təcrübə və karyera dəstəyi.
            </p>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-12">
            {courses.map((course, index) => (
              <div key={course.id} className="card">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="relative h-64 md:h-full rounded-lg overflow-hidden">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-4">{course.title}</h2>
                    <p className="text-text-secondary mb-6">{course.description}</p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center gap-2">
                        <FiClock className="text-primary" />
                        <span className="text-text-secondary">{course.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FiBook className="text-primary" />
                        <span className="text-text-secondary">{course.schedule}</span>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h3 className="text-xl font-semibold mb-3">Proqram</h3>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {course.features.map((feature, i) => (
                          <li key={i} className="flex items-center text-text-secondary">
                            <span className="text-primary mr-2">✓</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-6">
                      <h3 className="text-xl font-semibold mb-3">Üstünlüklər</h3>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {course.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-center text-text-secondary">
                            <FiAward className="text-primary mr-2" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-3xl font-bold gradient-text">{course.price}</span>
                      <div className="flex gap-4">
                        <Link 
                          href={`/courses/${course.id}`}
                          className="btn-primary inline-flex items-center"
                        >
                          Ətraflı Məlumat <FiArrowRight className="ml-2" />
                        </Link>
                        <Link 
                          href="/contact"
                          className="btn-secondary inline-flex items-center"
                        >
                          Qeydiyyat
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Karyeranızı İnkişaf Etdirməyə Hazırsınız?
          </h2>
          <p className="max-w-2xl mx-auto mb-8 text-lg">
            Professional təlimçilərimizlə əlaqə saxlayın və karyeranızı digital marketing sahəsində inkişaf etdirin
          </p>
          <Link href="/contact" className="btn-white">
            İndi Müraciət Et
          </Link>
        </div>
      </section>
    </main>
  );
}