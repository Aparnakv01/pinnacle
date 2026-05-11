'use client';

import { useState } from 'react';

export default function Home() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      return;
    }
    setStatus('success');
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setStatus(''), 3000);
  };

  return (
    <div className="bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-black">Pinnacle</div>
          <div className="hidden md:flex gap-8">
            <a href="#features" className="text-gray-600 hover:text-black transition">Features</a>
            <a href="#services" className="text-gray-600 hover:text-black transition">Services</a>
            <a href="/insights" className="text-gray-600 hover:text-black transition">Insights</a>
            <a href="#contact" className="text-gray-600 hover:text-black transition">Contact</a>
          </div>
          <button className="md:hidden text-2xl">☰</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-black to-gray-900 text-white py-32 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-6xl md:text-7xl font-bold mb-6">
            Reach New Heights
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Enterprise solutions designed for excellence. Premium services for modern businesses.
          </p>
          <button className="bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition text-lg">
            Get Started
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Why Choose Pinnacle</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: '⚡', title: 'Lightning Fast', desc: 'Industry-leading performance and reliability' },
              { icon: '🔒', title: 'Secure', desc: 'Enterprise-grade security and compliance' },
              { icon: '📈', title: 'Scalable', desc: 'Grows with your business needs' },
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-xl border border-gray-200 hover:border-black transition">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Our Services</h2>
          <div className="grid md:grid-cols-2 gap-12">
            {[
              { title: 'Consulting', desc: 'Strategic guidance for digital transformation' },
              { title: 'Development', desc: 'Custom solutions built to your specifications' },
              { title: 'Support', desc: '24/7 dedicated support team for your success' },
              { title: 'Analytics', desc: 'Data-driven insights for better decisions' },
            ].map((service, i) => (
              <div key={i} className="border-l-4 border-black pl-6 py-4">
                <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600 text-lg">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Insights Section */}
      <section className="bg-black text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Latest Insights</h2>
          <p className="text-gray-300 mb-8 text-lg">
            Stay informed with our latest articles and industry trends.
          </p>
          <a
            href="/insights"
            className="inline-block bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Read Articles
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gray-50">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Get In Touch</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                placeholder="Your name"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                placeholder="your@email.com"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                placeholder="Tell us about your project"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition"
            >
              Send Message
            </button>
            {status === 'success' && (
              <p className="text-green-600 text-center">Message sent successfully!</p>
            )}
            {status === 'error' && (
              <p className="text-red-600 text-center">Please fill in all fields</p>
            )}
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-gray-400 py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p>&copy; 2024 Pinnacle. All rights reserved.</p>
          <p className="mt-4 text-sm">Crafted with excellence for enterprises worldwide</p>
        </div>
      </footer>
    </div>
  );
}
