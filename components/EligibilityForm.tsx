"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function EligibilityForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 2;
  const router = useRouter();

  const [formData, setFormData] = useState({
    // Step 1 - Business Info
    businessStartDate: "",
    businessDebt: "",
    businessType: "",
    creditScore: "",
    bankAccountType: "",
    // Step 2 - Personal Info
    firstName: "",
    lastName: "",
    email: "",
    cell: "",
    desiredAmount: "",
  });

  const businessTypeOptions = [
    { value: "cpa-accountant", label: "CPA / Accountant Office" },
    { value: "restaurant", label: "Restaurant" },
    { value: "retail", label: "Retail" },
    { value: "construction", label: "Construction" },
    { value: "healthcare", label: "Healthcare" },
    { value: "other", label: "Other" },
  ];

  const businessDebtOptions = [
    { value: "none", label: "None" },
    { value: "low", label: "Low ($0-$10k)" },
    { value: "medium", label: "Medium ($10k-$50k)" },
    { value: "high", label: "High ($50k+)" },
  ];

  const creditScoreOptions = [
    { value: "excellent", label: "Excellent (750+)" },
    { value: "good", label: "Good (700-749)" },
    { value: "fair", label: "Fair (650-699)" },
    { value: "poor", label: "Poor (Below 650)" },
  ];

  const bankAccountTypeOptions = [
    { value: "checking", label: "Checking" },
    { value: "savings", label: "Savings" },
    { value: "both", label: "Both" },
  ];

  const [isBusinessTypeOpen, setIsBusinessTypeOpen] = useState(false);
  const [isBusinessDebtOpen, setIsBusinessDebtOpen] = useState(false);
  const [isCreditScoreOpen, setIsCreditScoreOpen] = useState(false);
  const [isBankAccountTypeOpen, setIsBankAccountTypeOpen] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    
    // Format date input for businessStartDate
    if (name === 'businessStartDate' && e.target.type === 'text') {
      let formattedValue = value.replace(/\D/g, ''); // Remove non-digits
      
      if (formattedValue.length > 0) {
        if (formattedValue.length <= 2) {
          formattedValue = formattedValue;
        } else if (formattedValue.length <= 4) {
          formattedValue = `${formattedValue.slice(0, 2)}/${formattedValue.slice(2)}`;
        } else {
          formattedValue = `${formattedValue.slice(0, 2)}/${formattedValue.slice(2, 4)}/${formattedValue.slice(4, 8)}`;
        }
      }
      
      setFormData((prev) => ({
        ...prev,
        [name]: formattedValue,
      }));
    } else if (name === 'businessStartDate' && e.target.type === 'date') {
      // Convert date input to mm/dd/yyyy format
      if (value) {
        const date = new Date(value);
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        const year = date.getFullYear();
        const formattedDate = `${month}/${day}/${year}`;
        setFormData((prev) => ({
          ...prev,
          [name]: formattedDate,
        }));
      }
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };
  
  const handleDateIconClick = () => {
    const dateInput = document.getElementById('businessStartDateHidden') as HTMLInputElement;
    if (dateInput) {
      // Convert current mm/dd/yyyy to yyyy-mm-dd format for date input
      if (formData.businessStartDate) {
        const parts = formData.businessStartDate.split('/');
        if (parts.length === 3) {
          const [month, day, year] = parts;
          dateInput.value = `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
        }
      }
      // Try to show picker, fallback to click if not available
      if (dateInput.showPicker) {
        dateInput.showPicker();
      } else {
        dateInput.focus();
        dateInput.click();
      }
    }
  };
  
  const handleHiddenDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value) {
      const date = new Date(e.target.value);
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      const year = date.getFullYear();
      const formattedDate = `${month}/${day}/${year}`;
      setFormData((prev) => ({
        ...prev,
        businessStartDate: formattedDate,
      }));
    }
  };

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Track Lead event if Facebook Pixel is available
    if (typeof window !== "undefined" && (window as any).fbq) {
      (window as any).fbq("track", "Lead", {
        content_name: "Funding Eligibility Form",
        content_category: "Form Submission",
      });
    }

    // Navigate to thank-you page
    router.push("/thank-you");
  };

  const progressPercentage = (currentStep / totalSteps) * 100;

  return (
    <div className="bg-white rounded-2xl shadow-2xl p-8 lg:p-10 w-full max-w-[40rem] mx-auto lg:mx-0">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-600">
            Step {currentStep} of {totalSteps}
          </span>
          <span className="text-sm font-medium text-gray-600">
            {Math.round(progressPercentage)}%
          </span>
        </div>
        <div className="w-full h-2 overflow-hidden bg-gray-200 rounded-full">
          <div
            className="h-full transition-all duration-500 ease-out bg-blue-900 rounded-full"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
      </div>

      <form
        onSubmit={currentStep === totalSteps ? handleSubmit : handleNext}
        className="min-h-[400px] w-full"
      >
        {/* Step 1 - Business Information */}
        {currentStep === 1 && (
          <div className="w-full space-y-6 animate-fadeIn">
            <div className="grid w-full gap-6 md:grid-cols-2">
              {/* Left Column */}
              <div className="space-y-6">
                {/* Business Start date */}
                <div>
                  <label
                    htmlFor="businessStartDate"
                    className="block mb-2 font-medium text-gray-700"
                  >
                    Business Start date
                  </label>
                  <div className="relative group">
                    <input
                      type="text"
                      id="businessStartDate"
                      name="businessStartDate"
                      value={formData.businessStartDate}
                      onChange={handleChange}
                      placeholder="mm/dd/yyyy"
                      maxLength={10}
                      className="w-full px-0 py-2 pr-8 text-gray-900 placeholder-gray-400 transition-all duration-300 border-0 border-b-2 border-gray-300 focus:outline-none focus:border-blue-600 hover:border-purple-400"
                    />
                    <input
                      type="date"
                      id="businessStartDateHidden"
                      onChange={handleHiddenDateChange}
                      className="absolute opacity-0 pointer-events-none w-0 h-0"
                    />
                    <button
                      type="button"
                      onClick={handleDateIconClick}
                      className="absolute right-0 transform -translate-y-1/2 top-1/2 cursor-pointer transition-all duration-300 hover:scale-110"
                      aria-label="Open calendar"
                    >
                      <svg
                        className="w-5 h-5 text-gray-400 group-hover:text-purple-500 transition-colors duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Business Debt */}
                <div>
                  <label
                    htmlFor="businessDebt"
                    className="block mb-2 font-medium text-gray-700"
                  >
                    Business Debt
                  </label>
                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => setIsBusinessDebtOpen((open) => !open)}
                      className="w-full flex items-center justify-between px-0 py-2 text-left text-gray-900 border-0 border-b-2 border-gray-300 cursor-pointer transition-all duration-300 focus:outline-none focus:border-blue-600 hover:border-purple-400"
                    >
                      <span className={formData.businessDebt ? "" : "text-gray-400"}>
                        {formData.businessDebt
                          ? businessDebtOptions.find(
                              (opt) => opt.value === formData.businessDebt
                            )?.label
                          : "Select"}
                      </span>
                      <svg
                        className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                          isBusinessDebtOpen ? "rotate-180 text-purple-500" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    {isBusinessDebtOpen && (
                      <div className="absolute z-30 w-full mt-2 max-h-60 overflow-y-auto bg-white rounded-xl shadow-xl border border-gray-100">
                        {businessDebtOptions.map((option) => (
                          <button
                            key={option.value}
                            type="button"
                            onClick={() => {
                              setFormData((prev) => ({
                                ...prev,
                                businessDebt: option.value,
                              }));
                              setIsBusinessDebtOpen(false);
                            }}
                            className={`w-full px-4 py-2.5 text-left text-sm transition-colors duration-200 hover:bg-blue-50 hover:text-blue-700 ${
                              formData.businessDebt === option.value
                                ? "bg-blue-50 text-blue-700 font-semibold"
                                : "text-gray-700"
                            }`}
                          >
                            {option.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Credit Score */}
                <div>
                  <label
                    htmlFor="creditScore"
                    className="block mb-2 font-medium text-gray-700"
                  >
                    Credit Score
                  </label>
                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => setIsCreditScoreOpen((open) => !open)}
                      className="w-full flex items-center justify-between px-0 py-2 text-left text-gray-900 border-0 border-b-2 border-gray-300 cursor-pointer transition-all duration-300 focus:outline-none focus:border-blue-600 hover:border-purple-400"
                    >
                      <span className={formData.creditScore ? "" : "text-gray-400"}>
                        {formData.creditScore
                          ? creditScoreOptions.find(
                              (opt) => opt.value === formData.creditScore
                            )?.label
                          : "Select"}
                      </span>
                      <svg
                        className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                          isCreditScoreOpen ? "rotate-180 text-purple-500" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    {isCreditScoreOpen && (
                      <div className="absolute z-30 w-full mt-2 max-h-60 overflow-y-auto bg-white rounded-xl shadow-xl border border-gray-100">
                        {creditScoreOptions.map((option) => (
                          <button
                            key={option.value}
                            type="button"
                            onClick={() => {
                              setFormData((prev) => ({
                                ...prev,
                                creditScore: option.value,
                              }));
                              setIsCreditScoreOpen(false);
                            }}
                            className={`w-full px-4 py-2.5 text-left text-sm transition-colors duration-200 hover:bg-blue-50 hover:text-blue-700 ${
                              formData.creditScore === option.value
                                ? "bg-blue-50 text-blue-700 font-semibold"
                                : "text-gray-700"
                            }`}
                          >
                            {option.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                {/* What does the business do? */}
                <div>
                  <label
                    htmlFor="businessType"
                    className="block mb-2 font-medium text-gray-700"
                  >
                    What does the business do?
                  </label>
                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => setIsBusinessTypeOpen((open) => !open)}
                      className="w-full flex items-center justify-between px-0 py-2 text-left text-gray-900 border-0 border-b-2 border-gray-300 cursor-pointer transition-all duration-300 focus:outline-none focus:border-blue-600 hover:border-purple-400"
                    >
                      <span className={formData.businessType ? "" : "text-gray-400"}>
                        {formData.businessType
                          ? businessTypeOptions.find(
                              (opt) => opt.value === formData.businessType
                            )?.label
                          : "Select"}
                      </span>
                      <svg
                        className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                          isBusinessTypeOpen ? "rotate-180 text-purple-500" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    {isBusinessTypeOpen && (
                      <div className="absolute z-30 w-full mt-2 max-h-60 overflow-y-auto bg-white rounded-xl shadow-xl border border-gray-100">
                        {businessTypeOptions.map((option) => (
                          <button
                            key={option.value}
                            type="button"
                            onClick={() => {
                              setFormData((prev) => ({
                                ...prev,
                                businessType: option.value,
                              }));
                              setIsBusinessTypeOpen(false);
                            }}
                            className={`w-full px-4 py-2.5 text-left text-sm transition-colors duration-200 hover:bg-blue-50 hover:text-blue-700 ${
                              formData.businessType === option.value
                                ? "bg-blue-50 text-blue-700 font-semibold"
                                : "text-gray-700"
                            }`}
                          >
                            {option.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Bank Account Type */}
                <div>
                  <label
                    htmlFor="bankAccountType"
                    className="block mb-2 font-medium text-gray-700"
                  >
                    Bank Account Type
                  </label>
                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => setIsBankAccountTypeOpen((open) => !open)}
                      className="w-full flex items-center justify-between px-0 py-2 text-left text-gray-900 border-0 border-b-2 border-gray-300 cursor-pointer transition-all duration-300 focus:outline-none focus:border-blue-600 hover:border-purple-400"
                    >
                      <span className={formData.bankAccountType ? "" : "text-gray-400"}>
                        {formData.bankAccountType
                          ? bankAccountTypeOptions.find(
                              (opt) => opt.value === formData.bankAccountType
                            )?.label
                          : "Select"}
                      </span>
                      <svg
                        className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                          isBankAccountTypeOpen ? "rotate-180 text-purple-500" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    {isBankAccountTypeOpen && (
                      <div className="absolute z-30 w-full mt-2 max-h-60 overflow-y-auto bg-white rounded-xl shadow-xl border border-gray-100">
                        {bankAccountTypeOptions.map((option) => (
                          <button
                            key={option.value}
                            type="button"
                            onClick={() => {
                              setFormData((prev) => ({
                                ...prev,
                                bankAccountType: option.value,
                              }));
                              setIsBankAccountTypeOpen(false);
                            }}
                            className={`w-full px-4 py-2.5 text-left text-sm transition-colors duration-200 hover:bg-blue-50 hover:text-blue-700 ${
                              formData.bankAccountType === option.value
                                ? "bg-blue-50 text-blue-700 font-semibold"
                                : "text-gray-700"
                            }`}
                          >
                            {option.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Step 2 - Personal Information */}
        {currentStep === 2 && (
          <div className="w-full space-y-6 animate-fadeIn">
            <div className="grid w-full gap-6 md:grid-cols-2">
              {/* Left Column */}
              <div className="space-y-6">
                {/* First Name */}
                <div>
                  <label
                    htmlFor="firstName"
                    className="block mb-2 font-medium text-gray-700"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="First Name*"
                    required
                    className="w-full px-0 py-2 text-gray-900 placeholder-gray-400 transition-colors border-0 border-b border-gray-300 focus:outline-none focus:border-gray-900"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email*"
                    required
                    className="w-full px-0 py-2 text-gray-900 placeholder-gray-400 transition-colors border-0 border-b border-gray-300 focus:outline-none focus:border-gray-900"
                  />
                </div>

                {/* Cell */}
                <div>
                  <label
                    htmlFor="cell"
                    className="block mb-2 font-medium text-gray-700"
                  >
                    Cell
                  </label>
                  <input
                    type="tel"
                    id="cell"
                    name="cell"
                    value={formData.cell}
                    onChange={handleChange}
                    placeholder="Cell*"
                    required
                    className="w-full px-0 py-2 text-gray-900 placeholder-gray-400 transition-colors border-0 border-b border-gray-300 focus:outline-none focus:border-gray-900"
                  />
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                {/* Last Name */}
                <div>
                  <label
                    htmlFor="lastName"
                    className="block mb-2 font-medium text-gray-700"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Last Name*"
                    required
                    className="w-full px-0 py-2 text-gray-900 placeholder-gray-400 transition-colors border-0 border-b border-gray-300 focus:outline-none focus:border-gray-900"
                  />
                </div>

                {/* Desired Amount */}
                <div>
                  <label
                    htmlFor="desiredAmount"
                    className="block mb-2 font-medium text-gray-700"
                  >
                    Desired Amount
                  </label>
                  <input
                    type="text"
                    id="desiredAmount"
                    name="desiredAmount"
                    value={formData.desiredAmount}
                    onChange={handleChange}
                    placeholder="Amount ($5-$500k)"
                    className="w-full px-0 py-2 text-gray-900 placeholder-gray-400 transition-colors border-0 border-b border-gray-300 focus:outline-none focus:border-gray-900"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex gap-4 pt-6">
          {currentStep > 1 && (
            <button
              type="button"
              onClick={handleBack}
              className="flex-1 px-8 py-4 font-bold text-gray-700 transition-all duration-300 bg-gray-100 rounded-lg shadow-md button-hover hover:bg-gray-200"
            >
              Back
            </button>
          )}
          <button
            type="submit"
            className={`${
              currentStep === 1 ? "w-full" : "flex-1"
            } px-8 py-4 font-bold text-white bg-gray-900 rounded-lg shadow-lg button-hover hover:bg-gray-800 transition-all duration-300`}
          >
            {currentStep === totalSteps ? "Check Eligibility" : "Next"}
          </button>
        </div>
      </form>
    </div>
  );
}
