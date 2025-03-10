import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { FiArrowLeft, FiArrowRight, FiCalendar, FiUser, FiTag } from 'react-icons/fi';

// Bu məlumatlar normalda verilənlər bazasından gələcək
const blogPost = {
  id: 1,
  title: 'Digital Marketing-də ən son trendlər',
  content: `
    <p>2024-cü ildə digital marketing sahəsində bir çox yeni trendlər və innovasiyalar meydana çıxıb. Bu yazıda sizə ən diqqət çəkən trendləri təqdim edirik.</p>

    <h2>1. AI və Avtomatlaşdırma</h2>
    <p>Artificial Intelligence (AI) və avtomatlaşdırma texnologiyaları digital marketing sahəsində getdikcə daha çox istifadə olunur. Chatbots, personalizasiya və məzmun yaratma kimi sahələrdə AI-dan istifadə edilir.</p>

    <h2>2. Video Marketing</h2>
    <p>Video kontent getdikcə daha populyar olur. TikTok, Instagram Reels və YouTube kimi platformalar vasitəsilə brendlər öz məhsullarını və xidmətlərini daha effektiv şəkildə təqdim edə bilirlər.</p>

    <h2>3. Voice Search</h2>
    <p>Səsli axtarışların sayı artdıqca, SEO strategiyaları da buna uyğun olaraq dəyişir. Voice search üçün optimallaşdırma getdikcə daha vacib olur.</p>

    <h2>4. Sustainability Marketing</h2>
    <p>İstifadəçilər getdikcə daha çox ətraf mühitə qayğı göstərən brendləri seçirlər. Sustainability marketing bu baxımdan vacib trendə çevrilir.</p>

    <h2>5. Micro-Moments</h2>
    <p>İstifadəçilərin qərar vermə anlarında (micro-moments) onlara dəqiq vaxtda və dəqiq yerdə çatmaq vacibdir. Bu, kontekstual marketingin daha da inkişaf etməsinə səbəb olur.</p>
  `,
  image: '/blog/trends.jpg',
  date: '2024-03-09',
  category: 'Trendlər',
  author: 'Əli Məmmədov',
  authorImage: '/team/ali.jpg',
};

const posts = [
  {
    id: 1,
    title: 'SEO Strategiyasını Necə Hazırlamalı?',
    excerpt: 'Effektiv SEO strategiyası hazırlamaq üçün əsas addımlar və tövsiyələr. Google sıralamasında yüksəlmək üçün professional məsləhətlər.',
    content: `
      SEO (Search Engine Optimization) müasir digital marketinqin ən əhəmiyyətli komponentlərindən biridir. Effektiv SEO strategiyası hazırlamaq üçün bir neçə əsas məqama diqqət yetirmək lazımdır.

      ## 1. Texniki SEO Audit

      Saytınızın texniki cəhətdən optimallaşdırılması SEO strategiyasının təməlini təşkil edir. Bunun üçün:
      - Səhifə yüklənmə sürətini yoxlayın
      - Mobile-friendly dizaynı təmin edin
      - XML sitemap yaradın
      - Robots.txt faylını konfiqurasiya edin

      ## 2. Açar Söz Analizi

      Hədəf auditoriyamızın axtarış davranışlarını başa düşmək üçün detallı açar söz analizi aparmalıyıq:
      - Əsas açar sözləri müəyyən edin
      - Rəqib analizi aparın
      - Long-tail açar sözləri tapın
      - Açar sözlərin axtarış həcmini analiz edin

      ## 3. Kontent Strategiyası

      Keyfiyyətli və SEO-optimizasiyalı kontent yaratmaq üçün:
      - Hədəf açar sözlərə uyğun kontent planı hazırlayın
      - Məzmunu strukturlaşdırın (H1, H2, H3 başlıqları)
      - Daxili linklər əlavə edin
      - Meta title və description-ları optimizasiya edin

      ## 4. Backlink Strategiyası

      Keyfiyyətli backlink profili yaratmaq üçün:
      - Guest posting imkanlarını araşdırın
      - Broken link building tətbiq edin
      - Rəqiblərin backlink profilini analiz edin
      - Sosial media platformalarından istifadə edin

      ## 5. Analitika və Monitorinq

      Nəticələri izləmək və strategiyanı təkmilləşdirmək üçün:
      - Google Analytics quraşdırın
      - Search Console-dan istifadə edin
      - Reytinqləri izləyin
      - Trafikin artımını ölçün
    `,
    image: '/blog/seo-strategy.jpg',
    author: 'Rəşad Əliyev',
    date: '15 Mart 2024',
    category: 'SEO',
    readTime: '7 dəq',
    tags: ['SEO', 'Digital Marketing', 'Web']
  },
  // ... digər blog yazıları
];

export default function BlogPostPage({ params }: { params: { id: string } }) {
  const post = posts.find(p => p.id === parseInt(params.id));
  
  if (!post) {
    return <div>Məqalə tapılmadı</div>;
  }

  const currentIndex = posts.findIndex(p => p.id === post.id);
  const prevPost = posts[currentIndex - 1];
  const nextPost = posts[currentIndex + 1];

  const relatedPosts = posts
    .filter(p => p.id !== post.id)
    .sort(() => Math.random() - 0.5)
    .slice(0, 3);

  return (
    <main>
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 text-sm text-text-secondary mb-6">
              <span className="flex items-center gap-1">
                <FiCalendar className="w-4 h-4" />
                {post.date}
              </span>
              <span className="flex items-center gap-1">
                <FiUser className="w-4 h-4" />
                {post.author}
              </span>
              <span className="flex items-center gap-1">
                <FiTag className="w-4 h-4" />
                {post.category}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {post.title}
            </h1>
            <p className="text-text-secondary text-lg">
              {post.excerpt}
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              {/* Featured Image */}
              <div className="relative h-[400px] rounded-lg overflow-hidden mb-8">
                <div className="w-full h-full bg-gradient-primary flex items-center justify-center">
                  <FiUser className="w-32 h-32 text-white/50" />
                </div>
              </div>

              {/* Content */}
              <div className="prose prose-lg max-w-none">
                {post.content.split('\n\n').map((paragraph, index) => {
                  if (paragraph.startsWith('## ')) {
                    return (
                      <h2 key={index} className="text-2xl font-bold mt-8 mb-4">
                        {paragraph.replace('## ', '')}
                      </h2>
                    );
                  }
                  return <p key={index} className="text-text-secondary mb-4">{paragraph}</p>;
                })}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-8">
                {post.tags.map((tag, index) => (
                  <Link
                    key={index}
                    href={`/blog/tag/${tag.toLowerCase()}`}
                    className="px-4 py-2 bg-background rounded-full text-text-secondary hover:text-primary transition-colors"
                  >
                    #{tag}
                  </Link>
                ))}
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-between mt-12 pt-8 border-t border-border">
                {prevPost ? (
                  <Link
                    href={`/blog/${prevPost.id}`}
                    className="flex items-center gap-2 text-text-secondary hover:text-primary transition-colors"
                  >
                    <FiArrowLeft />
                    <span>Əvvəlki Məqalə</span>
                  </Link>
                ) : (
                  <div />
                )}
                {nextPost ? (
                  <Link
                    href={`/blog/${nextPost.id}`}
                    className="flex items-center gap-2 text-text-secondary hover:text-primary transition-colors"
                  >
                    <span>Növbəti Məqalə</span>
                    <FiArrowRight />
                  </Link>
                ) : (
                  <div />
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Author Info */}
              <div className="card mb-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center">
                    <FiUser className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{post.author}</h3>
                    <p className="text-text-secondary">Digital Marketing Mütəxəssisi</p>
                  </div>
                </div>
                <p className="text-text-secondary">
                  10+ illik digital marketing təcrübəsi ilə müxtəlif sahələrdə uğurlu layihələrə imza atıb.
                </p>
              </div>

              {/* Related Posts */}
              <div className="card">
                <h3 className="text-xl font-semibold mb-6">Oxşar Məqalələr</h3>
                <div className="space-y-6">
                  {relatedPosts.map((relatedPost) => (
                    <Link
                      key={relatedPost.id}
                      href={`/blog/${relatedPost.id}`}
                      className="flex gap-4 group"
                    >
                      <div className="relative w-24 h-24 rounded-lg overflow-hidden flex-shrink-0 bg-gradient-primary flex items-center justify-center">
                        <FiUser className="w-8 h-8 text-white/50" />
                      </div>
                      <div>
                        <h4 className="font-semibold group-hover:text-primary transition-colors">
                          {relatedPost.title}
                        </h4>
                        <p className="text-sm text-text-secondary mt-1">
                          {relatedPost.date}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 