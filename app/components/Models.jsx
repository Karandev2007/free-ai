'use client'

export default function Models() {
  return (
    <section className="text-center py-12 px-4">
      <h2 className="text-3xl font-semibold mb-6">AI Models</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {/* openai card */}
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
          <img className="rounded-t-lg" src="/openai.png" alt="GPT-4" />
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">OpenAI Models</h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">GPT-4 (gpt4)</p>
            <p>10 API requests/minute</p>
          </div>
        </div>
        {/* metai card */}
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
          <img className="rounded-t-lg" src="/metaai.png" alt="Claude AI" />
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">Meta AI</h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Llama-3-8B (llama3-8b)</p>
            <p>10 API requests/minute</p>
          </div>
        </div>
        {/* google card */}
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
          <img className="rounded-t-lg" src="/googledeepmind.png" alt="Gemini AI" />
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">Google DeepMind</h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Gemma2-9b (gemma2-9b)</p>
            <p>10 API requests/minute</p>
          </div>
        </div>
      </div>
    </section>
  )
}