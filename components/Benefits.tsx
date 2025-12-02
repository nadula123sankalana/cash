'use client'

export default function Benefits() {
  const benefits = [
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      iconColor: 'from-purple-100 to-purple-200',
      title: 'Flexible Funding',
      description: 'Access working capital tailored to your business needs',
      features: [
        'Funding up to $5,000,000',
        'No fixed monthly payments',
        'Use funds for any business purpose',
      ],
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      iconColor: 'from-purple-100 to-purple-200',
      title: 'Quick Process',
      description: 'Get approved and funded faster than traditional loans',
      features: [
        '24-48 hour approvals',
        'Simple application process',
        'Minimal documentation needed',
      ],
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      iconColor: 'from-blue-100 to-blue-200',
      title: 'Easy Qualification',
      description: 'Flexible requirements make it easier to qualify',
      features: [
        'No collateral required',
        'Bad credit accepted',
        'Based on business performance',
      ],
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      iconColor: 'from-green-100 to-green-200',
      title: 'Flexible Repayment',
      description: 'Pay based on your daily credit card sales',
      features: [
        'Revenue-based payments',
        'Adjust with your cash flow',
        'No hidden fees',
      ],
    },
  ]

  return (
    <section id="benefits" className="py-24 gradient-primary relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 bg-white opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-accent-cyan opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500 opacity-5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 text-shadow">
            Simple & Flexible Funding Solutions
          </h2>
          <p className="text-xl md:text-2xl text-text-secondary max-w-3xl mx-auto leading-relaxed mb-8">
            Get the working capital you need with our streamlined merchant cash advance program. Quick approvals, flexible terms, and funding up to $5,000,000.
          </p>
          
          {/* Informational Badge */}
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-purple-200/20 backdrop-blur-sm rounded-full border border-purple-300/30 shadow-sm">
            <svg className="w-5 h-5 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-white font-semibold text-sm md:text-base">
              No Hard Credit Check Required
            </span>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group relative bg-white p-8 lg:p-10 rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              {/* Icon Container */}
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${benefit.iconColor} flex items-center justify-center text-gray-700 mb-6 group-hover:scale-105 transition-all duration-300`}>
                {benefit.icon}
              </div>
              
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                {benefit.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed mb-6 text-base">
                {benefit.description}
              </p>
              
              {/* Feature List with Checkmarks */}
              <ul className="space-y-3">
                {benefit.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                      <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700 text-sm leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
