import './globals.css'

export const metadata = {
  title: 'QeinTechAI Cloud',
  description: 'Access powerful AI models for Free',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-900 text-white">
        {children}
      </body>
    </html>
  )
}