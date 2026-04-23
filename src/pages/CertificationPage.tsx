// // import { FileText, Download, Award, CheckCircle, Leaf,Facebook,Twitter,Instagram,Linkedin,MapPin ,Phone ,ArrowRight, Mail,Heart,  } from 'lucide-react';
// import { useNavigate } from 'react-router-dom';

// export default function CertificationsPage() {
//   // Static certifications data based on your PDFs
//   const certifications = [
//     {
//       id: '1',
//       title: 'Pollution Control Board Consent Order',
//       description: 'Green Category Consent Order for manufacturing compostable carry bags, laundry bags, garbage bags, nursery plant bags, disposal bed sheets, shopping bags, and agri-mulch films.',
//       image_url: 'https://res.cloudinary.com/dqir5enfp/image/upload/v1760374001/C-2_moybhz.jpg', // Replace with actual certificate image
//       pdf_url: '/certificates/CertiFicate-2.pdf',
//       issued_by: 'Andhra Pradesh Pollution Control Board',
//       issued_at: '2025-09-25',
//       category: 'Environmental Compliance'
//     },
//     {
//       id: '2',
//       title: 'Compostability Certification',
//       description: 'Certified compostable and biodegradable packaging materials that meet international standards for environmental sustainability.',
//       image_url: 'https://res.cloudinary.com/dqir5enfp/image/upload/v1760373933/C-1_ev2cqe.jpg', // Replace with actual certificate image
//       pdf_url: '/certificates/certification-1.pdf',
//       issued_by: 'International Certification Body',
//       issued_at: '2025-01-15',
//       category: 'Product Quality'
//     }
//   ];

//   const navigate=useNavigate();

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Hero Section */}
//       <div className="bg-gradient-to-br from-green-600 to-emerald-700 py-16 px-4 sm:px-6 lg:px-8 text-center">
//         <Award className="h-16 w-16 text-white mx-auto mb-4" />
//         <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
//           Our Certifications
//         </h1>
//         <p className="text-lg text-green-50 max-w-2xl mx-auto">
//           Showcasing our commitment to quality, sustainability, and industry standards.  
//           Each certificate reflects our dedication to delivering eco-friendly solutions.
//         </p>
//       </div>

//       {/* Statistics Section */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           <div className="bg-white rounded-lg shadow-md p-6 text-center">
//             <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-4">
//               <CheckCircle className="h-6 w-6 text-green-600" />
//             </div>
//             <h3 className="text-3xl font-bold text-gray-900 mb-2">100%</h3>
//             <p className="text-gray-600">Biodegradable Products</p>
//           </div>
//           <div className="bg-white rounded-lg shadow-md p-6 text-center">
//             <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-4">
//               <Award className="h-6 w-6 text-green-600" />
//             </div>
//             <h3 className="text-3xl font-bold text-gray-900 mb-2">2+</h3>
//             <p className="text-gray-600">Official Certifications</p>
//           </div>
//           <div className="bg-white rounded-lg shadow-md p-6 text-center">
//             <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-4">
//               <FileText className="h-6 w-6 text-green-600" />
//             </div>
//             <h3 className="text-3xl font-bold text-gray-900 mb-2">Green</h3>
//             <p className="text-gray-600">Industry Category</p>
//           </div>
//         </div>
//       </div>

//       {/* Certification Grid */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {certifications.map((cert) => (
//             <div key={cert.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
//               {/* Certificate Image */}
//               <div className="relative h-80 bg-gradient-to-br from-green-50 to-emerald-50">
//                 <img
//                   src={cert.image_url}
//                   alt={cert.title}
//                   className="w-full h-full object-contain p-8"
//                 />
//                 <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
//                   {cert.category}
//                 </div>
//               </div>
              
//               {/* Certificate Details */}
//               <div className="p-6">
//                 <h2 className="text-2xl font-bold text-gray-900 mb-3">{cert.title}</h2>
//                 <p className="text-gray-600 mb-4">{cert.description}</p>
                
//                 <div className="border-t border-gray-200 pt-4 mb-4">
//                   <div className="flex items-start mb-2">
//                     <span className="text-sm font-semibold text-gray-700 w-24">Issued by:</span>
//                     <span className="text-sm text-gray-600 flex-1">{cert.issued_by}</span>
//                   </div>
//                   <div className="flex items-start">
//                     <span className="text-sm font-semibold text-gray-700 w-24">Date:</span>
//                     <span className="text-sm text-gray-600 flex-1">
//                       {new Date(cert.issued_at).toLocaleDateString('en-US', { 
//                         year: 'numeric', 
//                         month: 'long', 
//                         day: 'numeric' 
//                       })}
//                     </span>
//                   </div>
//                 </div>
                
//                 {cert.pdf_url && (
//                   <a
//                     href={cert.pdf_url}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors w-full justify-center"
//                   >
//                     <Download className="h-5 w-5 mr-2" />
//                     Download Certificate PDF
//                   </a>
//                 )}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Products Covered Section */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
//         <div className="bg-white rounded-2xl shadow-md p-8 md:p-12">
//           <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Certified Products</h2>
//           <p className="text-gray-700 text-center mb-8 max-w-3xl mx-auto">
//             Our certifications cover a wide range of eco-friendly products manufactured with the highest quality standards.
//           </p>
          
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//             <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-6 text-center">
//               <h3 className="font-semibold text-gray-900 mb-2">Carry Bags</h3>
//               <p className="text-sm text-gray-600">750 Kgs/Day</p>
//             </div>
//             <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-6 text-center">
//               <h3 className="font-semibold text-gray-900 mb-2">Medical Bed Sheets</h3>
//               <p className="text-sm text-gray-600">250 Kgs/Day</p>
//             </div>
//             <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-6 text-center">
//               <h3 className="font-semibold text-gray-900 mb-2">Shopping Bags</h3>
//               <p className="text-sm text-gray-600">150 Kgs/Day</p>
//             </div>
//             <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-6 text-center">
//               <h3 className="font-semibold text-gray-900 mb-2">Agri-Mulch Films</h3>
//               <p className="text-sm text-gray-600">100 Kgs/Day</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Why Our Certifications Matter */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
//         <div className="bg-gradient-to-br from-green-600 to-emerald-700 rounded-2xl p-8 md:p-12 text-center text-white">
//           <h2 className="text-3xl font-bold mb-4">Why Our Certifications Matter</h2>
//           <p className="max-w-3xl mx-auto mb-6 text-green-50">
//             Our certifications validate our processes, eco-friendly materials, and commitment to sustainability. 
//             They provide assurance to our clients and partners that we follow industry best practices and maintain the highest quality standards.
//           </p>
//           <p className="max-w-3xl mx-auto text-green-50">
//             Each certificate is a mark of trust and a symbol of our dedication to making the packaging industry greener and safer for the environment.
//           </p>
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

import { FileText, Download, Award, CheckCircle, Leaf, Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, ArrowRight, Mail, Heart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function CertificationsPage() {
  const certifications = [
    {
      id: '1',
      title: 'Pollution Control Board Consent Order',
      description: 'Green Category Consent Order for manufacturing compostable carry bags, laundry bags, garbage bags, nursery plant bags, disposal bed sheets, shopping bags, and agri-mulch films.',
      image_url: 'https://res.cloudinary.com/dqir5enfp/image/upload/v1760374001/C-2_moybhz.jpg',
      pdf_url: '/certificates/CertiFicate-2.pdf',
      issued_by: 'Andhra Pradesh Pollution Control Board',
      issued_at: '2025-09-25',
      category: 'Environmental Compliance'
    },
    {
      id: '2',
      title: 'Compostability Certification',
      description: 'Certified compostable and biodegradable packaging materials that meet international standards for environmental sustainability.',
      image_url: 'https://res.cloudinary.com/dqir5enfp/image/upload/v1760373933/C-1_ev2cqe.jpg',
      pdf_url: '/certificates/certification-1.pdf',
      issued_by: 'International Certification Body',
      issued_at: '2025-01-15',
      category: 'Product Quality'
    }
  ];

  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Global keyframe styles */}
      <style>{`
        /* Hero animations */
        @keyframes h-spin-cw   { from{transform:rotate(0deg)}   to{transform:rotate(360deg)}  }
        @keyframes h-spin-ccw  { from{transform:rotate(0deg)}   to{transform:rotate(-360deg)} }
        @keyframes h-float-up  { 0%,100%{transform:translateY(0) rotate(0deg) scale(1)} 50%{transform:translateY(-22px) rotate(7deg) scale(1.04)} }
        @keyframes h-float-dn  { 0%,100%{transform:translateY(0) rotate(0deg) scale(1)} 50%{transform:translateY(18px) rotate(-6deg) scale(0.97)} }
        @keyframes h-pulse-op  { 0%,100%{opacity:0.35} 50%{opacity:0.65} }
        @keyframes h-twinkle   { 0%,100%{opacity:0.20} 50%{opacity:0.75} }

        .h-float-a  { animation: h-float-up  7s ease-in-out infinite; }
        .h-float-b  { animation: h-float-dn  9s ease-in-out infinite; }
        .h-float-c  { animation: h-float-up  6s ease-in-out infinite 1.5s; }
        .h-float-d  { animation: h-float-dn  8s ease-in-out infinite 3s; }
        .h-pulse-op { animation: h-pulse-op  4s ease-in-out infinite; }
        .h-pulse-op2{ animation: h-pulse-op  5s ease-in-out infinite 1s; }
        .h-twinkle  { animation: h-twinkle   2.5s ease-in-out infinite; }

        /* Products orbital animations */
        @keyframes p-cw   { from{transform:rotate(0deg)}   to{transform:rotate(360deg)}  }
        @keyframes p-ccw  { from{transform:rotate(0deg)}   to{transform:rotate(-360deg)} }
        @keyframes p-pulse{ 0%,100%{opacity:0.18;transform:scale(1)} 50%{opacity:0.30;transform:scale(1.1)} }

        .p-cw   { animation:p-cw  20s linear     infinite; transform-box:fill-box; transform-origin:50% 50%; }
        .p-cw2  { animation:p-cw  32s linear     infinite; transform-box:fill-box; transform-origin:50% 50%; }
        .p-ccw  { animation:p-ccw 16s linear     infinite; transform-box:fill-box; transform-origin:50% 50%; }
        .p-ccw2 { animation:p-ccw 26s linear     infinite; transform-box:fill-box; transform-origin:50% 50%; }
        .p-puls { animation:p-pulse 5s ease-in-out infinite; transform-box:fill-box; transform-origin:50% 50%; }
        .p-puls2{ animation:p-pulse 7s ease-in-out infinite 1.5s; transform-box:fill-box; transform-origin:50% 50%; }
      `}</style>

      {/* ══════════════════════════════════════
          HERO SECTION
      ══════════════════════════════════════ */}
      <div
        className="relative py-20 px-4 sm:px-6 lg:px-8 text-center overflow-hidden"
        style={{ minHeight: '340px' }}
      >
        {/* Blurred background image */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(/certification-image.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'blur(4px) brightness(0.55)',
            transform: 'scale(1.05)',
          }}
        />

        {/* SVG animations layer */}
        <svg
          className="absolute inset-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1400 340"
          preserveAspectRatio="xMidYMid slice"
          style={{ zIndex: 1 }}
        >
          {/* ── LEFT LARGE BADGE SEAL ── */}
          <g className="h-float-a" style={{ transformOrigin: '120px 170px' }}>
            <circle cx="120" cy="170" r="108" fill="none" stroke="rgba(255,255,255,0.32)" strokeWidth="2"
              strokeDasharray="14 9"
              style={{ animation:'h-spin-cw 16s linear infinite', transformOrigin:'120px 170px' }} />
            <circle cx="120" cy="170" r="82" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.42)" strokeWidth="2"
              style={{ animation:'h-spin-ccw 11s linear infinite', transformOrigin:'120px 170px' }} />
            <circle cx="120" cy="170" r="56" fill="rgba(255,255,255,0.10)" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" />
            <polygon points="120,128 130,155 160,155 136,173 145,200 120,182 95,200 104,173 80,155 110,155"
              fill="rgba(255,255,255,0.48)" stroke="rgba(255,255,255,0.65)" strokeWidth="1.2" />
            <circle cx="120" cy="170" r="11" fill="rgba(255,255,255,0.38)" />
          </g>

          {/* ── RIGHT LARGE BADGE SEAL ── */}
          <g className="h-float-b" style={{ transformOrigin: '1280px 160px' }}>
            <circle cx="1280" cy="160" r="102" fill="none" stroke="rgba(255,255,255,0.28)" strokeWidth="2"
              strokeDasharray="12 8"
              style={{ animation:'h-spin-ccw 14s linear infinite', transformOrigin:'1280px 160px' }} />
            <circle cx="1280" cy="160" r="76" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.40)" strokeWidth="2"
              style={{ animation:'h-spin-cw 10s linear infinite', transformOrigin:'1280px 160px' }} />
            <circle cx="1280" cy="160" r="52" fill="rgba(255,255,255,0.09)" stroke="rgba(255,255,255,0.32)" strokeWidth="1.5" />
            <polygon points="1280,120 1290,146 1318,146 1295,163 1304,189 1280,172 1256,189 1265,163 1242,146 1270,146"
              fill="rgba(255,255,255,0.45)" stroke="rgba(255,255,255,0.62)" strokeWidth="1.2" />
            <circle cx="1280" cy="160" r="10" fill="rgba(255,255,255,0.35)" />
          </g>

          {/* ── AWARD MEDAL ── */}
          <g className="h-float-c" style={{ transformOrigin: '350px 65px' }}>
            <circle cx="350" cy="65" r="54" fill="none" stroke="rgba(255,255,255,0.28)" strokeWidth="1.5"
              strokeDasharray="9 7"
              style={{ animation:'h-spin-ccw 18s linear infinite', transformOrigin:'350px 65px' }} />
            <circle cx="350" cy="65" r="36" fill="rgba(255,255,255,0.09)" stroke="rgba(255,255,255,0.38)" strokeWidth="1.5" />
            <rect x="342" y="84" width="16" height="28" rx="3" fill="rgba(255,255,255,0.38)" />
            <polygon points="342,84 350,76 358,84" fill="rgba(255,255,255,0.50)" />
            <circle cx="350" cy="58" r="20" fill="rgba(255,255,255,0.18)" stroke="rgba(255,255,255,0.45)" strokeWidth="1.5" />
            <text x="350" y="65" textAnchor="middle" fill="rgba(255,255,255,0.78)" fontSize="18" fontWeight="bold">✓</text>
          </g>

          {/* ── SHIELD CERT ICON ── */}
          <g className="h-float-d" style={{ transformOrigin: '1060px 280px' }}>
            <circle cx="1060" cy="280" r="58" fill="none" stroke="rgba(255,255,255,0.22)" strokeWidth="1.5"
              strokeDasharray="8 7"
              style={{ animation:'h-spin-cw 20s linear infinite', transformOrigin:'1060px 280px' }} />
            <path d="M1060,248 L1088,260 L1088,282 Q1088,304 1060,314 Q1032,304 1032,282 L1032,260 Z"
              fill="rgba(255,255,255,0.16)" stroke="rgba(255,255,255,0.48)" strokeWidth="1.8" />
            <text x="1060" y="290" textAnchor="middle" fill="rgba(255,255,255,0.72)" fontSize="20" fontWeight="bold">✓</text>
          </g>

          {/* ── DOCUMENT ICON ── */}
          <g className="h-float-a" style={{ transformOrigin: '700px 55px', animationDelay:'1s' }}>
            <rect x="670" y="12" width="60" height="78" rx="6"
              fill="rgba(255,255,255,0.13)" stroke="rgba(255,255,255,0.45)" strokeWidth="1.8" />
            <line x1="682" y1="32" x2="718" y2="32" stroke="rgba(255,255,255,0.58)" strokeWidth="2" strokeLinecap="round" />
            <line x1="682" y1="44" x2="718" y2="44" stroke="rgba(255,255,255,0.48)" strokeWidth="2" strokeLinecap="round" />
            <line x1="682" y1="56" x2="710" y2="56" stroke="rgba(255,255,255,0.38)" strokeWidth="2" strokeLinecap="round" />
            <line x1="682" y1="68" x2="704" y2="68" stroke="rgba(255,255,255,0.28)" strokeWidth="2" strokeLinecap="round" />
            <circle cx="700" cy="80" r="12" fill="rgba(255,255,255,0.25)" stroke="rgba(255,255,255,0.55)" strokeWidth="1.2" />
            <text x="700" y="85" textAnchor="middle" fill="rgba(255,255,255,0.75)" fontSize="11">★</text>
          </g>

          {/* ── SPINNING ORBIT RINGS center-left ── */}
          <circle cx="400" cy="210" r="88" fill="none" stroke="rgba(255,255,255,0.24)" strokeWidth="1.8"
            strokeDasharray="15 10"
            style={{ animation:'h-spin-cw 18s linear infinite', transformOrigin:'400px 210px' }} />
          <circle cx="400" cy="210" r="60" fill="none" stroke="rgba(255,255,255,0.18)" strokeWidth="1.2"
            strokeDasharray="9 11"
            style={{ animation:'h-spin-ccw 13s linear infinite', transformOrigin:'400px 210px' }} />

          {/* ── SPINNING ORBIT RINGS center-right ── */}
          <circle cx="1000" cy="110" r="94" fill="none" stroke="rgba(255,255,255,0.24)" strokeWidth="1.8"
            strokeDasharray="15 10"
            style={{ animation:'h-spin-ccw 20s linear infinite', transformOrigin:'1000px 110px' }} />
          <circle cx="1000" cy="110" r="64" fill="none" stroke="rgba(255,255,255,0.18)" strokeWidth="1.2"
            strokeDasharray="9 11"
            style={{ animation:'h-spin-cw 14s linear infinite', transformOrigin:'1000px 110px' }} />

          {/* ── RIBBON BANNERS ── */}
          <g className="h-float-b" style={{ transformOrigin:'270px 300px', animationDelay:'0.5s' }}>
            <rect x="180" y="292" width="180" height="20" rx="5" fill="rgba(255,255,255,0.24)" />
            <polygon points="180,292 166,302 180,312" fill="rgba(255,255,255,0.24)" />
            <polygon points="360,292 374,302 360,312" fill="rgba(255,255,255,0.24)" />
          </g>
          <g className="h-float-a" style={{ transformOrigin:'1150px 38px', animationDelay:'2.5s' }}>
            <rect x="1060" y="30" width="180" height="18" rx="5" fill="rgba(255,255,255,0.20)" />
            <polygon points="1060,30 1046,39 1060,48" fill="rgba(255,255,255,0.20)" />
            <polygon points="1240,30 1254,39 1240,48" fill="rgba(255,255,255,0.20)" />
          </g>

          {/* ── CHECKMARK CIRCLES ── */}
          <g className="h-pulse-op" style={{ transformOrigin:'590px 270px' }}>
            <circle cx="590" cy="270" r="34" fill="none" stroke="rgba(255,255,255,0.42)" strokeWidth="2.2" />
            <polyline points="577,270 586,281 605,258" fill="none" stroke="rgba(255,255,255,0.68)" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
          </g>
          <g className="h-pulse-op2" style={{ transformOrigin:'850px 65px' }}>
            <circle cx="850" cy="65" r="30" fill="none" stroke="rgba(255,255,255,0.38)" strokeWidth="2" />
            <polyline points="838,65 847,75 864,54" fill="none" stroke="rgba(255,255,255,0.62)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          </g>

          {/* ── TWINKLING STARS ── */}
          {[
            [480,25],[540,300],[820,18],[920,310],[1160,200],[205,95],[660,288],[775,45],[1090,320],[300,280]
          ].map(([x,y],i) => (
            <g key={i} className="h-twinkle" style={{ animationDelay:`${i*0.38}s` }}>
              <polygon
                points={`${x},${y-9} ${x+3},${y-3} ${x+10},${y-3} ${x+5},${y+2} ${x+7},${y+10} ${x},${y+6} ${x-7},${y+10} ${x-5},${y+2} ${x-10},${y-3} ${x-3},${y-3}`}
                fill="rgba(255,255,255,0.60)"
              />
            </g>
          ))}

          {/* ── DOTTED ARC PATHS ── */}
          <path d="M 0,280 Q 220,160 450,270" fill="none" stroke="rgba(255,255,255,0.18)" strokeWidth="1.8" strokeDasharray="7 9" />
          <path d="M 950,60 Q 1180,160 1400,90" fill="none" stroke="rgba(255,255,255,0.18)" strokeWidth="1.8" strokeDasharray="7 9" />
          <path d="M 500,0 Q 700,100 900,20" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="1.2" strokeDasharray="5 10" />
        </svg>

        {/* Foreground content */}
        <div className="relative z-10">
          <Award className="h-16 w-16 text-white mx-auto mb-4" />
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Our Certifications</h1>
          <p className="text-lg text-green-50 max-w-2xl mx-auto">
            Showcasing our commitment to quality, sustainability, and industry standards.
            Each certificate reflects our dedication to delivering eco-friendly solutions.
          </p>
        </div>
      </div>

      {/* ══════════════════════════════════════
          STATISTICS SECTION
      ══════════════════════════════════════ */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { Icon: CheckCircle, stat: '100%',  label: 'Biodegradable Products'  },
            { Icon: Award,       stat: '2+',    label: 'Official Certifications' },
            { Icon: FileText,    stat: 'Green', label: 'Industry Category'       },
          ].map(({ Icon, stat, label }, i) => (
            <div key={i} className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-4">
                <Icon className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat}</h3>
              <p className="text-gray-600">{label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ══════════════════════════════════════
          CERTIFICATION CARDS
      ══════════════════════════════════════ */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((cert) => (
            <div key={cert.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-80 bg-gradient-to-br from-green-50 to-emerald-50">
                <img src={cert.image_url} alt={cert.title} className="w-full h-full object-contain p-8" />
                <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {cert.category}
                </div>
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">{cert.title}</h2>
                <p className="text-gray-600 mb-4">{cert.description}</p>
                <div className="border-t border-gray-200 pt-4 mb-4">
                  <div className="flex items-start mb-2">
                    <span className="text-sm font-semibold text-gray-700 w-24">Issued by:</span>
                    <span className="text-sm text-gray-600 flex-1">{cert.issued_by}</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-sm font-semibold text-gray-700 w-24">Date:</span>
                    <span className="text-sm text-gray-600 flex-1">
                      {new Date(cert.issued_at).toLocaleDateString('en-US', { year:'numeric', month:'long', day:'numeric' })}
                    </span>
                  </div>
                </div>
                {cert.pdf_url && (
                  <a href={cert.pdf_url} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors w-full justify-center">
                    <Download className="h-5 w-5 mr-2" />
                    Download Certificate PDF
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ══════════════════════════════════════
          CERTIFIED PRODUCTS
      ══════════════════════════════════════ */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="relative bg-white rounded-2xl shadow-md p-8 md:p-12 overflow-hidden">

          <svg className="absolute inset-0 w-full h-full pointer-events-none"
            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 380" preserveAspectRatio="xMidYMid slice">
            {/* ── LEFT orbital system ── */}
            <circle cx="55" cy="190" r="72"  fill="none" stroke="#22c55e" strokeWidth="1.6" opacity="0.45" className="p-cw" />
            <circle cx="55" cy="190" r="106" fill="none" stroke="#16a34a" strokeWidth="1.2" opacity="0.30" strokeDasharray="14 10" className="p-ccw" />
            <circle cx="55" cy="190" r="140" fill="none" stroke="#22c55e" strokeWidth="1.0" opacity="0.20" strokeDasharray="9 13" className="p-cw2" />
            <circle cx="55" cy="190" r="174" fill="none" stroke="#16a34a" strokeWidth="0.7" opacity="0.15" strokeDasharray="6 16" className="p-ccw2" />
            <circle cx="55" cy="118" r="7" fill="#22c55e" opacity="0.40" className="p-cw"  style={{ transformOrigin:'55px 190px' }} />
            <circle cx="55" cy="84"  r="5" fill="#16a34a" opacity="0.35" className="p-ccw" style={{ transformOrigin:'55px 190px' }} />
            <circle cx="55" cy="50"  r="4" fill="#22c55e" opacity="0.25" className="p-cw2" style={{ transformOrigin:'55px 190px' }} />

            {/* ── RIGHT orbital system ── */}
            <circle cx="1145" cy="190" r="76"  fill="none" stroke="#22c55e" strokeWidth="1.6" opacity="0.45" className="p-ccw" />
            <circle cx="1145" cy="190" r="112" fill="none" stroke="#16a34a" strokeWidth="1.2" opacity="0.30" strokeDasharray="14 10" className="p-cw" />
            <circle cx="1145" cy="190" r="148" fill="none" stroke="#22c55e" strokeWidth="1.0" opacity="0.20" strokeDasharray="9 13" className="p-ccw2" />
            <circle cx="1145" cy="190" r="184" fill="none" stroke="#16a34a" strokeWidth="0.7" opacity="0.15" strokeDasharray="6 16" className="p-cw2" />
            <circle cx="1145" cy="114" r="7" fill="#22c55e" opacity="0.40" className="p-ccw"  style={{ transformOrigin:'1145px 190px' }} />
            <circle cx="1145" cy="78"  r="5" fill="#16a34a" opacity="0.35" className="p-cw"   style={{ transformOrigin:'1145px 190px' }} />
            <circle cx="1145" cy="42"  r="4" fill="#22c55e" opacity="0.25" className="p-ccw2" style={{ transformOrigin:'1145px 190px' }} />

            {/* ── TOP CENTER pulsing rings ── */}
            <circle cx="600" cy="0"   r="82"  fill="none" stroke="#22c55e" strokeWidth="1.2" className="p-puls" />
            <circle cx="600" cy="0"   r="124" fill="none" stroke="#16a34a" strokeWidth="0.8" className="p-puls2" />

            {/* ── BOTTOM CENTER pulsing rings ── */}
            <circle cx="600" cy="380" r="88"  fill="none" stroke="#22c55e" strokeWidth="1.2" className="p-puls2" />
            <circle cx="600" cy="380" r="132" fill="none" stroke="#16a34a" strokeWidth="0.8" className="p-puls"  />

            {/* ── CENTER slow wide rings ── */}
            <circle cx="600" cy="190" r="200" fill="none" stroke="#22c55e" strokeWidth="0.6" opacity="0.15" className="p-cw2" />
            <circle cx="600" cy="190" r="270" fill="none" stroke="#16a34a" strokeWidth="0.5" opacity="0.10" className="p-ccw2" />

            {/* ── CORNER accent rings ── */}
            <circle cx="0"    cy="0"   r="65" fill="none" stroke="#22c55e" strokeWidth="1.0" opacity="0.40" className="p-cw" />
            <circle cx="1200" cy="380" r="70" fill="none" stroke="#22c55e" strokeWidth="1.0" opacity="0.40" className="p-ccw" />
            <circle cx="0"    cy="380" r="58" fill="none" stroke="#16a34a" strokeWidth="0.8" opacity="0.25" className="p-ccw2" />
            <circle cx="1200" cy="0"   r="58" fill="none" stroke="#16a34a" strokeWidth="0.8" opacity="0.25" className="p-cw2" />
          </svg>

          <div className="relative z-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Certified Products</h2>
            <p className="text-gray-700 text-center mb-8 max-w-3xl mx-auto">
              Our certifications cover a wide range of eco-friendly products manufactured with the highest quality standards.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: 'Carry Bags',         qty: '750 Kgs/Day' },
                { name: 'Medical Bed Sheets',  qty: '250 Kgs/Day' },
                { name: 'Shopping Bags',       qty: '150 Kgs/Day' },
                { name: 'Agri-Mulch Films',    qty: '100 Kgs/Day' },
              ].map((p, i) => (
                <div key={i} className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-6 text-center">
                  <h3 className="font-semibold text-gray-900 mb-2">{p.name}</h3>
                  <p className="text-sm text-gray-600">{p.qty}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════
          WHY CERTIFICATIONS MATTER
      ══════════════════════════════════════ */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="bg-gradient-to-br from-green-600 to-emerald-700 rounded-2xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Why Our Certifications Matter</h2>
          <p className="max-w-3xl mx-auto mb-6 text-green-50">
            Our certifications validate our processes, eco-friendly materials, and commitment to sustainability.
            They provide assurance to our clients and partners that we follow industry best practices and maintain the highest quality standards.
          </p>
          <p className="max-w-3xl mx-auto text-green-50">
            Each certificate is a mark of trust and a symbol of our dedication to making the packaging industry greener and safer for the environment.
          </p>
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

            {/* Company Info */}
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

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
                <div className="w-1 h-6 bg-green-300 rounded-full" />Quick Links
              </h4>
              <ul className="space-y-3">
                {[
                  { label: 'Home',          path: '/home'           },
                  { label: 'Products',      path: '/products'       },
                  { label: 'Sustainability', path: '/sustainability'  },
                  { label: 'Community',     path: '/community'      },
                  { label: 'Certificates',  path: '/certifications' },
                  { label: 'Contact',       path: '/contact'        },
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

            {/* Our Products */}
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

            {/* Contact Info */}
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