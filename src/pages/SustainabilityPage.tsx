// import { useState } from 'react';
// import {  TrendingDown, Trees, Calculator } from 'lucide-react';
// import { useNavigate } from 'react-router-dom';
// import {  Leaf,Facebook,Twitter,Instagram,Linkedin,MapPin ,Phone ,ArrowRight, Mail,Heart,  } from 'lucide-react';



// interface SustainabilityPageProps {
//   onNavigate: (page: string) => void;
// }

// export default function SustainabilityPage({ onNavigate }: SustainabilityPageProps) {
//   const [monthlyBags, setMonthlyBags] = useState(1000);
//   const [bagWeight, setBagWeight] = useState(10);
//   const navigate=useNavigate();

//   const calculateImpact = () => {
//     const plasticSavedKg = (monthlyBags * bagWeight) / 1000;
//     const annualPlasticKg = plasticSavedKg * 12;
//     const carbonOffset = annualPlasticKg * 2.5;
//     const treesEquivalent = Math.round(carbonOffset / 21);
//     const waterSaved = annualPlasticKg * 17;

//     return {
//       monthlyPlastic: plasticSavedKg.toFixed(2),
//       annualPlastic: annualPlasticKg.toFixed(2),
//       carbonOffset: carbonOffset.toFixed(2),
//       trees: treesEquivalent,
//       water: waterSaved.toFixed(2),
//     };
//   };

//   const impact = calculateImpact();

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <div className="bg-gradient-to-br from-green-600 to-emerald-700 py-16 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-7xl mx-auto text-center">
//           <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
//             Our Commitment to Sustainability
//           </h1>
//           <p className="text-lg text-green-50 max-w-2xl mx-auto">
//             Every bag makes a difference. See the environmental impact of choosing biodegradable packaging.
//           </p>
//         </div>
//       </div>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
//           <div>
//             <h2 className="text-3xl font-bold text-gray-900 mb-6">
//               Why Biodegradable Matters
//             </h2>
//             <div className="space-y-6">
//               <div className="bg-white rounded-lg p-6 shadow-sm">
//                 <h3 className="text-xl font-bold text-gray-900 mb-3">
//                   Traditional Plastic Problem
//                 </h3>
//                 <ul className="space-y-2 text-gray-700">
//                   <li className="flex items-start">
//                     <span className="text-red-500 mr-2">•</span>
//                     Takes 500-1000 years to decompose
//                   </li>
//                   <li className="flex items-start">
//                     <span className="text-red-500 mr-2">•</span>
//                     Releases toxic chemicals into soil and water
//                   </li>
//                   <li className="flex items-start">
//                     <span className="text-red-500 mr-2">•</span>
//                     Harms wildlife and marine ecosystems
//                   </li>
//                   <li className="flex items-start">
//                     <span className="text-red-500 mr-2">•</span>
//                     Contributes to microplastic pollution
//                   </li>
//                 </ul>
//               </div>

//               <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-6">
//                 <h3 className="text-xl font-bold text-gray-900 mb-3">
//                   Our Biodegradable Solution
//                 </h3>
//                 <ul className="space-y-2 text-gray-700">
//                   <li className="flex items-start">
//                     <span className="text-green-600 mr-2">✓</span>
//                     Decomposes in 3-6 months in composting conditions
//                   </li>
//                   <li className="flex items-start">
//                     <span className="text-green-600 mr-2">✓</span>
//                     Made from plant-based renewable materials
//                   </li>
//                   <li className="flex items-start">
//                     <span className="text-green-600 mr-2">✓</span>
//                     No toxic residue or microplastics
//                   </li>
//                   <li className="flex items-start">
//                     <span className="text-green-600 mr-2">✓</span>
//                     Certified compostable and eco-friendly
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>

//           <div>
//             <div className="bg-white rounded-lg p-8 shadow-sm sticky top-4">
//               <div className="flex items-center mb-6">
//                 <Calculator className="h-8 w-8 text-green-600 mr-3" />
//                 <h2 className="text-2xl font-bold text-gray-900">
//                   Impact Calculator
//                 </h2>
//               </div>
//               <p className="text-gray-600 mb-6">
//                 Calculate your potential environmental impact by switching to biodegradable bags
//               </p>

//               <div className="space-y-6 mb-8">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     Monthly bag usage
//                   </label>
//                   <input
//                     type="number"
//                     value={monthlyBags}
//                     onChange={(e) => setMonthlyBags(Number(e.target.value))}
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     Average bag weight (grams)
//                   </label>
//                   <input
//                     type="number"
//                     value={bagWeight}
//                     onChange={(e) => setBagWeight(Number(e.target.value))}
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
//                   />
//                 </div>
//               </div>

//               <div className="bg-gradient-to-br from-green-600 to-emerald-700 rounded-lg p-6 text-white">
//                 <h3 className="text-lg font-bold mb-4">Your Annual Impact</h3>
//                 <div className="space-y-4">
//                   <div className="flex items-center justify-between">
//                     <span>Plastic waste saved</span>
//                     <span className="text-2xl font-bold">{impact.annualPlastic} kg</span>
//                   </div>
//                   <div className="flex items-center justify-between">
//                     <span>Carbon offset</span>
//                     <span className="text-2xl font-bold">{impact.carbonOffset} kg</span>
//                   </div>
//                   <div className="flex items-center justify-between">
//                     <span>Equivalent trees</span>
//                     <span className="text-2xl font-bold">{impact.trees}</span>
//                   </div>
//                   <div className="flex items-center justify-between">
//                     <span>Water saved</span>
//                     <span className="text-2xl font-bold">{impact.water} L</span>
//                   </div>
//                 </div>
//               </div>

//               <button
//                 onClick={() => onNavigate('contact')}
//                 className="w-full mt-6 px-6 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700"
//               >
//                 Start Making a Difference
//               </button>
//             </div>
//           </div>
//         </div>

//         <div className="mb-16">
//           <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
//             Understanding Biodegradation
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
//             {[
//               {
//                 step: '1',
//                 title: 'Material',
//                 desc: 'Made from plant-based starches and natural polymers',
//               },
//               {
//                 step: '2',
//                 title: 'Usage',
//                 desc: 'Functions like traditional plastic with same durability',
//               },
//               {
//                 step: '3',
//                 title: 'Disposal',
//                 desc: 'Can be composted with organic waste',
//               },
//               {
//                 step: '4',
//                 title: 'Decomposition',
//                 desc: 'Breaks down into water, CO₂, and biomass in 3-6 months',
//               },
//             ].map((step, idx) => (
//               <div key={idx} className="bg-white rounded-lg p-6 text-center">
//                 <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
//                   {step.step}
//                 </div>
//                 <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
//                 <p className="text-gray-600 text-sm">{step.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 md:p-12">
//           <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
//             Our Certifications
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {[
//               {
//                 icon: Leaf,
//                 title: 'Compostable Certified',
//                 desc: 'Meets EN 13432 and ASTM D6400 standards',
//               },
//               {
//                 icon: TrendingDown,
//                 title: 'Carbon Neutral',
//                 desc: 'Offset production emissions through verified projects',
//               },
//               {
//                 icon: Trees,
//                 title: 'Renewable Materials',
//                 desc: '100% plant-based raw materials from sustainable sources',
//               },
//             ].map((cert, idx) => (
//               <div key={idx} className="text-center">
//                 <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-full mb-4 shadow-sm">
//                   <cert.icon className="h-10 w-10 text-green-600" />
//                 </div>
//                 <h3 className="text-lg font-bold text-gray-900 mb-2">{cert.title}</h3>
//                 <p className="text-gray-600">{cert.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Footer */}

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
import { TrendingDown, Trees, Calculator } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Leaf, Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, ArrowRight, Mail, Heart } from 'lucide-react';

export default function SustainabilityPage({ onNavigate }) {
  const [monthlyBags, setMonthlyBags] = useState(1000);
  const [bagWeight, setBagWeight] = useState(10);
  const navigate = useNavigate();

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

      {/* ── Global Keyframes ── */}
      <style>{`
        /* Very gentle Ken Burns — image stays mostly still, just slightly breathes */
        @keyframes kb-gentle {
          0%   { transform: scale(1.04) translate(0px,   0px); }
          50%  { transform: scale(1.07) translate(-5px, -3px); }
          100% { transform: scale(1.04) translate(0px,   0px); }
        }
        .kb-gentle { animation: kb-gentle 22s ease-in-out infinite; }

        @keyframes spin-cw  { from{transform:rotate(0deg)}   to{transform:rotate(360deg)}  }
        @keyframes spin-ccw { from{transform:rotate(0deg)}   to{transform:rotate(-360deg)} }

        @keyframes float-up { 0%,100%{transform:translateY(0) rotate(0deg)} 50%{transform:translateY(-16px) rotate(4deg)} }
        @keyframes float-dn { 0%,100%{transform:translateY(0) rotate(0deg)} 50%{transform:translateY(13px) rotate(-4deg)} }

        @keyframes pulse-op { 0%,100%{opacity:0.14} 50%{opacity:0.32} }
        @keyframes twinkle  { 0%,100%{opacity:0.08} 50%{opacity:0.45} }

        @keyframes shimmer {
          0%  { background-position: 200% center }
          100%{ background-position:-200% center }
        }
        @keyframes glow-ring {
          0%,100%{ box-shadow:0 0 0 0   rgba(134,239,172,0.35) }
          50%    { box-shadow:0 0 0 10px rgba(134,239,172,0)    }
        }

        .h-float-a { animation: float-up 8s ease-in-out infinite; }
        .h-float-b { animation: float-dn 10s ease-in-out infinite; }
        .h-float-c { animation: float-up 7s ease-in-out infinite 2s; }
        .h-float-d { animation: float-dn 9s ease-in-out infinite 3.5s; }
        .h-pulse    { animation: pulse-op 4.5s ease-in-out infinite; }
        .h-pulse2   { animation: pulse-op 5.5s ease-in-out infinite 1.2s; }
        .h-twinkle  { animation: twinkle  3s ease-in-out infinite; }

        .shimmer-text {
          background: linear-gradient(90deg,#fff 0%,#bbf7d0 40%,#fff 60%,#bbf7d0 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 4.5s linear infinite;
        }
        .hero-badge { animation: glow-ring 2.8s ease-in-out infinite; }
      `}</style>

      {/* ══════════════════════════════════════
          HERO SECTION
      ══════════════════════════════════════ */}
      <div className="relative overflow-hidden" style={{ minHeight: '380px' }}>

        {/* 1. Background image — full visible, gentle blur, not stretched */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div
            className="kb-gentle absolute inset-0"
            style={{
              backgroundImage: 'url(/Environmental-Sustainability-image.jpg)',
              backgroundSize: 'cover',        /* fills the hero without stretching */
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              filter: 'blur(2px) brightness(0.58)',  /* more visible than other pages */
              transform: 'scale(1.04)',              /* slight upscale to hide blur edges */
            }}
          />
        </div>

        {/* 2. Very light dark gradient at top & bottom for text legibility only */}
        <div
          className="absolute inset-0 z-0"
          style={{
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.22) 0%, rgba(0,0,0,0.08) 50%, rgba(0,0,0,0.28) 100%)',
          }}
        />

        {/* 3. SVG decorations — all ring/line opacities kept very low */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1400 380"
          preserveAspectRatio="xMidYMid slice"
          style={{ zIndex: 1 }}
        >
          {/* ── LEFT SEAL ── */}
          <g className="h-float-a" style={{ transformOrigin:'115px 190px' }}>
            <circle cx="115" cy="190" r="112" fill="none" stroke="rgba(255,255,255,0.10)" strokeWidth="1.2"
              strokeDasharray="14 9"
              style={{ animation:'spin-cw 18s linear infinite', transformOrigin:'115px 190px' }} />
            <circle cx="115" cy="190" r="84" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.13)" strokeWidth="1.2"
              style={{ animation:'spin-ccw 12s linear infinite', transformOrigin:'115px 190px' }} />
            <circle cx="115" cy="190" r="57" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.11)" strokeWidth="1.0" />
            {/* leaf silhouette */}
            <path d="M115,158 Q140,168 136,192 Q115,198 104,180 Q95,162 115,158 Z"
              fill="rgba(255,255,255,0.35)" stroke="none" />
            <line x1="115" y1="158" x2="115" y2="198" stroke="rgba(255,255,255,0.42)" strokeWidth="1.2" />
          </g>

          {/* ── RIGHT SEAL ── */}
          <g className="h-float-b" style={{ transformOrigin:'1285px 180px' }}>
            <circle cx="1285" cy="180" r="106" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1.2"
              strokeDasharray="12 8"
              style={{ animation:'spin-ccw 15s linear infinite', transformOrigin:'1285px 180px' }} />
            <circle cx="1285" cy="180" r="78" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.12)" strokeWidth="1.2"
              style={{ animation:'spin-cw 11s linear infinite', transformOrigin:'1285px 180px' }} />
            <circle cx="1285" cy="180" r="53" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.10)" strokeWidth="1.0" />
            {/* tree silhouette */}
            <polygon points="1285,148 1302,178 1268,178" fill="rgba(255,255,255,0.38)" stroke="none" />
            <rect x="1281" y="178" width="8" height="18" rx="2" fill="rgba(255,255,255,0.32)" />
          </g>

          {/* ── ECO LEAF — top left ── */}
          <g className="h-float-c" style={{ transformOrigin:'345px 72px' }}>
            <circle cx="345" cy="72" r="54" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1.0"
              strokeDasharray="9 7"
              style={{ animation:'spin-ccw 20s linear infinite', transformOrigin:'345px 72px' }} />
            <circle cx="345" cy="72" r="35" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.14)" strokeWidth="1.0" />
            <path d="M345,50 Q368,58 364,80 Q345,86 334,68 Q326,52 345,50 Z"
              fill="rgba(255,255,255,0.40)" stroke="none" />
            <line x1="345" y1="50" x2="345" y2="86" stroke="rgba(255,255,255,0.48)" strokeWidth="1.2" />
          </g>

          {/* ── RECYCLING SYMBOL — top right ── */}
          <g className="h-float-d" style={{ transformOrigin:'1060px 290px' }}>
            <circle cx="1060" cy="290" r="57" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1.0"
              strokeDasharray="8 7"
              style={{ animation:'spin-cw 22s linear infinite', transformOrigin:'1060px 290px' }} />
            <circle cx="1060" cy="290" r="36" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.14)" strokeWidth="1.0" />
            <text x="1060" y="300" textAnchor="middle" fill="rgba(255,255,255,0.52)" fontSize="28">♻</text>
          </g>

          {/* ── CENTER TOP — gentle ring ── */}
          <g className="h-float-a" style={{ transformOrigin:'700px 55px', animationDelay:'1s' }}>
            <circle cx="700" cy="55" r="44" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.12)" strokeWidth="1.2"
              style={{ animation:'spin-cw 24s linear infinite', transformOrigin:'700px 55px' }} />
            <circle cx="700" cy="55" r="28" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.10)" strokeWidth="1.0" />
            {/* sun/earth icon */}
            <circle cx="700" cy="55" r="14" fill="rgba(255,255,255,0.28)" stroke="rgba(255,255,255,0.42)" strokeWidth="1.2" />
            <line x1="700" y1="35" x2="700" y2="44" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="700" y1="66" x2="700" y2="75" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="680" y1="55" x2="689" y2="55" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="711" y1="55" x2="720" y2="55" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" strokeLinecap="round" />
          </g>

          {/* ── ORBIT RINGS center-left (very faint) ── */}
          <circle cx="390" cy="230" r="92" fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth="1.2"
            strokeDasharray="15 10"
            style={{ animation:'spin-cw 20s linear infinite', transformOrigin:'390px 230px' }} />
          <circle cx="390" cy="230" r="64" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="0.9"
            strokeDasharray="9 11"
            style={{ animation:'spin-ccw 14s linear infinite', transformOrigin:'390px 230px' }} />

          {/* ── ORBIT RINGS center-right (very faint) ── */}
          <circle cx="1010" cy="120" r="96" fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth="1.2"
            strokeDasharray="15 10"
            style={{ animation:'spin-ccw 22s linear infinite', transformOrigin:'1010px 120px' }} />
          <circle cx="1010" cy="120" r="66" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="0.9"
            strokeDasharray="9 11"
            style={{ animation:'spin-cw 15s linear infinite', transformOrigin:'1010px 120px' }} />

          {/* ── RIBBON BANNERS ── */}
          <g className="h-float-b" style={{ transformOrigin:'265px 308px', animationDelay:'0.5s' }}>
            <rect x="175" y="300" width="180" height="18" rx="5" fill="rgba(255,255,255,0.12)" />
            <polygon points="175,300 161,309 175,318" fill="rgba(255,255,255,0.12)" />
            <polygon points="355,300 369,309 355,318" fill="rgba(255,255,255,0.12)" />
          </g>
          <g className="h-float-a" style={{ transformOrigin:'1148px 42px', animationDelay:'2.5s' }}>
            <rect x="1058" y="34" width="180" height="18" rx="5" fill="rgba(255,255,255,0.10)" />
            <polygon points="1058,34 1044,43 1058,52" fill="rgba(255,255,255,0.10)" />
            <polygon points="1238,34 1252,43 1238,52" fill="rgba(255,255,255,0.10)" />
          </g>

          {/* ── CHECKMARK CIRCLES ── */}
          <g className="h-pulse" style={{ transformOrigin:'585px 280px' }}>
            <circle cx="585" cy="280" r="34" fill="none" stroke="rgba(255,255,255,0.16)" strokeWidth="1.6" />
            <polyline points="572,280 581,291 600,268" fill="none" stroke="rgba(255,255,255,0.38)"
              strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </g>
          <g className="h-pulse2" style={{ transformOrigin:'848px 70px' }}>
            <circle cx="848" cy="70" r="30" fill="none" stroke="rgba(255,255,255,0.14)" strokeWidth="1.4" />
            <polyline points="836,70 845,80 862,59" fill="none" stroke="rgba(255,255,255,0.34)"
              strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          </g>

          {/* ── TWINKLING STARS (sparse) ── */}
          {[
            [478,30],[538,305],[818,24],[918,315],
            [1158,208],[203,100],[658,292],[298,285]
          ].map(([x,y],i) => (
            <g key={i} className="h-twinkle" style={{ animationDelay:`${i*0.42}s` }}>
              <polygon
                points={`${x},${y-7} ${x+2},${y-2} ${x+8},${y-2} ${x+3},${y+1} ${x+5},${y+7} ${x},${y+4} ${x-5},${y+7} ${x-3},${y+1} ${x-8},${y-2} ${x-2},${y-2}`}
                fill="rgba(255,255,255,0.42)"
              />
            </g>
          ))}

          {/* ── DOTTED ARC PATHS ── */}
          <path d="M 0,290 Q 220,168 448,276" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1.4" strokeDasharray="7 9" />
          <path d="M 952,68 Q 1182,164 1400,98"  fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1.4" strokeDasharray="7 9" />
          <path d="M 498,8  Q 700,105 902,26"    fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="0.9" strokeDasharray="5 10" />

          {/* ── SUBTLE PARTICLE DOTS ── */}
          {[
            [220,52,3],[480,312,4],[760,18,3],[960,342,4],
            [1120,62,3],[1320,242,4],[560,182,3]
          ].map(([x,y,r],i) => (
            <circle key={i} cx={x} cy={y} r={r} fill="rgba(255,255,255,0.25)"
              style={{ animation:`pulse-op ${3+i*0.4}s ease-in-out infinite`, animationDelay:`${i*0.5}s` }} />
          ))}
        </svg>

        {/* 4. Foreground content */}
        <div className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-5 hero-badge">
            <span className="text-green-300 text-sm">🌱</span>
            <span className="text-white/90 text-sm font-medium tracking-wide">Every Bag Makes a Difference</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 shimmer-text">
            Our Commitment to Sustainability
          </h1>
          <p className="text-lg text-green-50/90 max-w-2xl mx-auto">
            Every bag makes a difference. See the environmental impact of choosing biodegradable packaging.
          </p>
        </div>
      </div>

      {/* ══════════════════════════════════════
          MAIN CONTENT
      ══════════════════════════════════════ */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Biodegradable Matters</h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Traditional Plastic Problem</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start"><span className="text-red-500 mr-2">•</span>Takes 500-1000 years to decompose</li>
                  <li className="flex items-start"><span className="text-red-500 mr-2">•</span>Releases toxic chemicals into soil and water</li>
                  <li className="flex items-start"><span className="text-red-500 mr-2">•</span>Harms wildlife and marine ecosystems</li>
                  <li className="flex items-start"><span className="text-red-500 mr-2">•</span>Contributes to microplastic pollution</li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Our Biodegradable Solution</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start"><span className="text-green-600 mr-2">✓</span>Decomposes in 3-6 months in composting conditions</li>
                  <li className="flex items-start"><span className="text-green-600 mr-2">✓</span>Made from plant-based renewable materials</li>
                  <li className="flex items-start"><span className="text-green-600 mr-2">✓</span>No toxic residue or microplastics</li>
                  <li className="flex items-start"><span className="text-green-600 mr-2">✓</span>Certified compostable and eco-friendly</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-white rounded-lg p-8 shadow-sm sticky top-4">
              <div className="flex items-center mb-6">
                <Calculator className="h-8 w-8 text-green-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Impact Calculator</h2>
              </div>
              <p className="text-gray-600 mb-6">
                Calculate your potential environmental impact by switching to biodegradable bags
              </p>
              <div className="space-y-6 mb-8">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Monthly bag usage</label>
                  <input
                    type="number" value={monthlyBags}
                    onChange={(e) => setMonthlyBags(Number(e.target.value))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Average bag weight (grams)</label>
                  <input
                    type="number" value={bagWeight}
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

        {/* Biodegradation Steps */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Understanding Biodegradation</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step:'1', title:'Material',     desc:'Made from plant-based starches and natural polymers' },
              { step:'2', title:'Usage',        desc:'Functions like traditional plastic with same durability' },
              { step:'3', title:'Disposal',     desc:'Can be composted with organic waste' },
              { step:'4', title:'Decomposition',desc:'Breaks down into water, CO₂, and biomass in 3-6 months' },
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

        {/* Certifications */}
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Our Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Leaf,        title:'Compostable Certified', desc:'Meets EN 13432 and ASTM D6400 standards' },
              { icon: TrendingDown, title:'Carbon Neutral',       desc:'Offset production emissions through verified projects' },
              { icon: Trees,       title:'Renewable Materials',   desc:'100% plant-based raw materials from sustainable sources' },
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
                  { label:'Home',          path:'/home'           },
                  { label:'Products',      path:'/products'       },
                  { label:'Sustainability',path:'/sustainability'  },
                  { label:'Community',     path:'/community'      },
                  { label:'Certificates',  path:'/certifications' },
                  { label:'Contact',       path:'/contact'        },
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