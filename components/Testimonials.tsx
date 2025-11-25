'use client'

export default function Testimonials() {
  const testimonials = [
    {
      quote: 'Uplyft Capital saved our business. We needed funds quickly to fulfill a large order, and they delivered in 24 hours. The process was seamless and transparent.',
      name: 'Sarah Chen',
      company: 'Urban Goods Co.',
      role: 'CEO',
      rating: 5,
    },
    {
      quote: 'Finally, a financing company that understands small businesses. Flexible terms, fast approval, and no runaround. Highly recommend!',
      name: 'Michael Rodriguez',
      company: 'TechStart Solutions',
      role: 'Founder',
      rating: 5,
    },
  ]

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-72 h-72 bg-accent-cyan opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-500 opacity-5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="text-accent-cyan font-semibold text-sm uppercase tracking-wider">Testimonials</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-gray-900 mb-6 text-shadow">
            What Our Clients Say
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative bg-white/90 backdrop-blur-sm p-8 lg:p-10 rounded-3xl shadow-2xl border border-gray-100 card-hover"
            >
              {/* Decorative quote mark */}
              <div className="absolute top-6 left-8 text-7xl text-accent-cyan opacity-10 font-serif leading-none">
                "
              </div>
              
              {/* Rating stars */}
              <div className="flex gap-1 mb-6 relative z-10">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              
              <p className="text-gray-700 text-lg leading-relaxed mb-8 relative z-10">
                {testimonial.quote}
              </p>
              
              <div className="border-t border-gray-200 pt-6 relative z-10">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent-cyan to-purple-600 flex items-center justify-center text-white font-bold text-xl shadow-lg">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-heading font-bold text-gray-900 text-lg">
                      {testimonial.name}
                    </p>
                    <p className="text-gray-600">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Hover gradient effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-accent-cyan/0 to-purple-500/0 group-hover:from-accent-cyan/5 group-hover:to-purple-500/5 transition-all duration-500 -z-10"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
