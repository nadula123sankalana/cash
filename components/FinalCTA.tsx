"use client";

export default function FinalCTA() {
  return (
    <section className="relative py-24 overflow-hidden gradient-primary">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bg-white rounded-full top-20 right-20 w-96 h-96 opacity-5 blur-3xl"></div>
        <div className="absolute rounded-full bottom-20 left-20 w-80 h-80 bg-accent-cyan opacity-10 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500 opacity-5 rounded-full blur-3xl"></div>
      </div>

      <div className="container relative z-10 px-6 mx-auto sm:px-8 lg:px-12 xl:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold tracking-wider uppercase text-accent-cyan">
              Get Started Today
            </span>
          </div>
          <h2 className="mb-12 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl font-heading text-shadow">
            Ready to Uplift Your Business?
          </h2>

          <div className="flex flex-col items-center justify-center gap-4 mb-12 sm:flex-row">
            <a
              href="#how-it-works"
              className="relative w-full px-10 py-5 overflow-hidden text-lg font-bold text-gray-900 shadow-2xl group bg-accent-cyan md:text-xl md:px-14 md:py-6 rounded-xl button-hover sm:w-auto"
            >
              <span className="relative z-10">Apply Now</span>
              <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-r from-accent-cyan to-cyan-400 group-hover:opacity-100"></div>
            </a>
          </div>

          {/* Trust Features */}
          <div className="flex flex-col items-center justify-center gap-6 text-sm sm:flex-row text-text-secondary md:text-base">
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-accent-cyan"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>No obligation</span>
            </div>
            <div className="hidden w-px h-4 sm:block bg-white/30"></div>
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-accent-cyan"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>24-hour decision</span>
            </div>
            <div className="hidden w-px h-4 sm:block bg-white/30"></div>
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-accent-cyan"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
              <span>Secure & confidential</span>
            </div>
          </div>

          {/* Additional Trust Badge */}
          <div className="inline-flex items-center gap-2 px-6 py-3 mt-10 border rounded-full shadow-sm bg-white/10 backdrop-blur-sm border-white/20">
            <svg
              className="w-5 h-5 text-accent-cyan"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span className="text-sm font-medium text-white md:text-base">
              Same-Day Approval Available
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
