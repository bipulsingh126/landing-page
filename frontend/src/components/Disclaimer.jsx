import React from "react";
import Navbar from "./Navbar";

const Disclaimer = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="pt-20 pb-16 px-4">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              Disclaimer
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
                  Website Information
                </h2>
                <p className="text-gray-600">
                  This website (dgtlinnovations.in) is owned and operated by <strong>Digital Innovations</strong>. 
                  By using our website and services, you acknowledge that you have read and understood this disclaimer.
                </p>
              </section>

              <section className="mb-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-3">
                  General Disclaimer
                </h2>
                <p className="text-gray-600">
                  The information on this website is provided on an "as-is" basis. Digital Innovations makes no representations 
                  or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, 
                  or availability of the website or services.
                </p>
              </section>

              <section className="mb-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-3">
                  Service Disclaimer
                </h2>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Project timelines are estimates and may vary based on complexity</li>
                  <li>We strive for quality but cannot guarantee error-free deliverables</li>
                  <li>Client satisfaction depends on clear communication and requirements</li>
                  <li>Third-party integrations are subject to their respective terms</li>
                </ul>
              </section>

              <section className="mb-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-3">
                  Limitation of Liability
                </h2>
                <p className="text-gray-600">
                  Digital Innovations shall not be liable for any direct, indirect, incidental, or consequential damages 
                  arising from the use of our website or services. This includes but is not limited to loss of data, 
                  profits, or business interruption.
                </p>
              </section>

              <section className="mb-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-3">
                  Contact Us
                </h2>
                <p className="text-gray-600 mb-3">
                  If you have any questions about this disclaimer, please contact us:
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

export default Disclaimer;
