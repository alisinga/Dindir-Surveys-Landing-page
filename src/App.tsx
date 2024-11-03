import React, { useState } from 'react';
import { Sprout, ArrowRight, Globe2, ShieldCheck, Truck } from 'lucide-react';

function App() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setEmail('');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="w-full px-6 py-6 border-b">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sprout className="h-8 w-8 text-green-600" />
            <span className="text-2xl font-bold text-gray-900">Dindir</span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Agricultural Trading Simplified
          </h1>
          <p className="text-xl text-gray-600 mb-12">
            Connect with verified suppliers and buyers worldwide through our trusted agricultural marketplace platform.
          </p>

          {/* Email Signup Form */}
          <div className="max-w-md mx-auto mb-16">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full px-6 py-4 rounded-lg border-2 border-green-600 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-opacity-50"
                  required
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition-colors flex items-center gap-2"
                >
                  Join Dindir
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
              {submitted && (
                <p className="text-green-600 text-sm">Thank you for your interest! We'll be in touch soon.</p>
              )}
            </form>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="p-6 rounded-lg border border-gray-200 hover:border-green-600 transition-colors">
              <Globe2 className="h-8 w-8 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Global Reach</h3>
              <p className="text-gray-600">Connect with agricultural partners worldwide</p>
            </div>
            <div className="p-6 rounded-lg border border-gray-200 hover:border-green-600 transition-colors">
              <ShieldCheck className="h-8 w-8 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Verified Data</h3>
              <p className="text-gray-600">Trade with confidence using verified information</p>
            </div>
            <div className="p-6 rounded-lg border border-gray-200 hover:border-green-600 transition-colors">
              <Truck className="h-8 w-8 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Logistics Integration</h3>
              <p className="text-gray-600">Seamless shipping and delivery solutions</p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 border-t">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="text-center">
            <p className="text-gray-600 max-w-2xl mx-auto">
              Dindir bridges the gap between agricultural suppliers and buyers through verified data and integrated logistics, 
              making global agricultural trade more efficient and reliable.
            </p>
            <div className="mt-6 text-sm text-gray-500">
              © {new Date().getFullYear()} Dindir. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;