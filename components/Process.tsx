'use client'

export default function Process() {
  const steps = [
    {
      number: '01',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      ),
      title: 'Simple Application',
      description: 'Fill out our quick online form. No complicated paperwork or lengthy documentation required.',
    },
    {
      number: '02',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Fast Approval',
      description: 'Get a decision in as little as 24 hours. Our streamlined process means you get answers fast.',
    },
    {
      number: '03',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Receive Funds',
      description: 'Once approved, funds are deposited directly into your account. Start growing your business immediately.',
    },
  ]

  return (
    <section id="how-it-works" className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent-cyan opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 opacity-5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="text-accent-cyan font-semibold text-sm uppercase tracking-wider">Our Process</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-gray-900 mb-6 text-shadow">
            How It Works
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Three simple steps to get the funding you need
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group relative text-center bg-white/80 backdrop-blur-sm p-8 lg:p-10 rounded-3xl shadow-xl border border-white/50 card-hover"
            >
              {/* Decorative gradient border on hover */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-accent-cyan/0 to-purple-500/0 group-hover:from-accent-cyan/10 group-hover:to-purple-500/10 transition-all duration-500 -z-10"></div>
              
              {/* Icon Container */}
              <div className="inline-flex items-center justify-center w-24 h-24 rounded-2xl bg-gradient-to-br from-accent-cyan to-purple-600 text-white mb-8 relative shadow-2xl transform group-hover:scale-110 transition-transform duration-300">
                <span className="absolute -top-3 -right-3 text-4xl font-heading font-bold text-accent-cyan opacity-20 group-hover:opacity-30 transition-opacity">
                  {step.number}
                </span>
                <div className="relative z-10 transform group-hover:rotate-6 transition-transform duration-300">
                  {step.icon}
                </div>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-gray-900 mb-4 group-hover:text-accent-cyan transition-colors">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                {step.description}
              </p>
              
              {/* Connecting line for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-6 lg:-right-12 w-12 lg:w-24 h-0.5 bg-gradient-to-r from-accent-cyan to-transparent">
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-accent-cyan rounded-full"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
