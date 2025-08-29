import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import emailjs from "@emailjs/browser";
import Navbar from "./Navbar";

const Feature4 = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  // Auto-fill service from URL parameters
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const serviceParam = urlParams.get('service');
    
    if (serviceParam) {
      setFormData(prev => ({
        ...prev,
        service: serviceParam
      }));
    }
  }, [location.search]);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', 'config_error', 'duplicate', 'template_error'

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const submittedEmails = JSON.parse(localStorage.getItem("submittedEmails")) || [];
    if (submittedEmails.includes(formData.email)) {
      setSubmitStatus("duplicate");
      setIsSubmitting(false);
      return;
    }

    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim()) {
      setSubmitStatus("error");
      setIsSubmitting(false);
      return;
    }

    try {
      const serviceId = "service_gu5imno";
      const adminTemplateId = "template_syc4oxw";
      const userTemplateId = "template_rmo9k11";
      const publicKey = "3d4M0E3ZbFPgVh_Ra";

      console.log("=== EMAIL CONFIGURATION ===");
      console.log("Service ID:", serviceId);
      console.log("Admin Template ID:", adminTemplateId);
      console.log("User Template ID:", userTemplateId);
      console.log("Public Key:", publicKey);

      // Template parameters for admin notification
      const adminTemplateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        service: formData.service,
        message: formData.message || "No message provided",
        to_name: "Admin",
        reply_to: formData.email,
      };

      // Template parameters for user thank you email
      const userTemplateParams = {
        user_name: formData.name,
        service_requested: formData.service,
        company_name: "Digital Innovations",
        support_email: "info@dgtlinnovations.in",
        email: formData.email, // This matches your template parameter
      };

      console.log("=== TEMPLATE PARAMETERS ===");
      console.log("Admin params:", adminTemplateParams);
      console.log("User params:", userTemplateParams);

      // Send admin notification email
      console.log("=== SENDING ADMIN EMAIL ===");
      const adminResponse = await emailjs.send(
        serviceId,
        adminTemplateId,
        adminTemplateParams,
        publicKey
      );
      console.log("Admin email response:", adminResponse);

      // Send thank you email to user
      console.log("=== SENDING USER THANK YOU EMAIL ===");
      try {
        const userResponse = await emailjs.send(
          serviceId,
          userTemplateId,
          userTemplateParams,
          publicKey
        );
        console.log("User email response:", userResponse);
        console.log("Thank you email sent to user successfully");
      } catch (userEmailError) {
        console.error("=== USER EMAIL ERROR ===");
        console.error("Error details:", userEmailError);
        console.error("Error status:", userEmailError.status);
        console.error("Error text:", userEmailError.text);
        
        // Check specific error types and provide solutions
        if (userEmailError.status === 400) {
          console.error("❌ Template variables might be incorrect for user email");
          console.error("📝 Required variables in template_rmo9k11:");
          console.error("   - {{user_name}}");
          console.error("   - {{service_requested}}");
          console.error("   - {{company_name}}");
          console.error("   - {{support_email}}");
          console.error("   - {{email}}");
        } else if (userEmailError.status === 412) {
          console.error("❌ EmailJS configuration error for user template");
          console.error("📝 Possible issues:");
          console.error("   - Template ID 'template_rmo9k11' doesn't exist");
          console.error("   - Service ID or Public Key is incorrect");
          console.error("   - Template is not published/active");
        } else if (userEmailError.status === 404) {
          console.error("❌ Template 'template_rmo9k11' not found");
          console.error("📝 Please create this template in your EmailJS dashboard");
        } else if (userEmailError.status === 422) {
          console.error("❌ Recipients address is empty - EmailJS template issue");
          console.error("📝 Your EmailJS template needs to specify recipient:");
          console.error("   - In EmailJS template settings, set 'To Email' to: {{email}}");
          console.error("   - Make sure the 'email' parameter is configured as recipient");
        }
        
        // Try fallback: send a simple notification using admin template
        console.log("🔄 Attempting fallback: sending simple notification to user...");
        try {
          const fallbackParams = {
            from_name: "Digital Innovations Team",
            from_email: "info@dgtlinnovations.in",
            phone: "Thank you message",
            service: `Thank you for your inquiry about ${formData.service}`,
            message: `Dear ${formData.name}, thank you for contacting us. We'll get back to you soon!`,
            to_name: formData.name,
            reply_to: "info@dgtlinnovations.in",
          };
          
          await emailjs.send(
            serviceId,
            adminTemplateId, // Use admin template as fallback
            fallbackParams,
            publicKey
          );
          console.log("✅ Fallback thank you message sent successfully");
        } catch (fallbackError) {
          console.error("❌ Fallback also failed:", fallbackError);
        }
      }
      
      setSubmitStatus("success");

      const updatedEmails = [...submittedEmails, formData.email];
      localStorage.setItem("submittedEmails", JSON.stringify(updatedEmails));

      navigate("/thankyou");

      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
      
    } catch (error) {
      console.error("Error sending email:", error);
      if (error.status === 412) {
        setSubmitStatus("config_error");
      } else if (error.status === 400) {
        setSubmitStatus("template_error");
      } else {
        setSubmitStatus("error");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Navbar />

      <section
        id="contact"
        className="px-4 sm:px-6 lg:px-8 bg-gradient-to-br min-h-screen flex items-start sm:items-center justify-center relative py-8 sm:py-6"
      >
        {/* Background Pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 relative z-10 my-4 sm:my-8">
          {/* Contact Form - Left Side */}
          
          <div className="w-full flex justify-center px-2 sm:px-4">
            <form
              onSubmit={handleSubmit}
              className="group relative bg-white/95 rounded-3xl shadow-2xl p-6 md:p-8 w-full max-w-md backdrop-blur-sm transition-all duration-300 hover:shadow-3xl hover:scale-[1.02] border border-white/30 overflow-hidden"
            >
              {/* Animated background glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-cyan-600/10 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-3xl"></div>

              <div className="relative z-10">
                <div className="text-center mb-4 sm:mb-6">
                  <h3 className="text-gray-800 text-xl md:text-2xl font-bold mb-2">
                    Let's Connect! 🚀
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base mb-4">
                    Ready to transform your ideas?
                  </p>
                  <div className="h-0.5 w-16 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mx-auto"></div>
                </div>

                {/* Status Messages */}
                {submitStatus === "success" && (
                  <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded-2xl flex items-center gap-2">
                    <span className="text-green-600 text-lg">✅</span>
                    <div>
                      <p className="text-green-800 font-medium text-sm">
                        Message sent successfully!
                      </p>
                      <p className="text-green-600 text-xs">
                        We'll get back to you soon.
                      </p>
                    </div>
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-2xl flex items-center gap-2">
                    <span className="text-red-600 text-lg">❌</span>
                    <div>
                      <p className="text-red-800 font-medium text-sm">
                        Failed to send message
                      </p>
                      <p className="text-red-600 text-xs">Please try again.</p>
                    </div>
                  </div>
                )}

                {submitStatus === "config_error" && (
                  <div className="mb-4 p-3 bg-yellow-50 border border-yellow-200 rounded-2xl flex items-center gap-2">
                    <span className="text-yellow-600 text-lg">⚠️</span>
                    <div>
                      <p className="text-yellow-800 font-medium text-sm">
                        EmailJS Configuration Error
                      </p>
                      <p className="text-yellow-600 text-xs">
                        Please check your EmailJS credentials.
                      </p>
                    </div>
                  </div>
                )}

                {submitStatus === "duplicate" && (
                  <div className="mb-4 p-3 bg-yellow-50 border border-yellow-200 rounded-2xl flex items-center gap-2">
                    <span className="text-yellow-600 text-lg">⚠️</span>
                    <div>
                      <p className="text-yellow-800 font-medium text-sm">
                        Already Submitted
                      </p>
                      <p className="text-yellow-600 text-xs">
                        A form with this email has already been submitted.
                      </p>
                    </div>
                  </div>
                )}

                {submitStatus === "template_error" && (
                  <div className="mb-4 p-3 bg-orange-50 border border-orange-200 rounded-2xl flex items-center gap-2">
                    <span className="text-orange-600 text-lg">🔧</span>
                    <div>
                      <p className="text-orange-800 font-medium text-sm">
                        Template Error
                      </p>
                      <p className="text-orange-600 text-xs">
                        Please check your EmailJS template variables.
                      </p>
                    </div>
                  </div>
                )}

                <div className="space-y-4">
                  <div className="relative">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Full Name*"
                      required
                      className="w-full px-4 py-3 rounded-2xl border-2 border-blue-300/50 bg-white/90 placeholder-gray-500 text-gray-800 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 text-sm md:text-base transition-all duration-300 shadow-sm hover:shadow-md hover:border-blue-400/70"
                    />
                  </div>

                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email Address*"
                      required
                      className="w-full px-4 py-3 rounded-2xl border-2 border-blue-300/50 bg-white/90 placeholder-gray-500 text-gray-800 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 text-sm md:text-base transition-all duration-300 shadow-sm hover:shadow-md hover:border-blue-400/70"
                    />
                  </div>

                  <div className="relative">
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Phone Number*"
                      required
                      className="w-full px-4 py-3 rounded-2xl border-2 border-blue-300/50 bg-white/90 placeholder-gray-500 text-gray-800 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 text-sm md:text-base transition-all duration-300 shadow-sm hover:shadow-md hover:border-blue-400/70"
                    />
                  </div>

                  <div className="relative">
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-2xl border-2 border-blue-300/50 bg-white/90 placeholder-gray-500 text-gray-800 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 text-sm md:text-base transition-all duration-300 shadow-sm hover:shadow-md hover:border-blue-400/70 appearance-none"
                    >
                      <option value="" disabled>Request for service*</option>
                      <option value="Web Development">Web Design</option>
                      <option value="Android Development"> Mobile App Development</option>
                      <option value="Software Development">Software Development</option>
                      <option value="AI/ML Development">AI/ML Development</option>
                      <option value="Digital Marketing">Digital Marketing</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                    </div>
                  </div>

                  <div className="relative">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Write Your Query"
                      rows={3}
                      className="w-full px-4 py-3 rounded-2xl border-2 border-blue-300/50 bg-white/90 placeholder-gray-500 text-gray-800 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 text-sm md:text-base transition-all duration-300 shadow-sm hover:shadow-md hover:border-blue-400/70 resize-none min-h-[80px]"
                    ></textarea>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`group relative w-full mt-4 sm:mt-6 px-4 py-2 sm:py-3 md:py-3.5 text-white font-semibold rounded-xl sm:rounded-2xl bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 hover:from-blue-700 hover:via-purple-700 hover:to-cyan-700 transition-all duration-700 shadow-lg hover:shadow-2xl hover:shadow-blue-500/50 transform hover:-translate-y-2 hover:scale-110 backdrop-blur-sm border border-white/20 overflow-hidden text-xs sm:text-sm md:text-base ${
                    isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                  }`}
                >
                  {/* Animated background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-cyan-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Glow effect */}
                  <div className="absolute inset-0 rounded-xl sm:rounded-2xl blur-lg bg-gradient-to-r from-blue-600/30 via-purple-600/30 to-cyan-600/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>

                  <span className="relative z-10 flex items-center justify-center">
                    {isSubmitting ? (
                      <>
                        <svg
                          className="animate-spin h-4 w-4 mr-2 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Get Started Now
                        <svg
                          className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2.5}
                            d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                          />
                        </svg>
                      </>
                    )}
                  </span>

                  {/* Shimmer effect */}
                  <div className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-700"></div>
                </button>
              </div>
            </form>
          </div>
          {/* Address Information - Right Side */}
          <div className="bg-gradient-to-br from-slate-50 to-white backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-2xl border border-white/30 relative overflow-hidden">
            {/* Decorative background */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 rounded-2xl"></div>

            {/* Content */}
            <div className="relative z-10">
              {/* Header */}
              <div className="text-center mb-8">
                <div className="inline-block p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-4 shadow-lg">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    ></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  Get In Touch
                </h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  Visit us or contact us directly
                </p>
              </div>

              {/* Contact Information */}
              <div className="space-y-6">
                {/* Address */}
                <div className="group p-4 bg-white/80 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 border border-gray-100">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors duration-300">
                      <svg
                        className="w-5 h-5 text-blue-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        ></path>
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">
                        Office Address
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Digital innovations , Near SBI bank,{" "}
                        <br />
                         tahsil road, Nakur, Saharanpur pincode -
                        247342
                        <br />
                        Uttar Pradesh , India
                      </p>
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div className="group p-4 bg-white/80 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 border border-gray-100">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-green-100 rounded-lg group-hover:bg-green-200 transition-colors duration-300">
                      <svg
                        className="w-5 h-5 text-green-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">
                        Phone Number
                      </h4>
                      <p className="text-gray-600 text-sm">
                        <a
                          href="tel:+919717755870"
                          className="hover:text-green-600 transition-colors duration-300"
                        >
                          +91 97177 55870
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="group p-4 bg-white/80 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 border border-gray-100">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-purple-100 rounded-lg group-hover:bg-purple-200 transition-colors duration-300">
                      <svg
                        className="w-5 h-5 text-purple-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">
                        Email Address
                      </h4>
                      <div className="text-gray-600 text-sm">
                        <a
                          href="mailto:info@dgtlinnovations.in"
                          className="hover:text-purple-600 transition-colors duration-300 flex items-center gap-2 group"
                          title="Click to open email client"
                        >
                          <span>info@dgtlinnovations.in</span>
                          <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                        <button
                          onClick={() => navigator.clipboard.writeText('info@dgtlinnovations.in')}
                          className="text-xs text-gray-400 hover:text-purple-500 mt-1 transition-colors"
                          title="Copy email address"
                        >
                          Click to copy
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="group p-4 bg-white/80 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 border border-gray-100">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-orange-100 rounded-lg group-hover:bg-orange-200 transition-colors duration-300">
                      <svg
                        className="w-5 h-5 text-orange-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">
                        Business Hours
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Mon - Fri: 9:30 AM - 6:30 PM
                        <br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="mt-8 text-center">
                <button
                  onClick={() => {
                    const address = "Digital innovations, 1st Floor, Inside of SBI bank, Near Vishwakarma chowk, Nakur, Saharanpur, Uttar Pradesh, 247342, India";
                    const encodedAddress = encodeURIComponent(address);
                    window.open(`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`, "_blank");
                  }}
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                    ></path>
                  </svg>
                  View on Maps
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Feature4;
