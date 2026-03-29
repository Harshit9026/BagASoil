import { useState } from 'react';
import { Users, Globe, Target, CheckCircle } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { FileText, Download, Award, Leaf,Facebook,Twitter,Instagram,Linkedin,MapPin ,Phone ,ArrowRight, Mail,Heart,  } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface CommunityPageProps {
  onNavigate: (page: string) => void;
}

export default function CommunityPage({ onNavigate }: CommunityPageProps) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const navigate=useNavigate()

  const handleJoin = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const { error } = await supabase
        .from('newsletter_subscribers')
        .insert({ email, name });

      if (error) throw error;

      setStatus('success');
      setEmail('');
      setName('');
      setTimeout(() => setStatus('idle'), 3000);
    } catch (error) {
      console.error('Community signup error:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-br from-green-600 to-emerald-700 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Join Our Green Community
          </h1>
          <p className="text-lg text-green-50 max-w-2xl mx-auto">
            Together, we're building a sustainable future through innovation, collaboration, and shared values
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {[
            {
              icon: Users,
              title: 'Collaborative Network',
              desc: 'Connect with businesses and individuals committed to sustainability',
            },
            {
              icon: Heart,
              title: 'Shared Mission',
              desc: 'Unite under a common goal of environmental protection',
            },
            {
              icon: Globe,
              title: 'Global Impact',
              desc: 'Be part of a worldwide movement for change',
            },
            {
              icon: Target,
              title: 'Collective Goals',
              desc: 'Work together toward measurable environmental targets',
            },
          ].map((item, idx) => (
            <div key={idx} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                <item.icon className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12 mb-16">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              What We Offer
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                'Exclusive sustainability insights and best practices',
                'Early access to new eco-friendly products',
                'Industry trends and market updates',
                'Networking opportunities with green businesses',
                'Educational resources and workshops',
                'Recognition for sustainability achievements',
              ].map((benefit, idx) => (
                <div key={idx} className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-600 to-emerald-700 rounded-2xl p-8 md:p-12 text-white mb-16">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Community Impact</h2>
            <p className="text-lg text-green-50 mb-12">
              Our collective achievements in the journey toward sustainability
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { value: '500+', label: 'Community Members' },
                { value: '100K kg', label: 'Plastic Waste Prevented' },
                { value: '50+', label: 'Partner Organizations' },
              ].map((stat, idx) => (
                <div key={idx}>
                  <div className="text-4xl font-bold mb-2">{stat.value}</div>
                  <div className="text-green-50">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 md:p-12">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
              Become a Member
            </h2>
            <p className="text-gray-600 text-center mb-8">
              Join thousands of forward-thinking individuals and businesses making a real difference
            </p>

            <form onSubmit={handleJoin} className="space-y-4">
              {status === 'success' && (
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                  <span className="text-green-800">Welcome to our community!</span>
                </div>
              )}

              {status === 'error' && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                  <span className="text-red-800">Already a member or error occurred</span>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your Name"
                  className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email Address"
                  required
                  className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full px-6 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 disabled:opacity-50"
              >
                {status === 'loading' ? 'Joining...' : 'Join the Community'}
              </button>
            </form>

            <p className="text-sm text-gray-600 text-center mt-6">
              By joining, you'll receive our newsletter with updates, insights, and exclusive offers
            </p>
          </div>
        </div>
      </div>

      {/* Footer*/}

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
