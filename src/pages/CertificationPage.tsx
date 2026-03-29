import { FileText, Download, Award, CheckCircle, Leaf,Facebook,Twitter,Instagram,Linkedin,MapPin ,Phone ,ArrowRight, Mail,Heart,  } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function CertificationsPage() {
  // Static certifications data based on your PDFs
  const certifications = [
    {
      id: '1',
      title: 'Pollution Control Board Consent Order',
      description: 'Green Category Consent Order for manufacturing compostable carry bags, laundry bags, garbage bags, nursery plant bags, disposal bed sheets, shopping bags, and agri-mulch films.',
      image_url: 'https://res.cloudinary.com/dqir5enfp/image/upload/v1760374001/C-2_moybhz.jpg', // Replace with actual certificate image
      pdf_url: '/certificates/CertiFicate-2.pdf',
      issued_by: 'Andhra Pradesh Pollution Control Board',
      issued_at: '2025-09-25',
      category: 'Environmental Compliance'
    },
    {
      id: '2',
      title: 'Compostability Certification',
      description: 'Certified compostable and biodegradable packaging materials that meet international standards for environmental sustainability.',
      image_url: 'https://res.cloudinary.com/dqir5enfp/image/upload/v1760373933/C-1_ev2cqe.jpg', // Replace with actual certificate image
      pdf_url: '/certificates/certification-1.pdf',
      issued_by: 'International Certification Body',
      issued_at: '2025-01-15',
      category: 'Product Quality'
    }
  ];

  const navigate=useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-green-600 to-emerald-700 py-16 px-4 sm:px-6 lg:px-8 text-center">
        <Award className="h-16 w-16 text-white mx-auto mb-4" />
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
          Our Certifications
        </h1>
        <p className="text-lg text-green-50 max-w-2xl mx-auto">
          Showcasing our commitment to quality, sustainability, and industry standards.  
          Each certificate reflects our dedication to delivering eco-friendly solutions.
        </p>
      </div>

      {/* Statistics Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-4">
              <CheckCircle className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-2">100%</h3>
            <p className="text-gray-600">Biodegradable Products</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-4">
              <Award className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-2">2+</h3>
            <p className="text-gray-600">Official Certifications</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-4">
              <FileText className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-2">Green</h3>
            <p className="text-gray-600">Industry Category</p>
          </div>
        </div>
      </div>

      {/* Certification Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((cert) => (
            <div key={cert.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
              {/* Certificate Image */}
              <div className="relative h-80 bg-gradient-to-br from-green-50 to-emerald-50">
                <img
                  src={cert.image_url}
                  alt={cert.title}
                  className="w-full h-full object-contain p-8"
                />
                <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {cert.category}
                </div>
              </div>
              
              {/* Certificate Details */}
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
                      {new Date(cert.issued_at).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </span>
                  </div>
                </div>
                
                {cert.pdf_url && (
                  <a
                    href={cert.pdf_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors w-full justify-center"
                  >
                    <Download className="h-5 w-5 mr-2" />
                    Download Certificate PDF
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Products Covered Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="bg-white rounded-2xl shadow-md p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Certified Products</h2>
          <p className="text-gray-700 text-center mb-8 max-w-3xl mx-auto">
            Our certifications cover a wide range of eco-friendly products manufactured with the highest quality standards.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-6 text-center">
              <h3 className="font-semibold text-gray-900 mb-2">Carry Bags</h3>
              <p className="text-sm text-gray-600">750 Kgs/Day</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-6 text-center">
              <h3 className="font-semibold text-gray-900 mb-2">Medical Bed Sheets</h3>
              <p className="text-sm text-gray-600">250 Kgs/Day</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-6 text-center">
              <h3 className="font-semibold text-gray-900 mb-2">Shopping Bags</h3>
              <p className="text-sm text-gray-600">150 Kgs/Day</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-6 text-center">
              <h3 className="font-semibold text-gray-900 mb-2">Agri-Mulch Films</h3>
              <p className="text-sm text-gray-600">100 Kgs/Day</p>
            </div>
          </div>
        </div>
      </div>

      {/* Why Our Certifications Matter */}
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