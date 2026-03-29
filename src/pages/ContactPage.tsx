import { useState } from 'react';
import {  Send, CheckCircle, Upload } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { useAuth } from '../contexts/AuthContext';
import {  Leaf,Facebook,Twitter,Instagram,Linkedin,MapPin ,Phone ,ArrowRight, Mail,Heart,  } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface ContactPageProps {
  onNavigate: (page: string) => void;
}

export default function ContactPage({ onNavigate }: ContactPageProps) {
  const { user, profile } = useAuth();
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [file, setFile] = useState<File | null>(null);
  const [fileUrl, setFileUrl] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);
  const navigate=useNavigate();

  const [formData, setFormData] = useState({
    name: profile?.full_name || '',
    email: profile?.email || '',
    phone: profile?.phone || '',
    productType: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!file) return;
    setUploading(true);

    const fileExt = file.name.split('.').pop();
    const fileName = `${Date.now()}.${fileExt}`;
    const filePath = `logos/${fileName}`;

    const { error } = await supabase.storage.from('logos').upload(filePath, file);

    if (error) {
      console.error('Upload error:', error.message);
      setUploading(false);
      return;
    }

    const { publicUrl, error: urlError } = supabase.storage.from('logos').getPublicUrl(filePath);

    if (urlError) {
      console.error('URL error:', urlError.message);
      setUploading(false);
      return;
    }

    setFileUrl(publicUrl);
    setUploading(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('loading');

    try {
      const { error } = await supabase.from('inquiries').insert({
        user_id: user?.id || null,
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        product_type: formData.productType,
        message: formData.message,
        logo_url: fileUrl || null, // Save uploaded logo URL
        status: 'new',
      });

      if (error) throw error;

      setFormStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        productType: '',
        message: '',
      });
      setFile(null);
      setFileUrl(null);

      setTimeout(() => setFormStatus('idle'), 3000);
    } catch (error) {
      console.error('Error submitting inquiry:', error);
      setFormStatus('error');
      setTimeout(() => setFormStatus('idle'), 3000);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-br from-green-600 to-emerald-700 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Get In Touch</h1>
          <p className="text-lg text-green-50 max-w-2xl mx-auto">
            Have a question or need a custom solution? We're here to help!
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Form Section */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>

              {formStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                  <div>
                    <p className="text-green-800 font-medium">Message sent successfully!</p>
                    <p className="text-green-700 text-sm">We'll get back to you shortly.</p>
                  </div>
                </div>
              )}

              {formStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-800">Failed to send message. Please try again.</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Your Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                      placeholder="+91 98765 43210"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Product Type</label>
                    <select
                      name="productType"
                      value={formData.productType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    >
                      <option value="">Select a product type</option>
                      <option value="Carry Bags">Carry Bags</option>
                      <option value="Shopping Bags">Shopping Bags</option>
                      <option value="Garbage Bags">Garbage Bags</option>
                      <option value="Custom Bags">Custom Bags</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Tell us about your requirements..."
                  />
                </div>

                {/* Logo Upload */}
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <div className="flex items-center space-x-3">
                    <Upload className="h-5 w-5 text-green-600" />
                    <input type="file" onChange={handleFileChange} />
                    <button
                      type="button"
                      onClick={handleUpload}
                      disabled={!file || uploading}
                      className="px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700 disabled:opacity-50"
                    >
                      {uploading ? 'Uploading...' : 'Upload Logo'}
                    </button>
                  </div>
                  {fileUrl && (
                    <p className="mt-2 text-sm text-green-700">
                      Uploaded successfully! <a href={fileUrl} target="_blank" rel="noreferrer">View</a>
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={formStatus === 'loading'}
                  className="w-full flex items-center justify-center px-6 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {formStatus === 'loading' ? (
                    'Sending...'
                  ) : (
                    <>
                      <Send className="h-5 w-5 mr-2" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Sidebar Section */}
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-bold text-gray-900               mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Mail className="h-5 w-5 text-green-600 mr-3 mt-1" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">Email</p>
                    <a href="mailto:bagasoilcompostable@gmail.com" className="text-sm text-gray-600 hover:text-green-600">
                      bagasoilcompostable@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="h-5 w-5 text-green-600 mr-3 mt-1" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">Phone</p>
                    <a href="tel:+919952482228" className="text-sm text-gray-600 hover:text-green-600">
                      +91 9952482228
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-green-600 mr-3 mt-1" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">Address</p>
                    <p className="text-sm text-gray-600">
                      Tadepalligudem<br />
                      Andhra Pradesh, India
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-600 to-emerald-700 rounded-lg p-6 text-white">
              <h3 className="text-lg font-bold mb-4">Business Hours</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Quick Response Time</h3>
              <p className="text-sm text-gray-700 mb-4">
                We typically respond to inquiries within 24 hours during business days.
              </p>
              <p className="text-sm text-gray-700">
                For urgent matters, please call us directly.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Small Footer */}
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

