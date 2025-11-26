'use client'

import Image from 'next/image'

export default function Testimonials() {
  const testimonials = [
    {
      quote: 'The application process was incredibly smooth. We were approved within 48 hours.',
      name: 'Michael Torres',
      company: 'Metro Electronics',
      role: 'CEO',
      rating: 5,
      bgColor: 'bg-white',
      image: '/6.jpeg',
    },
    {
      quote: 'As a seasonal business, we needed funding that understood our revenue fluctuations.',
      name: 'David Chen',
      company: 'Alpine Outfitters',
      role: 'Founder',
      rating: 5,
      bgColor: 'bg-yellow-50',
      image: '/7.jpeg',
    },
    {
      quote: 'CashAdv Capital provided the funding we needed to expand our restaurant when traditional banks said no.',
      name: 'Sarah Johnson',
      company: 'Coastal Kitchen',
      role: 'Owner',
      rating: 5,
      bgColor: 'bg-purple-50',
      image: '/8.avif',
    },
    {
      quote: 'What impressed me most was the transparency. No hidden fees, clear terms.',
      name: 'Jessica Williams',
      company: 'Bloom Boutique',
      role: 'Director',
      rating: 5,
      bgColor: 'bg-blue-50',
      image: '/9.avif',
    },
    {
      quote: 'When our equipment suddenly failed, we needed capital fast. Uplyft delivered.',
      name: 'Robert Miller',
      company: 'Precision Manufacturing',
      role: 'Operations',
      rating: 5,
      bgColor: 'bg-green-50',
      image: '/10.jpeg',
    },
  ]

  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content - Social Proof & Header */}
          <div className="space-y-8">
            {/* Social Proof Header */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <div className="flex items-center -space-x-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="w-12 h-12 rounded-full border-2 border-white overflow-hidden shadow-md relative"
                  >
                    <Image
                      src={`/${i}.jpg`}
                      alt={`Customer ${i}`}
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              
              <div className="flex items-center gap-3">
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-gray-900 font-bold text-base">Loved by 20K+ customers</span>
              </div>
            </div>
            
            {/* Main Heading */}
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-gray-900 mb-6 leading-tight">
                What Our Clients Say
              </h2>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8">
                Don't just take our word for it. Hear from businesses that have successfully grown with our funding solutions.
              </p>
            </div>
            
            {/* CTA Button */}
            <a 
              href="https://www.google.com/maps/place/Uplyft+Capital/@25.9333042,-80.1225759,17z/data=!3m1!4b1!4m6!3m5!1s0x88d9a5496767ed4b:0x8dc98634f9b08aac!8m2!3d25.9333042!4d-80.1225759!16s%2Fg%2F11g8cv_cny?entry=ttu&g_ep=EgoyMDI1MTExNy4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-base md:text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <span className="relative z-10">Check Our Reviews</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
          </div>
          
          {/* Right Content - Testimonial Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`${testimonial.bgColor} p-6 rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
              >
                {/* Client Info */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-gray-200 relative">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={40}
                      height={40}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="font-heading font-bold text-gray-900 text-sm">
                      {testimonial.name}
                    </p>
                    <p className="text-gray-600 text-xs">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
                
                {/* Rating Stars */}
                <div className="flex gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                
                {/* Quote */}
                <p className="text-gray-700 text-sm leading-relaxed">
                  {testimonial.quote}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
