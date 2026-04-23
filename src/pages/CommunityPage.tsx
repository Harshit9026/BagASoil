// import { useState } from 'react';
// import { Users, Globe, Target, CheckCircle } from 'lucide-react';
// import { supabase } from '../lib/supabase';
// import { FileText, Download, Award, Leaf,Facebook,Twitter,Instagram,Linkedin,MapPin ,Phone ,ArrowRight, Mail,Heart,  } from 'lucide-react';
// import { useNavigate } from 'react-router-dom';

// interface CommunityPageProps {
//   onNavigate: (page: string) => void;
// }

// export default function CommunityPage({ onNavigate }: CommunityPageProps) {
//   const [email, setEmail] = useState('');
//   const [name, setName] = useState('');
//   const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
//   const navigate=useNavigate()

//   const handleJoin = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setStatus('loading');

//     try {
//       const { error } = await supabase
//         .from('newsletter_subscribers')
//         .insert({ email, name });

//       if (error) throw error;

//       setStatus('success');
//       setEmail('');
//       setName('');
//       setTimeout(() => setStatus('idle'), 3000);
//     } catch (error) {
//       console.error('Community signup error:', error);
//       setStatus('error');
//       setTimeout(() => setStatus('idle'), 3000);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <div className="bg-gradient-to-br from-green-600 to-emerald-700 py-16 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-7xl mx-auto text-center">
//           <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
//             Join Our Green Community
//           </h1>
//           <p className="text-lg text-green-50 max-w-2xl mx-auto">
//             Together, we're building a sustainable future through innovation, collaboration, and shared values
//           </p>
//         </div>
//       </div>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
//           {[
//             {
//               icon: Users,
//               title: 'Collaborative Network',
//               desc: 'Connect with businesses and individuals committed to sustainability',
//             },
//             {
//               icon: Heart,
//               title: 'Shared Mission',
//               desc: 'Unite under a common goal of environmental protection',
//             },
//             {
//               icon: Globe,
//               title: 'Global Impact',
//               desc: 'Be part of a worldwide movement for change',
//             },
//             {
//               icon: Target,
//               title: 'Collective Goals',
//               desc: 'Work together toward measurable environmental targets',
//             },
//           ].map((item, idx) => (
//             <div key={idx} className="text-center">
//               <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
//                 <item.icon className="h-8 w-8 text-green-600" />
//               </div>
//               <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
//               <p className="text-gray-600">{item.desc}</p>
//             </div>
//           ))}
//         </div>

//         <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12 mb-16">
//           <div className="max-w-3xl mx-auto">
//             <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
//               What We Offer
//             </h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               {[
//                 'Exclusive sustainability insights and best practices',
//                 'Early access to new eco-friendly products',
//                 'Industry trends and market updates',
//                 'Networking opportunities with green businesses',
//                 'Educational resources and workshops',
//                 'Recognition for sustainability achievements',
//               ].map((benefit, idx) => (
//                 <div key={idx} className="flex items-start">
//                   <CheckCircle className="h-6 w-6 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
//                   <span className="text-gray-700">{benefit}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         <div className="bg-gradient-to-br from-green-600 to-emerald-700 rounded-2xl p-8 md:p-12 text-white mb-16">
//           <div className="max-w-2xl mx-auto text-center">
//             <h2 className="text-3xl font-bold mb-4">Community Impact</h2>
//             <p className="text-lg text-green-50 mb-12">
//               Our collective achievements in the journey toward sustainability
//             </p>

//             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//               {[
//                 { value: '500+', label: 'Community Members' },
//                 { value: '100K kg', label: 'Plastic Waste Prevented' },
//                 { value: '50+', label: 'Partner Organizations' },
//               ].map((stat, idx) => (
//                 <div key={idx}>
//                   <div className="text-4xl font-bold mb-2">{stat.value}</div>
//                   <div className="text-green-50">{stat.label}</div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 md:p-12">
//           <div className="max-w-2xl mx-auto">
//             <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
//               Become a Member
//             </h2>
//             <p className="text-gray-600 text-center mb-8">
//               Join thousands of forward-thinking individuals and businesses making a real difference
//             </p>

//             <form onSubmit={handleJoin} className="space-y-4">
//               {status === 'success' && (
//                 <div className="p-4 bg-green-50 border border-green-200 rounded-lg flex items-center">
//                   <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
//                   <span className="text-green-800">Welcome to our community!</span>
//                 </div>
//               )}

//               {status === 'error' && (
//                 <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
//                   <span className="text-red-800">Already a member or error occurred</span>
//                 </div>
//               )}

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <input
//                   type="text"
//                   value={name}
//                   onChange={(e) => setName(e.target.value)}
//                   placeholder="Your Name"
//                   className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
//                 />
//                 <input
//                   type="email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   placeholder="Email Address"
//                   required
//                   className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
//                 />
//               </div>

//               <button
//                 type="submit"
//                 disabled={status === 'loading'}
//                 className="w-full px-6 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 disabled:opacity-50"
//               >
//                 {status === 'loading' ? 'Joining...' : 'Join the Community'}
//               </button>
//             </form>

//             <p className="text-sm text-gray-600 text-center mt-6">
//               By joining, you'll receive our newsletter with updates, insights, and exclusive offers
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Footer*/}

//       <footer className="relative bg-gradient-to-br from-green-700 via-green-600 to-emerald-700 text-white overflow-hidden">
//       {/* Decorative Background Elements */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl"></div>
//         <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-green-500/20 rounded-full blur-3xl"></div>

//         {/* Floating Leaves */}
//         <Leaf className="absolute top-20 left-10 w-8 h-8 text-green-300/20 animate-float" />
//         <Leaf className="absolute top-40 right-20 w-6 h-6 text-emerald-300/20 animate-float-delayed" />
//         <Leaf className="absolute bottom-20 left-1/3 w-10 h-10 text-green-400/20 animate-float-slow" />
//       </div>

//       {/* Main Footer Content */}
//       <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

//           {/* Company Info */}
//           <div className="space-y-4">
//             <div
//               className="flex items-center gap-2 mb-4 cursor-pointer"
//               onClick={() => navigate('/home')}
//             >
//               <div className="p-2 bg-white/10 rounded-lg backdrop-blur-sm">
//                 <Leaf className="w-6 h-6 text-green-200" />
//               </div>
//               <h3 className="text-2xl font-bold">Bag a Soil</h3>
//             </div>
//             <p className="text-green-100 leading-relaxed">
//               Leading the way in sustainable packaging solutions. Making the world greener, one bag at a time.
//             </p>
//             <div className="flex gap-3 pt-2">
//               {[{ Icon: Facebook, link: 'https://facebook.com' },
//                 { Icon: Twitter, link: 'https://twitter.com' },
//                 { Icon: Instagram, link: 'https://instagram.com' },
//                 { Icon: Linkedin, link: 'https://linkedin.com' }].map(({ Icon, link }, idx) => (
//                 <a key={idx} href={link} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-300 hover:scale-110">
//                   <Icon className="w-5 h-5" />
//                 </a>
//               ))}
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
//               <div className="w-1 h-6 bg-green-300 rounded-full"></div>
//               Quick Links
//             </h4>
//             <ul className="space-y-3">
//               {[
//                 { label: 'Home', path: '/home' },
//                 { label: 'Products', path: '/products' },
//                 { label: 'Sustainability', path: '/sustainability' },
//                 { label: 'Community', path: '/community' },
//                 { label: 'Certificates', path: '/certifications' },
//                 { label: 'Contact', path: '/contact' },
//               ].map((link, idx) => (
//                 <li key={idx}>
//                   <button
//                     onClick={() => navigate(link.path)}
//                     className="text-green-100 hover:text-white transition-colors flex items-center gap-2 group"
//                   >
//                     <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
//                     <span className="group-hover:translate-x-1 transition-transform">{link.label}</span>
//                   </button>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Products */}
//           <div>
//             <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
//               <div className="w-1 h-6 bg-green-300 rounded-full"></div>
//               Our Products
//             </h4>
//             <ul className="space-y-3">
//               {['Carry Bags', 'Shopping Bags', 'Garbage Bags', 'Custom Bags', 'Bulk Orders'].map((product, idx) => (
//                 <li key={idx}>
//                   <button
//                     onClick={() => navigate('/products')}
//                     className="text-green-100 hover:text-white transition-colors flex items-center gap-2 group"
//                   >
//                     <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
//                     <span className="group-hover:translate-x-1 transition-transform">{product}</span>
//                   </button>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Contact Info */}
//           <div>
//             <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
//               <div className="w-1 h-6 bg-green-300 rounded-full"></div>
//               Get In Touch
//             </h4>
//             <ul className="space-y-4">
//               <li className="flex items-start gap-3">
//                 <MapPin className="w-5 h-5 text-green-300 mt-1 flex-shrink-0" />
//                 <span className="text-green-100"> Tadepalligudem<br />
//                       Andhra Pradesh, India</span>
//               </li>
//               <li className="flex items-center gap-3">
//                 <Phone className="w-5 h-5 text-green-300 flex-shrink-0" />
//                 <a href="tel:+919952482228" className="text-green-100 hover:text-white transition-colors">
//                   +91 9952482228
//                 </a>
//               </li>
//               <li className="flex items-center gap-3">
//                 <Mail className="w-5 h-5 text-green-300 flex-shrink-0" />
//                 <a href="mailto: bagasoilcompostable@gmail.com" className="text-green-100 hover:text-white transition-colors">
//                    bagasoilcompostable@gmail.com
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>

//         {/* Bottom Bar */}
//         <div className="border-t border-green-500/30 pt-8">
//           <div className="flex flex-col md:flex-row justify-between items-center gap-4">
//             <div className="text-green-100 text-center md:text-left">
//               &copy; {new Date().getFullYear()} Bag a Soil. All rights reserved.
//             </div>
//             <div className="flex items-center gap-1 text-green-100">
//               Made with <Heart className="w-4 h-4 text-red-400 animate-pulse mx-1" /> for the Planet
//             </div>
//             <div className="flex flex-wrap justify-center gap-4 md:gap-6">
//               <button onClick={() => navigate('/privacy')} className="text-green-100 hover:text-white transition-colors">
//                 Privacy Policy
//               </button>
//               <button onClick={() => navigate('/terms')} className="text-green-100 hover:text-white transition-colors">
//                 Terms of Service
//               </button>
//               <button onClick={() => navigate('/cookie')} className="text-green-100 hover:text-white transition-colors">
//                 Cookie Policy
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Floating Leaf Animations */}
//       <style jsx>{`
//         @keyframes float {
//           0%, 100% { transform: translateY(0px) rotate(0deg); }
//           50% { transform: translateY(-20px) rotate(10deg); }
//         }
//         @keyframes float-delayed {
//           0%, 100% { transform: translateY(0px) rotate(0deg); }
//           50% { transform: translateY(-15px) rotate(-10deg); }
//         }
//         @keyframes float-slow {
//           0%, 100% { transform: translateY(0px) rotate(0deg); }
//           50% { transform: translateY(-25px) rotate(15deg); }
//         }
//         .animate-float { animation: float 6s ease-in-out infinite; }
//         .animate-float-delayed { animation: float-delayed 8s ease-in-out infinite; }
//         .animate-float-slow { animation: float-slow 10s ease-in-out infinite; }
//       `}</style>
//     </footer>

//     </div>
//   );
// }

// import { useState } from 'react';
// import { Users, Globe, Target, CheckCircle } from 'lucide-react';
// import { supabase } from '../lib/supabase';
// import { FileText, Download, Award, Leaf,Facebook,Twitter,Instagram,Linkedin,MapPin ,Phone ,ArrowRight, Mail,Heart,  } from 'lucide-react';
// import { useNavigate } from 'react-router-dom';

// interface CommunityPageProps {
//   onNavigate: (page: string) => void;
// }

// export default function CommunityPage({ onNavigate }: CommunityPageProps) {
//   const [email, setEmail] = useState('');
//   const [name, setName] = useState('');
//   const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
//   const navigate=useNavigate()

//   const handleJoin = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setStatus('loading');

//     try {
//       const { error } = await supabase
//         .from('newsletter_subscribers')
//         .insert({ email, name });

//       if (error) throw error;

//       setStatus('success');
//       setEmail('');
//       setName('');
//       setTimeout(() => setStatus('idle'), 3000);
//     } catch (error) {
//       console.error('Community signup error:', error);
//       setStatus('error');
//       setTimeout(() => setStatus('idle'), 3000);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <div className="bg-gradient-to-br from-green-600 to-emerald-700 py-16 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-7xl mx-auto text-center">
//           <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
//             Join Our Green Community
//           </h1>
//           <p className="text-lg text-green-50 max-w-2xl mx-auto">
//             Together, we're building a sustainable future through innovation, collaboration, and shared values
//           </p>
//         </div>
//       </div>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
//           {[
//             {
//               icon: Users,
//               title: 'Collaborative Network',
//               desc: 'Connect with businesses and individuals committed to sustainability',
//             },
//             {
//               icon: Heart,
//               title: 'Shared Mission',
//               desc: 'Unite under a common goal of environmental protection',
//             },
//             {
//               icon: Globe,
//               title: 'Global Impact',
//               desc: 'Be part of a worldwide movement for change',
//             },
//             {
//               icon: Target,
//               title: 'Collective Goals',
//               desc: 'Work together toward measurable environmental targets',
//             },
//           ].map((item, idx) => (
//             <div key={idx} className="text-center">
//               <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
//                 <item.icon className="h-8 w-8 text-green-600" />
//               </div>
//               <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
//               <p className="text-gray-600">{item.desc}</p>
//             </div>
//           ))}
//         </div>

//         <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12 mb-16">
//           <div className="max-w-3xl mx-auto">
//             <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
//               What We Offer
//             </h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               {[
//                 'Exclusive sustainability insights and best practices',
//                 'Early access to new eco-friendly products',
//                 'Industry trends and market updates',
//                 'Networking opportunities with green businesses',
//                 'Educational resources and workshops',
//                 'Recognition for sustainability achievements',
//               ].map((benefit, idx) => (
//                 <div key={idx} className="flex items-start">
//                   <CheckCircle className="h-6 w-6 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
//                   <span className="text-gray-700">{benefit}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         <div className="bg-gradient-to-br from-green-600 to-emerald-700 rounded-2xl p-8 md:p-12 text-white mb-16">
//           <div className="max-w-2xl mx-auto text-center">
//             <h2 className="text-3xl font-bold mb-4">Community Impact</h2>
//             <p className="text-lg text-green-50 mb-12">
//               Our collective achievements in the journey toward sustainability
//             </p>

//             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//               {[
//                 { value: '500+', label: 'Community Members' },
//                 { value: '100K kg', label: 'Plastic Waste Prevented' },
//                 { value: '50+', label: 'Partner Organizations' },
//               ].map((stat, idx) => (
//                 <div key={idx}>
//                   <div className="text-4xl font-bold mb-2">{stat.value}</div>
//                   <div className="text-green-50">{stat.label}</div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 md:p-12">
//           <div className="max-w-2xl mx-auto">
//             <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
//               Become a Member
//             </h2>
//             <p className="text-gray-600 text-center mb-8">
//               Join thousands of forward-thinking individuals and businesses making a real difference
//             </p>

//             <form onSubmit={handleJoin} className="space-y-4">
//               {status === 'success' && (
//                 <div className="p-4 bg-green-50 border border-green-200 rounded-lg flex items-center">
//                   <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
//                   <span className="text-green-800">Welcome to our community!</span>
//                 </div>
//               )}

//               {status === 'error' && (
//                 <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
//                   <span className="text-red-800">Already a member or error occurred</span>
//                 </div>
//               )}

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <input
//                   type="text"
//                   value={name}
//                   onChange={(e) => setName(e.target.value)}
//                   placeholder="Your Name"
//                   className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
//                 />
//                 <input
//                   type="email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   placeholder="Email Address"
//                   required
//                   className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
//                 />
//               </div>

//               <button
//                 type="submit"
//                 disabled={status === 'loading'}
//                 className="w-full px-6 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 disabled:opacity-50"
//               >
//                 {status === 'loading' ? 'Joining...' : 'Join the Community'}
//               </button>
//             </form>

//             <p className="text-sm text-gray-600 text-center mt-6">
//               By joining, you'll receive our newsletter with updates, insights, and exclusive offers
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Footer*/}

//       <footer className="relative bg-gradient-to-br from-green-700 via-green-600 to-emerald-700 text-white overflow-hidden">
//       {/* Decorative Background Elements */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl"></div>
//         <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-green-500/20 rounded-full blur-3xl"></div>

//         {/* Floating Leaves */}
//         <Leaf className="absolute top-20 left-10 w-8 h-8 text-green-300/20 animate-float" />
//         <Leaf className="absolute top-40 right-20 w-6 h-6 text-emerald-300/20 animate-float-delayed" />
//         <Leaf className="absolute bottom-20 left-1/3 w-10 h-10 text-green-400/20 animate-float-slow" />
//       </div>

//       {/* Main Footer Content */}
//       <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

//           {/* Company Info */}
//           <div className="space-y-4">
//             <div
//               className="flex items-center gap-2 mb-4 cursor-pointer"
//               onClick={() => navigate('/home')}
//             >
//               <div className="p-2 bg-white/10 rounded-lg backdrop-blur-sm">
//                 <Leaf className="w-6 h-6 text-green-200" />
//               </div>
//               <h3 className="text-2xl font-bold">Bag a Soil</h3>
//             </div>
//             <p className="text-green-100 leading-relaxed">
//               Leading the way in sustainable packaging solutions. Making the world greener, one bag at a time.
//             </p>
//             <div className="flex gap-3 pt-2">
//               {[{ Icon: Facebook, link: 'https://facebook.com' },
//                 { Icon: Twitter, link: 'https://twitter.com' },
//                 { Icon: Instagram, link: 'https://instagram.com' },
//                 { Icon: Linkedin, link: 'https://linkedin.com' }].map(({ Icon, link }, idx) => (
//                 <a key={idx} href={link} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-300 hover:scale-110">
//                   <Icon className="w-5 h-5" />
//                 </a>
//               ))}
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
//               <div className="w-1 h-6 bg-green-300 rounded-full"></div>
//               Quick Links
//             </h4>
//             <ul className="space-y-3">
//               {[
//                 { label: 'Home', path: '/home' },
//                 { label: 'Products', path: '/products' },
//                 { label: 'Sustainability', path: '/sustainability' },
//                 { label: 'Community', path: '/community' },
//                 { label: 'Certificates', path: '/certifications' },
//                 { label: 'Contact', path: '/contact' },
//               ].map((link, idx) => (
//                 <li key={idx}>
//                   <button
//                     onClick={() => navigate(link.path)}
//                     className="text-green-100 hover:text-white transition-colors flex items-center gap-2 group"
//                   >
//                     <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
//                     <span className="group-hover:translate-x-1 transition-transform">{link.label}</span>
//                   </button>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Products */}
//           <div>
//             <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
//               <div className="w-1 h-6 bg-green-300 rounded-full"></div>
//               Our Products
//             </h4>
//             <ul className="space-y-3">
//               {['Carry Bags', 'Shopping Bags', 'Garbage Bags', 'Custom Bags', 'Bulk Orders'].map((product, idx) => (
//                 <li key={idx}>
//                   <button
//                     onClick={() => navigate('/products')}
//                     className="text-green-100 hover:text-white transition-colors flex items-center gap-2 group"
//                   >
//                     <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
//                     <span className="group-hover:translate-x-1 transition-transform">{product}</span>
//                   </button>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Contact Info */}
//           <div>
//             <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
//               <div className="w-1 h-6 bg-green-300 rounded-full"></div>
//               Get In Touch
//             </h4>
//             <ul className="space-y-4">
//               <li className="flex items-start gap-3">
//                 <MapPin className="w-5 h-5 text-green-300 mt-1 flex-shrink-0" />
//                 <span className="text-green-100"> Tadepalligudem<br />
//                       Andhra Pradesh, India</span>
//               </li>
//               <li className="flex items-center gap-3">
//                 <Phone className="w-5 h-5 text-green-300 flex-shrink-0" />
//                 <a href="tel:+919952482228" className="text-green-100 hover:text-white transition-colors">
//                   +91 9952482228
//                 </a>
//               </li>
//               <li className="flex items-center gap-3">
//                 <Mail className="w-5 h-5 text-green-300 flex-shrink-0" />
//                 <a href="mailto: bagasoilcompostable@gmail.com" className="text-green-100 hover:text-white transition-colors">
//                    bagasoilcompostable@gmail.com
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>

//         {/* Bottom Bar */}
//         <div className="border-t border-green-500/30 pt-8">
//           <div className="flex flex-col md:flex-row justify-between items-center gap-4">
//             <div className="text-green-100 text-center md:text-left">
//               &copy; {new Date().getFullYear()} Bag a Soil. All rights reserved.
//             </div>
//             <div className="flex items-center gap-1 text-green-100">
//               Made with <Heart className="w-4 h-4 text-red-400 animate-pulse mx-1" /> for the Planet
//             </div>
//             <div className="flex flex-wrap justify-center gap-4 md:gap-6">
//               <button onClick={() => navigate('/privacy')} className="text-green-100 hover:text-white transition-colors">
//                 Privacy Policy
//               </button>
//               <button onClick={() => navigate('/terms')} className="text-green-100 hover:text-white transition-colors">
//                 Terms of Service
//               </button>
//               <button onClick={() => navigate('/cookie')} className="text-green-100 hover:text-white transition-colors">
//                 Cookie Policy
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Floating Leaf Animations */}
//       <style jsx>{`
//         @keyframes float {
//           0%, 100% { transform: translateY(0px) rotate(0deg); }
//           50% { transform: translateY(-20px) rotate(10deg); }
//         }
//         @keyframes float-delayed {
//           0%, 100% { transform: translateY(0px) rotate(0deg); }
//           50% { transform: translateY(-15px) rotate(-10deg); }
//         }
//         @keyframes float-slow {
//           0%, 100% { transform: translateY(0px) rotate(0deg); }
//           50% { transform: translateY(-25px) rotate(15deg); }
//         }
//         .animate-float { animation: float 6s ease-in-out infinite; }
//         .animate-float-delayed { animation: float-delayed 8s ease-in-out infinite; }
//         .animate-float-slow { animation: float-slow 10s ease-in-out infinite; }
//       `}</style>
//     </footer>

//     </div>
//   );
// }

import { useState } from 'react';
import { Users, Globe, Target, CheckCircle } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { Leaf, Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, ArrowRight, Mail, Heart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function CommunityPage({ onNavigate }) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [status, setStatus] = useState('idle');
  const navigate = useNavigate();

  const handleJoin = async (e) => {
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

      {/* ── Global Keyframes ── */}
      <style>{`
        @keyframes kb-zoom {
          0%   { transform: scale(1.08) translate(0px,  0px); }
          33%  { transform: scale(1.12) translate(-7px, -4px); }
          66%  { transform: scale(1.10) translate(5px,   5px); }
          100% { transform: scale(1.08) translate(0px,  0px); }
        }
        .kb-zoom { animation: kb-zoom 20s ease-in-out infinite; }

        @keyframes spin-cw  { from{transform:rotate(0deg)}   to{transform:rotate(360deg)}  }
        @keyframes spin-ccw { from{transform:rotate(0deg)}   to{transform:rotate(-360deg)} }

        @keyframes float-up { 0%,100%{transform:translateY(0) rotate(0deg) scale(1)} 50%{transform:translateY(-18px) rotate(5deg) scale(1.03)} }
        @keyframes float-dn { 0%,100%{transform:translateY(0) rotate(0deg) scale(1)} 50%{transform:translateY(14px) rotate(-4deg) scale(0.98)} }

        @keyframes pulse-op { 0%,100%{opacity:0.18} 50%{opacity:0.42} }
        @keyframes twinkle  { 0%,100%{opacity:0.10} 50%{opacity:0.55} }

        @keyframes shimmer {
          0%  { background-position: 200% center }
          100%{ background-position:-200% center }
        }
        @keyframes glow-ring {
          0%,100%{ box-shadow:0 0 0 0   rgba(134,239,172,0.40) }
          50%    { box-shadow:0 0 0 10px rgba(134,239,172,0)    }
        }

        .h-float-a { animation: float-up 7s ease-in-out infinite; }
        .h-float-b { animation: float-dn 9s ease-in-out infinite; }
        .h-float-c { animation: float-up 6s ease-in-out infinite 1.5s; }
        .h-float-d { animation: float-dn 8s ease-in-out infinite 3s; }
        .h-pulse    { animation: pulse-op 4s ease-in-out infinite; }
        .h-pulse2   { animation: pulse-op 5s ease-in-out infinite 1s; }
        .h-twinkle  { animation: twinkle  2.8s ease-in-out infinite; }

        .shimmer-text {
          background: linear-gradient(90deg,#fff 0%,#bbf7d0 40%,#fff 60%,#bbf7d0 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 4s linear infinite;
        }
        .hero-badge { animation: glow-ring 2.5s ease-in-out infinite; }
      `}</style>

      {/* ══════════════════════════════════════
          HERO SECTION
      ══════════════════════════════════════ */}
      <div className="relative overflow-hidden" style={{ minHeight: '360px' }}>

        {/* 1. Background image — Ken Burns + blur + dim */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div
            className="kb-zoom absolute inset-0"
            style={{
              backgroundImage: 'url(/community-image2.avif)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'blur(3px) brightness(0.42)',
              transform: 'scale(1.08)',
            }}
          />
        </div>

        {/* 2. SVG decorations — rings kept very subtle (low opacity) */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1400 360"
          preserveAspectRatio="xMidYMid slice"
          style={{ zIndex: 1 }}
        >
          {/* ── LEFT BADGE SEAL ── */}
          <g className="h-float-a" style={{ transformOrigin: '115px 180px' }}>
            <circle cx="115" cy="180" r="110" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="1.4"
              strokeDasharray="14 9"
              style={{ animation:'spin-cw 16s linear infinite', transformOrigin:'115px 180px' }} />
            <circle cx="115" cy="180" r="82" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.16)" strokeWidth="1.4"
              style={{ animation:'spin-ccw 11s linear infinite', transformOrigin:'115px 180px' }} />
            <circle cx="115" cy="180" r="56" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.14)" strokeWidth="1.2" />
            <polygon points="115,138 125,164 156,164 132,181 141,207 115,190 89,207 98,181 74,164 105,164"
              fill="rgba(255,255,255,0.32)" stroke="rgba(255,255,255,0.48)" strokeWidth="1.1" />
            <circle cx="115" cy="180" r="11" fill="rgba(255,255,255,0.28)" />
          </g>

          {/* ── RIGHT BADGE SEAL ── */}
          <g className="h-float-b" style={{ transformOrigin: '1285px 170px' }}>
            <circle cx="1285" cy="170" r="104" fill="none" stroke="rgba(255,255,255,0.10)" strokeWidth="1.4"
              strokeDasharray="12 8"
              style={{ animation:'spin-ccw 14s linear infinite', transformOrigin:'1285px 170px' }} />
            <circle cx="1285" cy="170" r="76" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.15)" strokeWidth="1.4"
              style={{ animation:'spin-cw 10s linear infinite', transformOrigin:'1285px 170px' }} />
            <circle cx="1285" cy="170" r="52" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.13)" strokeWidth="1.2" />
            <polygon points="1285,130 1295,155 1324,155 1301,172 1310,198 1285,181 1260,198 1269,172 1246,155 1275,155"
              fill="rgba(255,255,255,0.30)" stroke="rgba(255,255,255,0.45)" strokeWidth="1.1" />
            <circle cx="1285" cy="170" r="10" fill="rgba(255,255,255,0.25)" />
          </g>

          {/* ── PEOPLE / COMMUNITY ICON — top left ── */}
          <g className="h-float-c" style={{ transformOrigin: '340px 70px' }}>
            <circle cx="340" cy="70" r="55" fill="none" stroke="rgba(255,255,255,0.10)" strokeWidth="1.2"
              strokeDasharray="9 7"
              style={{ animation:'spin-ccw 18s linear infinite', transformOrigin:'340px 70px' }} />
            <circle cx="340" cy="70" r="36" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.18)" strokeWidth="1.2" />
            {/* simplified people icon */}
            <circle cx="330" cy="58" r="7" fill="rgba(255,255,255,0.45)" />
            <path d="M318,82 Q330,72 342,82" fill="rgba(255,255,255,0.38)" stroke="none" />
            <circle cx="350" cy="58" r="7" fill="rgba(255,255,255,0.45)" />
            <path d="M338,82 Q350,72 362,82" fill="rgba(255,255,255,0.38)" stroke="none" />
          </g>

          {/* ── GLOBE ICON — top right area ── */}
          <g className="h-float-d" style={{ transformOrigin: '1060px 285px' }}>
            <circle cx="1060" cy="285" r="58" fill="none" stroke="rgba(255,255,255,0.09)" strokeWidth="1.2"
              strokeDasharray="8 7"
              style={{ animation:'spin-cw 20s linear infinite', transformOrigin:'1060px 285px' }} />
            <circle cx="1060" cy="285" r="26" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.38)" strokeWidth="1.6" />
            <line x1="1034" y1="285" x2="1086" y2="285" stroke="rgba(255,255,255,0.32)" strokeWidth="1.2" />
            <line x1="1060" y1="259" x2="1060" y2="311" stroke="rgba(255,255,255,0.32)" strokeWidth="1.2" />
            <ellipse cx="1060" cy="285" rx="12" ry="26" fill="none" stroke="rgba(255,255,255,0.28)" strokeWidth="1.2" />
          </g>

          {/* ── HEART ICON — top center ── */}
          <g className="h-float-a" style={{ transformOrigin: '700px 52px', animationDelay:'1s' }}>
            <circle cx="700" cy="52" r="42" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.14)" strokeWidth="1.4"
              style={{ animation:'spin-cw 22s linear infinite', transformOrigin:'700px 52px' }} />
            <circle cx="700" cy="52" r="28" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.12)" strokeWidth="1.0" />
            <path d="M700,68 Q680,54 680,44 A10,10 0 0,1 700,44 A10,10 0 0,1 720,44 Q720,54 700,68 Z"
              fill="rgba(255,255,255,0.48)" stroke="none" />
          </g>

          {/* ── ORBIT RINGS — center-left (very faint) ── */}
          <circle cx="390" cy="220" r="90" fill="none" stroke="rgba(255,255,255,0.09)" strokeWidth="1.4"
            strokeDasharray="15 10"
            style={{ animation:'spin-cw 18s linear infinite', transformOrigin:'390px 220px' }} />
          <circle cx="390" cy="220" r="62" fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth="1.0"
            strokeDasharray="9 11"
            style={{ animation:'spin-ccw 13s linear infinite', transformOrigin:'390px 220px' }} />

          {/* ── ORBIT RINGS — center-right (very faint) ── */}
          <circle cx="1010" cy="115" r="95" fill="none" stroke="rgba(255,255,255,0.09)" strokeWidth="1.4"
            strokeDasharray="15 10"
            style={{ animation:'spin-ccw 20s linear infinite', transformOrigin:'1010px 115px' }} />
          <circle cx="1010" cy="115" r="65" fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth="1.0"
            strokeDasharray="9 11"
            style={{ animation:'spin-cw 14s linear infinite', transformOrigin:'1010px 115px' }} />

          {/* ── RIBBON BANNERS ── */}
          <g className="h-float-b" style={{ transformOrigin:'265px 305px', animationDelay:'0.5s' }}>
            <rect x="175" y="297" width="180" height="18" rx="5" fill="rgba(255,255,255,0.14)" />
            <polygon points="175,297 161,306 175,315" fill="rgba(255,255,255,0.14)" />
            <polygon points="355,297 369,306 355,315" fill="rgba(255,255,255,0.14)" />
          </g>
          <g className="h-float-a" style={{ transformOrigin:'1148px 40px', animationDelay:'2.5s' }}>
            <rect x="1058" y="32" width="180" height="18" rx="5" fill="rgba(255,255,255,0.12)" />
            <polygon points="1058,32 1044,41 1058,50" fill="rgba(255,255,255,0.12)" />
            <polygon points="1238,32 1252,41 1238,50" fill="rgba(255,255,255,0.12)" />
          </g>

          {/* ── CHECKMARK CIRCLES (subtle) ── */}
          <g className="h-pulse" style={{ transformOrigin:'585px 275px' }}>
            <circle cx="585" cy="275" r="34" fill="none" stroke="rgba(255,255,255,0.20)" strokeWidth="1.8" />
            <polyline points="572,275 581,286 600,263" fill="none" stroke="rgba(255,255,255,0.45)"
              strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
          </g>
          <g className="h-pulse2" style={{ transformOrigin:'848px 68px' }}>
            <circle cx="848" cy="68" r="30" fill="none" stroke="rgba(255,255,255,0.18)" strokeWidth="1.6" />
            <polyline points="836,68 845,78 862,57" fill="none" stroke="rgba(255,255,255,0.40)"
              strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </g>

          {/* ── TWINKLING STARS (fewer, lighter) ── */}
          {[
            [478,28],[538,302],[818,22],[918,312],
            [1158,205],[203,98],[658,290],[773,48]
          ].map(([x,y],i) => (
            <g key={i} className="h-twinkle" style={{ animationDelay:`${i*0.38}s` }}>
              <polygon
                points={`${x},${y-8} ${x+2},${y-3} ${x+9},${y-3} ${x+4},${y+1} ${x+6},${y+8} ${x},${y+5} ${x-6},${y+8} ${x-4},${y+1} ${x-9},${y-3} ${x-2},${y-3}`}
                fill="rgba(255,255,255,0.48)"
              />
            </g>
          ))}

          {/* ── DOTTED ARC PATHS (very faint) ── */}
          <path d="M 0,285 Q 220,165 448,272" fill="none" stroke="rgba(255,255,255,0.10)" strokeWidth="1.5" strokeDasharray="7 9" />
          <path d="M 952,65 Q 1182,162 1400,95" fill="none" stroke="rgba(255,255,255,0.10)" strokeWidth="1.5" strokeDasharray="7 9" />
          <path d="M 498,5 Q 700,102 902,24"  fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth="1.0" strokeDasharray="5 10" />

          {/* ── PARTICLE DOTS ── */}
          {[
            [220,50,3],[480,310,4],[760,15,3],[960,340,4],
            [1120,60,3],[1320,240,4],[560,180,3],[155,265,4]
          ].map(([x,y,r],i) => (
            <circle key={i} cx={x} cy={y} r={r} fill="rgba(255,255,255,0.30)"
              style={{ animation:`pulse-op ${3+i*0.4}s ease-in-out infinite`, animationDelay:`${i*0.5}s` }} />
          ))}
        </svg>

        {/* 3. Foreground content */}
        <div className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-5 hero-badge">
            <span className="text-green-300 text-sm">🌍</span>
            <span className="text-white/90 text-sm font-medium tracking-wide">Building a Sustainable Future Together</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 shimmer-text">
            Join Our Green Community
          </h1>
          <p className="text-lg text-green-50/90 max-w-2xl mx-auto">
            Together, we're building a sustainable future through innovation, collaboration, and shared values
          </p>
        </div>
      </div>

      {/* ══════════════════════════════════════
          MAIN CONTENT
      ══════════════════════════════════════ */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* Feature icons */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {[
            { icon: Users,       title: 'Collaborative Network', desc: 'Connect with businesses and individuals committed to sustainability' },
            { icon: Heart,       title: 'Shared Mission',        desc: 'Unite under a common goal of environmental protection' },
            { icon: Globe,       title: 'Global Impact',         desc: 'Be part of a worldwide movement for change' },
            { icon: Target,      title: 'Collective Goals',      desc: 'Work together toward measurable environmental targets' },
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

        {/* What We Offer */}
        <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12 mb-16">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">What We Offer</h2>
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

        {/* Community Impact */}
        <div className="bg-gradient-to-br from-green-600 to-emerald-700 rounded-2xl p-8 md:p-12 text-white mb-16">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Community Impact</h2>
            <p className="text-lg text-green-50 mb-12">
              Our collective achievements in the journey toward sustainability
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { value: '500+',   label: 'Community Members'       },
                { value: '100K kg', label: 'Plastic Waste Prevented' },
                { value: '50+',    label: 'Partner Organizations'    },
              ].map((stat, idx) => (
                <div key={idx}>
                  <div className="text-4xl font-bold mb-2">{stat.value}</div>
                  <div className="text-green-50">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Join Form */}
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 md:p-12">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Become a Member</h2>
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

      {/* ══════════════════════════════════════
          FOOTER
      ══════════════════════════════════════ */}
      <footer className="relative bg-gradient-to-br from-green-700 via-green-600 to-emerald-700 text-white overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-green-500/20 rounded-full blur-3xl" />
          <Leaf className="absolute top-20 left-10 w-8 h-8 text-green-300/20" />
          <Leaf className="absolute top-40 right-20 w-6 h-6 text-emerald-300/20" />
          <Leaf className="absolute bottom-20 left-1/3 w-10 h-10 text-green-400/20" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-4 cursor-pointer" onClick={() => navigate('/home')}>
                <div className="p-2 bg-white/10 rounded-lg backdrop-blur-sm">
                  <Leaf className="w-6 h-6 text-green-200" />
                </div>
                <h3 className="text-2xl font-bold">Bag a Soil</h3>
              </div>
              <p className="text-green-100 leading-relaxed">
                Leading the way in sustainable packaging solutions. Making the world greener, one bag at a time.
              </p>
              <div className="flex gap-3 pt-2">
                {[
                  { Icon: Facebook,  link: 'https://facebook.com'  },
                  { Icon: Twitter,   link: 'https://twitter.com'   },
                  { Icon: Instagram, link: 'https://instagram.com' },
                  { Icon: Linkedin,  link: 'https://linkedin.com'  },
                ].map(({ Icon, link }, idx) => (
                  <a key={idx} href={link} target="_blank" rel="noopener noreferrer"
                    className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-300 hover:scale-110">
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
                <div className="w-1 h-6 bg-green-300 rounded-full" />Quick Links
              </h4>
              <ul className="space-y-3">
                {[
                  { label: 'Home',           path: '/home'           },
                  { label: 'Products',       path: '/products'       },
                  { label: 'Sustainability', path: '/sustainability'  },
                  { label: 'Community',      path: '/community'      },
                  { label: 'Certificates',   path: '/certifications' },
                  { label: 'Contact',        path: '/contact'        },
                ].map((link, idx) => (
                  <li key={idx}>
                    <button onClick={() => navigate(link.path)}
                      className="text-green-100 hover:text-white transition-colors flex items-center gap-2 group">
                      <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span className="group-hover:translate-x-1 transition-transform">{link.label}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
                <div className="w-1 h-6 bg-green-300 rounded-full" />Our Products
              </h4>
              <ul className="space-y-3">
                {['Carry Bags','Shopping Bags','Garbage Bags','Custom Bags','Bulk Orders'].map((product, idx) => (
                  <li key={idx}>
                    <button onClick={() => navigate('/products')}
                      className="text-green-100 hover:text-white transition-colors flex items-center gap-2 group">
                      <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span className="group-hover:translate-x-1 transition-transform">{product}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
                <div className="w-1 h-6 bg-green-300 rounded-full" />Get In Touch
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-green-300 mt-1 flex-shrink-0" />
                  <span className="text-green-100">Tadepalligudem<br />Andhra Pradesh, India</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-green-300 flex-shrink-0" />
                  <a href="tel:+919952482228" className="text-green-100 hover:text-white transition-colors">+91 9952482228</a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-green-300 flex-shrink-0" />
                  <a href="mailto:bagasoilcompostable@gmail.com" className="text-green-100 hover:text-white transition-colors">
                    bagasoilcompostable@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-green-500/30 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-green-100 text-center md:text-left">
                &copy; {new Date().getFullYear()} Bag a Soil. All rights reserved.
              </div>
              <div className="flex items-center gap-1 text-green-100">
                Made with <Heart className="w-4 h-4 text-red-400 animate-pulse mx-1" /> for the Planet
              </div>
              <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                <button onClick={() => navigate('/privacy')} className="text-green-100 hover:text-white transition-colors">Privacy Policy</button>
                <button onClick={() => navigate('/terms')}   className="text-green-100 hover:text-white transition-colors">Terms of Service</button>
                <button onClick={() => navigate('/cookie')}  className="text-green-100 hover:text-white transition-colors">Cookie Policy</button>
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes float         { 0%,100%{transform:translateY(0) rotate(0deg)}  50%{transform:translateY(-20px) rotate(10deg)}  }
          @keyframes float-delayed { 0%,100%{transform:translateY(0) rotate(0deg)}  50%{transform:translateY(-15px) rotate(-10deg)} }
          @keyframes float-slow    { 0%,100%{transform:translateY(0) rotate(0deg)}  50%{transform:translateY(-25px) rotate(15deg)}  }
          .animate-float         { animation: float          6s ease-in-out infinite; }
          .animate-float-delayed { animation: float-delayed  8s ease-in-out infinite; }
          .animate-float-slow    { animation: float-slow    10s ease-in-out infinite; }
        `}</style>
      </footer>
    </div>
  );
}