import Link from 'next/link';
import { FiArrowRight, FiCheck } from 'react-icons/fi';

const team = [
  {
    name: 'Rəşad Əliyev',
    position: 'Baş Direktor',
    image: '/team/resad.jpg',
    description: '10+ illik digital marketing təcrübəsi'
  },
  {
    name: 'Ayşə Məmmədova',
    position: 'SEO Mütəxəssisi',
    image: '/team/ayse.jpg',
    description: '8+ illik SEO təcrübəsi'
  },
  {
    name: 'Əli Həsənov',
    position: 'Sosial Media Meneceri',
    image: '/team/ali.jpg',
    description: '5+ illik sosial media təcrübəsi'
  }
];

const stats = [
  {
    number: '500+',
    title: 'Uğurlu Layihə',
    description: 'Müxtəlif sahələrdə uğurla tamamlanmış layihələr'
  },
  {
    number: '98%',
    title: 'Müştəri Məmnuniyyəti',
    description: 'Yüksək keyfiyyətli xidmət və nəticələr'
  },
  {
    number: '10+',
    title: 'İllik Təcrübə',
    description: 'Digital marketinq sahəsində professional təcrübə'
  },
  {
    number: '50+',
    title: 'Aktiv Müştəri',
    description: 'Davamlı əməkdaşlıq etdiyimiz şirkətlər'
  }
];

const values = [
  {
    title: 'İnnovasiya',
    description: 'Ən son texnologiya və trendlərdən istifadə edərək müştərilərimizə ən yaxşı həlləri təqdim edirik',
    icon: '💡'
  },
  {
    title: 'Keyfiyyət',
    description: 'Hər bir layihəyə maksimum diqqət və professional yanaşma ilə yüksək keyfiyyətli nəticələr əldə edirik',
    icon: '⭐'
  },
  {
    title: 'Şəffaflıq',
    description: 'Müştərilərimizlə açıq və şəffaf kommunikasiya qurur, bütün prosesləri detallı şəkildə paylaşırıq',
    icon: '🤝'
  },
  {
    title: 'Nəticə',
    description: 'Hədəflərə fokuslanır və real nəticələr əldə etmək üçün effektiv strategiyalar hazırlayırıq',
    icon: '🎯'
  }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <section className="relative py-20 bg-gradient-to-b from-purple-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Haqqımızda
            </h1>
            <p className="text-xl text-gray-600 mb-12">
              Professional komandamız və təcrübəmizlə biznesinizi böyüdürük
            </p>
          </div>
        </div>
      </section>
      
      {/* Digər bölmələr əlavə ediləcək */}
    </div>
  );
} 