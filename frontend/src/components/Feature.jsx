import React from 'react'

const Feature = () => {
  const processSteps = [
    {
      icon: "🔍",
      title: "Discover & Ideate",
      description: "Understanding the project's goals, target audience, and challenges through research and brainstorming creative strategies."
    },
    {
      icon: "💻",
      title: "Design & Development",
      description: "Crafting innovative solutions with precision, blending functionality and creativity to bring ideas to life."
    },
    {
      icon: "📋",
      title: "Feedback & Refinement",
      description: "Collaborating to gather insights, making iterative improvements, and ensuring the solution is flawless."
    },
    {
      icon: "🚀",
      title: "Launch & Support",
      description: "Seamlessly deploying the final product while providing ongoing support to ensure success and growth."
    }
  ]

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Process Made Simple
          </h2>
        </div>

        {/* Process Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <div key={index} className="text-center group relative">
              {/* Icon Container */}
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-200 transition-colors duration-300">
                  <span className="text-2xl">{step.icon}</span>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-gray-900">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Feature
