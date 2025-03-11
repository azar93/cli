import Link from 'next/link';
import { FiArrowRight, FiClock, FiBook, FiAward, FiCheck, FiCalendar, FiDollarSign, FiUser } from 'react-icons/fi';

const courses = [
  {
    id: 1,
    title: 'Digital Marketing Kursu',
    description: 'Digital marketinqin bütün aspektlərini əhatə edən hərtərəfli təlim proqramı.',
    fullDescription: 'Bu kurs digital marketinqin bütün əsas sahələrini əhatə edən geniş bir proqramdır. SEO, sosial media, email marketing və Google Ads kimi mühüm mövzuları əhatə edən kursumuz sizə online marketinqdə uğur qazanmaq üçün lazım olan bütün bilikləri təqdim edir.',
    duration: '3 ay',
    schedule: 'Həftədə 2 dəfə, 2 saat',
    startDate: '1 Aprel 2024',
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
    ],
    curriculum: [
      {
        title: 'Digital Marketing-ə Giriş',
        topics: [
          'Digital marketinq əsasları',
          'Marketing strategiyası',
          'Hədəf auditoriya analizi',
          'Rəqəmsal marketinq kanalları'
        ]
      },
      {
        title: 'SEO və Kontent Marketing',
        topics: [
          'SEO əsasları',
          'Açar söz analizi',
          'Kontent strategiyası',
          'Texniki SEO'
        ]
      },
      {
        title: 'Sosial Media Marketing',
        topics: [
          'Sosial media strategiyası',
          'Kontent yaradılması',
          'Reklam kampaniyaları',
          'Analitika və hesabatlar'
        ]
      },
      {
        title: 'Google Ads və Analytics',
        topics: [
          'Google Ads kampaniyaları',
          'PPC reklamları',
          'Google Analytics',
          'Konversiya optimallaşdırması'
        ]
      }
    ],
    instructors: [
      {
        name: 'Rəşad Əliyev',
        position: 'Digital Marketing Mütəxəssisi',
        image: '/team/resad.jpg',
        experience: '10+ il təcrübə'
      },
      {
        name: 'Ayşə Məmmədova',
        position: 'SEO Mütəxəssisi',
        image: '/team/ayse.jpg',
        experience: '8+ il təcrübə'
      }
    ]
  },
  // ... digər kurslar üçün də eyni strukturda məlumatlar
];

export default function CoursePage({ params }: { params: { id: string } }) {
  const course = courses.find(c => c.id === parseInt(params.id));

  if (!course) {
    return <div>Kurs tapılmadı</div>;
  }

  return (
    <main>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                {course.title}
              </h1>
              <p className="text-text-secondary text-lg mb-8">
                {course.fullDescription}
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex items-center gap-2">
                  <FiClock className="text-primary" />
                  <span className="text-text-secondary">{course.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FiCalendar className="text-primary" />
                  <span className="text-text-secondary">{course.startDate}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FiBook className="text-primary" />
                  <span className="text-text-secondary">{course.schedule}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FiDollarSign className="text-primary" />
                  <span className="text-text-secondary">{course.price}</span>
                </div>
              </div>
              <div className="flex gap-4">
                <Link href="/contact" className="btn-primary">
                  Qeydiyyatdan Keç
                </Link>
                <Link href="/courses" className="btn-secondary">
                  Bütün Kurslar
                </Link>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <div className="w-full h-full bg-gradient-primary flex items-center justify-center">
                <FiBook className="w-32 h-32 text-white/50" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Tədris <span className="gradient-text">Proqramı</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {course.curriculum.map((module, index) => (
              <div key={index} className="card">
                <div className="text-2xl font-bold gradient-text mb-4">{index + 1}</div>
                <h3 className="text-xl font-semibold mb-4">{module.title}</h3>
                <ul className="space-y-2">
                  {module.topics.map((topic, i) => (
                    <li key={i} className="flex items-center text-text-secondary">
                      <FiCheck className="text-primary mr-2" />
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Kurs <span className="gradient-text">Üstünlükləri</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {course.benefits.map((benefit, index) => (
              <div key={index} className="card text-center">
                <div className="text-primary mb-4">
                  <FiAward className="w-8 h-8 mx-auto" />
                </div>
                <p className="text-text-secondary">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instructors Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Təlimçi <span className="gradient-text">Komandası</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {course.instructors.map((instructor, index) => (
              <div key={index} className="card text-center">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-primary flex items-center justify-center">
                  <FiUser className="w-16 h-16 text-white/50" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{instructor.name}</h3>
                <p className="text-primary mb-2">{instructor.position}</p>
                <p className="text-text-secondary">{instructor.experience}</p>
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
          <div className="flex gap-4 justify-center">
            <Link href="/contact" className="btn-white">
              İndi Qeydiyyatdan Keç
            </Link>
            <Link href="/courses" className="btn-white-outline">
              Bütün Kurslar
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
} 