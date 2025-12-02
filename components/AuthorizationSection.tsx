'use client'

export default function AuthorizationSection() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 items-start">
          {/* Left Content - Authorization Text */}
          <div className="lg:col-span-2 space-y-4 text-gray-700 text-sm leading-relaxed">
            <p>
              By submitting this application, I authorize <strong>CashAdv Capital</strong> and its <strong>Recipients</strong> to obtain consumer, personal, business, and investigative reports, including credit card processor and bank statements, from consumer reporting agencies such as TransUnion, Experian, and Equifax, and other third parties.
            </p>
            <p>
              I authorize <strong>CashAdv Capital</strong> to transmit the application form and related information to <strong>Recipients</strong>.
            </p>
            <p>
              I consent to the release of information by creditors or financial institutions to <strong>CashAdv Capital</strong> and <strong>Recipients</strong>.
            </p>
            <p>
              By providing my telephone number(s), I expressly consent to receive marketing and other calls and messages (including auto-dialed and pre-recorded calls, and SMS messages) from <strong>Recipients</strong> at the telephone number(s) I provided, even if the telephone number(s) is registered on a state or federal Do Not Call Registry. I understand that my consent for marketing calls is not required for the application and that I should not provide a cell phone number if I do not consent to receive such calls.
            </p>
          </div>
          
          {/* Right Content - SSL Security Badge */}
          <div className="lg:col-span-1 flex flex-col items-start lg:items-end">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 max-w-xs">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-blue-900 flex items-center justify-center mb-2">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <div className="text-center">
                    <p className="text-xs font-bold text-blue-900 uppercase tracking-wide">Protected</p>
                    <p className="text-xs font-semibold text-gray-600 mt-1">SSL</p>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="text-4xl font-bold text-gray-800 mb-1">SSL</div>
                  <div className="border border-gray-300 rounded px-2 py-1">
                    <p className="text-xs font-semibold text-gray-700 underline">SECURE</p>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <p className="text-sm font-bold text-gray-800 mb-1">Site Secure</p>
                <p className="text-xs text-gray-600">Bank-level security for your data.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

