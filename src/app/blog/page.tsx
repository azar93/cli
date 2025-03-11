import { blogPosts } from '@/data/blogPosts';
import Image from 'next/image';
import Link from 'next/link';
import { FiArrowRight, FiCalendar, FiUser } from 'react-icons/fi';

export default function BlogPage() {
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link 
                href={`/blog/${post.slug}`} 
                key={post.id}
                className="group hover:no-underline"
              >
                <article className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 group-hover:transform group-hover:scale-105">
                  <div className="relative h-48">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <span className="text-sm text-gray-600">
                        {new Date(post.date).toLocaleDateString('az-AZ')}
                      </span>
                      <span className="mx-2">•</span>
                      <span className="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                    </div>
                    
                    <h2 className="text-xl font-semibold mb-3 text-gray-900">
                      {post.title}
                    </h2>
                    
                    <p className="text-gray-600 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="mt-4 flex items-center text-blue-600">
                      <span>Davamını oxu</span>
                      <svg 
                        className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M9 5l7 7-7 7" 
                        />
                      </svg>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

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
    </main>
  );
} 