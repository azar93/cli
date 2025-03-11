export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  image: string;
  category: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'SEO Optimizasiyasının Əsasları',
    slug: 'seo-optimizasiyasi',
    excerpt: 'SEO optimizasiyasının əsas prinsipləri və tətbiqi',
    content: `
      SEO optimizasiyası veb saytınızın axtarış sistemlərində daha yaxşı görünməsi üçün vacibdir.
      Bu məqalədə SEO-nun əsas prinsiplərindən bəhs edəcəyik.
      
      ## 1. Məzmun Optimizasiyası
      Keyfiyyətli və orijinal məzmun yaratmaq SEO-nun əsas təməlidir.
      
      ## 2. Texniki SEO
      Sayt sürəti, mobil uyğunluq və digər texniki amillər.
      
      ## 3. Backlink Strategiyası
      Keyfiyyətli backlink-lər əldə etmək üçün effektiv strategiyalar.
    `,
    author: 'Azər Məmmədov',
    date: '2024-03-20',
    image: '/images/blog/seo-basics.jpg',
    category: 'SEO'
  },
  {
    id: '2',
    title: 'Sosial Media Marketing Strategiyası',
    slug: 'sosial-media-marketing',
    excerpt: 'Sosial media marketing-in effektiv strategiyaları',
    content: `
      Sosial media marketing müasir biznes üçün vacibdir.
      Bu məqalədə effektiv sosial media strategiyasından bəhs edəcəyik.
      
      ## 1. Platforma Seçimi
      Düzgün platformaların seçilməsi və hədəf auditoriyaya çatmaq.
      
      ## 2. Məzmun Planı
      Effektiv məzmun planının yaradılması və tətbiqi.
      
      ## 3. Analitika
      Sosial media performansının ölçülməsi və təhlili.
    `,
    author: 'Azər Məmmədov',
    date: '2024-03-19',
    image: '/images/blog/social-media.jpg',
    category: 'Marketing'
  }
]; 