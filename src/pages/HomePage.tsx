import { useState } from 'react';
import { Leaf, Recycle, CheckCircle, Mail } from 'lucide-react';
import { supabase } from '../lib/supabase';
import React, {  useEffect, useRef } from 'react';
import { TrendingUp,Building2,Store,Sprout,Heart ,Award,  ShoppingBag , Package , Users, Sparkles } from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  const [email, setEmail] = useState('');
  const [newsletterStatus, setNewsletterStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const [counters, setCounters] = useState({ bags: 0, plastic: 0, customers: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

   const logos = [
  { icon: Building2, name: 'Corporate Partners', color: 'from-green-400 to-emerald-400' },
  { icon: Store, name: 'Retail Chains', color: 'from-emerald-400 to-teal-400' },
  { icon: Sprout, name: 'Eco Startups', color: 'from-teal-400 to-cyan-400' },
  { icon: ShoppingBag, name: 'E-commerce', color: 'from-green-500 to-emerald-500' },
  { icon: Package, name: 'Logistics', color: 'from-emerald-500 to-green-600' },
];

  const stats = [
    { 
      icon: TrendingUp, 
      value: 10000000, 
      suffix: '+', 
      label: 'Bags Delivered',
      color: 'from-green-400 to-emerald-500',
      key: 'bags'
    },
    { 
      icon: Leaf, 
      value: 50000, 
      suffix: ' kg', 
      label: 'Plastic Waste Saved',
      color: 'from-emerald-400 to-teal-500',
      key: 'plastic'
    },
    { 
      icon: Users, 
      value: 5000, 
      suffix: '+', 
      label: 'Happy Customers',
      color: 'from-teal-400 to-cyan-500',
      key: 'customers'
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const animateCounter = (key, targetValue) => {
      const duration = 2500;
      const steps = 60;
      const stepValue = targetValue / steps;
      const stepDuration = duration / steps;
      let currentStep = 0;

      const timer = setInterval(() => {
        currentStep++;
        const newValue = Math.min(Math.floor(stepValue * currentStep), targetValue);
        
        setCounters((prev) => ({
          ...prev,
          [key]: newValue,
        }));

        if (currentStep >= steps) {
          clearInterval(timer);
          setCounters((prev) => ({
            ...prev,
            [key]: targetValue,
          }));
        }
      }, stepDuration);

      return timer;
    };

    const timers = [];
    timers.push(animateCounter('bags', 10000000));
    timers.push(animateCounter('plastic', 50000));
    timers.push(animateCounter('customers', 5000));

    return () => {
      timers.forEach(timer => clearInterval(timer));
    };
  }, [isVisible]);

  const formatNumber = (num) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
  };

  const handleNewsletterSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setNewsletterStatus('loading');

    try {
      const { error } = await supabase.from('newsletter_subscribers').insert({ email });
      if (error) throw error;

      setNewsletterStatus('success');
      setEmail('');
      setTimeout(() => setNewsletterStatus('idle'), 3000);
    } catch (error) {
      console.error('Newsletter signup error:', error);
      setNewsletterStatus('error');
      setTimeout(() => setNewsletterStatus('idle'), 3000);
    }
  };

  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
     <section className="relative bg-gradient-to-br from-green-50 to-emerald-100 h-screen px-4 sm:px-6 lg:px-8 overflow-hidden flex items-center justify-center">
        {/* Background Image with Parallax Effect */}
        <div className="absolute inset-0 w-full h-full">
          <div 
            className="absolute inset-0 w-full h-full bg-cover bg-center animate-ken-burns"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2071&auto=format&fit=crop')"
            }}
          ></div>
          {/* Gradient Overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-br from-green-900/75 via-emerald-800/70 to-green-900/75"></div>
          {/* Animated particles overlay */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="particle particle-1"></div>
            <div className="particle particle-2"></div>
            <div className="particle particle-3"></div>
            <div className="particle particle-4"></div>
            <div className="particle particle-5"></div>
          </div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg animate-text-shimmer">
              Sustainable Packaging for a <span className="text-green-300 animate-pulse-glow">Greener Tomorrow</span>
            </h1>
            <p className="text-lg sm:text-xl text-green-50 mb-8 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
              Join us in revolutionizing the packaging industry with 100% biodegradable, customizable bags. Together, we're making a difference—one bag at a time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => onNavigate('products')}
                className="px-8 py-3 bg-white text-green-700 rounded-lg font-medium hover:bg-green-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform"
              >
                Explore Products
              </button>
              <button
                onClick={() => onNavigate('contact')}
                className="px-8 py-3 bg-green-600/90 backdrop-blur-sm text-white rounded-lg font-medium border-2 border-white/30 hover:bg-green-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform"
              >
                Get a Quote
              </button>
            </div>
          </div>
          
          {/* Floating Elements */}
          <div className="absolute top-1/4 left-10 animate-float hidden lg:block">
            <Leaf className="w-12 h-12 text-green-300/50 drop-shadow-lg" />
          </div>
          <div className="absolute top-1/3 right-16 animate-float-delayed hidden lg:block">
            <Recycle className="w-10 h-10 text-green-200/40 drop-shadow-lg" />
          </div>
          <div className="absolute bottom-1/3 left-20 animate-float-slow hidden lg:block">
            <Leaf className="w-8 h-8 text-emerald-300/40 drop-shadow-lg" />
          </div>
          <div className="absolute top-1/2 right-32 animate-spin-slow hidden lg:block">
            <Recycle className="w-14 h-14 text-green-400/30 drop-shadow-lg" />
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-scroll-down"></div>
          </div>
        </div>

        <style jsx>{`
          @keyframes fade-in-up {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes float {
            0%, 100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-20px);
            }
          }

          @keyframes float-delayed {
            0%, 100% {
              transform: translateY(0px) rotate(0deg);
            }
            50% {
              transform: translateY(-15px) rotate(5deg);
            }
          }

          @keyframes float-slow {
            0%, 100% {
              transform: translateY(0px) rotate(0deg);
            }
            50% {
              transform: translateY(-25px) rotate(-10deg);
            }
          }

          @keyframes scroll-down {
            0% {
              transform: translateY(0);
              opacity: 1;
            }
            100% {
              transform: translateY(12px);
              opacity: 0;
            }
          }

          @keyframes ken-burns {
            0% {
              transform: scale(1);
            }
            100% {
              transform: scale(1.1);
            }
          }

          @keyframes text-shimmer {
            0% {
              background-position: -100%;
            }
            100% {
              background-position: 200%;
            }
          }

          @keyframes pulse-glow {
            0%, 100% {
              text-shadow: 0 0 10px rgba(134, 239, 172, 0.5);
            }
            50% {
              text-shadow: 0 0 20px rgba(134, 239, 172, 0.8), 0 0 30px rgba(134, 239, 172, 0.4);
            }
          }

          @keyframes particle-float {
            0% {
              transform: translateY(100vh) translateX(0) rotate(0deg);
              opacity: 0;
            }
            10% {
              opacity: 0.3;
            }
            90% {
              opacity: 0.3;
            }
            100% {
              transform: translateY(-100px) translateX(50px) rotate(360deg);
              opacity: 0;
            }
          }

          .animate-fade-in-up {
            animation: fade-in-up 1s ease-out;
          }

          .animate-float {
            animation: float 3s ease-in-out infinite;
          }

          .animate-float-delayed {
            animation: float-delayed 4s ease-in-out infinite;
          }

          .animate-float-slow {
            animation: float-slow 5s ease-in-out infinite;
          }

          .animate-scroll-down {
            animation: scroll-down 1.5s ease-in-out infinite;
          }

          .animate-ken-burns {
            animation: ken-burns 20s ease-in-out infinite alternate;
          }

          .animate-text-shimmer {
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
            background-size: 200% 100%;
            -webkit-background-clip: text;
            background-clip: text;
            animation: text-shimmer 3s ease-in-out infinite;
          }

          .animate-pulse-glow {
            animation: pulse-glow 2s ease-in-out infinite;
          }

          .animate-spin-slow {
            animation: spin 20s linear infinite;
          }

          @keyframes spin {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }

          .particle {
            position: absolute;
            width: 6px;
            height: 6px;
            background: rgba(134, 239, 172, 0.6);
            border-radius: 50%;
            pointer-events: none;
          }

          .particle-1 {
            left: 10%;
            animation: particle-float 15s ease-in-out infinite;
          }

          .particle-2 {
            left: 30%;
            animation: particle-float 18s ease-in-out infinite 3s;
          }

          .particle-3 {
            left: 50%;
            animation: particle-float 20s ease-in-out infinite 6s;
          }

          .particle-4 {
            left: 70%;
            animation: particle-float 16s ease-in-out infinite 9s;
          }

          .particle-5 {
            left: 90%;
            animation: particle-float 22s ease-in-out infinite 12s;
          }
        `}</style>
      </section>
      
      {/* Product Range */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Product Range</h2>
          <p className="text-lg text-gray-600">Eco-friendly solutions for every need</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {[
            { name: 'Carry Bags', desc: 'Durable and eco-friendly carry solutions', icon: '🛍️' },
            { name: 'Shopping Bags', desc: 'Premium shopping experience, guilt-free', icon: '🛒' },
            { name: 'Garbage Bags', desc: 'Strong, biodegradable waste management', icon: '♻️' },
            { name: 'Custom Bags', desc: 'Tailored to your brand and specifications', icon: '✨' },
          ].map((product, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => onNavigate('products')}
            >
              <div className="text-4xl mb-4">{product.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
              <p className="text-gray-600">{product.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About Us */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://res.cloudinary.com/dqir5enfp/image/upload/v1760367807/about-soilAbag_mancr8.jpg"
              alt="About us"
              className="rounded-lg shadow-lg w-full max-h-80 object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">About Bag a Soil</h2>
            <p className="text-gray-700 mb-4">
              Bag a Soil is dedicated to providing sustainable, 100% biodegradable packaging solutions that reduce plastic waste and support a greener future. We offer customizable options for businesses looking to make an eco-conscious impact.
            </p>
            <p className="text-gray-700">
              From production to disposal, our mission is to help companies and individuals transition to environmentally friendly alternatives without compromising quality or style.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">From production to disposal, our eco-friendly bags are designed for sustainability at every step.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {[
            { icon: Leaf, title: 'Sustainable Materials', desc: 'Made from 100% biodegradable materials, reducing plastic waste.' },
            { icon: Recycle, title: 'Eco-Friendly Manufacturing', desc: 'Low carbon footprint and environmentally responsible production.' },
            { icon: CheckCircle, title: 'End-of-Life Disposal', desc: 'Compostable or reusable bags that minimize waste.' },
          ].map((step, idx) => (
            <div key={idx} className="text-center p-6 bg-green-50 rounded-lg hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                <step.icon className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Environmental Impact */}

      <section 
      ref={sectionRef}
      className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-600 via-emerald-600 to-teal-700 overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-emerald-300/10 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-20 left-1/3 w-80 h-80 bg-teal-400/10 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
        
        {/* Floating Particles */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full animate-float-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${8 + Math.random() * 4}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Header */}
        <div className="mb-16 animate-fade-in-down">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-4">
            <Sparkles className="w-5 h-5 text-green-200 animate-pulse" />
            <span className="text-sm text-green-100 font-medium">Making a Difference</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 drop-shadow-lg">
            Our Environmental Impact
          </h2>
          <p className="text-xl text-green-50 font-light">Real numbers, real change</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            const counterValue = counters[stat.key];
            
            return (
              <div
                key={idx}
                className="group relative bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/15 hover:scale-105 transition-all duration-500 hover:shadow-2xl animate-fade-in-up"
                style={{ animationDelay: `${idx * 150}ms` }}
              >
                {/* Gradient Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-20 rounded-2xl blur-xl transition-opacity duration-500`}></div>
                
                {/* Icon */}
                <div className="relative mb-4 inline-flex">
                  <div className={`p-4 bg-gradient-to-br ${stat.color} rounded-xl shadow-lg group-hover:rotate-12 transition-transform duration-500`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Counter */}
                <div className="relative text-5xl font-bold text-white mb-3 drop-shadow-lg">
                  <span className="bg-gradient-to-br from-white to-green-100 bg-clip-text text-transparent">
                    {formatNumber(counterValue)}{stat.suffix}
                  </span>
                </div>

                {/* Label */}
                <div className="relative text-green-50 font-medium text-lg">
                  {stat.label}
                </div>

                {/* Progress Bar */}
                <div className="mt-4 h-1 bg-white/20 rounded-full overflow-hidden">
                  <div 
                    className={`h-full bg-gradient-to-r ${stat.color} rounded-full transition-all duration-2000 ease-out`}
                    style={{ width: isVisible ? '100%' : '0%' }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Text */}
        <div className="mt-12 animate-fade-in-up" style={{ animationDelay: '600ms' }}>
          <p className="text-green-100 text-lg">
            Join <span className="font-bold text-white">{formatNumber(counters.customers)}+</span> businesses making a sustainable choice
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }

        @keyframes float-particle {
          0%, 100% {
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100px) translateX(50px);
            opacity: 0;
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-down {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }

        .animate-float-particle {
          animation: float-particle linear infinite;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-fade-in-down {
          animation: fade-in-down 0.8s ease-out;
        }

        .transition-all {
          transition-property: all;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        }

        .duration-2000 {
          transition-duration: 2000ms;
        }
      `}</style>
    </section>


    {/* Photo Section */}
  
  {/* Greening Live Events Section */}
<section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-50 to-emerald-100">
  <div className="max-w-7xl mx-auto">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 bg-white rounded-lg overflow-hidden">
      {/* Left Side - Concert Image */}
      <div className="relative h-96 lg:h-auto overflow-hidden group">
        <img
          src="https://res.cloudinary.com/dqir5enfp/image/upload/v1760545046/public-concert_xzfkaa.png"
          alt="Concert crowd with vibrant lights"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
        <div className="absolute bottom-8 left-8 right-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-600/90 backdrop-blur-sm rounded-full mb-3">
            <Leaf className="w-4 h-4 text-white" />
            <span className="text-sm text-white font-semibold">Sustainable Events</span>
          </div>
          <h3 className="text-white text-2xl font-bold drop-shadow-lg">
            Making Every Concert Count
          </h3>
        </div>
      </div>

      {/* Right Side - Content */}
      <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-10 lg:p-12 flex flex-col justify-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
          Greening the <span className="text-green-600">Live Experience</span>
        </h2>
        
        <p className="text-gray-700 mb-4">
          Every concert, festival, and live event generates thousands of single-use plastic bags. We're changing that narrative by providing 100% biodegradable bags that decompose naturally within months, not centuries. Our eco-friendly solutions help event organizers reduce their environmental footprint while maintaining the convenience audiences expect.
        </p>
        
        <p className="text-gray-700 mb-6">
          From merchandise bags to food packaging, our plant-based materials break down into organic matter, leaving zero toxic residue. Join the movement of forward-thinking venues and promoters who are proving that memorable experiences don't have to cost the Earth.
        </p>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow">
            <div className="text-3xl font-bold text-green-600 mb-1">90%</div>
            <div className="text-sm text-gray-600">Less Carbon Footprint</div>
          </div>
          <div className="bg-white rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow">
            <div className="text-3xl font-bold text-green-600 mb-1">180</div>
            <div className="text-sm text-gray-600">Days to Decompose</div>
          </div>
          <div className="bg-white rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow">
            <div className="text-3xl font-bold text-green-600 mb-1">500+</div>
            <div className="text-sm text-gray-600">Events Served</div>
          </div>
          <div className="bg-white rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow">
            <div className="text-3xl font-bold text-green-600 mb-1">100%</div>
            <div className="text-sm text-gray-600">Compostable</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
      

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600">Answers to common questions about our products and sustainability.</p>
        </div>
        <div className="space-y-4 max-w-4xl mx-auto">
          {[
            { q: 'Are your bags truly biodegradable?', a: 'Yes! Our bags are made from 100% compostable materials certified by international standards.' },
            { q: 'Can I customize the size and design?', a: 'Absolutely. We offer tailor-made solutions for businesses of all sizes.' },
            { q: 'Do you provide bulk orders?', a: 'Yes, minimum order quantities are flexible depending on product type.' },
          ].map((faq, idx) => (
            <div key={idx} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
              <h3 className="font-bold text-gray-900 mb-2">{faq.q}</h3>
              <p className="text-gray-600">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
          <p className="text-lg text-gray-600">Real feedback from businesses going green</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {[
            { name: 'Rajesh Kumar', company: 'Green Mart', text: 'Switching to Bag a Soil was the best decision for our business. Our customers appreciate the eco-friendly approach.' },
            { name: 'Priya Sharma', company: 'Urban Organics', text: 'Quality products, competitive pricing, and exceptional service. Highly recommend for any business going green.' },
            { name: 'Amit Patel', company: 'Fresh Foods Co.', text: 'The custom branding options are fantastic. Our bags look professional and our customers love them.' },
          ].map((testimonial, idx) => (
            <div key={idx} className="bg-white rounded-lg p-6 shadow-sm">
                            <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
              <div>
                <div className="font-bold text-gray-900">{testimonial.name}</div>
                <div className="text-sm text-gray-500">{testimonial.company}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 md:p-12 text-center">
            <Mail className="h-12 w-12 text-green-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Join Our Green Community</h2>
            <p className="text-lg text-gray-600 mb-6">Get exclusive updates on sustainability and eco-innovations</p>
            <form onSubmit={handleNewsletterSignup} className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <button
                type="submit"
                disabled={newsletterStatus === 'loading'}
                className="px-6 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors disabled:opacity-50"
              >
                {newsletterStatus === 'loading' ? 'Subscribing...' : 'Subscribe'}
              </button>
            </form>
            {newsletterStatus === 'success' && (
              <div className="mt-4 flex items-center justify-center text-green-600">
                <CheckCircle className="h-5 w-5 mr-2" />
                <span>Successfully subscribed!</span>
              </div>
            )}
            {newsletterStatus === 'error' && (
              <div className="mt-4 text-center text-red-600">
                Already subscribed or an error occurred
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Trusted By Logos */}
       <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-green-50 to-emerald-50 overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full mb-6 shadow-sm">
            <Heart className="w-5 h-5 text-green-600 animate-pulse" />
            <span className="text-sm font-semibold text-green-700 uppercase tracking-wide">Partners in Sustainability</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-gray-900 via-green-800 to-emerald-900 bg-clip-text text-transparent mb-4">
            Trusted By Industry Leaders
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join thousands of forward-thinking businesses making the switch to sustainable packaging
          </p>
        </div>

        {/* Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-12">
          {logos.map((logo, idx) => {
            const Icon = logo.icon;
            return (
              <div
                key={idx}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${logo.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}></div>
                
                {/* Icon Container */}
                <div className="relative flex flex-col items-center justify-center">
                  <div className={`mb-4 p-4 bg-gradient-to-br ${logo.color} rounded-xl shadow-md group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <span className="text-sm font-medium text-gray-700 text-center group-hover:text-gray-900 transition-colors">
                    {logo.name}
                  </span>
                </div>

                {/* Decorative Corner */}
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <Award className="w-5 h-5 text-green-500" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Marquee Animation */}
       
        {/* Stats Footer */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in-up" style={{ animationDelay: '600ms' }}>
          <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-xl">
            <div className="text-3xl font-bold text-green-600 mb-2">500+</div>
            <div className="text-sm text-gray-600">Partner Companies</div>
          </div>
          <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-xl">
            <div className="text-3xl font-bold text-emerald-600 mb-2">50+</div>
            <div className="text-sm text-gray-600">Countries Worldwide</div>
          </div>
          <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-xl">
            <div className="text-3xl font-bold text-teal-600 mb-2">98%</div>
            <div className="text-sm text-gray-600">Customer Satisfaction</div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-marquee {
          animation: marquee 30s linear infinite;
        }

        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>

      {/* Footer */}
      <footer className="bg-green-600 text-green-50 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Bag a Soil. All rights reserved.
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

