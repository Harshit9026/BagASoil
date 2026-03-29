
// import { useState } from 'react';
// import { Leaf, Recycle, CheckCircle, Mail } from 'lucide-react';
// import { supabase } from '../lib/supabase';
// import React, {  useEffect, useRef } from 'react';
// import { TrendingUp,Building2,Store,Sprout,Heart ,Award,Twitter,Instagram,Linkedin,MapPin ,Phone,  ShoppingBag ,Facebook, Package ,ArrowRight, Users, Sparkles } from 'lucide-react';
// import { useNavigate } from 'react-router-dom';
// import { motion } from 'framer-motion';

// interface HomePageProps {
//   onNavigate: (page: string) => void;
// }

// export default function HomePage({ onNavigate }: HomePageProps) {
//   const [email, setEmail] = useState('');
//   const [newsletterStatus, setNewsletterStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

//   const [counters, setCounters] = useState({ bags: 0, plastic: 0, customers: 0 });
//   const [isVisible, setIsVisible] = useState(false);
//   const sectionRef = useRef(null);
//    const navigate = useNavigate();

//    const logos = [
//   { icon: Building2, name: 'Corporate Partners', color: 'from-green-400 to-emerald-400' },
//   { icon: Store, name: 'Retail Chains', color: 'from-emerald-400 to-teal-400' },
//   { icon: Sprout, name: 'Eco Startups', color: 'from-teal-400 to-cyan-400' },
//   { icon: ShoppingBag, name: 'E-commerce', color: 'from-green-500 to-emerald-500' },
//   { icon: Package, name: 'Logistics', color: 'from-emerald-500 to-green-600' },
// ];

//   const stats = [
//     { 
//       icon: TrendingUp, 
//       value: 10000000, 
//       suffix: '+', 
//       label: 'Bags Delivered',
//       color: 'from-green-400 to-emerald-500',
//       key: 'bags'
//     },
//     { 
//       icon: Leaf, 
//       value: 50000, 
//       suffix: ' kg', 
//       label: 'Plastic Waste Saved',
//       color: 'from-emerald-400 to-teal-500',
//       key: 'plastic'
//     },
//     { 
//       icon: Users, 
//       value: 5000, 
//       suffix: '+', 
//       label: 'Happy Customers',
//       color: 'from-teal-400 to-cyan-500',
//       key: 'customers'
//     },
//   ];

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting && !isVisible) {
//           setIsVisible(true);
//         }
//       },
//       { threshold: 0.2 }
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => observer.disconnect();
//   }, [isVisible]);

//   useEffect(() => {
//     if (!isVisible) return;

//     const animateCounter = (key, targetValue) => {
//       const duration = 2500;
//       const steps = 60;
//       const stepValue = targetValue / steps;
//       const stepDuration = duration / steps;
//       let currentStep = 0;

//       const timer = setInterval(() => {
//         currentStep++;
//         const newValue = Math.min(Math.floor(stepValue * currentStep), targetValue);
        
//         setCounters((prev) => ({
//           ...prev,
//           [key]: newValue,
//         }));

//         if (currentStep >= steps) {
//           clearInterval(timer);
//           setCounters((prev) => ({
//             ...prev,
//             [key]: targetValue,
//           }));
//         }
//       }, stepDuration);

//       return timer;
//     };

//     const timers = [];
//     timers.push(animateCounter('bags', 10000000));
//     timers.push(animateCounter('plastic', 50000));
//     timers.push(animateCounter('customers', 5000));

//     return () => {
//       timers.forEach(timer => clearInterval(timer));
//     };
//   }, [isVisible]);

//   const formatNumber = (num) => {
//     if (num >= 1000000) {
//       return (num / 1000000).toFixed(1) + 'M';
//     } else if (num >= 1000) {
//       return (num / 1000).toFixed(1) + 'K';
//     }
//     return num.toString();
//   };

//   const handleNewsletterSignup = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setNewsletterStatus('loading');

//     try {
//       const { error } = await supabase.from('newsletter_subscribers').insert({ email });
//       if (error) throw error;

//       setNewsletterStatus('success');
//       setEmail('');
//       setTimeout(() => setNewsletterStatus('idle'), 3000);
//     } catch (error) {
//       console.error('Newsletter signup error:', error);
//       setNewsletterStatus('error');
//       setTimeout(() => setNewsletterStatus('idle'), 3000);
//     }
//   };

//   // Animation variants for sections
//   const fadeInUp = {
//     initial: { opacity: 0, y: 60 },
//     whileInView: { opacity: 1, y: 0 },
//     transition: { duration: 0.6, ease: "easeOut" }
//   };

//   const staggerContainer = {
//     initial: {},
//     whileInView: {
//       transition: {
//         staggerChildren: 0.1
//       }
//     }
//   };

//   return (
//     <div className="min-h-screen bg-white">

//       {/* Hero Section */}
//      <section className="relative bg-gradient-to-br from-green-50 to-emerald-100 h-screen px-4 sm:px-6 lg:px-8 overflow-hidden flex items-center justify-center">
//         {/* Background Image with Parallax Effect */}
//         <div className="absolute inset-0 w-full h-full">
//           <div 
//             className="absolute inset-0 w-full h-full bg-cover bg-center animate-ken-burns"
//             style={{
//               backgroundImage: "url('https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2071&auto=format&fit=crop')"
//             }}
//           ></div>
//           {/* Gradient Overlay for readability */}
//           <div className="absolute inset-0 bg-gradient-to-br from-green-900/75 via-emerald-800/70 to-green-900/75"></div>
//           {/* Animated particles overlay */}
//           <div className="absolute inset-0 overflow-hidden">
//             <div className="particle particle-1"></div>
//             <div className="particle particle-2"></div>
//             <div className="particle particle-3"></div>
//             <div className="particle particle-4"></div>
//             <div className="particle particle-5"></div>
//           </div>
//         </div>
        
//         {/* Content */}
//         <div className="relative z-10 max-w-7xl mx-auto text-center">
//           <div className="animate-fade-in-up">
//             <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg animate-text-shimmer">
//               Sustainable Packaging for a <span className="text-green-300 animate-pulse-glow">Greener Tomorrow</span>
//             </h1>
//             <p className="text-lg sm:text-xl text-green-50 mb-8 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
//               Join us in revolutionizing the packaging industry with 100% biodegradable, customizable bags. Together, we're making a difference—one bag at a time.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <button
//                 onClick={() => onNavigate('products')}
//                 className="px-8 py-3 bg-white text-green-700 rounded-lg font-medium hover:bg-green-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform"
//               >
//                 Explore Products
//               </button>
//               <button
//                 onClick={() => onNavigate('contact')}
//                 className="px-8 py-3 bg-green-600/90 backdrop-blur-sm text-white rounded-lg font-medium border-2 border-white/30 hover:bg-green-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform"
//               >
//                 Get a Quote
//               </button>
//             </div>
//           </div>
          
//           {/* Floating Elements */}
//           <div className="absolute top-1/4 left-10 animate-float hidden lg:block">
//             <Leaf className="w-12 h-12 text-green-300/50 drop-shadow-lg" />
//           </div>
//           <div className="absolute top-1/3 right-16 animate-float-delayed hidden lg:block">
//             <Recycle className="w-10 h-10 text-green-200/40 drop-shadow-lg" />
//           </div>
//           <div className="absolute bottom-1/3 left-20 animate-float-slow hidden lg:block">
//             <Leaf className="w-8 h-8 text-emerald-300/40 drop-shadow-lg" />
//           </div>
//           <div className="absolute top-1/2 right-32 animate-spin-slow hidden lg:block">
//             <Recycle className="w-14 h-14 text-green-400/30 drop-shadow-lg" />
//           </div>
//         </div>

//         {/* Scroll Indicator */}
//         <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
//           <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
//             <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-scroll-down"></div>
//           </div>
//         </div>

//         <style jsx>{`
//           @keyframes fade-in-up {
//             from {
//               opacity: 0;
//               transform: translateY(20px);
//             }
//             to {
//               opacity: 1;
//               transform: translateY(0);
//             }
//           }

//           @keyframes float {
//             0%, 100% {
//               transform: translateY(0px);
//             }
//             50% {
//               transform: translateY(-20px);
//             }
//           }

//           @keyframes float-delayed {
//             0%, 100% {
//               transform: translateY(0px) rotate(0deg);
//             }
//             50% {
//               transform: translateY(-15px) rotate(5deg);
//             }
//           }

//           @keyframes float-slow {
//             0%, 100% {
//               transform: translateY(0px) rotate(0deg);
//             }
//             50% {
//               transform: translateY(-25px) rotate(-10deg);
//             }
//           }

//           @keyframes scroll-down {
//             0% {
//               transform: translateY(0);
//               opacity: 1;
//             }
//             100% {
//               transform: translateY(12px);
//               opacity: 0;
//             }
//           }

//           @keyframes ken-burns {
//             0% {
//               transform: scale(1);
//             }
//             100% {
//               transform: scale(1.1);
//             }
//           }

//           @keyframes text-shimmer {
//             0% {
//               background-position: -100%;
//             }
//             100% {
//               background-position: 200%;
//             }
//           }

//           @keyframes pulse-glow {
//             0%, 100% {
//               text-shadow: 0 0 10px rgba(134, 239, 172, 0.5);
//             }
//             50% {
//               text-shadow: 0 0 20px rgba(134, 239, 172, 0.8), 0 0 30px rgba(134, 239, 172, 0.4);
//             }
//           }

//           @keyframes particle-float {
//             0% {
//               transform: translateY(100vh) translateX(0) rotate(0deg);
//               opacity: 0;
//             }
//             10% {
//               opacity: 0.3;
//             }
//             90% {
//               opacity: 0.3;
//             }
//             100% {
//               transform: translateY(-100px) translateX(50px) rotate(360deg);
//               opacity: 0;
//             }
//           }

//           .animate-fade-in-up {
//             animation: fade-in-up 1s ease-out;
//           }

//           .animate-float {
//             animation: float 3s ease-in-out infinite;
//           }

//           .animate-float-delayed {
//             animation: float-delayed 4s ease-in-out infinite;
//           }

//           .animate-float-slow {
//             animation: float-slow 5s ease-in-out infinite;
//           }

//           .animate-scroll-down {
//             animation: scroll-down 1.5s ease-in-out infinite;
//           }

//           .animate-ken-burns {
//             animation: ken-burns 20s ease-in-out infinite alternate;
//           }

//           .animate-text-shimmer {
//             background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
//             background-size: 200% 100%;
//             -webkit-background-clip: text;
//             background-clip: text;
//             animation: text-shimmer 3s ease-in-out infinite;
//           }

//           .animate-pulse-glow {
//             animation: pulse-glow 2s ease-in-out infinite;
//           }

//           .animate-spin-slow {
//             animation: spin 20s linear infinite;
//           }

//           @keyframes spin {
//             from {
//               transform: rotate(0deg);
//             }
//             to {
//               transform: rotate(360deg);
//             }
//           }

//           .particle {
//             position: absolute;
//             width: 6px;
//             height: 6px;
//             background: rgba(134, 239, 172, 0.6);
//             border-radius: 50%;
//             pointer-events: none;
//           }

//           .particle-1 {
//             left: 10%;
//             animation: particle-float 15s ease-in-out infinite;
//           }

//           .particle-2 {
//             left: 30%;
//             animation: particle-float 18s ease-in-out infinite 3s;
//           }

//           .particle-3 {
//             left: 50%;
//             animation: particle-float 20s ease-in-out infinite 6s;
//           }

//           .particle-4 {
//             left: 70%;
//             animation: particle-float 16s ease-in-out infinite 9s;
//           }

//           .particle-5 {
//             left: 90%;
//             animation: particle-float 22s ease-in-out infinite 12s;
//           }
//         `}</style>
//       </section>
      
//       {/* Product Range */}
//       <motion.section 
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 0.8 }}
//         viewport={{ once: true, amount: 0.2 }}
//         className="py-16 px-4 sm:px-6 lg:px-8 bg-white"
//       >
//   <motion.div 
//     {...fadeInUp}
//     viewport={{ once: true }}
//     className="max-w-7xl mx-auto text-center mb-12"
//   >
//     <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Product Range</h2>
//     <p className="text-lg text-gray-600">Eco-friendly solutions for every need</p>
//   </motion.div>
//   <motion.div 
//     variants={staggerContainer}
//     initial="initial"
//     whileInView="whileInView"
//     viewport={{ once: true, amount: 0.2 }}
//     className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto"
//   >
//     {[
//       { name: 'Carry Bags', desc: 'Durable and eco-friendly carry solutions', icon: '🛍️', color: 'from-green-400 to-emerald-500' },
//       { name: 'Shopping Bags', desc: 'Premium shopping experience, guilt-free', icon: '🛒', color: 'from-emerald-400 to-teal-500' },
//       { name: 'Garbage Bags', desc: 'Strong, biodegradable waste management', icon: '♻️', color: 'from-teal-400 to-cyan-500' },
//       { name: 'Custom Bags', desc: 'Tailored to your brand and specifications', icon: '✨', color: 'from-green-500 to-emerald-600' },
//     ].map((product, idx) => (
//       <motion.div
//         key={idx}
//         variants={fadeInUp}
//         className="group relative bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 cursor-pointer overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
//         onClick={() => onNavigate('products')}
//       >
//         {/* Gradient Overlay on Hover */}
//         <div className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
        
//         {/* Animated Border */}
//         <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-green-400/50 transition-all duration-500"></div>
        
//         {/* Icon with Animation */}
//         <div className="relative text-5xl mb-4 transform transition-all duration-500 group-hover:scale-125 group-hover:rotate-12">
//           {product.icon}
//         </div>
        
//         {/* Content */}
//         <div className="relative">
//           <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-700 transition-colors duration-300">
//             {product.name}
//           </h3>
//           <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
//             {product.desc}
//           </p>
//         </div>
        
//         {/* Arrow Icon on Hover */}
//         <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
//           <ArrowRight className="w-5 h-5 text-green-600" />
//         </div>
        
//         {/* Decorative Circle */}
//         <div className={`absolute -top-10 -right-10 w-20 h-20 bg-gradient-to-br ${product.color} rounded-full opacity-0 group-hover:opacity-20 blur-2xl transition-all duration-700`}></div>
//       </motion.div>
//     ))}
//   </motion.div>
// </motion.section>

//       {/* About Us */}
//     <motion.section 
//       initial={{ opacity: 0 }}
//       whileInView={{ opacity: 1 }}
//       transition={{ duration: 0.8 }}
//       viewport={{ once: true, amount: 0.2 }}
//       className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50"
//     >
//   <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
//     <motion.div 
//       initial={{ opacity: 0, x: -50 }}
//       whileInView={{ opacity: 1, x: 0 }}
//       transition={{ duration: 0.8 }}
//       viewport={{ once: true }}
//       className="relative group perspective-1000"
//     >
//       <div className="relative overflow-hidden rounded-2xl shadow-xl transition-all duration-700 group-hover:shadow-2xl group-hover:shadow-green-500/30">
//         {/* Animated Border Gradient */}
//         <div className="absolute inset-0 bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10"></div>
        
//         {/* Image */}
//         <img
//           src="https://res.cloudinary.com/dqir5enfp/image/upload/v1760559616/cycle-bag_mh6qkd.webp"
//           alt="About us"
//           className="rounded-3xl w-full h-auto object-contain transform transition-all duration-700 ease-out group-hover:scale-105"
//         />
        
//         {/* Overlay Effect */}
//         <div className="absolute inset-0 bg-gradient-to-tr from-green-600/20 via-transparent to-emerald-600/20 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-2xl"></div>
        
//         {/* Eco Badge */}
//         <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
//           <div className="flex items-center gap-2">
//             <Leaf className="w-4 h-4 text-green-600" />
//             <span className="text-sm font-semibold text-green-700">100% Eco-Friendly</span>
//           </div>
//         </div>
//       </div>
      
//       {/* Decorative Elements */}
//       <div className="absolute -top-4 -left-4 w-20 h-20 bg-green-200/30 rounded-full blur-2xl group-hover:bg-green-300/50 transition-all duration-700"></div>
//       <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-emerald-200/30 rounded-full blur-2xl group-hover:bg-emerald-300/50 transition-all duration-700"></div>
//     </motion.div>
    
//     <motion.div
//       initial={{ opacity: 0, x: 50 }}
//       whileInView={{ opacity: 1, x: 0 }}
//       transition={{ duration: 0.8, delay: 0.2 }}
//       viewport={{ once: true }}
//     >
//       <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">About Bag a Soil</h2>
//       <p className="text-gray-700 mb-4">
//         Bag a Soil is dedicated to providing sustainable, 100% biodegradable packaging solutions that reduce plastic waste and support a greener future. We offer customizable options for businesses looking to make an eco-conscious impact.
//       </p>
//       <p className="text-gray-700">
//         From production to disposal, our mission is to help companies and individuals transition to environmentally friendly alternatives without compromising quality or style.
//       </p>
//     </motion.div>
//   </div>
// </motion.section>

//       {/* How It Works */}
//      <motion.section 
//        initial={{ opacity: 0 }}
//        whileInView={{ opacity: 1 }}
//        transition={{ duration: 0.8 }}
//        viewport={{ once: true, amount: 0.2 }}
//        className="py-16 px-4 sm:px-6 lg:px-8 bg-white"
//      >
//   <motion.div 
//     {...fadeInUp}
//     viewport={{ once: true }}
//     className="max-w-7xl mx-auto text-center mb-12"
//   >
//     <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
//     <p className="text-lg text-gray-600 max-w-2xl mx-auto">From production to disposal, our eco-friendly bags are designed for sustainability at every step.</p>
//   </motion.div>
//   <motion.div 
//     variants={staggerContainer}
//     initial="initial"
//     whileInView="whileInView"
//     viewport={{ once: true, amount: 0.2 }}
//     className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto"
//   >
//     {[
//       { icon: Leaf, title: 'Sustainable Materials', desc: 'Made from 100% biodegradable materials, reducing plastic waste.', color: 'from-green-400 to-emerald-500', number: '01' },
//       { icon: Recycle, title: 'Eco-Friendly Manufacturing', desc: 'Low carbon footprint and environmentally responsible production.', color: 'from-emerald-400 to-teal-500', number: '02' },
//       { icon: CheckCircle, title: 'End-of-Life Disposal', desc: 'Compostable or reusable bags that minimize waste.', color: 'from-teal-400 to-cyan-500', number: '03' },
//     ].map((step, idx) => (
//       <motion.div 
//         key={idx}
//         variants={fadeInUp}
//         className="group relative text-center p-8 bg-green-50 rounded-xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 cursor-pointer"
//       >
//         {/* Gradient Overlay on Hover */}
//         <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
        
//         {/* Animated Border */}
//         <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-green-400/50 transition-all duration-500"></div>
        
//         {/* Step Number */}
//         <div className="absolute top-4 right-4 text-6xl font-bold text-green-200/30 group-hover:text-green-300/50 transition-colors duration-500">
//           {step.number}
//         </div>
        
//         {/* Icon with Animation */}
//         <div className="relative inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6 transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 group-hover:bg-white group-hover:shadow-lg">
//           <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-20 rounded-full transition-opacity duration-500`}></div>
//           <step.icon className="relative h-10 w-10 text-green-600 group-hover:text-green-700 transition-colors duration-300" />
//         </div>
        
//         {/* Content */}
//         <div className="relative">
//           <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-700 transition-colors duration-300">
//             {step.title}
//           </h3>
//           <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
//             {step.desc}
//           </p>
//         </div>
        
//         {/* Decorative Circle */}
//         <div className={`absolute -bottom-10 -left-10 w-24 h-24 bg-gradient-to-br ${step.color} rounded-full opacity-0 group-hover:opacity-20 blur-2xl transition-all duration-700`}></div>
        
//         {/* Progress Indicator */}
//         <div className="absolute bottom-0 left-0 right-0 h-1 bg-green-200">
//           <div className={`h-full bg-gradient-to-r ${step.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left`}></div>
//         </div>
//       </motion.div>
//     ))}
//   </motion.div>
// </motion.section>

//       {/* Environmental Impact */}

//       <section 
//       ref={sectionRef}
//       className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-600 via-emerald-600 to-teal-700 overflow-hidden"
//     >
//       {/* Animated Background Elements */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute top-10 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl animate-blob"></div>
//         <div className="absolute top-40 right-20 w-96 h-96 bg-emerald-300/10 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
//         <div className="absolute -bottom-20 left-1/3 w-80 h-80 bg-teal-400/10 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
        
//         {/* Floating Particles */}
//         {[...Array(15)].map((_, i) => (
//           <div
//             key={i}
//             className="absolute w-2 h-2 bg-white/20 rounded-full animate-float-particle"
//             style={{
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//               animationDelay: `${Math.random() * 5}s`,
//               animationDuration: `${8 + Math.random() * 4}s`,
//             }}
//           ></div>
//         ))}
//       </div>

//       <div className="relative z-10 max-w-6xl mx-auto text-center">
//         {/* Header */}
//         <div className="mb-16 animate-fade-in-down">
//           <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-4">
//             <Sparkles className="w-5 h-5 text-green-200 animate-pulse" />
//             <span className="text-sm text-green-100 font-medium">Making a Difference</span>
//           </div>
//           <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 drop-shadow-lg">
//             Our Environmental Impact
//           </h2>
//           <p className="text-xl text-green-50 font-light">Real numbers, real change</p>
//         </div>

//         {/* Stats Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {stats.map((stat, idx) => {
//             const Icon = stat.icon;
//             const counterValue = counters[stat.key];
            
//             return (
//               <div
//                 key={idx}
//                 className="group relative bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/15 hover:scale-105 transition-all duration-500 hover:shadow-2xl animate-fade-in-up"
//                 style={{ animationDelay: `${idx * 150}ms` }}
//               >
//                 {/* Gradient Glow Effect */}
//                 <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-20 rounded-2xl blur-xl transition-opacity duration-500`}></div>
                
//                 {/* Icon */}
//                 <div className="relative mb-4 inline-flex">
//                   <div className={`p-4 bg-gradient-to-br ${stat.color} rounded-xl shadow-lg group-hover:rotate-12 transition-transform duration-500`}>
//                     <Icon className="w-8 h-8 text-white" />
//                   </div>
//                 </div>

//                 {/* Counter */}
//                 <div className="relative text-5xl font-bold text-white mb-3 drop-shadow-lg">
//                   <span className="bg-gradient-to-br from-white to-green-100 bg-clip-text text-transparent">
//                     {formatNumber(counterValue)}{stat.suffix}
//                   </span>
//                 </div>

//                 {/* Label */}
//                 <div className="relative text-green-50 font-medium text-lg">
//                   {stat.label}
//                 </div>

//                 {/* Progress Bar */}
//                 <div className="mt-4 h-1 bg-white/20 rounded-full overflow-hidden">
//                   <div 
//                     className={`h-full bg-gradient-to-r ${stat.color} rounded-full transition-all duration-2000 ease-out`}
//                     style={{ width: isVisible ? '100%' : '0%' }}
//                   ></div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//         {/* Bottom Text */}
//         <div className="mt-12 animate-fade-in-up" style={{ animationDelay: '600ms' }}>
//           <p className="text-green-100 text-lg">
//             Join <span className="font-bold text-white">{formatNumber(counters.customers)}+</span> businesses making a sustainable choice
//           </p>
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes blob {
//           0%, 100% {
//             transform: translate(0, 0) scale(1);
//           }
//           33% {
//             transform: translate(30px, -50px) scale(1.1);
//           }
//           66% {
//             transform: translate(-20px, 20px) scale(0.9);
//           }
//         }

//         @keyframes float-particle {
//           0%, 100% {
//             transform: translateY(0) translateX(0);
//             opacity: 0;
//           }
//           10% {
//             opacity: 1;
//           }
//           90% {
//             opacity: 1;
//           }
//           100% {
//             transform: translateY(-100px) translateX(50px);
//             opacity: 0;
//           }
//         }

//         @keyframes fade-in-up {
//           from {
//             opacity: 0;
//             transform: translateY(30px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         @keyframes fade-in-down {
//           from {
//             opacity: 0;
//             transform: translateY(-20px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         .animate-blob {
//           animation: blob 7s infinite;
//         }

//         .animation-delay-2000 {
//           animation-delay: 2s;
//         }

//         .animation-delay-4000 {
//           animation-delay: 4s;
//         }

//         .animate-float-particle {
//           animation: float-particle linear infinite;
//         }

//         .animate-fade-in-up {
//           animation: fade-in-up 0.8s ease-out forwards;
//           opacity: 0;
//         }

//         .animate-fade-in-down {
//           animation: fade-in-down 0.8s ease-out;
//         }

//         .transition-all {
//           transition-property: all;
//           transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
//         }

//         .duration-2000 {
//           transition-duration: 2000ms;
//         }
//       `}</style>
//     </section>


//     {/* Photo Section */}
  
//   {/* Greening Live Events Section */}
// <motion.section 
//   initial={{ opacity: 0 }}
//   whileInView={{ opacity: 1 }}
//   transition={{ duration: 0.8 }}
//   viewport={{ once: true, amount: 0.2 }}
//   className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-50 to-emerald-100"
// >
//   <div className="max-w-7xl mx-auto">
//     <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 bg-white rounded-lg overflow-hidden">
//       {/* Left Side - Concert Image */}
//       <motion.div 
//         initial={{ opacity: 0, x: -50 }}
//         whileInView={{ opacity: 1, x: 0 }}
//         transition={{ duration: 0.8 }}
//         viewport={{ once: true }}
//         className="relative h-96 lg:h-auto overflow-hidden group"
//       >
//         <img
//           src="https://res.cloudinary.com/dqir5enfp/image/upload/v1760545046/public-concert_xzfkaa.png"
//           alt="Concert crowd with vibrant lights"
//           className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
//         />
//         <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
//         <div className="absolute bottom-8 left-8 right-8">
//           <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-600/90 backdrop-blur-sm rounded-full mb-3">
//             <Leaf className="w-4 h-4 text-white" />
//             <span className="text-sm text-white font-semibold">Sustainable Events</span>
//           </div>
//           <h3 className="text-white text-2xl font-bold drop-shadow-lg">
//             Making Every Concert Count
//           </h3>
//         </div>
//       </motion.div>

//       {/* Right Side - Content */}
//       <motion.div 
//         initial={{ opacity: 0, x: 50 }}
//         whileInView={{ opacity: 1, x: 0 }}
//         transition={{ duration: 0.8, delay: 0.2 }}
//         viewport={{ once: true }}
//         className="bg-gradient-to-br from-green-50 to-emerald-50 p-10 lg:p-12 flex flex-col justify-center"
//       >
//         <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
//           Greening the <span className="text-green-600">Live Experience</span>
//         </h2>
        
//         <p className="text-gray-700 mb-4">
//           Every concert, festival, and live event generates thousands of single-use plastic bags. We're changing that narrative by providing 100% biodegradable bags that decompose naturally within months, not centuries. Our eco-friendly solutions help event organizers reduce their environmental footprint while maintaining the convenience audiences expect.
//         </p>
        
//         <p className="text-gray-700 mb-6">
//           From merchandise bags to food packaging, our plant-based materials break down into organic matter, leaving zero toxic residue. Join the movement of forward-thinking venues and promoters who are proving that memorable experiences don't have to cost the Earth.
//         </p>

//         {/* Stats Grid */}
//         <div className="grid grid-cols-2 gap-4">
//           <div className="bg-white rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow">
//             <div className="text-3xl font-bold text-green-600 mb-1">90%</div>
//             <div className="text-sm text-gray-600">Less Carbon Footprint</div>
//           </div>
//           <div className="bg-white rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow">
//             <div className="text-3xl font-bold text-green-600 mb-1">180</div>
//             <div className="text-sm text-gray-600">Days to Decompose</div>
//           </div>
//           <div className="bg-white rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow">
//             <div className="text-3xl font-bold text-green-600 mb-1">500+</div>
//             <div className="text-sm text-gray-600">Events Served</div>
//           </div>
//           <div className="bg-white rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow">
//             <div className="text-3xl font-bold text-green-600 mb-1">100%</div>
//             <div className="text-sm text-gray-600">Compostable</div>
//           </div>
//         </div>
//       </motion.div>
//     </div>
//   </div>
// </motion.section>
      

//       {/* FAQ Section */}
//       <motion.section 
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 0.8 }}
//         viewport={{ once: true, amount: 0.2 }}
//         className="py-16 px-4 sm:px-6 lg:px-8 bg-white"
//       >
//         <motion.div 
//           {...fadeInUp}
//           viewport={{ once: true }}
//           className="max-w-4xl mx-auto text-center mb-12"
//         >
//           <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
//           <p className="text-lg text-gray-600">Answers to common questions about our products and sustainability.</p>
//         </motion.div>
//         <motion.div 
//           variants={staggerContainer}
//           initial="initial"
//           whileInView="whileInView"
//           viewport={{ once: true, amount: 0.2 }}
//           className="space-y-4 max-w-4xl mx-auto"
//         >
//           {[
//             { q: 'Are your bags truly biodegradable?', a: 'Yes! Our bags are made from 100% compostable materials certified by international standards.' },
//             { q: 'Can I customize the size and design?', a: 'Absolutely. We offer tailor-made solutions for businesses of all sizes.' },
//             { q: 'Do you provide bulk orders?', a: 'Yes, minimum order quantities are flexible depending on product type.' },
//           ].map((faq, idx) => (
//             <motion.div 
//               key={idx}
//               variants={fadeInUp}
//               className="border rounded-lg p-4 hover:shadow-md transition-shadow"
//             >
//               <h3 className="font-bold text-gray-900 mb-2">{faq.q}</h3>
//               <p className="text-gray-600">{faq.a}</p>
//             </motion.div>
//           ))}
//         </motion.div>
//       </motion.section>

//       {/* Testimonials */}
//       <motion.section 
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 0.8 }}
//         viewport={{ once: true, amount: 0.2 }}
//         className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50"
//       >
//   <motion.div 
//     {...fadeInUp}
//     viewport={{ once: true }}
//     className="max-w-7xl mx-auto text-center mb-12"
//   >
//     <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
//     <p className="text-lg text-gray-600">Real feedback from businesses going green</p>
//   </motion.div>
//   <motion.div 
//     variants={staggerContainer}
//     initial="initial"
//     whileInView="whileInView"
//     viewport={{ once: true, amount: 0.2 }}
//     className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto"
//   >
//     {[
//       { name: 'Rajesh Kumar', company: 'Green Mart', text: 'Switching to Bag a Soil was the best decision for our business. Our customers appreciate the eco-friendly approach.', color: 'from-green-400 to-emerald-500' },
//       { name: 'Priya Sharma', company: 'Urban Organics', text: 'Quality products, competitive pricing, and exceptional service. Highly recommend for any business going green.', color: 'from-emerald-400 to-teal-500' },
//       { name: 'Amit Patel', company: 'Fresh Foods Co.', text: 'The custom branding options are fantastic. Our bags look professional and our customers love them.', color: 'from-teal-400 to-cyan-500' },
//     ].map((testimonial, idx) => (
//       <motion.div
//         key={idx}
//         variants={fadeInUp}
//         className="group relative bg-white rounded-lg p-6 shadow-sm transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 cursor-pointer overflow-hidden"
//       >
//         {/* Gradient Overlay on Hover */}
//         <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-lg`}></div>

//         {/* Quotation Text */}
//         <p className="relative text-gray-600 mb-4 italic group-hover:text-gray-900 transition-colors duration-300">
//           "{testimonial.text}"
//         </p>

//         {/* Customer Info */}
//         <div className="relative">
//           <div className="font-bold text-gray-900 group-hover:text-green-700 transition-colors duration-300">{testimonial.name}</div>
//           <div className="text-sm text-gray-500 group-hover:text-gray-700 transition-colors duration-300">{testimonial.company}</div>
//         </div>

//         {/* Decorative Circle */}
//         <div className={`absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br ${testimonial.color} rounded-full opacity-0 group-hover:opacity-30 blur-2xl transition-opacity duration-700`}></div>
//       </motion.div>
//     ))}
//   </motion.div>
// </motion.section>


//       {/* Newsletter Signup */}
//       <motion.section 
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 0.8 }}
//         viewport={{ once: true, amount: 0.2 }}
//         className="py-16 px-4 sm:px-6 lg:px-8 bg-white"
//       >
//         <motion.div 
//           initial={{ opacity: 0, scale: 0.95 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="max-w-4xl mx-auto"
//         >
//           <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 md:p-12 text-center">
//             <Mail className="h-12 w-12 text-green-600 mx-auto mb-4" />
//             <h2 className="text-3xl font-bold text-gray-900 mb-4">Join Our Green Community</h2>
//             <p className="text-lg text-gray-600 mb-6">Get exclusive updates on sustainability and eco-innovations</p>
//             <form onSubmit={handleNewsletterSignup} className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
//               <input
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 placeholder="Enter your email"
//                 required
//                 className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
//               />
//               <button
//                 type="submit"
//                 disabled={newsletterStatus === 'loading'}
//                 className="px-6 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors disabled:opacity-50"
//               >
//                 {newsletterStatus === 'loading' ? 'Subscribing...' : 'Subscribe'}
//               </button>
//             </form>
//             {newsletterStatus === 'success' && (
//               <div className="mt-4 flex items-center justify-center text-green-600">
//                 <CheckCircle className="h-5 w-5 mr-2" />
//                 <span>Successfully subscribed!</span>
//               </div>
//             )}
//             {newsletterStatus === 'error' && (
//               <div className="mt-4 text-center text-red-600">
//                 Already subscribed or an error occurred
//               </div>
//             )}
//           </div>
//         </motion.div>
//       </motion.section>

//       {/* Trusted By Logos */}
//        <motion.section 
//          initial={{ opacity: 0 }}
//          whileInView={{ opacity: 1 }}
//          transition={{ duration: 0.8 }}
//          viewport={{ once: true, amount: 0.2 }}
//          className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-green-50 to-emerald-50 overflow-hidden"
//        >
//       {/* Background Decoration */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-200/20 rounded-full blur-3xl"></div>
//         <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-200/20 rounded-full blur-3xl"></div>
//       </div>

//       <div className="relative z-10 max-w-7xl mx-auto">
//         {/* Header */}
//         <motion.div 
//           {...fadeInUp}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <div className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full mb-6 shadow-sm">
//             <Heart className="w-5 h-5 text-green-600 animate-pulse" />
//             <span className="text-sm font-semibold text-green-700 uppercase tracking-wide">Partners in Sustainability</span>
//           </div>
//           <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-gray-900 via-green-800 to-emerald-900 bg-clip-text text-transparent mb-4">
//             Trusted By Industry Leaders
//           </h2>
//           <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//             Join thousands of forward-thinking businesses making the switch to sustainable packaging
//           </p>
//         </motion.div>

//         {/* Logos Grid */}
//         <motion.div 
//           variants={staggerContainer}
//           initial="initial"
//           whileInView="whileInView"
//           viewport={{ once: true, amount: 0.2 }}
//           className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-12"
//         >
//           {logos.map((logo, idx) => {
//             const Icon = logo.icon;
//             return (
//               <motion.div
//                 key={idx}
//                 variants={fadeInUp}
//                 className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
//               >
//                 {/* Gradient Background on Hover */}
//                 <div className={`absolute inset-0 bg-gradient-to-br ${logo.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}></div>
                
//                 {/* Icon Container */}
//                 <div className="relative flex flex-col items-center justify-center">
//                   <div className={`mb-4 p-4 bg-gradient-to-br ${logo.color} rounded-xl shadow-md group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
//                     <Icon className="w-10 h-10 text-white" />
//                   </div>
//                   <span className="text-sm font-medium text-gray-700 text-center group-hover:text-gray-900 transition-colors">
//                     {logo.name}
//                   </span>
//                 </div>

//                 {/* Decorative Corner */}
//                 <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
//                   <Award className="w-5 h-5 text-green-500" />
//                 </div>
//               </motion.div>
//             );
//           })}
//         </motion.div>

//         {/* Stats Footer */}
//         <motion.div 
//           variants={staggerContainer}
//           initial="initial"
//           whileInView="whileInView"
//           viewport={{ once: true, amount: 0.2 }}
//           className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
//         >
//           <motion.div variants={fadeInUp} className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-xl">
//             <div className="text-3xl font-bold text-green-600 mb-2">500+</div>
//             <div className="text-sm text-gray-600">Partner Companies</div>
//           </motion.div>
//           <motion.div variants={fadeInUp} className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-xl">
//             <div className="text-3xl font-bold text-emerald-600 mb-2">50+</div>
//             <div className="text-sm text-gray-600">Countries Worldwide</div>
//           </motion.div>
//           <motion.div variants={fadeInUp} className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-xl">
//             <div className="text-3xl font-bold text-teal-600 mb-2">98%</div>
//             <div className="text-sm text-gray-600">Customer Satisfaction</div>
//           </motion.div>
//         </motion.div>
//       </div>
//     </motion.section>

//       {/* Footer */}
//     <footer className="relative bg-gradient-to-br from-green-700 via-green-600 to-emerald-700 text-white overflow-hidden">
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
import { Leaf, Recycle, CheckCircle, Mail } from 'lucide-react';
import { supabase } from '../lib/supabase';
import React, { useEffect, useRef } from 'react';
import { TrendingUp, Building2, Store, Sprout, Heart, Award, Twitter, Instagram, Linkedin, MapPin, Phone, ShoppingBag, Facebook, Package, ArrowRight, Users, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

function ImpactCalculator({ navigate }: { navigate: (path: string) => void }) {
  const [quantity, setQuantity] = useState(1000);
  const plasticWeightKg = (quantity * 5) / 1000;
  const co2Saved = (plasticWeightKg * 2.5).toFixed(1);
  const decomposeDays = 150;
  const treesEquiv = (plasticWeightKg * 0.06).toFixed(1);

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8">
      <div className="mb-8">
        <label className="block text-gray-700 font-semibold mb-3 text-lg">
          How many bags do you need?
        </label>
        <input
          type="range"
          min={100}
          max={100000}
          step={100}
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          className="w-full h-3 bg-green-200 rounded-full appearance-none cursor-pointer accent-green-600"
        />
        <div className="flex justify-between text-sm text-gray-500 mt-1">
          <span>100</span>
          <span className="text-green-700 font-bold text-lg">{quantity.toLocaleString()} bags</span>
          <span>1,00,000</span>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        <div className="bg-green-50 rounded-xl p-5 border border-green-100">
          <div className="text-3xl font-bold text-green-700">{plasticWeightKg.toFixed(1)} kg</div>
          <div className="text-sm text-gray-600 mt-1">Plastic waste eliminated</div>
        </div>
        <div className="bg-emerald-50 rounded-xl p-5 border border-emerald-100">
          <div className="text-3xl font-bold text-emerald-700">{co2Saved} kg</div>
          <div className="text-sm text-gray-600 mt-1">CO₂ emissions saved</div>
        </div>
        <div className="bg-teal-50 rounded-xl p-5 border border-teal-100">
          <div className="text-3xl font-bold text-teal-700">{treesEquiv}</div>
          <div className="text-sm text-gray-600 mt-1">Trees equivalent saved</div>
        </div>
      </div>
      <div className="bg-green-600 text-white rounded-xl p-4 mb-6 text-sm">
        🌱 Your {quantity.toLocaleString()} bags will fully decompose in just <strong>{decomposeDays} days</strong> — compared to <strong>500+ years</strong> for plastic!
      </div>
      <button
        onClick={() => navigate('/contact')}
        className="w-full py-3 bg-green-600 text-white rounded-xl font-bold hover:bg-green-700 transition-colors"
      >
        Get a Quote for {quantity.toLocaleString()} Bags →
      </button>
    </div>
  );
}

export default function HomePage() {
  const [email, setEmail] = useState('');
  const [newsletterStatus, setNewsletterStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [counters, setCounters] = useState({ bags: 0, plastic: 0, customers: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const navigate = useNavigate();

  const logos = [
    { icon: Building2, name: 'Corporate Partners', color: 'from-green-400 to-emerald-400' },
    { icon: Store, name: 'Retail Chains', color: 'from-emerald-400 to-teal-400' },
    { icon: Sprout, name: 'Eco Startups', color: 'from-teal-400 to-cyan-400' },
    { icon: ShoppingBag, name: 'E-commerce', color: 'from-green-500 to-emerald-500' },
    { icon: Package, name: 'Logistics', color: 'from-emerald-500 to-green-600' },
  ];

  const stats = [
    { icon: TrendingUp, value: 10000000, suffix: '+', label: 'Bags Delivered', color: 'from-green-400 to-emerald-500', key: 'bags' },
    { icon: Leaf, value: 50000, suffix: ' kg', label: 'Plastic Waste Saved', color: 'from-emerald-400 to-teal-500', key: 'plastic' },
    { icon: Users, value: 5000, suffix: '+', label: 'Happy Customers', color: 'from-teal-400 to-cyan-500', key: 'customers' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !isVisible) setIsVisible(true); },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;
    const animateCounter = (key: string, targetValue: number) => {
      const duration = 2500;
      const steps = 60;
      const stepValue = targetValue / steps;
      const stepDuration = duration / steps;
      let currentStep = 0;
      const timer = setInterval(() => {
        currentStep++;
        const newValue = Math.min(Math.floor(stepValue * currentStep), targetValue);
        setCounters((prev) => ({ ...prev, [key]: newValue }));
        if (currentStep >= steps) {
          clearInterval(timer);
          setCounters((prev) => ({ ...prev, [key]: targetValue }));
        }
      }, stepDuration);
      return timer;
    };
    const timers = [
      animateCounter('bags', 10000000),
      animateCounter('plastic', 50000),
      animateCounter('customers', 5000),
    ];
    return () => timers.forEach(clearInterval);
  }, [isVisible]);

  const formatNumber = (num: number) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
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
    } catch {
      setNewsletterStatus('error');
      setTimeout(() => setNewsletterStatus('idle'), 3000);
    }
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: 'easeOut' },
  };

  const staggerContainer = {
    initial: {},
    whileInView: { transition: { staggerChildren: 0.1 } },
  };

  return (
    <div className="min-h-screen bg-white">

      {/* ── Hero ── */}
      <section className="relative bg-gradient-to-br from-green-50 to-emerald-100 h-screen px-4 sm:px-6 lg:px-8 overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 w-full h-full">
          <div
            className="absolute inset-0 w-full h-full bg-cover bg-center animate-ken-burns"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2071&auto=format&fit=crop')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-green-900/75 via-emerald-800/70 to-green-900/75" />
          <div className="absolute inset-0 overflow-hidden">
            {['particle-1','particle-2','particle-3','particle-4','particle-5'].map(c => (
              <div key={c} className={`particle ${c}`} />
            ))}
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
              Sustainable Packaging for a{' '}
              <span className="text-green-300 animate-pulse-glow">Greener Tomorrow</span>
            </h1>
            <p className="text-lg sm:text-xl text-green-50 mb-8 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
              Join us in revolutionizing the packaging industry with 100% biodegradable, customizable bags. Together, we're making a difference—one bag at a time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate('/products')}
                className="px-8 py-3 bg-white text-green-700 rounded-lg font-medium hover:bg-green-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                Explore Products
              </button>
              <button
                onClick={() => navigate('/contact')}
                className="px-8 py-3 bg-green-600/90 backdrop-blur-sm text-white rounded-lg font-medium border-2 border-white/30 hover:bg-green-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                Get a Quote
              </button>
            </div>
          </div>
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

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-scroll-down" />
          </div>
        </div>

        <style>{`
          @keyframes fade-in-up { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:translateY(0)} }
          @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-20px)} }
          @keyframes float-delayed { 0%,100%{transform:translateY(0) rotate(0deg)} 50%{transform:translateY(-15px) rotate(5deg)} }
          @keyframes float-slow { 0%,100%{transform:translateY(0) rotate(0deg)} 50%{transform:translateY(-25px) rotate(-10deg)} }
          @keyframes scroll-down { 0%{transform:translateY(0);opacity:1} 100%{transform:translateY(12px);opacity:0} }
          @keyframes ken-burns { 0%{transform:scale(1)} 100%{transform:scale(1.1)} }
          @keyframes pulse-glow { 0%,100%{text-shadow:0 0 10px rgba(134,239,172,.5)} 50%{text-shadow:0 0 20px rgba(134,239,172,.8),0 0 30px rgba(134,239,172,.4)} }
          @keyframes particle-float { 0%{transform:translateY(100vh) translateX(0) rotate(0deg);opacity:0} 10%{opacity:.3} 90%{opacity:.3} 100%{transform:translateY(-100px) translateX(50px) rotate(360deg);opacity:0} }
          @keyframes spin { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
          .animate-fade-in-up{animation:fade-in-up 1s ease-out}
          .animate-float{animation:float 3s ease-in-out infinite}
          .animate-float-delayed{animation:float-delayed 4s ease-in-out infinite}
          .animate-float-slow{animation:float-slow 5s ease-in-out infinite}
          .animate-scroll-down{animation:scroll-down 1.5s ease-in-out infinite}
          .animate-ken-burns{animation:ken-burns 20s ease-in-out infinite alternate}
          .animate-pulse-glow{animation:pulse-glow 2s ease-in-out infinite}
          .animate-spin-slow{animation:spin 20s linear infinite}
          .particle{position:absolute;width:6px;height:6px;background:rgba(134,239,172,.6);border-radius:50%;pointer-events:none}
          .particle-1{left:10%;animation:particle-float 15s ease-in-out infinite}
          .particle-2{left:30%;animation:particle-float 18s ease-in-out infinite 3s}
          .particle-3{left:50%;animation:particle-float 20s ease-in-out infinite 6s}
          .particle-4{left:70%;animation:particle-float 16s ease-in-out infinite 9s}
          .particle-5{left:90%;animation:particle-float 22s ease-in-out infinite 12s}
        `}</style>
      </section>

      {/* ── Certifications Strip ── */}
    
      {/* ── Product Range ── */}
      <motion.section
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
        className="py-16 px-4 sm:px-6 lg:px-8 bg-white"
      >
        <motion.div {...fadeInUp} viewport={{ once: true }} className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Product Range</h2>
          <p className="text-lg text-gray-600">Eco-friendly solutions for every need</p>
        </motion.div>
        <motion.div
          variants={staggerContainer} initial="initial" whileInView="whileInView"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto"
        >
          {[
            { name: 'Carry Bags', desc: 'Durable and eco-friendly carry solutions', icon: '🛍️', color: 'from-green-400 to-emerald-500' },
            { name: 'Shopping Bags', desc: 'Premium shopping experience, guilt-free', icon: '🛒', color: 'from-emerald-400 to-teal-500' },
            { name: 'Garbage Bags', desc: 'Strong, biodegradable waste management', icon: '♻️', color: 'from-teal-400 to-cyan-500' },
            { name: 'Custom Bags', desc: 'Tailored to your brand and specifications', icon: '✨', color: 'from-green-500 to-emerald-600' },
          ].map((product, idx) => (
            <motion.div
              key={idx} variants={fadeInUp}
              className="group relative bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 cursor-pointer overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
              onClick={() => navigate('/products')}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-green-400/50 transition-all duration-500" />
              <div className="relative text-5xl mb-4 transform transition-all duration-500 group-hover:scale-125 group-hover:rotate-12">{product.icon}</div>
              <div className="relative">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-700 transition-colors duration-300">{product.name}</h3>
                <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">{product.desc}</p>
              </div>
              <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                <ArrowRight className="w-5 h-5 text-green-600" />
              </div>
              <div className={`absolute -top-10 -right-10 w-20 h-20 bg-gradient-to-br ${product.color} rounded-full opacity-0 group-hover:opacity-20 blur-2xl transition-all duration-700`} />
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* ── About Us ── */}
      {/* <motion.section
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
        className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }} viewport={{ once: true }}
            className="relative group"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-xl transition-all duration-700 group-hover:shadow-2xl group-hover:shadow-green-500/30">
              <img
                src="https://res.cloudinary.com/dqir5enfp/image/upload/v1760559616/cycle-bag_mh6qkd.webp"
                alt="About us"
                className="rounded-3xl w-full h-auto object-contain transform transition-all duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-green-600/20 via-transparent to-emerald-600/20 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-2xl" />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
                <div className="flex items-center gap-2">
                  <Leaf className="w-4 h-4 text-green-600" />
                  <span className="text-sm font-semibold text-green-700">100% Eco-Friendly</span>
                </div>
              </div>
            </div>
            <div className="absolute -top-4 -left-4 w-20 h-20 bg-green-200/30 rounded-full blur-2xl group-hover:bg-green-300/50 transition-all duration-700" />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-emerald-200/30 rounded-full blur-2xl group-hover:bg-emerald-300/50 transition-all duration-700" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }} viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">About Bag a Soil</h2>
            <p className="text-gray-700 mb-4">
              Bag a Soil is dedicated to providing sustainable, 100% biodegradable packaging solutions that reduce plastic waste and support a greener future. We offer customizable options for businesses looking to make an eco-conscious impact.
            </p>
            <p className="text-gray-700">
              From production to disposal, our mission is to help companies and individuals transition to environmentally friendly alternatives without compromising quality or style.
            </p>
          </motion.div>
        </div>
      </motion.section> */}

      <motion.section
  initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }}
  viewport={{ once: true, amount: 0.2 }}
  className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
>
  <div
    className="absolute inset-0 z-0"
    style={{
      backgroundImage: `url("https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=1800&q=90")`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }}
  />
  <div className="absolute inset-0 z-0 bg-gradient-to-r from-amber-950/75 via-stone-900/60 to-amber-950/70" />
  <div
    className="absolute inset-0 z-0"
    style={{ background: 'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.55) 100%)' }}
  />

  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 items-center relative z-10">
    <motion.div
      initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }} viewport={{ once: true }}
      className="relative group"
    >
      <div className="relative overflow-hidden rounded-2xl shadow-2xl transition-all duration-700 group-hover:shadow-green-400/40">
        <img
          src="https://res.cloudinary.com/dqir5enfp/image/upload/v1760559616/cycle-bag_mh6qkd.webp"
          alt="About us"
          className="rounded-2xl w-full h-96 object-contain transform transition-all duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-green-600/20 via-transparent to-emerald-600/20 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-2xl" />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 transform translate-y-3 group-hover:translate-y-0 transition-all duration-500 delay-100">
          <div className="flex items-center gap-2">
            <Leaf className="w-4 h-4 text-green-600" />
            <span className="text-sm font-semibold text-green-700">100% Eco-Friendly</span>
          </div>
        </div>
      </div>
      <div className="absolute -top-4 -left-4 w-20 h-20 bg-green-400/20 rounded-full blur-2xl group-hover:bg-green-400/40 transition-all duration-700" />
      <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-amber-400/20 rounded-full blur-2xl group-hover:bg-amber-400/40 transition-all duration-700" />
    </motion.div>

    <motion.div
      initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }} viewport={{ once: true }}
    >
      <div className="bg-amber-950/30 backdrop-blur-md border border-amber-200/20 rounded-2xl p-10 shadow-2xl">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5 drop-shadow-lg">
          About Bag a Soil
        </h2>
        <p className="text-amber-50 mb-5 leading-loose text-base sm:text-lg">
          Bag a Soil is dedicated to providing sustainable, 100% biodegradable packaging solutions that reduce plastic waste and support a greener future. We offer customizable options for businesses looking to make an eco-conscious impact.
        </p>
        <p className="text-amber-100 leading-loose text-base sm:text-lg">
          From production to disposal, our mission is to help companies and individuals transition to environmentally friendly alternatives without compromising quality or style.
        </p>
      </div>
    </motion.div>
  </div>
</motion.section>
      

      {/* ── How It Works ── */}
      <motion.section
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
        className="py-16 px-4 sm:px-6 lg:px-8 bg-white"
      >
        <motion.div {...fadeInUp} viewport={{ once: true }} className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">From production to disposal, our eco-friendly bags are designed for sustainability at every step.</p>
        </motion.div>
        <motion.div
          variants={staggerContainer} initial="initial" whileInView="whileInView"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto"
        >
          {[
            { icon: Leaf, title: 'Sustainable Materials', desc: 'Made from 100% biodegradable materials, reducing plastic waste.', color: 'from-green-400 to-emerald-500', number: '01' },
            { icon: Recycle, title: 'Eco-Friendly Manufacturing', desc: 'Low carbon footprint and environmentally responsible production.', color: 'from-emerald-400 to-teal-500', number: '02' },
            { icon: CheckCircle, title: 'End-of-Life Disposal', desc: 'Compostable or reusable bags that minimize waste.', color: 'from-teal-400 to-cyan-500', number: '03' },
          ].map((step, idx) => (
            <motion.div
              key={idx} variants={fadeInUp}
              className="group relative text-center p-8 bg-green-50 rounded-xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 cursor-pointer"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-green-400/50 transition-all duration-500" />
              <div className="absolute top-4 right-4 text-6xl font-bold text-green-200/30 group-hover:text-green-300/50 transition-colors duration-500">{step.number}</div>
              <div className="relative inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6 transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 group-hover:bg-white group-hover:shadow-lg">
                <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-20 rounded-full transition-opacity duration-500`} />
                <step.icon className="relative h-10 w-10 text-green-600 group-hover:text-green-700 transition-colors duration-300" />
              </div>
              <div className="relative">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-700 transition-colors duration-300">{step.title}</h3>
                <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">{step.desc}</p>
              </div>
              <div className={`absolute -bottom-10 -left-10 w-24 h-24 bg-gradient-to-br ${step.color} rounded-full opacity-0 group-hover:opacity-20 blur-2xl transition-all duration-700`} />
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-green-200">
                <div className={`h-full bg-gradient-to-r ${step.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left`} />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* ── Why Choose Us — Comparison Table ── */}
      {/* <motion.section
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
        className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50"
      >
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeInUp} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Why Make the Switch?</h2>
            <p className="text-lg text-gray-600">See how our bags compare to conventional plastic</p>
          </motion.div>
          <div className="overflow-x-auto rounded-2xl shadow-lg">
            <table className="w-full bg-white">
              <thead>
                <tr>
                  <th className="p-4 text-left text-gray-600 font-semibold bg-gray-50">Feature</th>
                  <th className="p-4 text-center bg-green-600 text-white font-bold text-lg">🌿 Bag a Soil</th>
                  <th className="p-4 text-center bg-gray-200 text-gray-600 font-semibold">🛢️ Regular Plastic</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: 'Decomposition Time', ours: '90–180 days', theirs: '500–1000 years' },
                  { feature: 'Made from', ours: 'Plant-based materials', theirs: 'Fossil fuels' },
                  { feature: 'Toxic Residue', ours: '❌ None', theirs: '☠️ Yes' },
                  { feature: 'Customizable', ours: '✅ Yes', theirs: '✅ Yes' },
                  { feature: 'Carbon Footprint', ours: '90% lower', theirs: 'High' },
                  { feature: 'Compostable', ours: '✅ Yes', theirs: '❌ No' },
                  { feature: 'Government Compliant', ours: '✅ CPCB Approved', theirs: '⚠️ Banned in India' },
                ].map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="p-4 font-medium text-gray-700">{row.feature}</td>
                    <td className="p-4 text-center text-green-700 font-semibold bg-green-50">{row.ours}</td>
                    <td className="p-4 text-center text-gray-500">{row.theirs}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </motion.section> */}

      {/* ── How to Order ── */}
      <motion.section
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
        className="py-16 px-4 sm:px-6 lg:px-8 bg-white"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">How to Order</h2>
            <p className="text-lg text-gray-600">Get your custom eco bags in 4 simple steps</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {[
              { step: '01', icon: '📋', title: 'Request a Quote', desc: 'Fill our quick form with your bag type, quantity, and design requirements.', color: 'from-green-400 to-emerald-500' },
              { step: '02', icon: '💬', title: 'Get a Custom Quote', desc: 'Our team reviews your needs and sends a detailed price quote within 24hrs.', color: 'from-emerald-400 to-teal-500' },
              { step: '03', icon: '🎨', title: 'Approve Design', desc: 'We share a digital proof. You approve and we start production immediately.', color: 'from-teal-400 to-cyan-500' },
              { step: '04', icon: '🚚', title: 'Fast Delivery', desc: 'Your eco bags delivered Pan India with real-time tracking and GST invoice.', color: 'from-green-500 to-emerald-600' },
            ].map((step, idx) => (
              <motion.div key={idx} variants={fadeInUp} className="group flex flex-col items-center text-center">
                <div className={`relative w-16 h-16 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center text-2xl mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {step.icon}
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-white rounded-full border-2 border-green-500 flex items-center justify-center">
                    <span className="text-xs font-bold text-green-600">{idx + 1}</span>
                  </div>
                </div>
                <h3 className="font-bold text-gray-900 mb-2 text-lg">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <button
              onClick={() => navigate('/contact')}
              className="px-8 py-4 bg-green-600 text-white rounded-xl font-bold text-lg hover:bg-green-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              Start Your Order →
            </button>
          </div>
        </div>
      </motion.section>

      {/* ── Environmental Impact ── */}
      <section
        ref={sectionRef}
        className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-600 via-emerald-600 to-teal-700 overflow-hidden"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl animate-blob" />
          <div className="absolute top-40 right-20 w-96 h-96 bg-emerald-300/10 rounded-full blur-3xl animate-blob animation-delay-2000" />
          <div className="absolute -bottom-20 left-1/3 w-80 h-80 bg-teal-400/10 rounded-full blur-3xl animate-blob animation-delay-4000" />
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full animate-float-particle"
              style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%`, animationDelay: `${Math.random() * 5}s`, animationDuration: `${8 + Math.random() * 4}s` }}
            />
          ))}
        </div>
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <div className="mb-16 animate-fade-in-down">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-4">
              <Sparkles className="w-5 h-5 text-green-200 animate-pulse" />
              <span className="text-sm text-green-100 font-medium">Making a Difference</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 drop-shadow-lg">Our Environmental Impact</h2>
            <p className="text-xl text-green-50 font-light">Real numbers, real change</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              const counterValue = counters[stat.key as keyof typeof counters];
              return (
                <div
                  key={idx}
                  className="group relative bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/15 hover:scale-105 transition-all duration-500 hover:shadow-2xl animate-fade-in-up"
                  style={{ animationDelay: `${idx * 150}ms` }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-20 rounded-2xl blur-xl transition-opacity duration-500`} />
                  <div className="relative mb-4 inline-flex">
                    <div className={`p-4 bg-gradient-to-br ${stat.color} rounded-xl shadow-lg group-hover:rotate-12 transition-transform duration-500`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="relative text-5xl font-bold text-white mb-3 drop-shadow-lg">
                    <span className="bg-gradient-to-br from-white to-green-100 bg-clip-text text-transparent">
                      {formatNumber(counterValue)}{stat.suffix}
                    </span>
                  </div>
                  <div className="relative text-green-50 font-medium text-lg">{stat.label}</div>
                  <div className="mt-4 h-1 bg-white/20 rounded-full overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${stat.color} rounded-full transition-all duration-2000 ease-out`}
                      style={{ width: isVisible ? '100%' : '0%' }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
          <div className="mt-12 animate-fade-in-up" style={{ animationDelay: '600ms' }}>
            <p className="text-green-100 text-lg">
              Join <span className="font-bold text-white">{formatNumber(counters.customers)}+</span> businesses making a sustainable choice
            </p>
          </div>
        </div>
        <style>{`
          @keyframes blob { 0%,100%{transform:translate(0,0) scale(1)} 33%{transform:translate(30px,-50px) scale(1.1)} 66%{transform:translate(-20px,20px) scale(.9)} }
          @keyframes float-particle { 0%,100%{transform:translateY(0) translateX(0);opacity:0} 10%{opacity:1} 90%{opacity:1} 100%{transform:translateY(-100px) translateX(50px);opacity:0} }
          @keyframes fade-in-up { from{opacity:0;transform:translateY(30px)} to{opacity:1;transform:translateY(0)} }
          @keyframes fade-in-down { from{opacity:0;transform:translateY(-20px)} to{opacity:1;transform:translateY(0)} }
          .animate-blob{animation:blob 7s infinite}
          .animation-delay-2000{animation-delay:2s}
          .animation-delay-4000{animation-delay:4s}
          .animate-float-particle{animation:float-particle linear infinite}
          .animate-fade-in-up{animation:fade-in-up .8s ease-out forwards;opacity:0}
          .animate-fade-in-down{animation:fade-in-down .8s ease-out}
          .duration-2000{transition-duration:2000ms}
        `}</style>
      </section>

    
     
      {/* ── Greening Live Events ── */}
      <motion.section
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
        className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-50 to-emerald-100"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 bg-white rounded-lg overflow-hidden">
            <motion.div
              initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }} viewport={{ once: true }}
              className="relative h-96 lg:h-auto overflow-hidden group"
            >
              <img
                src="https://res.cloudinary.com/dqir5enfp/image/upload/v1760545046/public-concert_xzfkaa.png"
                alt="Concert crowd"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-600/90 backdrop-blur-sm rounded-full mb-3">
                  <Leaf className="w-4 h-4 text-white" />
                  <span className="text-sm text-white font-semibold">Sustainable Events</span>
                </div>
                <h3 className="text-white text-2xl font-bold drop-shadow-lg">Making Every Concert Count</h3>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }} viewport={{ once: true }}
              className="bg-gradient-to-br from-green-50 to-emerald-50 p-10 lg:p-12 flex flex-col justify-center"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Greening the <span className="text-green-600">Live Experience</span>
              </h2>
              <p className="text-gray-700 mb-4">
                Every concert, festival, and live event generates thousands of single-use plastic bags. We're changing that narrative by providing 100% biodegradable bags that decompose naturally within months, not centuries.
              </p>
              <p className="text-gray-700 mb-6">
                From merchandise bags to food packaging, our plant-based materials break down into organic matter, leaving zero toxic residue.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: '90%', label: 'Less Carbon Footprint' },
                  { value: '180', label: 'Days to Decompose' },
                  { value: '500+', label: 'Events Served' },
                  { value: '100%', label: 'Compostable' },
                ].map((s, i) => (
                  <div key={i} className="bg-white rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow">
                    <div className="text-3xl font-bold text-green-600 mb-1">{s.value}</div>
                    <div className="text-sm text-gray-600">{s.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* ── FAQ ── */}
      <motion.section
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
        className="py-16 px-4 sm:px-6 lg:px-8 bg-white"
      >
        <motion.div {...fadeInUp} viewport={{ once: true }} className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600">Answers to common questions about our products and sustainability.</p>
        </motion.div>
        <motion.div
          variants={staggerContainer} initial="initial" whileInView="whileInView"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-4 max-w-4xl mx-auto"
        >
          {[
            { q: 'Are your bags truly biodegradable?', a: 'Yes! Our bags are made from 100% compostable materials certified by international standards.' },
            { q: 'Can I customize the size and design?', a: 'Absolutely. We offer tailor-made solutions for businesses of all sizes.' },
            { q: 'Do you provide bulk orders?', a: 'Yes, minimum order quantities are flexible depending on product type.' },
            { q: 'How long does delivery take?', a: 'Standard delivery takes 7–10 business days across India. Express options are available.' },
            { q: 'Do you provide a GST invoice?', a: 'Yes, we provide proper GST invoices for all orders.' },
          ].map((faq, idx) => (
            <motion.div
              key={idx} variants={fadeInUp}
              className="border rounded-lg p-4 hover:shadow-md transition-shadow hover:border-green-300"
            >
              <h3 className="font-bold text-gray-900 mb-2">🌿 {faq.q}</h3>
              <p className="text-gray-600">{faq.a}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* ── Testimonials ── */}
      <motion.section
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
        className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50"
      >
        <motion.div {...fadeInUp} viewport={{ once: true }} className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
          <p className="text-lg text-gray-600">Real feedback from businesses going green</p>
        </motion.div>
        <motion.div
          variants={staggerContainer} initial="initial" whileInView="whileInView"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto"
        >
          {[
            { name: 'Rajesh Kumar', company: 'Green Mart', text: 'Switching to Bag a Soil was the best decision for our business. Our customers appreciate the eco-friendly approach.', color: 'from-green-400 to-emerald-500' },
            { name: 'Priya Sharma', company: 'Urban Organics', text: 'Quality products, competitive pricing, and exceptional service. Highly recommend for any business going green.', color: 'from-emerald-400 to-teal-500' },
            { name: 'Amit Patel', company: 'Fresh Foods Co.', text: 'The custom branding options are fantastic. Our bags look professional and our customers love them.', color: 'from-teal-400 to-cyan-500' },
          ].map((t, idx) => (
            <motion.div
              key={idx} variants={fadeInUp}
              className="group relative bg-white rounded-lg p-6 shadow-sm transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 cursor-pointer overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${t.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-lg`} />
              <div className="text-4xl text-green-200 mb-3">"</div>
              <p className="relative text-gray-600 mb-4 italic group-hover:text-gray-900 transition-colors duration-300">{t.text}"</p>
              <div className="relative">
                <div className="font-bold text-gray-900 group-hover:text-green-700 transition-colors duration-300">{t.name}</div>
                <div className="text-sm text-gray-500">{t.company}</div>
              </div>
              <div className={`absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br ${t.color} rounded-full opacity-0 group-hover:opacity-30 blur-2xl transition-opacity duration-700`} />
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* ── Newsletter ── */}
      <motion.section
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
        className="py-16 px-4 sm:px-6 lg:px-8 bg-white"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }} viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 md:p-12 text-center">
            <Mail className="h-12 w-12 text-green-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Join Our Green Community</h2>
            <p className="text-lg text-gray-600 mb-6">Get exclusive updates on sustainability and eco-innovations</p>
            <form onSubmit={handleNewsletterSignup} className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
              <input
                type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email" required
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <button
                type="submit" disabled={newsletterStatus === 'loading'}
                className="px-6 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors disabled:opacity-50"
              >
                {newsletterStatus === 'loading' ? 'Subscribing...' : 'Subscribe'}
              </button>
            </form>
            {newsletterStatus === 'success' && (
              <div className="mt-4 flex items-center justify-center text-green-600">
                <CheckCircle className="h-5 w-5 mr-2" /><span>Successfully subscribed!</span>
              </div>
            )}
            {newsletterStatus === 'error' && (
              <p className="mt-4 text-red-600">Already subscribed or an error occurred</p>
            )}
          </div>
        </motion.div>
      </motion.section>

      {/* ── Trusted By ── */}
      <motion.section
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
        className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-green-50 to-emerald-50 overflow-hidden"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-200/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-200/20 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div {...fadeInUp} viewport={{ once: true }} className="text-center mb-16">
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
          </motion.div>
          <motion.div
            variants={staggerContainer} initial="initial" whileInView="whileInView"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-12"
          >
            {logos.map((logo, idx) => {
              const Icon = logo.icon;
              return (
                <motion.div
                  key={idx} variants={fadeInUp}
                  className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${logo.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`} />
                  <div className="relative flex flex-col items-center justify-center">
                    <div className={`mb-4 p-4 bg-gradient-to-br ${logo.color} rounded-xl shadow-md group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                    <span className="text-sm font-medium text-gray-700 text-center group-hover:text-gray-900 transition-colors">{logo.name}</span>
                  </div>
                  <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <Award className="w-5 h-5 text-green-500" />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
          <motion.div
            variants={staggerContainer} initial="initial" whileInView="whileInView"
            viewport={{ once: true, amount: 0.2 }}
            className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {[
              { value: '500+', label: 'Partner Companies', color: 'text-green-600' },
              { value: '50+', label: 'Cities Across India', color: 'text-emerald-600' },
              { value: '98%', label: 'Customer Satisfaction', color: 'text-teal-600' },
            ].map((s, i) => (
              <motion.div key={i} variants={fadeInUp} className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-xl">
                <div className={`text-3xl font-bold ${s.color} mb-2`}>{s.value}</div>
                <div className="text-sm text-gray-600">{s.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* ── Footer ── */}
     
  <footer className="relative bg-gradient-to-br from-green-700 via-green-600 to-emerald-700 text-white overflow-hidden">
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl"></div>
    <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-green-500/20 rounded-full blur-3xl"></div>

    <Leaf className="absolute top-20 left-10 w-8 h-8 text-green-300/20 animate-float" />
    <Leaf className="absolute top-40 right-20 w-6 h-6 text-emerald-300/20 animate-float-delayed" />
    <Leaf className="absolute bottom-20 left-1/3 w-10 h-10 text-green-400/20 animate-float-slow" />
  </div>

  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

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



)};