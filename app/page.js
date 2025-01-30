'use client'

import Navbar from './components/Navbar'
import Features from './components/Features'
import Models from './components/Models'
import APIReference from './components/APIReference'
import Footer from './components/Footer'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Navbar />

      <div className="relative h-[89vh] flex flex-col items-center justify-center text-center bg-cover bg-center px-6" style={{ backgroundImage: "url('/bg2.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10">
          <h1 className="text-5xl font-bold">QeinTech CloudAI</h1>
          <br />
          <p className="text-gray-300 mt-2 text-lg">Free access to AI models for students & developers. <br /> Power your apps with cutting-edge AI integration.</p>

          <div className="mt-6 flex flex-col sm:flex-row gap-4">
              <button onClick={() => document.getElementById('api-ref').scrollIntoView({ behavior: 'smooth' })} className="px-6 py-3 bg-blue-700 hover:bg-blue-800 text-white text-lg rounded-lg">Get Started</button>
          </div>
        </div>
      </div>
      <div className="mt-16">
        <div id="features">
          <Features />
        </div>
        <div id="models">
          <Models />
        </div>
        <div id="api-ref">
          <APIReference />
        </div>
      </div>

      <Footer />

    </div>
  )
}