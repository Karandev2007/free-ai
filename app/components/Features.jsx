'use client'

export default function Features() {
  return (
    <section className="text-center py-12 px-4">
      <h2 className="text-3xl font-semibold mb-6">Why Choose Us?</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <a href="#" className="block p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <h5 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">Completely Free</h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">We’re completely free to use, no credit card required.</p>
        </a>
        <a href="#" className="block p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <h5 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">Easy API Integration</h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">Seamlessly integrate AI models into your applications.</p>
        </a>
        <a href="#" className="block p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <h5 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">Multiple AI Models</h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">Choose from a variety of AI models tailored for different tasks.</p>
        </a>
      </div>
    </section>
  )
}