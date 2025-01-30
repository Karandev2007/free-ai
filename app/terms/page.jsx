'use client'

import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Terms = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-gray-900 text-white min-h-screen">
      {/* home button */}
      <div className="flex justify-end">
        <a href="../" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Home
        </a>
      </div>

      <br /><br />

      {/* title */}
      <h1 className="text-4xl font-semibold mb-4 text-center">Terms & Conditions</h1>
      <p className="mb-4 text-center">by using our ai service, you agree to follow these terms and conditions. violating any of these terms may result in a permanent ban from our platform.</p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">1. Acceptable Use</h2>
      <p className="mb-4">you must use our ai services responsibly. any form of misuse, including excessive requests or attempts to exploit our api, may result in access being revoked.</p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">2. Prohibited Activities</h2>
      <p className="mb-4">you are strictly prohibited from using our api for:</p>
      <ul className="list-disc list-inside text-gray-400">
        <li>generating or spreading illegal content.</li>
        <li>creating harmful, misleading, or deceptive responses.</li>
        <li>engaging in criminal activities using ai-generated content.</li>
        <li>bypassing rate limits or engaging in api abuse.</li>
        <li>scraping or reverse engineering our api.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">3. Blacklisting & Access Termination</h2>
      <p className="mb-4">we reserve the right to permanently blacklist users or ips involved in spamming, illegal use, or policy violations. access can be revoked without prior notice.</p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">4. No Liability</h2>
      <p className="mb-4">we are not responsible for any misuse of our api by third parties. users take full responsibility for how they use the ai-generated responses.</p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">5. Changes to Terms</h2>
      <p className="mb-4">we may update these terms at any time. continued use of our api means you accept any changes.</p>

      <p className="mt-6 text-gray-400">last updated: january 2025</p>
    </div>
  )
}

export default Terms