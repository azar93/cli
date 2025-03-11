'use client';

import Image from 'next/image';

const testimonials = [
  {
    name: 'Əli Məmmədov',
    position: 'CEO, TechStart',
    image: '/testimonials/ali.jpg',
    text: 'Digital Marketing Expert komandası bizim biznesimizi tamamilə dəyişdi. Onların SEO və sosial media strategiyası sayəsində müştəri sayımız 3 dəfə artdı.',
  },
  {
    name: 'Ayşə Əliyeva',
    position: 'Marketing Müdiri, FashionBrand',
    image: '/testimonials/ayse.jpg',
    text: 'Professional yanaşma və nəticələrə yönəlmiş strategiya. Onlarla işləmək çox rahat və effektivdir.',
  },
  {
    name: 'Rəşad Hüseynov',
    position: 'Direktor, BuildPro',
    image: '/testimonials/resad.jpg',
    text: 'Kontent marketing strategiyamız onların köməyi ilə hazırlandı və nəticələr gözəl oldu. Mütəmadi olaraq yeni müştərilər əldə edirik.',
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Müştəri Rəyləri
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Müştərilərimizin bizim haqqımızda fikirləri
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center mb-6">
                <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 64px) 100vw, 64px"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {testimonial.name}
                  </h3>
                  <p className="text-gray-600">{testimonial.position}</p>
                </div>
              </div>
              <p className="text-gray-700 italic">"{testimonial.text}"</p>
              <div className="mt-6 flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.363 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 