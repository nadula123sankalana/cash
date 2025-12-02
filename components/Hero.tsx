"use client";

import Image from "next/image";
import EligibilityForm from "./EligibilityForm";

export default function Hero() {
  return (
    <section className="gradient-primary min-h-[110vh] flex items-start relative overflow-hidden pt-20 sm:pt-24 pb-12 sm:pb-16 md:pb-24">
      {/* Abstract background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bg-white rounded-full top-20 right-20 w-96 h-96 opacity-5 blur-3xl"></div>
        <div className="absolute rounded-full bottom-20 left-20 w-80 h-80 bg-accent-cyan opacity-10 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-purple-500 opacity-5 rounded-full blur-3xl"></div>
      </div>

      <div className="container relative z-10 px-4 pt-6 mx-auto sm:px-6 sm:pt-8 lg:px-12 xl:px-16">
        <div className="grid items-start gap-8 sm:gap-10 md:gap-12 lg:grid-cols-2">
          {/* Left Content */}
          <div className="text-white">
            {/* Badge */}
            <div className="flex justify-center mb-4 sm:mb-6 md:justify-start">
              <span className="px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-semibold tracking-wider uppercase border rounded-full text-accent-cyan bg-white/10 backdrop-blur-sm border-white/20">
                Fast Business Funding
              </span>
            </div>

            <h1 className="mb-3 text-3xl font-bold leading-tight text-center sm:mb-4 sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading text-shadow md:text-left">
              Get the working capital for your business needs
            </h1>
            <p className="max-w-xl mx-auto mb-6 text-sm leading-relaxed text-center sm:mb-8 sm:text-base sm:text-lg md:text-xl text-text-secondary md:mx-0 md:text-left">
              Funding within{" "}
              <span className="font-semibold text-white">24–48 hours</span>,
              with{" "}
              <span className="font-semibold text-white">no hidden fees</span>{" "}
              or compounding interest— just transparent terms that work for your
              business.
            </p>

            {/* Mobile Social Proof (replaces cards on small screens) */}
            <div className="flex flex-col items-center gap-2.5 sm:gap-3 mb-5 sm:mb-6 -mt-1 sm:-mt-2 md:hidden">
              {/* Avatars row */}
              <div className="flex items-center -space-x-2.5 sm:-space-x-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="relative overflow-hidden border-2 border-white rounded-full shadow-lg w-9 h-9 sm:w-10 sm:h-10"
                  >
                    <Image
                      src={`/${i}.jpg`}
                      alt={`Customer ${i}`}
                      width={40}
                      height={40}
                      className="object-cover w-full h-full"
                    />
                  </div>
                ))}
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border-2 border-white bg-white/10 backdrop-blur-sm flex items-center justify-center text-white font-bold text-[0.55rem] sm:text-[0.6rem] shadow-lg">
                  +15K
                </div>
              </div>

              {/* Stars + rating */}
              <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm">
                <div className="flex gap-0.5 sm:gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-xs font-semibold text-white sm:text-sm">
                  5.0
                </span>
              </div>

              {/* Trusted by text */}
              <div className="text-[0.7rem] sm:text-xs text-text-secondary text-center">
                Trusted by <span className="font-bold text-white">20,000+</span>{" "}
                businesses
              </div>
            </div>

            {/* Key Benefits (hidden on mobile) */}
            <div className="flex-wrap hidden gap-4 mb-10 md:flex">
              <div className="flex items-center gap-2 px-4 py-2 border rounded-lg bg-white/10 backdrop-blur-sm border-white/20">
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
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
                <span className="text-sm font-medium">24-Hour Approval</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 border rounded-lg bg-white/10 backdrop-blur-sm border-white/20">
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
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="text-sm font-medium">Flexible Terms</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 border rounded-lg bg-white/10 backdrop-blur-sm border-white/20">
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
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
                <span className="text-sm font-medium">No Hidden Fees</span>
              </div>
            </div>

            {/* Social Proof Section (desktop and tablet only) */}
            <div className="hidden pt-8 mt-10 border-t border-white/20 md:block">
              <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center">
                {/* Customer Avatars */}
                <div className="flex items-center -space-x-3">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div
                      key={i}
                      className="relative w-12 h-12 overflow-hidden border-2 border-white rounded-full shadow-lg"
                    >
                      <Image
                        src={`/${i}.jpg`}
                        alt={`Customer ${i}`}
                        width={48}
                        height={48}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  ))}
                  <div className="flex items-center justify-center w-12 h-12 text-xs font-bold text-white border-2 border-white rounded-full shadow-lg bg-white/10 backdrop-blur-sm">
                    +15K
                  </div>
                </div>

                {/* Rating & Stats */}
                <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                  <div className="flex items-center gap-2">
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
                    <span className="text-sm font-semibold text-white">
                      5.0
                    </span>
                  </div>

                  <div className="hidden w-px h-6 sm:block bg-white/30"></div>

                  <div className="flex items-center gap-2">
                    <span className="text-sm text-text-secondary">
                      Trusted by
                    </span>
                    <span className="text-lg font-bold text-white">
                      20,000+
                    </span>
                    <span className="text-sm text-text-secondary">
                      businesses
                    </span>
                  </div>
                </div>
              </div>

              {/* Trust Badge */}
              <div className="flex justify-center mt-6 md:justify-start">
                <div className="inline-flex items-center gap-2 px-4 py-2 border rounded-full bg-white/10 backdrop-blur-sm border-white/20">
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
                  <span className="text-sm font-medium text-white">
                    Same-Day Approval Available
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Form */}
          <div className="flex justify-center w-full -mt-4 sm:-mt-6 md:-mt-8 lg:mt-0 lg:justify-start">
            <EligibilityForm />
          </div>
        </div>
      </div>
    </section>
  );
}
