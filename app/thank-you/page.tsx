import Link from 'next/link';

export default function ThankYouPage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4 py-16 bg-gradient-to-b from-blue-600 via-blue-500 to-sky-400">
      {/* Subtle background orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-10 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-300/20 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-xl w-full bg-white rounded-3xl shadow-2xl px-6 py-10 sm:px-10 sm:py-12 text-center">
        {/* Icon */}
        <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 rounded-full bg-green-100">
          <svg
            className="w-8 h-8 text-green-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold mb-4 text-gray-900">
          Thank you for your submission!
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-8 leading-relaxed">
          We’ve received your information. A member of our team will review your details and
          get in touch with you shortly.
        </p>

        <Link
          href="/"
          className="inline-flex items-center justify-center px-8 sm:px-10 py-3 sm:py-3.5 rounded-full bg-blue-600 text-white font-semibold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700"
        >
          Return to homepage
        </Link>
      </div>
    </main>
  );
}


