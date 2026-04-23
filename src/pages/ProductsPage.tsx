// import { useEffect, useState } from 'react';
// import { Search, Package } from 'lucide-react';
// import { supabase } from '../lib/supabase';
// import {  Leaf,Facebook,Twitter,Instagram,Linkedin,MapPin ,Phone ,ArrowRight, Mail,Heart,  } from 'lucide-react';
// import { useNavigate } from 'react-router-dom';

// interface Product {
//   id: string;
//   name: string;
//   description: string;
//   base_price: number;
//   images: string[];
//   sizes: Array<{ name: string; price: number }>;
//   colors: string[];
//   biodegradable_grade: string;
//   features: string[];
//   customizable: boolean;
//   in_stock: boolean;
//   min_order_quantity: number;
// }

// interface ProductsPageProps {
//   onNavigate: (page: string) => void;
// }

// export default function ProductsPage({ onNavigate }: ProductsPageProps) {
//   const [products, setProducts] = useState<Product[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
//   const navigate=useNavigate();

//   useEffect(() => {
//     loadProducts();
//   }, []);

//   const loadProducts = async () => {
//     try {
//       const { data, error } = await supabase
//         .from('products')
//         .select('*')
//         .eq('in_stock', true)
//         .order('created_at', { ascending: false });

//       if (error) throw error;
//       setProducts(data || []);
//     } catch (error) {
//       console.error('Error loading products:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const filteredProducts = products.filter((product) =>
//     product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//     product.description?.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   if (loading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <div className="text-center">
//           <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto mb-4"></div>
//           <p className="text-gray-600">Loading products...</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <div className="bg-gradient-to-br from-green-600 to-emerald-700 py-16 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-7xl mx-auto text-center">
//           <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
//             Our Products
//           </h1>
//           <p className="text-lg text-green-50 max-w-2xl mx-auto">
//             Explore our range of eco-friendly, biodegradable packaging solutions
//           </p>
//         </div>
//       </div>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         <div className="mb-8">
//           <div className="relative max-w-md">
//             <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
//             <input
//               type="text"
//               placeholder="Search products..."
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
//             />
//           </div>
//         </div>

//         {filteredProducts.length === 0 ? (
//           <div className="text-center py-16">
//             <Package className="h-16 w-16 text-gray-400 mx-auto mb-4" />
//             <h3 className="text-xl font-semibold text-gray-900 mb-2">No products found</h3>
//             <p className="text-gray-600 mb-6">
//               {searchQuery ? 'Try adjusting your search' : 'Products will be available soon'}
//             </p>
//             <button
//               onClick={() => onNavigate('contact')}
//               className="px-6 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700"
//             >
//               Contact Us for Custom Solutions
//             </button>
//           </div>
//         ) : (
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {filteredProducts.map((product) => (
//               <div
//                 key={product.id}
//                 className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden cursor-pointer"
//                 onClick={() => setSelectedProduct(product)}
//               >
//                 <div className="aspect-w-16 aspect-h-9 bg-gray-200">
//                   {product.images && product.images.length > 0 ? (
//                     <img
//                       src={product.images[0]}
//                       alt={product.name}
//                       className="w-full h-48 object-cover"
//                     />
//                   ) : (
//                     <div className="w-full h-48 flex items-center justify-center bg-gradient-to-br from-green-50 to-emerald-100">
//                       <Package className="h-16 w-16 text-green-600" />
//                     </div>
//                   )}
//                 </div>
//                 <div className="p-6">
//                   <div className="flex items-center justify-between mb-2">
//                     <h3 className="text-lg font-bold text-gray-900">{product.name}</h3>
//                     {product.customizable && (
//                       <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full font-medium">
//                         Customizable
//                       </span>
//                     )}
//                   </div>
//                   <p className="text-gray-600 text-sm mb-4 line-clamp-2">
//                     {product.description}
//                   </p>
//                   {product.biodegradable_grade && (
//                     <div className="mb-4">
//                       <span className="inline-flex items-center px-3 py-1 bg-emerald-50 text-emerald-700 text-xs rounded-full font-medium">
//                         {product.biodegradable_grade}
//                       </span>
//                     </div>
//                   )}

//                   {/* ✅ Request button moved left and full width on mobile */}
//                   <div className="flex items-center justify-start">
//                     <button
//                       onClick={(e) => {
//                         e.stopPropagation();
//                         onNavigate('contact');
//                       }}
//                       className="w-full sm:w-auto px-4 py-2 bg-green-600 text-white rounded-lg text-sm font-medium hover:bg-green-700"
//                     >
//                       Request Quote
//                     </button>
//                   </div>

//                   {product.min_order_quantity > 1 && (
//                     <p className="text-xs text-gray-500 mt-2">
//                       Min. order: {product.min_order_quantity} units
//                     </p>
//                   )}
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>

//       {selectedProduct && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
//           <div className="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto">
//             <div className="p-6">
//               <div className="flex items-center justify-between mb-6">
//                 <h2 className="text-2xl font-bold text-gray-900">{selectedProduct.name}</h2>
//                 <button
//                   onClick={() => setSelectedProduct(null)}
//                   className="text-gray-400 hover:text-gray-600"
//                 >
//                   ✕
//                 </button>
//               </div>

//               {selectedProduct.images && selectedProduct.images.length > 0 ? (
//                 <img
//                   src={selectedProduct.images[0]}
//                   alt={selectedProduct.name}
//                   className="w-full h-64 object-cover rounded-lg mb-6"
//                 />
//               ) : (
//                 <div className="w-full h-64 flex items-center justify-center bg-gradient-to-br from-green-50 to-emerald-100 rounded-lg mb-6">
//                   <Package className="h-24 w-24 text-green-600" />
//                 </div>
//               )}

//               <p className="text-gray-700 mb-6">{selectedProduct.description}</p>

//               {selectedProduct.features && selectedProduct.features.length > 0 && (
//                 <div className="mb-6">
//                   <h3 className="font-bold text-gray-900 mb-3">Features</h3>
//                   <ul className="space-y-2">
//                     {selectedProduct.features.map((feature, idx) => (
//                       <li key={idx} className="flex items-start">
//                         <span className="text-green-600 mr-2">✓</span>
//                         <span className="text-gray-700">{feature}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               )}

//               {selectedProduct.sizes && selectedProduct.sizes.length > 0 && (
//                 <div className="mb-6">
//                   <h3 className="font-bold text-gray-900 mb-3">Available Sizes</h3>
//                   <div className="flex flex-wrap gap-2">
//                     {selectedProduct.sizes.map((size, idx) => (
//                       <div key={idx} className="px-4 py-2 bg-gray-100 rounded-lg">
//                         <span className="font-medium">{size.name}</span>
//                         {size.price > 0 && (
//                           <span className="text-sm text-gray-600 ml-2">₹{size.price}</span>
//                         )}
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               )}

//               {selectedProduct.colors && selectedProduct.colors.length > 0 && (
//                 <div className="mb-6">
//                   <h3 className="font-bold text-gray-900 mb-3">Available Colors</h3>
//                   <div className="flex flex-wrap gap-2">
//                     {selectedProduct.colors.map((color, idx) => (
//                       <span key={idx} className="px-4 py-2 bg-gray-100 rounded-lg">
//                         {color}
//                       </span>
//                     ))}
//                   </div>
//                 </div>
//               )}

//               {/* ✅ Full-width on mobile */}
//               <div className="flex items-center justify-start pt-6 border-t">
//                 <button
//                   onClick={() => {
//                     setSelectedProduct(null);
//                     onNavigate('contact');
//                   }}
//                   className="w-full sm:w-auto px-6 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700"
//                 >
//                   Request Custom Quote
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

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


import { useEffect, useState } from 'react';
import { Search, Package } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { Leaf, Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, ArrowRight, Mail, Heart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const DEMO_PRODUCTS = [
  {
    id: '1', name: 'Standard Carry Bag', description: 'Lightweight biodegradable carry bag for everyday use. Perfect for grocery stores and retail shops.',
    base_price: 150, images: ['https://res.cloudinary.com/dqir5enfp/image/upload/v1760362990/WhatsApp_Image_2025-10-13_at_17.48.44_abebdf48_vxfjth.jpg'],
    sizes: [{ name: 'Small', price: 100 }, { name: 'Medium', price: 150 }, { name: 'Large', price: 200 }],
    colors: ['White', 'Green', 'Brown'], biodegradable_grade: 'Grade A Compostable',
    features: ['100% Biodegradable', 'Waterproof Coating', 'Custom Logo Available'],
    customizable: true, in_stock: true, min_order_quantity: 100, category: 'Carry Bags'
  },
  {
    id: '2', name: 'Heavy Duty Carry Bag', description: 'Extra strong carry bags for heavier loads. Ideal for supermarkets and bulk shopping.',
    base_price: 200, images: ['https://res.cloudinary.com/dqir5enfp/image/upload/v1776930082/b1_r1j5x1.avif'],
    sizes: [{ name: 'Medium', price: 180 }, { name: 'Large', price: 220 }, { name: 'XL', price: 280 }],
    colors: ['White', 'Black', 'Blue'], biodegradable_grade: 'Grade A Compostable',
    features: ['Heavy Duty', 'Tear Resistant', 'Eco Certified'],
    customizable: true, in_stock: true, min_order_quantity: 50, category: 'Carry Bags'
  },
  {
    id: '3', name: 'Retail Shopping Bag', description: 'Premium shopping bags for retail stores with glossy finish and strong handles.',
    base_price: 250, images: ['https://res.cloudinary.com/dqir5enfp/image/upload/v1776930097/b2_vu9riw.jpg'],
    sizes: [{ name: 'Small', price: 200 }, { name: 'Medium', price: 250 }, { name: 'Large', price: 320 }],
    colors: ['White', 'Kraft Brown', 'Custom'], biodegradable_grade: 'Grade A Compostable',
    features: ['Premium Finish', 'Strong Handles', 'Brand Printing'],
    customizable: true, in_stock: true, min_order_quantity: 50, category: 'Shopping Bags'
  },
  {
    id: '4', name: 'Luxury Shopping Bag', description: 'High-end biodegradable bags for boutiques, jewelry stores and premium brands.',
    base_price: 400, images: ['https://res.cloudinary.com/dqir5enfp/image/upload/v1776930109/b3_l5zfdf.jpg'],
    sizes: [{ name: 'Small', price: 350 }, { name: 'Medium', price: 400 }, { name: 'Large', price: 500 }],
    colors: ['Black', 'White', 'Gold'], biodegradable_grade: 'Grade A Compostable',
    features: ['Luxury Finish', 'Ribbon Handles', 'Gift Ready'],
    customizable: true, in_stock: true, min_order_quantity: 25, category: 'Shopping Bags'
  },
  {
    id: '5', name: 'Kitchen Garbage Bag', description: 'Compostable kitchen garbage bags that break down naturally within 180 days.',
    base_price: 120, images: ['https://res.cloudinary.com/dqir5enfp/image/upload/v1776930122/b4_qm24be.jpg'],
    sizes: [{ name: 'Small (5L)', price: 80 }, { name: 'Medium (10L)', price: 120 }, { name: 'Large (20L)', price: 180 }],
    colors: ['Green', 'Black'], biodegradable_grade: 'Grade B Compostable',
    features: ['Leak Proof', 'Compostable in 180 days', 'Odor Resistant'],
    customizable: false, in_stock: true, min_order_quantity: 200, category: 'Garbage Bags'
  },
  {
    id: '6', name: 'Industrial Waste Bag', description: 'Large capacity biodegradable bags for industrial and commercial waste management.',
    base_price: 300, images: ['https://res.cloudinary.com/dqir5enfp/image/upload/v1776930135/b5_txtgkp.jpg'],
    sizes: [{ name: 'Large (50L)', price: 250 }, { name: 'XL (100L)', price: 350 }],
    colors: ['Black', 'Green'], biodegradable_grade: 'Grade B Compostable',
    features: ['High Capacity', 'Puncture Resistant', 'Industrial Grade'],
    customizable: false, in_stock: true, min_order_quantity: 100, category: 'Garbage Bags'
  },
  {
    id: '7', name: 'Custom Branded Bag', description: 'Fully customizable bags with your brand logo, colors and design. Perfect for corporate gifting.',
    base_price: 500, images: ['https://res.cloudinary.com/dqir5enfp/image/upload/v1776930147/b6_xajjgf.jpg'],
    sizes: [{ name: 'Any Size', price: 0 }],
    colors: ['Any Color'], biodegradable_grade: 'Grade A Compostable',
    features: ['Custom Logo', 'Any Color', 'Any Size', 'Free Design Support', 'Sample Available'],
    customizable: true, in_stock: true, min_order_quantity: 500, category: 'Custom Bags'
  },
  {
    id: '8', name: 'Event & Gift Bag', description: 'Custom biodegradable bags for events, weddings, corporate functions and gifting.',
    base_price: 350, images: ['https://res.cloudinary.com/dqir5enfp/image/upload/v1776930159/b7_aow9ur.jpg'],
    sizes: [{ name: 'Small', price: 300 }, { name: 'Medium', price: 380 }, { name: 'Large', price: 450 }],
    colors: ['Custom'], biodegradable_grade: 'Grade A Compostable',
    features: ['Event Branding', 'Premium Feel', 'Bulk Discounts'],
    customizable: true, in_stock: true, min_order_quantity: 100, category: 'Custom Bags'
  },
  {
    id: '9', name: 'Bulk Carry Bag Pack', description: 'Economical bulk packs of carry bags for distributors and wholesalers.',
    base_price: 5000, images: ['https://res.cloudinary.com/dqir5enfp/image/upload/v1776930172/b8_xpnxid.jpg'],
    sizes: [{ name: '500 pcs', price: 4500 }, { name: '1000 pcs', price: 8000 }, { name: '5000 pcs', price: 35000 }],
    colors: ['White', 'Brown'], biodegradable_grade: 'Grade A Compostable',
    features: ['Wholesale Price', 'Bulk Discount', 'Fast Delivery'],
    customizable: false, in_stock: true, min_order_quantity: 500, category: 'Bulk Orders'
  },
  {
    id: '10', name: 'Bulk Shopping Bag Pack', description: 'Wholesale shopping bags for retailers. Best price per unit on large orders.',
    base_price: 8000, images: ['https://res.cloudinary.com/dqir5enfp/image/upload/v1776930394/b9_hg2fnr.jpg'],
    sizes: [{ name: '500 pcs', price: 7500 }, { name: '1000 pcs', price: 14000 }],
    colors: ['White', 'Kraft'], biodegradable_grade: 'Grade A Compostable',
    features: ['Wholesale Rate', 'GST Invoice', 'Pan India Delivery'],
    customizable: false, in_stock: true, min_order_quantity: 500, category: 'Bulk Orders'
  },
];

const CATEGORIES = ['All', 'Carry Bags', 'Shopping Bags', 'Garbage Bags', 'Custom Bags', 'Bulk Orders'];

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .eq('in_stock', true)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setProducts(data && data.length > 0 ? data : DEMO_PRODUCTS);
    } catch (error) {
      console.error('Error loading products:', error);
      setProducts(DEMO_PRODUCTS);
    } finally {
      setLoading(false);
    }
  };

  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description?.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading products...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">

      {/* ── Global Keyframes ── */}
      <style>{`
        /* Ken-Burns slow zoom on the bg image */
        @keyframes kb-zoom {
          0%   { transform: scale(1.08) translate(0px, 0px); }
          33%  { transform: scale(1.13) translate(-8px, -4px); }
          66%  { transform: scale(1.10) translate(6px,  6px); }
          100% { transform: scale(1.08) translate(0px, 0px); }
        }
        .kb-zoom { animation: kb-zoom 18s ease-in-out infinite; }

        /* Spinning rings */
        @keyframes spin-cw  { from { transform: rotate(0deg);    } to { transform: rotate(360deg);  } }
        @keyframes spin-ccw { from { transform: rotate(0deg);    } to { transform: rotate(-360deg); } }

        /* Floating badge / icon */
        @keyframes float-up { 0%,100%{transform:translateY(0) rotate(0deg) scale(1)} 50%{transform:translateY(-20px) rotate(6deg) scale(1.04)} }
        @keyframes float-dn { 0%,100%{transform:translateY(0) rotate(0deg) scale(1)} 50%{transform:translateY(16px) rotate(-5deg) scale(0.97)} }

        /* Pulse opacity */
        @keyframes pulse-op { 0%,100%{opacity:0.30} 50%{opacity:0.35} }

        /* Twinkle */
        @keyframes twinkle  { 0%,100%{opacity:0.15} 50%{opacity:0.30} }

        /* Shimmer text highlight */
        @keyframes shimmer  { 0%{background-position:200% center} 100%{background-position:-200% center} }

        /* Glowing border pulse on hero badge */
        @keyframes glow-ring { 0%,100%{box-shadow:0 0 0 0 rgba(134,239,172,0.4)} 50%{box-shadow:0 0 0 10px rgba(134,239,172,0)} }

        .h-float-a { animation: float-up 7s ease-in-out infinite; }
        .h-float-b { animation: float-dn 9s ease-in-out infinite; }
        .h-float-c { animation: float-up 6s ease-in-out infinite 1.5s; }
        .h-float-d { animation: float-dn 8s ease-in-out infinite 3s; }
        .h-pulse    { animation: pulse-op 4s ease-in-out infinite; }
        .h-pulse2   { animation: pulse-op 5s ease-in-out infinite 1s; }
        .h-twinkle  { animation: twinkle  2.5s ease-in-out infinite; }

        .shimmer-text {
          background: linear-gradient(90deg, #fff 0%, #bbf7d0 40%, #fff 60%, #bbf7d0 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 4s linear infinite;
        }

        .hero-badge { animation: glow-ring 2.5s ease-in-out infinite; }

        /* Scrollbar hide for category pills */
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      {/* ══════════════════════════════════════
          HERO SECTION
      ══════════════════════════════════════ */}
      <div className="relative overflow-hidden" style={{ minHeight: '360px' }}>

        {/* 1. Background image — Ken Burns slow zoom + blur + dim */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div
            className="kb-zoom absolute inset-0"
            style={{
              backgroundImage: 'url(/biodegradable-product-images.webp)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'blur(3px) brightness(0.45)',
              transform: 'scale(1.08)',
            }}
          />
        </div>

        {/* 2. SVG animated decorations layer */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1400 360"
          preserveAspectRatio="xMidYMid slice"
          style={{ zIndex: 1 }}
        >
          {/* ── LEFT BADGE SEAL ── */}
          <g className="h-float-a" style={{ transformOrigin: '115px 180px' }}>
            <circle cx="115" cy="180" r="110" fill="none" stroke="rgba(255,255,255,0.28)" strokeWidth="1.8"
              strokeDasharray="14 9"
              style={{ animation: 'spin-cw 16s linear infinite', transformOrigin: '115px 180px' }} />
            <circle cx="115" cy="180" r="82" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.40)" strokeWidth="1.8"
              style={{ animation: 'spin-ccw 11s linear infinite', transformOrigin: '115px 180px' }} />
            <circle cx="115" cy="180" r="56" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.32)" strokeWidth="1.4" />
            <polygon points="115,138 125,164 156,164 132,181 141,207 115,190 89,207 98,181 74,164 105,164"
              fill="rgba(255,255,255,0.45)" stroke="rgba(255,255,255,0.62)" strokeWidth="1.2" />
            <circle cx="115" cy="180" r="11" fill="rgba(255,255,255,0.35)" />
          </g>

          {/* ── RIGHT BADGE SEAL ── */}
          <g className="h-float-b" style={{ transformOrigin: '1285px 170px' }}>
            <circle cx="1285" cy="170" r="104" fill="none" stroke="rgba(255,255,255,0.26)" strokeWidth="1.8"
              strokeDasharray="12 8"
              style={{ animation: 'spin-ccw 14s linear infinite', transformOrigin: '1285px 170px' }} />
            <circle cx="1285" cy="170" r="76" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.38)" strokeWidth="1.8"
              style={{ animation: 'spin-cw 10s linear infinite', transformOrigin: '1285px 170px' }} />
            <circle cx="1285" cy="170" r="52" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.30)" strokeWidth="1.4" />
            <polygon points="1285,130 1295,155 1324,155 1301,172 1310,198 1285,181 1260,198 1269,172 1246,155 1275,155"
              fill="rgba(255,255,255,0.42)" stroke="rgba(255,255,255,0.60)" strokeWidth="1.2" />
            <circle cx="1285" cy="170" r="10" fill="rgba(255,255,255,0.32)" />
          </g>

          {/* ── LEAF / ECO ICON — top left area ── */}
          <g className="h-float-c" style={{ transformOrigin: '340px 70px' }}>
            <circle cx="340" cy="70" r="55" fill="none" stroke="rgba(255,255,255,0.26)" strokeWidth="1.4"
              strokeDasharray="9 7"
              style={{ animation: 'spin-ccw 18s linear infinite', transformOrigin: '340px 70px' }} />
            <circle cx="340" cy="70" r="36" fill="rgba(255,255,255,0.09)" stroke="rgba(255,255,255,0.36)" strokeWidth="1.4" />
            {/* leaf shape */}
            <path d="M340,48 Q362,55 358,78 Q340,82 330,65 Q322,50 340,48 Z"
              fill="rgba(255,255,255,0.42)" stroke="rgba(255,255,255,0.60)" strokeWidth="1.2" />
            <line x1="340" y1="48" x2="340" y2="82" stroke="rgba(255,255,255,0.55)" strokeWidth="1.2" />
          </g>

          {/* ── SHOPPING BAG ICON — top right area ── */}
          <g className="h-float-d" style={{ transformOrigin: '1060px 285px' }}>
            <circle cx="1060" cy="285" r="58" fill="none" stroke="rgba(255,255,255,0.22)" strokeWidth="1.4"
              strokeDasharray="8 7"
              style={{ animation: 'spin-cw 20s linear infinite', transformOrigin: '1060px 285px' }} />
            {/* bag shape */}
            <rect x="1040" y="268" width="40" height="32" rx="4"
              fill="rgba(255,255,255,0.18)" stroke="rgba(255,255,255,0.48)" strokeWidth="1.8" />
            <path d="M1048,268 Q1048,258 1060,258 Q1072,258 1072,268"
              fill="none" stroke="rgba(255,255,255,0.55)" strokeWidth="2" strokeLinecap="round" />
          </g>

          {/* ── RECYCLING SYMBOL — top center ── */}
          <g className="h-float-a" style={{ transformOrigin: '700px 52px', animationDelay: '1s' }}>
            <circle cx="700" cy="52" r="42" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.38)" strokeWidth="1.6"
              style={{ animation: 'spin-cw 22s linear infinite', transformOrigin: '700px 52px' }} />
            <circle cx="700" cy="52" r="28" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.28)" strokeWidth="1.2" />
            <text x="700" y="59" textAnchor="middle" fill="rgba(255,255,255,0.72)" fontSize="22">♻</text>
          </g>

          {/* ── ORBIT RINGS — center-left ── */}
          <circle cx="390" cy="220" r="90" fill="none" stroke="rgba(255,255,255,0.22)" strokeWidth="1.6"
            strokeDasharray="15 10"
            style={{ animation: 'spin-cw 18s linear infinite', transformOrigin: '390px 220px' }} />
          <circle cx="390" cy="220" r="62" fill="none" stroke="rgba(255,255,255,0.16)" strokeWidth="1.1"
            strokeDasharray="9 11"
            style={{ animation: 'spin-ccw 13s linear infinite', transformOrigin: '390px 220px' }} />

          {/* ── ORBIT RINGS — center-right ── */}
          <circle cx="1010" cy="115" r="95" fill="none" stroke="rgba(255,255,255,0.22)" strokeWidth="1.6"
            strokeDasharray="15 10"
            style={{ animation: 'spin-ccw 20s linear infinite', transformOrigin: '1010px 115px' }} />
          <circle cx="1010" cy="115" r="65" fill="none" stroke="rgba(255,255,255,0.16)" strokeWidth="1.1"
            strokeDasharray="9 11"
            style={{ animation: 'spin-cw 14s linear infinite', transformOrigin: '1010px 115px' }} />

          {/* ── RIBBON BANNERS ── */}
          <g className="h-float-b" style={{ transformOrigin: '265px 305px', animationDelay: '0.5s' }}>
            <rect x="175" y="297" width="180" height="18" rx="5" fill="rgba(255,255,255,0.22)" />
            <polygon points="175,297 161,306 175,315" fill="rgba(255,255,255,0.22)" />
            <polygon points="355,297 369,306 355,315" fill="rgba(255,255,255,0.22)" />
          </g>
          <g className="h-float-a" style={{ transformOrigin: '1148px 40px', animationDelay: '2.5s' }}>
            <rect x="1058" y="32" width="180" height="18" rx="5" fill="rgba(255,255,255,0.18)" />
            <polygon points="1058,32 1044,41 1058,50" fill="rgba(255,255,255,0.18)" />
            <polygon points="1238,32 1252,41 1238,50" fill="rgba(255,255,255,0.18)" />
          </g>

          {/* ── CHECKMARK CIRCLES ── */}
          <g className="h-pulse" style={{ transformOrigin: '585px 275px' }}>
            <circle cx="585" cy="275" r="34" fill="none" stroke="rgba(255,255,255,0.42)" strokeWidth="2.2" />
            <polyline points="572,275 581,286 600,263" fill="none" stroke="rgba(255,255,255,0.68)"
              strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
          </g>
          <g className="h-pulse2" style={{ transformOrigin: '848px 68px' }}>
            <circle cx="848" cy="68" r="30" fill="none" stroke="rgba(255,255,255,0.36)" strokeWidth="2" />
            <polyline points="836,68 845,78 862,57" fill="none" stroke="rgba(255,255,255,0.62)"
              strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          </g>

          {/* ── TWINKLING STARS ── */}
          {[
            [478, 28], [538, 302], [818, 22], [918, 312], [1158, 205],
            [203, 98], [658, 290], [773, 48], [1088, 322], [298, 282]
          ].map(([x, y], i) => (
            <g key={i} className="h-twinkle" style={{ animationDelay: `${i * 0.38}s` }}>
              <polygon
                points={`${x},${y - 9} ${x + 3},${y - 3} ${x + 10},${y - 3} ${x + 5},${y + 2} ${x + 7},${y + 10} ${x},${y + 6} ${x - 7},${y + 10} ${x - 5},${y + 2} ${x - 10},${y - 3} ${x - 3},${y - 3}`}
                fill="rgba(255,255,255,0.58)"
              />
            </g>
          ))}

          {/* ── DOTTED ARC PATHS ── */}
          <path d="M 0,285 Q 220,165 448,272" fill="none" stroke="rgba(255,255,255,0.16)" strokeWidth="1.8" strokeDasharray="7 9" />
          <path d="M 952,65 Q 1182,162 1400,95" fill="none" stroke="rgba(255,255,255,0.16)" strokeWidth="1.8" strokeDasharray="7 9" />
          <path d="M 498,5 Q 700,102 902,24" fill="none" stroke="rgba(255,255,255,0.10)" strokeWidth="1.2" strokeDasharray="5 10" />

          {/* ── PARTICLE DOTS scattered ── */}
          {[
            [220, 50, 3], [480, 310, 4], [760, 15, 3], [960, 340, 4],
            [1120, 60, 3], [1320, 240, 4], [560, 180, 3], [155, 265, 4]
          ].map(([x, y, r], i) => (
            <circle key={i} cx={x} cy={y} r={r} fill="rgba(255,255,255,0.45)"
              style={{ animation: `pulse-op ${3 + i * 0.4}s ease-in-out infinite`, animationDelay: `${i * 0.5}s` }} />
          ))}
        </svg>

        {/* 3. Foreground content */}
        <div className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 text-center">
          {/* Eco badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-5 hero-badge">
            <span className="text-green-300 text-sm">🌿</span>
            <span className="text-white/90 text-sm font-medium tracking-wide">100% Biodegradable Products</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold mb-4 shimmer-text">
            Our Products
          </h1>
          <p className="text-lg text-green-50/90 max-w-2xl mx-auto">
            Explore our range of eco-friendly, biodegradable packaging solutions
          </p>
        </div>
      </div>

      {/* ══════════════════════════════════════
          MAIN CONTENT
      ══════════════════════════════════════ */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Search */}
        <div className="mb-6">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex gap-2 overflow-x-auto pb-4 mb-8 scrollbar-hide">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`flex-shrink-0 px-5 py-2.5 rounded-full font-medium text-sm transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-green-600 text-white shadow-md scale-105'
                  : 'bg-white text-gray-600 border border-gray-200 hover:border-green-400 hover:text-green-600'
              }`}
            >
              {category}
              <span className={`ml-2 px-1.5 py-0.5 rounded-full text-xs ${
                selectedCategory === category ? 'bg-green-500 text-white' : 'bg-gray-100 text-gray-500'
              }`}>
                {category === 'All' ? products.length : products.filter(p => p.category === category).length}
              </span>
            </button>
          ))}
        </div>

        {/* Category Title */}
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-800">
            {selectedCategory === 'All' ? 'All Products' : selectedCategory}
            <span className="ml-2 text-sm font-normal text-gray-500">
              ({filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'})
            </span>
          </h2>
        </div>

        {filteredProducts.length === 0 ? (
          <div className="text-center py-16">
            <Package className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No products found</h3>
            <p className="text-gray-600 mb-6">
              {searchQuery ? 'Try adjusting your search' : 'Products will be available soon'}
            </p>
            <button
              onClick={() => navigate('/contact')}
              className="px-6 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700"
            >
              Contact Us for Custom Solutions
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer border border-gray-100 hover:border-green-200"
                onClick={() => { setSelectedProduct(product); setActiveImageIndex(0); }}
              >
                <div className="relative">
                  {product.images && product.images.length > 0 ? (
                    <img src={product.images[0]} alt={product.name} className="w-full h-52 object-cover" />
                  ) : (
                    <div className="w-full h-52 flex items-center justify-center bg-gradient-to-br from-green-50 to-emerald-100">
                      <Package className="h-16 w-16 text-green-600" />
                    </div>
                  )}
                  {product.category && (
                    <span className="absolute top-3 left-3 px-2 py-1 bg-white/90 backdrop-blur-sm text-green-700 text-xs rounded-full font-medium shadow-sm">
                      {product.category}
                    </span>
                  )}
                  {product.customizable && (
                    <span className="absolute top-3 right-3 px-2 py-1 bg-green-600 text-white text-xs rounded-full font-medium">
                      Customizable
                    </span>
                  )}
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{product.name}</h3>
                  <p className="text-gray-500 text-sm mb-3 line-clamp-2">{product.description}</p>
                  {product.biodegradable_grade && (
                    <span className="inline-flex items-center px-2.5 py-1 bg-emerald-50 text-emerald-700 text-xs rounded-full font-medium mb-3">
                      🌿 {product.biodegradable_grade}
                    </span>
                  )}
                  <div className="flex items-center justify-between mt-3">
                    <div>
                      <p className="text-xs text-gray-400">Starting from</p>
                      <p className="text-green-700 font-bold text-lg">₹{product.base_price}</p>
                    </div>
                    <button
                      onClick={(e) => { e.stopPropagation(); navigate('/contact'); }}
                      className="px-4 py-2 bg-green-600 text-white rounded-lg text-sm font-medium hover:bg-green-700 transition-colors"
                    >
                      Get Quote
                    </button>
                  </div>
                  {product.min_order_quantity > 1 && (
                    <p className="text-xs text-gray-400 mt-2">Min. order: {product.min_order_quantity} units</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  {selectedProduct.category && (
                    <span className="text-xs text-green-600 font-medium uppercase tracking-wide">
                      {selectedProduct.category}
                    </span>
                  )}
                  <h2 className="text-2xl font-bold text-gray-900">{selectedProduct.name}</h2>
                </div>
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="p-2 rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  ✕
                </button>
              </div>

              {selectedProduct.images && selectedProduct.images.length > 0 ? (
                <div>
                  <img
                    src={selectedProduct.images[activeImageIndex]}
                    alt={selectedProduct.name}
                    className="w-full h-64 object-cover rounded-xl mb-3"
                  />
                  {selectedProduct.images.length > 1 && (
                    <div className="flex gap-2 mb-4">
                      {selectedProduct.images.map((img, idx) => (
                        <img
                          key={idx} src={img} alt=""
                          onClick={() => setActiveImageIndex(idx)}
                          className={`h-16 w-16 object-cover rounded-lg cursor-pointer border-2 transition-all ${
                            activeImageIndex === idx ? 'border-green-500' : 'border-transparent'
                          }`}
                        />
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <div className="w-full h-64 flex items-center justify-center bg-gradient-to-br from-green-50 to-emerald-100 rounded-xl mb-6">
                  <Package className="h-24 w-24 text-green-600" />
                </div>
              )}

              <p className="text-gray-700 mb-6">{selectedProduct.description}</p>

              {selectedProduct.features && selectedProduct.features.length > 0 && (
                <div className="mb-6">
                  <h3 className="font-bold text-gray-900 mb-3">Features</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {selectedProduct.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center bg-green-50 rounded-lg px-3 py-2">
                        <span className="text-green-600 mr-2">✓</span>
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {selectedProduct.sizes && selectedProduct.sizes.length > 0 && (
                <div className="mb-6">
                  <h3 className="font-bold text-gray-900 mb-3">Available Sizes</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProduct.sizes.map((size, idx) => (
                      <div key={idx} className="px-4 py-2 border border-green-200 bg-green-50 rounded-lg">
                        <span className="font-medium text-green-800">{size.name}</span>
                        {size.price > 0 && (
                          <span className="text-sm text-green-600 ml-2">₹{size.price}</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {selectedProduct.colors && selectedProduct.colors.length > 0 && (
                <div className="mb-6">
                  <h3 className="font-bold text-gray-900 mb-3">Available Colors</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProduct.colors.map((color, idx) => (
                      <span key={idx} className="px-4 py-2 border border-gray-200 rounded-lg text-gray-700 text-sm">
                        {color}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex items-center justify-between pt-6 border-t">
                <div>
                  <p className="text-sm text-gray-500">Starting from</p>
                  <p className="text-2xl font-bold text-green-700">₹{selectedProduct.base_price}</p>
                </div>
                <button
                  onClick={() => { setSelectedProduct(null); navigate('/contact'); }}
                  className="px-6 py-3 bg-green-600 text-white rounded-xl font-medium hover:bg-green-700 transition-colors"
                >
                  Request Custom Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

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
              <div className="flex items-center gap-2 mb-4 cursor-pointer" onClick={() => navigate('/')}>
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
                  { label: 'Home',          path: '/'               },
                  { label: 'Products',      path: '/products'       },
                  { label: 'Sustainability', path: '/sustainability' },
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

            <div>
              <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
                <div className="w-1 h-6 bg-green-300 rounded-full" />Our Products
              </h4>
              <ul className="space-y-3">
                {CATEGORIES.filter(c => c !== 'All').map((cat, idx) => (
                  <li key={idx}>
                    <button onClick={() => navigate('/products')}
                      className="text-green-100 hover:text-white transition-colors flex items-center gap-2 group">
                      <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span className="group-hover:translate-x-1 transition-transform">{cat}</span>
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
              <div className="text-green-100">&copy; {new Date().getFullYear()} Bag a Soil. All rights reserved.</div>
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
      </footer>
    </div>
  );
}