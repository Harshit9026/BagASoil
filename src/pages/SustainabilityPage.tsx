import { useState } from 'react';
import {  TrendingDown, Trees, Calculator } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import {  Leaf,Facebook,Twitter,Instagram,Linkedin,MapPin ,Phone ,ArrowRight, Mail,Heart,  } from 'lucide-react';



interface SustainabilityPageProps {
  onNavigate: (page: string) => void;
}

export default function SustainabilityPage({ onNavigate }: SustainabilityPageProps) {
  const [monthlyBags, setMonthlyBags] = useState(1000);
  const [bagWeight, setBagWeight] = useState(10);
  const navigate=useNavigate();

  const calculateImpact = () => {
    const plasticSavedKg = (monthlyBags * bagWeight) / 1000;
    const annualPlasticKg = plasticSavedKg * 12;
    const carbonOffset = annualPlasticKg * 2.5;
    const treesEquivalent = Math.round(carbonOffset / 21);
    const waterSaved = annualPlasticKg * 17;

    return {
      monthlyPlastic: plasticSavedKg.toFixed(2),
      annualPlastic: annualPlasticKg.toFixed(2),
      carbonOffset: carbonOffset.toFixed(2),
      trees: treesEquivalent,
      water: waterSaved.toFixed(2),
    };
  };

  const impact = calculateImpact();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-br from-green-600 to-emerald-700 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Our Commitment to Sustainability
          </h1>
          <p className="text-lg text-green-50 max-w-2xl mx-auto">
            Every bag makes a difference. See the environmental impact of choosing biodegradable packaging.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Why Biodegradable Matters
            </h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Traditional Plastic Problem
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    Takes 500-1000 years to decompose
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    Releases toxic chemicals into soil and water
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    Harms wildlife and marine ecosystems
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    Contributes to microplastic pollution
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Our Biodegradable Solution
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    Decomposes in 3-6 months in composting conditions
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    Made from plant-based renewable materials
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    No toxic residue or microplastics
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    Certified compostable and eco-friendly
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-white rounded-lg p-8 shadow-sm sticky top-4">
              <div className="flex items-center mb-6">
                <Calculator className="h-8 w-8 text-green-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">
                  Impact Calculator
                </h2>
              </div>
              <p className="text-gray-600 mb-6">
                Calculate your potential environmental impact by switching to biodegradable bags
              </p>

              <div className="space-y-6 mb-8">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Monthly bag usage
                  </label>
                  <input
                    type="number"
                    value={monthlyBags}
                    onChange={(e) => setMonthlyBags(Number(e.target.value))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Average bag weight (grams)
                  </label>
                  <input
                    type="number"
                    value={bagWeight}
                    onChange={(e) => setBagWeight(Number(e.target.value))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-600 to-emerald-700 rounded-lg p-6 text-white">
                <h3 className="text-lg font-bold mb-4">Your Annual Impact</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span>Plastic waste saved</span>
                    <span className="text-2xl font-bold">{impact.annualPlastic} kg</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Carbon offset</span>
                    <span className="text-2xl font-bold">{impact.carbonOffset} kg</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Equivalent trees</span>
                    <span className="text-2xl font-bold">{impact.trees}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Water saved</span>
                    <span className="text-2xl font-bold">{impact.water} L</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => onNavigate('contact')}
                className="w-full mt-6 px-6 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700"
              >
                Start Making a Difference
              </button>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Understanding Biodegradation
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                step: '1',
                title: 'Material',
                desc: 'Made from plant-based starches and natural polymers',
              },
              {
                step: '2',
                title: 'Usage',
                desc: 'Functions like traditional plastic with same durability',
              },
              {
                step: '3',
                title: 'Disposal',
                desc: 'Can be composted with organic waste',
              },
              {
                step: '4',
                title: 'Decomposition',
                desc: 'Breaks down into water, CO₂, and biomass in 3-6 months',
              },
            ].map((step, idx) => (
              <div key={idx} className="bg-white rounded-lg p-6 text-center">
                <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Our Certifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Leaf,
                title: 'Compostable Certified',
                desc: 'Meets EN 13432 and ASTM D6400 standards',
              },
              {
                icon: TrendingDown,
                title: 'Carbon Neutral',
                desc: 'Offset production emissions through verified projects',
              },
              {
                icon: Trees,
                title: 'Renewable Materials',
                desc: '100% plant-based raw materials from sustainable sources',
              },
            ].map((cert, idx) => (
              <div key={idx} className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-full mb-4 shadow-sm">
                  <cert.icon className="h-10 w-10 text-green-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{cert.title}</h3>
                <p className="text-gray-600">{cert.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}

      <footer className="relative bg-gradient-to-br from-green-700 via-green-600 to-emerald-700 text-white overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-green-500/20 rounded-full blur-3xl"></div>

        {/* Floating Leaves */}
        <Leaf className="absolute top-20 left-10 w-8 h-8 text-green-300/20 animate-float" />
        <Leaf className="absolute top-40 right-20 w-6 h-6 text-emerald-300/20 animate-float-delayed" />
        <Leaf className="absolute bottom-20 left-1/3 w-10 h-10 text-green-400/20 animate-float-slow" />
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

          {/* Company Info */}
          <div className="space-y-4">
            <div
              className="flex items-center gap-2 mb-4 cursor-pointer"
              onClick={() => navigate('/home')}
            >
              <div className="p-2 bg-white/10 rounded-lg backdrop-blur-sm">
                <Leaf className="w-6 h-6 text-green-200" />
              </div>
              <h3 className="text-2xl font-bold">Bag a Soil</h3>
            </div>
            <p className="text-green-100 leading-relaxed">
              Leading the way in sustainable packaging solutions. Making the world greener, one bag at a time.
            </p>
            <div className="flex gap-3 pt-2">
              {[{ Icon: Facebook, link: 'https://facebook.com' },
                { Icon: Twitter, link: 'https://twitter.com' },
                { Icon: Instagram, link: 'https://instagram.com' },
                { Icon: Linkedin, link: 'https://linkedin.com' }].map(({ Icon, link }, idx) => (
                <a key={idx} href={link} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-300 hover:scale-110">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
              <div className="w-1 h-6 bg-green-300 rounded-full"></div>
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'Home', path: '/home' },
                { label: 'Products', path: '/products' },
                { label: 'Sustainability', path: '/sustainability' },
                { label: 'Community', path: '/community' },
                { label: 'Certificates', path: '/certifications' },
                { label: 'Contact', path: '/contact' },
              ].map((link, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => navigate(link.path)}
                    className="text-green-100 hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="group-hover:translate-x-1 transition-transform">{link.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
              <div className="w-1 h-6 bg-green-300 rounded-full"></div>
              Our Products
            </h4>
            <ul className="space-y-3">
              {['Carry Bags', 'Shopping Bags', 'Garbage Bags', 'Custom Bags', 'Bulk Orders'].map((product, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => navigate('/products')}
                    className="text-green-100 hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="group-hover:translate-x-1 transition-transform">{product}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
              <div className="w-1 h-6 bg-green-300 rounded-full"></div>
              Get In Touch
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-green-300 mt-1 flex-shrink-0" />
                <span className="text-green-100"> Tadepalligudem<br />
                      Andhra Pradesh, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-green-300 flex-shrink-0" />
                <a href="tel:+919952482228" className="text-green-100 hover:text-white transition-colors">
                  +91 9952482228
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-green-300 flex-shrink-0" />
                <a href="mailto: bagasoilcompostable@gmail.com" className="text-green-100 hover:text-white transition-colors">
                   bagasoilcompostable@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-green-500/30 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-green-100 text-center md:text-left">
              &copy; {new Date().getFullYear()} Bag a Soil. All rights reserved.
            </div>
            <div className="flex items-center gap-1 text-green-100">
              Made with <Heart className="w-4 h-4 text-red-400 animate-pulse mx-1" /> for the Planet
            </div>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              <button onClick={() => navigate('/privacy')} className="text-green-100 hover:text-white transition-colors">
                Privacy Policy
              </button>
              <button onClick={() => navigate('/terms')} className="text-green-100 hover:text-white transition-colors">
                Terms of Service
              </button>
              <button onClick={() => navigate('/cookie')} className="text-green-100 hover:text-white transition-colors">
                Cookie Policy
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Leaf Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(10deg); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(-10deg); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-25px) rotate(15deg); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 8s ease-in-out infinite; }
        .animate-float-slow { animation: float-slow 10s ease-in-out infinite; }
      `}</style>
    </footer>

    </div>
  );
}
