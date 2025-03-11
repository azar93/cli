import Link from 'next/link';
import { FiArrowRight, FiCalendar, FiUser } from 'react-icons/fi';

export default function BlogPage() {
  const posts = [
    {
      id: 1,
      title: 'SEO Strategiyasını Necə Hazırlamalı?',
      excerpt: 'Effektiv SEO strategiyası hazırlamaq üçün əsas addımlar və tövsiyələr. Google sıralamasında yüksəlmək üçün professional məsləhətlər.',
      image: '/blog/seo-strategy.jpg',
      author: 'Rəşad Əliyev',
      date: '15 Mart 2024',
      category: 'SEO',
      readTime: '7 dəq'
    },
    {
      id: 2,
      title: 'Sosial Media Marketinq Trendləri 2024',
      excerpt: '2024-cü ildə sosial media marketinqində əsas trendlər və onlardan necə faydalanmaq olar. Instagram, Facebook və LinkedIn strategiyaları.',
      image: '/blog/social-media-trends.jpg',
      author: 'Ayşə Məmmədova',
      date: '10 Mart 2024',
      category: 'Sosial Media',
      readTime: '5 dəq'
    },
    {
      id: 3,
      title: 'Google Ads Kampaniyalarında ROI-ni Necə Artırmalı?',
      excerpt: 'Google Ads reklamlarında Return on Investment (ROI) göstəricisini artırmaq üçün effektiv strategiyalar və praktiki məsləhətlər.',
      image: '/blog/google-ads-roi.jpg',
      author: 'Əli Həsənov',
      date: '5 Mart 2024',
      category: 'Google Ads',
      readTime: '6 dəq'
    },
    {
      id: 4,
      title: 'Kontent Marketinq: Effektiv Strategiya Necə Qurulur?',
      excerpt: 'Biznesiniz üçün effektiv kontent marketinq strategiyası hazırlamağın əsas prinsipləri və addımları.',
      image: '/blog/content-marketing.jpg',
      author: 'Rəşad Əliyev',
      date: '1 Mart 2024',
      category: 'Kontent',
      readTime: '8 dəq'
    },
    {
      id: 5,
      title: 'Email Marketinq: Açılış Nisbətini Necə Artırmalı?',
      excerpt: 'Email marketinq kampaniyalarında açılış nisbətini artırmaq üçün professional tövsiyələr və praktiki nümunələr.',
      image: '/blog/email-marketing.jpg',
      author: 'Ayşə Məmmədova',
      date: '25 Fevral 2024',
      category: 'Email',
      readTime: '5 dəq'
    },
    {
      id: 6,
      title: 'Web Analitika: Data Əsaslı Qərarlar',
      excerpt: 'Web analitika alətlərindən istifadə edərək biznes qərarlarını necə vermək olar? Google Analytics məlumatlarının analizi.',
      image: '/blog/web-analytics.jpg',
      author: 'Əli Həsənov',
      date: '20 Fevral 2024',
      category: 'Analitika',
      readTime: '7 dəq'
    }
  ];

  const categories = [
    'SEO',
    'Sosial Media',
    'Google Ads',
    'Kontent',
    'Email',
    'Analitika'
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Digital Marketing <span className="gradient-text">Bloqu</span>
            </h1>
            <p className="text-text-secondary max-w-2xl mx-auto text-lg">
              Digital marketing sahəsində ən son xəbərlər, məqalələr və professional məsləhətlər.
              Biznesinizi böyütmək üçün faydalı məlumatlar.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {posts.map((post) => (
                  <Link href={`/blog/${post.id}`} key={post.id} className="card group">
                    <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform group-hover:scale-105"
                      />
                    </div>
                    <div className="flex items-center gap-4 text-sm text-text-secondary mb-3">
                      <span className="flex items-center gap-1">
                        <FiCalendar className="w-4 h-4" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <FiUser className="w-4 h-4" />
                        {post.author}
                      </span>
                    </div>
                    <h2 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-text-secondary mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-primary">{post.category}</span>
                      <span className="text-sm text-text-secondary">{post.readTime} oxuma</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Categories */}
              <div className="card mb-8">
                <h3 className="text-xl font-semibold mb-6">Kateqoriyalar</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <Link
                      key={category}
                      href={`/blog/category/${category.toLowerCase()}`}
                      className="flex items-center justify-between py-2 px-4 rounded-lg hover:bg-background transition-colors"
                    >
                      <span>{category}</span>
                      <FiArrowRight className="w-4 h-4" />
                    </Link>
                  ))}
                </div>
              </div>

              {/* Newsletter */}
              <div className="card bg-gradient-primary text-white">
                <h3 className="text-xl font-semibold mb-4">Yeniliklərdən Xəbərdar Olun</h3>
                <p className="mb-6">
                  Ən son məqalələr və digital marketing yenilikləri haqqında məlumat almaq üçün qeydiyyatdan keçin
                </p>
                <form className="space-y-4">
                  <input
                    type="email"
                    placeholder="Email ünvanınız"
                    className="w-full px-4 py-2 rounded-lg border-none focus:outline-none focus:ring-2 focus:ring-white/20 bg-white/10 placeholder-white/70"
                  />
                  <button type="submit" className="btn-white w-full">
                    Abunə Ol
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 