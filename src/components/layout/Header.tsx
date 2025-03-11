'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FiMenu, FiX } from 'react-icons/fi';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: 'Ana Səhifə', path: '/' },
    { name: 'Haqqımızda', path: '/about' },
    { 
      name: 'Xidmətlər', 
      path: '/services',
      submenu: [
        { name: 'SEO', path: '/services/seo' },
        { name: 'Sosial Media', path: '/services/social-media' },
        { name: 'Kontent Marketinq', path: '/services/content-marketing' }
      ]
    },
    { 
      name: 'Kurslar', 
      path: '/courses',
      submenu: [
        { name: 'SEO Kursu', path: '/seo-course' },
        { name: 'Digital Marketing', path: '/digital-marketing-course' }
      ]
    },
    { name: 'Blog', path: '/blog' },
    { name: 'Əlaqə', path: '/contact' }
  ];

  return (
    <header className="fixed w-full z-50 bg-white/80 backdrop-blur-md shadow-sm">
      {/* Marquee Section */}
      <div className="bg-gradient-primary text-white py-2 overflow-hidden">
        <div className="animate-marquee whitespace-nowrap">
          <span className="mx-4">🚀 SEO və Digital Marketing xidmətlərimizlə biznesinizi böyüdün</span>
          <span className="mx-4">📱 Sosial Media idarəetməsi</span>
          <span className="mx-4">📊 Google Analytics və Data Analizi</span>
          <span className="mx-4">💡 Peşəkar Kontent Marketinq</span>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold gradient-text">
            ClickOptimize
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.path} className="relative group">
                <Link 
                  href={item.path}
                  className={`nav-link ${pathname === item.path ? 'active' : ''}`}
                >
                  {item.name}
                </Link>
                
                {item.submenu && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                    {item.submenu.map((subitem) => (
                      <Link
                        key={subitem.path}
                        href={subitem.path}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        {subitem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4">
            {navItems.map((item) => (
              <div key={item.path}>
                <Link
                  href={item.path}
                  className={`block py-2 ${pathname === item.path ? 'text-primary' : 'text-gray-700'}`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
                
                {item.submenu && (
                  <div className="pl-4">
                    {item.submenu.map((subitem) => (
                      <Link
                        key={subitem.path}
                        href={subitem.path}
                        className="block py-2 text-sm text-gray-600 hover:text-primary"
                        onClick={() => setIsOpen(false)}
                      >
                        {subitem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header; 