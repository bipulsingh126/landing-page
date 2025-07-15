import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

const Feature4 = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [focusedField, setFocusedField] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Navbar />

      <section
        id="contact"
        className="px-4 sm:px-6 lg:px-8 bg-gradient-to-br min-h-screen flex items-center justify-center relative"
      >
        {/* Background Pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl bg-white/95 backdrop-blur-sm rounded-2xl p-6 sm:p-8 md:p-10 shadow-2xl border border-white/30 relative z-10">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-block p-2 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full mb-4">
              <span className="text-xl text-white">💬</span>
            </div>
            <h2 className="text-4xl font-extrabold bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent mb-3 tracking-tight">
              How Can We Help?
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed max-w-md mx-auto">
              We Respect Your Privacy, And Your Data Is Fully Confidential.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit}>
            {/* Name Field */}
            <div className="mb-6 relative">
              <label className="block text-base font-semibold text-gray-700 mb-2 flex items-center gap-2">
                <span className="text-lg">👤</span>
                Name*
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Write Your Full Name Here"
                required
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg text-base text-gray-700 bg-gray-50 focus:outline-none focus:ring-4 focus:ring-indigo-200 focus:border-indigo-500 focus:bg-white transition-all duration-300 transform focus:-translate-y-0.5 shadow-sm"
                onFocus={() => setFocusedField("name")}
                onBlur={() => setFocusedField(null)}
              />
            </div>

            {/* Email and Phone Row */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-6">
              {/* Email Field */}
              <div className="flex-1">
                <label className="block text-base font-semibold text-gray-700 mb-2 flex items-center gap-2">
                  <span className="text-lg">📧</span>
                  Email Address*
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Write Your Email Address Here"
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg text-base text-gray-700 bg-gray-50 focus:outline-none focus:ring-4 focus:ring-indigo-200 focus:border-indigo-500 focus:bg-white transition-all duration-300 transform focus:-translate-y-0.5 shadow-sm"
                />
              </div>

              {/* Phone Field */}
              <div className="flex-1">
                <label className="block text-base font-semibold text-gray-700 mb-2 flex items-center gap-2">
                  <span className="text-lg">📱</span>
                  Phone Number*
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Write Your Phone Number Here"
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg text-base text-gray-700 bg-gray-50 focus:outline-none focus:ring-4 focus:ring-indigo-200 focus:border-indigo-500 focus:bg-white transition-all duration-300 transform focus:-translate-y-0.5 shadow-sm"
                />
              </div>
            </div>

            {/* Message Field */}
            <div className="mb-6">
              <label className="block text-base font-semibold text-gray-700 mb-2 flex items-center gap-2">
                <span className="text-lg">💬</span>
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write Your Message/Inquiry Here"
                rows="4"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg text-base text-gray-700 bg-gray-50 focus:outline-none focus:ring-4 focus:ring-indigo-200 focus:border-indigo-500 focus:bg-white transition-all duration-300 transform focus:-translate-y-0.5 shadow-sm resize-vertical font-sans"
              />
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold rounded-lg text-base shadow-xl transform transition-all duration-300 hover:from-indigo-700 hover:to-purple-700 hover:-translate-y-1 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-indigo-300 active:transform active:scale-95"
              >
                Submit Your Query
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Feature4;
