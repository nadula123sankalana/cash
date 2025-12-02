"use client";

import { useState } from "react";

export default function EligibilityForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 2;

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
    // Handle form submission
    console.log("Form submitted:", formData);
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
                  <div className="relative">
                    <input
                      type="text"
                      id="businessStartDate"
                      name="businessStartDate"
                      value={formData.businessStartDate}
                      onChange={handleChange}
                      placeholder="mm/dd/yyyy"
                      maxLength={10}
                      className="w-full px-0 py-2 pr-8 text-gray-900 placeholder-gray-400 transition-colors border-0 border-b border-gray-300 focus:outline-none focus:border-gray-900"
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
                      className="absolute right-0 transform -translate-y-1/2 top-1/2 cursor-pointer"
                      aria-label="Open calendar"
                    >
                      <svg
                        className="w-5 h-5 text-gray-400"
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
                    <select
                      id="businessDebt"
                      name="businessDebt"
                      value={formData.businessDebt}
                      onChange={handleChange}
                      className="w-full px-0 py-2 text-gray-900 transition-colors bg-transparent border-0 border-b border-gray-300 appearance-none cursor-pointer focus:outline-none focus:border-gray-900"
                    >
                      <option value="">Select</option>
                      <option value="none">None</option>
                      <option value="low">Low ($0-$10k)</option>
                      <option value="medium">Medium ($10k-$50k)</option>
                      <option value="high">High ($50k+)</option>
                    </select>
                    <div className="absolute right-0 transform -translate-y-1/2 pointer-events-none top-1/2">
                      <svg
                        className="w-5 h-5 text-gray-400"
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
                    </div>
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
                    <select
                      id="creditScore"
                      name="creditScore"
                      value={formData.creditScore}
                      onChange={handleChange}
                      className="w-full px-0 py-2 text-gray-900 transition-colors bg-transparent border-0 border-b border-gray-300 appearance-none cursor-pointer focus:outline-none focus:border-gray-900"
                    >
                      <option value="">Select</option>
                      <option value="excellent">Excellent (750+)</option>
                      <option value="good">Good (700-749)</option>
                      <option value="fair">Fair (650-699)</option>
                      <option value="poor">Poor (Below 650)</option>
                    </select>
                    <div className="absolute right-0 transform -translate-y-1/2 pointer-events-none top-1/2">
                      <svg
                        className="w-5 h-5 text-gray-400"
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
                    </div>
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
                    <select
                      id="businessType"
                      name="businessType"
                      value={formData.businessType}
                      onChange={handleChange}
                      className="w-full px-0 py-2 text-gray-900 transition-colors bg-transparent border-0 border-b border-gray-300 appearance-none cursor-pointer focus:outline-none focus:border-gray-900"
                    >
                      <option value="">Select</option>
                      <option value="cpa-accountant">CPA / Accountant Office</option>
                      <option value="restaurant">Restaurant</option>
                      <option value="retail">Retail</option>
                      <option value="construction">Construction</option>
                      <option value="healthcare">Healthcare</option>
                      <option value="other">Other</option>
                    </select>
                    <div className="absolute right-0 transform -translate-y-1/2 pointer-events-none top-1/2">
                      <svg
                        className="w-5 h-5 text-gray-400"
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
                    </div>
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
                    <select
                      id="bankAccountType"
                      name="bankAccountType"
                      value={formData.bankAccountType}
                      onChange={handleChange}
                      className="w-full px-0 py-2 text-gray-900 transition-colors bg-transparent border-0 border-b border-gray-300 appearance-none cursor-pointer focus:outline-none focus:border-gray-900"
                    >
                      <option value="">Select</option>
                      <option value="checking">Checking</option>
                      <option value="savings">Savings</option>
                      <option value="both">Both</option>
                    </select>
                    <div className="absolute right-0 transform -translate-y-1/2 pointer-events-none top-1/2">
                      <svg
                        className="w-5 h-5 text-gray-400"
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
                    </div>
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
