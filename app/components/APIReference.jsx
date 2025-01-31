'use client'

export default function APIReference() {
  return (
    <section className="text-center py-12 px-4">
      <h2 className="text-3xl font-semibold mb-6">API Reference</h2>
      <div className="mt-6 bg-gray-800 p-6 rounded-lg text-sm text-gray-300 text-left max-w-xl mx-auto">
        <pre className="whitespace-pre-wrap">
          {`curl -X POST https://api2.qeintech.in/v1/chat/completions \\
     -H "Content-Type: application/json" \\
     -d '{
          "model": "gpt-4",
          "messages": [
        { "role": "user", "content": "what happens to our consciousness when we sleep?" }
           ]
         }'`}
        </pre>
      </div>
    </section>
  )
}
