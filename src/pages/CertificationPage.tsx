import { FileText, Download, Award, CheckCircle } from 'lucide-react';

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
    </div>
  );
}