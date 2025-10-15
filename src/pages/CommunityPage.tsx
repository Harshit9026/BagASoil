import { useState } from 'react';
import { Users, Heart, Globe, Target, CheckCircle } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface CommunityPageProps {
  onNavigate: (page: string) => void;
}

export default function CommunityPage({ onNavigate }: CommunityPageProps) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

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
    </div>
  );
}
