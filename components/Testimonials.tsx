'use client'

export default function Testimonials() {
  const testimonials = [
    {
      quote: 'Uplyft Capital saved our business. We needed funds quickly to fulfill a large order, and they delivered in 24 hours. The process was seamless and transparent.',
      name: 'Sarah Chen',
      company: 'Urban Goods Co.',
      role: 'CEO',
    },
    {
      quote: 'Finally, a financing company that understands small businesses. Flexible terms, fast approval, and no runaround. Highly recommend!',
      name: 'Michael Rodriguez',
      company: 'TechStart Solutions',
      role: 'Founder',
    },
  ]

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-2xl shadow-md card-hover relative"
            >
              <div className="absolute top-4 left-6 text-6xl text-accent-cyan opacity-20 font-serif leading-none">
                "
              </div>
              <p className="text-gray-700 text-lg leading-relaxed mb-6 relative z-10 pt-4">
                {testimonial.quote}
              </p>
              <div className="border-t border-gray-200 pt-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-white font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-heading font-bold text-gray-900">
                      {testimonial.name}
                    </p>
                    <p className="text-gray-600 text-sm">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

