import React from "react";
import Navbar from "./Navbar";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="pt-20 pb-16 px-4">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              Privacy Policy
            </h1>
            <p className="text-gray-600">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>

          {/* Content */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="prose prose-lg max-w-none">
              
              <section className="mb-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-3">
                  About This Policy
                </h2>
                <p className="text-gray-600">
                  Digital Innovations (dgtlinnovations.in) is committed to protecting your privacy. 
                  This policy explains how we collect, use, and protect your information when you visit our website or use our services.
                </p>
              </section>

              <section className="mb-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-3">
                  Information We Collect
                </h2>
                <p className="text-gray-600 mb-2">
                  We collect information you provide when you:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Contact us through our website forms</li>
                  <li>Send us emails or call us</li>
                  <li>Request quotes or information about our services</li>
                  <li>Visit our website (basic analytics data)</li>
                </ul>
              </section>

              <section className="mb-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-3">
                  How We Use Your Information
                </h2>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>To respond to your inquiries and provide customer support</li>
                  <li>To deliver our web development and digital services</li>
                  <li>To improve our website and services</li>
                  <li>To send project updates and service information</li>
                </ul>
              </section>

              <section className="mb-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-3">
                  Data Protection
                </h2>
                <p className="text-gray-600">
                  We do not sell, trade, or share your personal information with third parties. 
                  Your data is used solely for providing our services and communicating with you about your projects.
                </p>
              </section>

              <section className="mb-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-3">
                  Your Rights
                </h2>
                <p className="text-gray-600 mb-2">
                  You can:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Request access to your personal information</li>
                  <li>Ask us to update or delete your data</li>
                  <li>Opt-out of communications at any time</li>
                  <li>Contact us with any privacy concerns</li>
                </ul>
              </section>

              <section className="mb-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-3">
                  Contact Us
                </h2>
                <p className="text-gray-600 mb-3">
                  For any privacy-related questions or concerns, please contact us:
                </p>
                <div className="bg-gray-50 rounded p-4">
                  <p className="text-gray-700 mb-1"><strong>Website:</strong> dgtlinnovations.in</p>
                  <p className="text-gray-700 mb-1"><strong>Email:</strong> info@dgtlinnovations.in</p>
                  <p className="text-gray-700 mb-1"><strong>Phone:</strong> +91 97177 55870</p>
                  <p className="text-gray-700"><strong>Address:</strong> Digital Innovations, Near SBI Bank, Tahsil Road, Nakur, Saharanpur - 247342, Uttar Pradesh, India</p>
                </div>
              </section>

            </div>
          </div>

          <div className="text-center mt-8">
            <a
              href="/"
              className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Back to Home
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
