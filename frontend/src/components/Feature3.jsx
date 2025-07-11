import React, { useState } from 'react'

const Feature3 = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const faqData = [
    {
      question: "What Services Do You Offer?",
      answer: "We offer comprehensive digital solutions including Web Development, Mobile App Development, Software Development, AI/ML Development, and Digital Marketing services. Our team specializes in creating custom solutions tailored to your business needs."
    },
    {
      question: "How Long Does It Take To Complete A Project?",
      answer: "Project timelines vary depending on complexity and scope. Typically, web development projects take 2-8 weeks, mobile apps take 6-16 weeks, and enterprise software solutions can take 3-6 months. We provide detailed timelines during our initial consultation."
    },
    {
      question: "Do You Provide Ongoing Support After The Project Is Complete?",
      answer: "Yes, we provide comprehensive post-launch support including bug fixes, updates, maintenance, and technical support. We offer various support packages to ensure your solution continues to perform optimally and stays up-to-date with the latest technologies."
    },
    {
      question: "Can I See Examples Of Your Previous Work?",
      answer: "Absolutely! We have a portfolio showcasing our previous projects across various industries. You can view our case studies, client testimonials, and live project examples. We'd be happy to share relevant examples that match your project requirements during our consultation."
    }
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-10 sm:py-12 lg:py-14 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <div className="h-1 w-16 sm:w-20 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mx-auto"></div>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div 
              key={index}
              className="group bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 overflow-hidden"
            >
              {/* Question */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-4 sm:p-5 text-left hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-inset min-h-[60px]"
              >
                <div className="flex items-center space-x-3 sm:space-x-4 flex-1">
                  <span className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-r from-blue-300 to-purple-300 text-gray-700 rounded-full flex items-center justify-center text-xs sm:text-sm font-semibold">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className="text-base sm:text-lg font-semibold text-gray-800 group-hover:text-blue-500 transition-colors duration-200 leading-tight">
                    {faq.question}
                  </h3>
                </div>
                <div className="flex-shrink-0 ml-3">
                  <svg 
                    className={`w-5 h-5 sm:w-6 sm:h-6 text-gray-400 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>

              {/* Answer */}
              <div className={`overflow-hidden transition-all duration-400 ${openIndex === index ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="px-4 sm:px-5 pb-4 sm:pb-5">
                  <div className="pl-8 sm:pl-10 border-l-3 border-l-blue-200 bg-gradient-to-r from-blue-50 to-purple-50 rounded-r-lg p-3 sm:p-4 min-h-[80px] flex items-center">
                    <p className="text-gray-700 leading-relaxed font-normal text-sm sm:text-base">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Feature3
    