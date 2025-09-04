import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";
import "./3d-animations.css";

const animatedTexts = [
  "Web Design",
  "Mobile App Development",
  "Software Development",
  "AI/ML Development",
  "Digital Marketing",
];

const Header = () => {
  const [currentTextIdx, setCurrentTextIdx] = useState(0);
  const [displayedText, setDisplayedText] = useState(animatedTexts[0]);
  const [typing, setTyping] = useState(true);
  const [animateOut, setAnimateOut] = useState(false);

  // Form states
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', null
  const [phoneError, setPhoneError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    let typingTimeout;
    if (typing) {
      let i = 0;
      setDisplayedText("");
      typingTimeout = setInterval(() => {
        setDisplayedText(animatedTexts[currentTextIdx].slice(0, i + 1));
        i++;
        if (i === animatedTexts[currentTextIdx].length) {
          clearInterval(typingTimeout);
        }
      }, 40);
    }
    return () => clearInterval(typingTimeout);
  }, [currentTextIdx, typing]);

  useEffect(() => {
    if (!typing) return;
    const timer = setTimeout(() => {
      setAnimateOut(true);
      setTimeout(() => {
        setAnimateOut(false);
        setTyping(true);
        setCurrentTextIdx((prev) => (prev + 1) % animatedTexts.length);
      }, 500); // swipe up duration
    }, 1000);
    return () => clearTimeout(timer);
  }, [typing, currentTextIdx]);

  useEffect(() => {
    if (animateOut) setTyping(false);
  }, [animateOut]);

  // Form handlers
  const validatePhoneNumber = (phone) => {
    // Remove all non-digit characters
    const cleanPhone = phone.replace(/\D/g, '');
    
    if (cleanPhone.length === 0) {
      return '';
    } else if (cleanPhone.length < 10) {
      return 'Phone number must be at least 10 digits';
    } else if (cleanPhone.length > 11) {
      return 'Phone number cannot exceed 11 digits';
    }
    return '';
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // Phone number validation
    if (name === 'phone') {
      const error = validatePhoneNumber(value);
      setPhoneError(error);
    }
    
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Check for duplicate submissions
    const submittedEmails =
      JSON.parse(localStorage.getItem("submittedEmails")) || [];
    if (submittedEmails.includes(formData.email)) {
      setSubmitStatus("duplicate");
      setIsSubmitting(false);
      return;
    }

    // Basic form validation
    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.phone.trim()
    ) {
      setSubmitStatus("error");
      setIsSubmitting(false);
      return;
    }

    // Validate phone number before submission
    const phoneValidationError = validatePhoneNumber(formData.phone);
    if (phoneValidationError) {
      setPhoneError(phoneValidationError);
      setSubmitStatus("error");
      setIsSubmitting(false);
      return;
    }

    try {
      // EmailJS configuration - Update these with your actual credentials
      const serviceId = "service_kb8lm3f"; // Your EmailJS service ID
      const adminTemplateId = "template_1x9uhm9"; // Your EmailJS template ID for admin notification
      const userTemplateId = "template_tr0vcg9"; // Your EmailJS template ID for user thank you (create this in EmailJS)
      const publicKey = "G42JR-V0XDd0tf7oo"; // Your EmailJS public key

      console.log("=== FORM SUBMISSION STARTED ===");
      console.log("Attempting to send emails with data:", formData);
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

      console.log("Admin template parameters:", adminTemplateParams);
      console.log("User template parameters:", userTemplateParams);

      // Send admin notification email
      console.log("=== SENDING ADMIN EMAIL ===");
      const adminResponse = await emailjs.send(
        serviceId,
        adminTemplateId,
        adminTemplateParams,
        publicKey
      );

      console.log("=== ADMIN EMAIL SENT SUCCESSFULLY ===");
      console.log("Admin Response:", adminResponse);

      // Send thank you email to user
      console.log("=== SENDING USER THANK YOU EMAIL ===");
      try {
        // First try with the user template
        const userResponse = await emailjs.send(
          serviceId,
          userTemplateId,
          userTemplateParams,
          publicKey
        );

        console.log("=== USER THANK YOU EMAIL SENT SUCCESSFULLY ===");
        console.log("User Response:", userResponse);
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

      // Store email in localStorage to prevent duplicates
      const updatedEmails = [...submittedEmails, formData.email];
      localStorage.setItem("submittedEmails", JSON.stringify(updatedEmails));

      navigate("/thankyou");

      // Reset form after successful submission
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
      setPhoneError(''); // Clear phone error

      console.log("Form reset completed");
    } catch (error) {
      console.error("Error sending email:", error);

      // More detailed error handling
      if (error.status === 412) {
        console.error(
          "EmailJS Error 412: Check your service ID, template ID, and public key"
        );
        setSubmitStatus("config_error");
      } else if (error.status === 400) {
        console.error(
          "EmailJS Error 400: Template variables might be incorrect"
        );
        setSubmitStatus("template_error");
      } else {
        setSubmitStatus("error");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full min-h-screen relative flex items-stretch bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="w-full h-full bg-gradient-to-br from-blue-600/5 via-purple-600/5 to-cyan-600/5"></div>
        {/* Geometric patterns */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200/20 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-48 h-48 bg-purple-200/20 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-cyan-200/20 rounded-full animate-pulse delay-2000"></div>
      </div>
      {/* Main Content */}
      <div className="relative z-10 w-full flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-12 perspective-1000">
        <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between py-6 lg:py-10 relative z-30">
          {/* Left: Cool Service Cards */}
          <div className="w-full lg:w-1/2 flex flex-col items-center justify-center mb-12 lg:mb-0 px-4 relative min-h-[600px] z-40">
            {/* Service Cards Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 w-full max-w-xl">
              {animatedTexts.map((text, index) => (
                <div
                  key={index}
                  onClick={() => {
                    const serviceMapping = {
                      "Web Design": "Web Designing",
                      "Mobile App Development": "Mobile App Development", 
                      "Software Development": "Software Development",
                      "AI/ML Development": "AI/ML Tools Development",
                      "Digital Marketing": "Digital Marketing"
                    };
                    const mappedService = serviceMapping[text];
                    navigate(`/services?highlight=${encodeURIComponent(mappedService)}`);
                  }}
                  className={`group relative bg-white rounded-2xl p-4 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-500 cursor-pointer transform hover:scale-105 hover:-translate-y-1 ${
                    index === currentTextIdx
                      ? "ring-2 ring-blue-300 scale-105"
                      : ""
                  } z-50`}
                  style={{
                    minHeight: "120px",
                  }}
                >
                  {/* Card Header */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-2xl" style={{ filter: 'hue-rotate(300deg) saturate(1.5) brightness(1.2)' }}>
                      {index === 0
                        ? "🌐"
                        : index === 1
                        ? "📱"
                        : index === 2
                        ? "💻"
                        : index === 3
                        ? "🤖"
                        : "📈"}
                    </div>
                    <div className="w-8 h-8 bg-white/60 rounded-full flex items-center justify-center border border-gray-200">
                      <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="text-gray-900">
                    <h3 className="text-sm font-bold mb-2 leading-tight text-gray-900">
                      {text}
                    </h3>
                    <p className="text-sm text-gray-800 leading-relaxed mb-3 font-semibold">
                      {index === 0
                        ? "Modern web apps with cutting-edge tech"
                        : index === 1
                        ? "Native mobile apps for iOS & Android"
                        : index === 2
                        ? "Custom software solutions"
                        : index === 3
                        ? "AI-powered intelligent systems"
                        : "Digital marketing & growth strategies"}
                    </p>
                  </div>

                  {/* Card Footer */}
                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex space-x-1">
                      <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                      <div className="w-1.5 h-1.5 bg-gray-300 rounded-full"></div>
                      <div className="w-1.5 h-1.5 bg-gray-200 rounded-full"></div>
                    </div>
                    <div className="text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                      <svg
                        className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </div>
                  </div>


                  {/* Active Indicator */}
                  {index === currentTextIdx && (
                    <div className="absolute -top-1 -right-1 w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center shadow-lg">
                      <div className="w-2.5 h-2.5 bg-white rounded-full animate-pulse"></div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Bottom Service Info */}
            <div className="mt-8 w-full max-w-2xl">
              <div className="text-center bg-white/90 rounded-2xl p-6 border border-gray-300 shadow-xl">
                <div className="text-sm font-semibold text-gray-800 mb-2 uppercase tracking-wide">
                  Featured Service
                </div>
                <div className="text-2xl font-black bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent mb-2">
                  {animatedTexts[currentTextIdx]}
                </div>
                <div className="text-sm text-gray-800 font-medium">
                  {currentTextIdx === 0
                    ? "Building the future of web experiences"
                    : currentTextIdx === 1
                    ? "Mobile-first solutions for modern users"
                    : currentTextIdx === 2
                    ? "Enterprise-grade software development"
                    : currentTextIdx === 3
                    ? "AI-powered intelligent solutions"
                    : "Growth-focused digital strategies"}
                </div>

                {/* Service Navigation */}
                <div className="flex justify-center mt-4 space-x-3">
                  {animatedTexts.map((_, idx) => (
                    <div
                      key={idx}
                      className={`w-3 h-3 rounded-full transition-all duration-500 ${
                        idx === currentTextIdx
                          ? "bg-gradient-to-r from-blue-500 to-purple-500 scale-125 shadow-lg"
                          : "bg-gray-300 hover:bg-gray-400"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* Right: 3D Contact Form */}
          <div
            className="w-full xs:w-11/12 sm:w-4/5 md:w-3/5 lg:w-1/2 xl:w-2/5 flex justify-center px-2 sm:px-4 transform-gpu"
            style={{ transform: "translateZ(20px)" }}
          >
            <form
              onSubmit={handleSubmit}
              className="group relative bg-white/98 rounded-3xl shadow-2xl p-6 md:p-8 w-full max-w-md transition-all duration-300  border border-white/60 overflow-hidden transform-gpu"
              style={{
                transform: "rotateX(5deg) rotateY(-5deg) translateZ(30px)",
              }}
            >

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

                <div className="space-y-6">
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
                      placeholder="Phone Number* "
                      required
                      className={`w-full px-4 py-3 rounded-2xl border-2 bg-white/90 placeholder-gray-500 text-gray-800 focus:bg-white focus:outline-none focus:ring-2 text-sm md:text-base transition-all duration-300 shadow-sm hover:shadow-md ${
                        phoneError 
                          ? 'border-red-400/70 focus:ring-red-400 focus:border-red-400 hover:border-red-500/70' 
                          : 'border-blue-300/50 focus:ring-blue-400 focus:border-blue-400 hover:border-blue-400/70'
                      }`}
                    />
                    {phoneError && (
                      <div className="absolute -bottom-5 left-0 text-red-500 text-xs mt-1 flex items-center gap-1">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                        {phoneError}
                      </div>
                    )}
                  </div>

                  <div className="relative">
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-2xl border-2 border-blue-300/50 bg-white/90 placeholder-gray-500 text-gray-800 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 text-sm md:text-base transition-all duration-300 shadow-sm hover:shadow-md hover:border-blue-400/70 appearance-none"
                    >
                      <option value="" disabled>
                        Request for service*
                      </option>
                      <option value="Web Development">Web Design</option>
                      <option value="Android Development">
                        Mobile App Development
                      </option>
                      <option value="Software Development">
                        Software Development
                      </option>
                      <option value="AI/ML Development">
                        AI/ML Development
                      </option>
                      <option value="Digital Marketing">
                        Digital Marketing
                      </option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <svg
                        className="fill-current h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
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
                  className={`group relative w-full mt-4 sm:mt-6 px-4 py-2 sm:py-3 md:py-3.5 text-white font-semibold rounded-xl sm:rounded-2xl bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 hover:from-blue-700 hover:via-purple-700 hover:to-cyan-700 transition-all duration-700 shadow-lg hover:shadow-2xl hover:shadow-blue-500/50 transform hover:-translate-y-2 hover:scale-110 border border-white/20 overflow-hidden text-xs sm:text-sm md:text-base ${
                    isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                  }`}
                >
                  {/* Animated background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-cyan-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Glow effect */}

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
        </div>
      </div>
    </div>
  );
};

export default Header;
// Animation styles for .typewriter, .swipe-up-fade, and .neon-glow are defined in App.css
