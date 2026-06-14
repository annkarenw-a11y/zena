import Link from 'next/link'
import { ArrowRight, CheckCircle, Heart, MessageSquare, Search, FileText, MapPin, AlertCircle } from 'lucide-react'

export default function Home() {
  return (
    <div className="w-full bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-lg z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-zena-red">ZENA AI</div>
          <div className="space-x-6 hidden md:flex">
            <a href="#features" className="text-gray-600 hover:text-zena-red transition-smooth">Features</a>
            <a href="#how-it-works" className="text-gray-600 hover:text-zena-red transition-smooth">How it Works</a>
            <a href="#faq" className="text-gray-600 hover:text-zena-red transition-smooth">FAQ</a>
          </div>
          <div className="space-x-3">
            <Link href="/auth/login" className="px-6 py-2 rounded-md border-2 border-zena-red text-zena-red hover:bg-red-50 transition-smooth">
              Login
            </Link>
            <Link href="/auth/register" className="px-6 py-2 rounded-md bg-zena-red text-white hover:bg-red-600 transition-smooth">
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white to-red-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-slide-up">
              <h1 className="text-5xl md:text-6xl font-bold text-zena-black leading-tight">
                Your Personal AI Health Companion
              </h1>
              <p className="text-lg text-gray-600">
                Get trusted health information, symptom guidance, medical report explanations, and healthcare support anytime. 24/7 medical assistant at your fingertips.
              </p>
              <div className="flex gap-4 pt-4">
                <Link href="/auth/register" className="px-8 py-3 rounded-lg bg-zena-red text-white font-semibold hover:bg-red-600 transition-smooth flex items-center gap-2">
                  Start Chatting <ArrowRight size={20} />
                </Link>
                <button className="px-8 py-3 rounded-lg border-2 border-zena-red text-zena-red font-semibold hover:bg-red-50 transition-smooth">
                  Learn More
                </button>
              </div>
            </div>
            <div className="relative hidden md:block">
              <div className="w-full h-96 bg-gradient-to-br from-zena-red to-red-400 rounded-2xl opacity-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-zena-black mb-4">Powerful Features</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Everything you need for better health management in one intelligent platform
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: MessageSquare, title: 'AI Medical Assistant', desc: 'Chat with our intelligent health companion' },
              { icon: Search, title: 'Symptom Checker', desc: 'Get instant insights about your symptoms' },
              { icon: FileText, title: 'Report Analysis', desc: 'Understand your medical reports instantly' },
              { icon: Heart, title: 'Health Tracking', desc: 'Monitor your health metrics in real-time' },
              { icon: MapPin, title: 'Hospital Finder', desc: 'Find nearby hospitals and clinics' },
              { icon: AlertCircle, title: 'Emergency SOS', desc: 'Quick emergency contact and support' },
            ].map((feature, idx) => {
              const Icon = feature.icon
              return (
                <div key={idx} className="p-8 rounded-2xl border-2 border-gray-100 hover:border-zena-red hover:shadow-soft-lg transition-smooth group">
                  <div className="w-12 h-12 rounded-lg bg-red-100 flex items-center justify-center mb-4 group-hover:bg-zena-red group-hover:text-white transition-smooth">
                    <Icon size={24} className="text-zena-red group-hover:text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-zena-black mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-zena-black mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { num: '01', title: 'Ask a Question', desc: 'Type your health question or concern' },
              { num: '02', title: 'Get AI Guidance', desc: 'Receive evidence-based information instantly' },
              { num: '03', title: 'Take Action', desc: 'Make informed decisions about your health' },
            ].map((step, idx) => (
              <div key={idx} className="relative">
                <div className="bg-white p-8 rounded-2xl shadow-soft">
                  <div className="text-5xl font-bold text-zena-red mb-4 opacity-20">{step.num}</div>
                  <h3 className="text-2xl font-bold text-zena-black mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.desc}</p>
                </div>
                {idx < 2 && <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-1 bg-zena-red"></div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-zena-black mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              { q: 'Is ZENA AI a substitute for medical advice?', a: 'No. ZENA AI provides educational information only and should not replace professional medical consultation.' },
              { q: 'How is my medical data protected?', a: 'Your data is encrypted, securely stored, and compliant with HIPAA and GDPR regulations.' },
              { q: 'Can I access my medical records?', a: 'Yes. You can upload, store, and manage all your medical documents securely.' },
              { q: 'Is ZENA AI available 24/7?', a: 'Yes. Our AI assistant is available round the clock to answer your health questions.' },
            ].map((faq, idx) => (
              <div key={idx} className="border-2 border-gray-100 rounded-lg p-6 hover:border-zena-red transition-smooth">
                <h3 className="font-bold text-lg text-zena-black mb-2">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zena-red">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Ready to Take Control of Your Health?</h2>
          <p className="text-xl mb-8 opacity-90">Join thousands of users who trust ZENA AI for their health journey</p>
          <Link href="/auth/register" className="inline-block px-8 py-4 rounded-lg bg-white text-zena-red font-bold hover:bg-gray-100 transition-smooth">
            Get Started Now
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zena-black text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold text-zena-red mb-4">ZENA AI</h3>
              <p className="text-gray-400">Your Personal AI Health Companion</p>
            </div>
            {[
              { title: 'Product', links: ['Features', 'Pricing', 'Security'] },
              { title: 'Company', links: ['About', 'Blog', 'Careers'] },
              { title: 'Legal', links: ['Privacy', 'Terms', 'Disclaimer'] },
            ].map((col, idx) => (
              <div key={idx}>
                <h4 className="font-bold mb-4">{col.title}</h4>
                <ul className="space-y-2">
                  {col.links.map((link, lidx) => (
                    <li key={lidx}><a href="#" className="text-gray-400 hover:text-zena-red transition-smooth">{link}</a></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 ZENA AI. All rights reserved. | Your Personal AI Health Companion</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
