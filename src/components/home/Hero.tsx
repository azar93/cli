'use client';

import Link from 'next/link';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Digital Marketing-də Peşəkar Həllər
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
          Biznesinizi növbəti səviyyəyə qaldırmaq üçün professional digital marketing xidmətləri təqdim edirik.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            Bizimlə Əlaqə
          </Link>
          <Link
            href="/services"
            className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
          >
            Xidmətlərimiz
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero; 