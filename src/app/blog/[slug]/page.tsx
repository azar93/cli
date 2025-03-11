import { blogPosts } from '@/data/blogPosts';
import Image from 'next/image';
import { notFound } from 'next/navigation';

interface PageProps {
  params: {
    slug: string;
  };
}

export default function BlogPost({ params }: PageProps) {
  const post = blogPosts.find(post => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>
        <div className="flex items-center text-gray-600 mb-6">
          <span>{post.author}</span>
          <span className="mx-2">•</span>
          <span>{new Date(post.date).toLocaleDateString('az-AZ')}</span>
          <span className="mx-2">•</span>
          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
            {post.category}
          </span>
        </div>
        <div className="relative w-full h-[400px] rounded-lg overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      <div className="prose prose-lg max-w-none">
        {post.content.split('\n').map((paragraph, index) => (
          <p key={index} className="mb-4">
            {paragraph.trim()}
          </p>
        ))}
      </div>
    </article>
  );
}

// Statik yolları generasiya etmək üçün
export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
} 