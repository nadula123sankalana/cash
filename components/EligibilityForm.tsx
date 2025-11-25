"use client";

import { useState } from "react";

export default function EligibilityForm() {
  const [formData, setFormData] = useState({
    desiredAmount: "",
    businessStartDate: "",
    businessDebt: "",
    businessType: "",
    creditScore: "",
    bankAccountType: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <div className="bg-white rounded-2xl shadow-2xl p-8 lg:p-10 max-w-[30rem] ml-auto lg:ml-16">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid gap-6 md:grid-cols-2">
          {/* Left Column */}
          <div className="space-y-6">
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
                className="w-full px-0 py-2 text-gray-900 placeholder-gray-400 border-0 border-b border-gray-300 focus:outline-none focus:border-gray-900"
              />
            </div>

            {/* Business Start date */}
            <div>
              <label
                htmlFor="businessStartDate"
                className="block mb-2 font-medium text-gray-700"
              >
                Business Start date
              </label>
              <input
                type="text"
                id="businessStartDate"
                name="businessStartDate"
                value={formData.businessStartDate}
                onChange={handleChange}
                placeholder="mm/dd/yyyy"
                className="w-full px-0 py-2 text-gray-900 placeholder-gray-400 border-0 border-b border-gray-300 focus:outline-none focus:border-gray-900"
              />
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
                  className="w-full px-0 py-2 text-gray-900 bg-transparent border-0 border-b border-gray-300 appearance-none cursor-pointer focus:outline-none focus:border-gray-900"
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
                <input
                  type="text"
                  id="businessType"
                  name="businessType"
                  value={formData.businessType}
                  onChange={handleChange}
                  placeholder=""
                  className="w-full px-0 py-2 pr-8 text-gray-900 placeholder-gray-400 border-0 border-b border-gray-300 focus:outline-none focus:border-gray-900"
                />
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
                  className="w-full px-0 py-2 text-gray-900 bg-transparent border-0 border-b border-gray-300 appearance-none cursor-pointer focus:outline-none focus:border-gray-900"
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
                  className="w-full px-0 py-2 text-gray-900 bg-transparent border-0 border-b border-gray-300 appearance-none cursor-pointer focus:outline-none focus:border-gray-900"
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

        {/* Submit Button */}
        <div className="pt-4">
          <button
            type="submit"
            className="w-full px-8 py-4 font-semibold text-white transition-colors bg-gray-900 rounded-lg shadow-lg hover:bg-gray-800"
          >
            Check Eligibility
          </button>
        </div>
      </form>
    </div>
  );
}
