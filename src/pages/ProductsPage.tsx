import { useEffect, useState } from 'react';
import { Search, Package } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface Product {
  id: string;
  name: string;
  description: string;
  base_price: number;
  images: string[];
  sizes: Array<{ name: string; price: number }>;
  colors: string[];
  biodegradable_grade: string;
  features: string[];
  customizable: boolean;
  in_stock: boolean;
  min_order_quantity: number;
}

interface ProductsPageProps {
  onNavigate: (page: string) => void;
}

export default function ProductsPage({ onNavigate }: ProductsPageProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

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
      setProducts(data || []);
    } catch (error) {
      console.error('Error loading products:', error);
    } finally {
      setLoading(false);
    }
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.description?.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
      <div className="bg-gradient-to-br from-green-600 to-emerald-700 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Our Products
          </h1>
          <p className="text-lg text-green-50 max-w-2xl mx-auto">
            Explore our range of eco-friendly, biodegradable packaging solutions
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
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

        {filteredProducts.length === 0 ? (
          <div className="text-center py-16">
            <Package className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No products found</h3>
            <p className="text-gray-600 mb-6">
              {searchQuery ? 'Try adjusting your search' : 'Products will be available soon'}
            </p>
            <button
              onClick={() => onNavigate('contact')}
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
                className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden cursor-pointer"
                onClick={() => setSelectedProduct(product)}
              >
                <div className="aspect-w-16 aspect-h-9 bg-gray-200">
                  {product.images && product.images.length > 0 ? (
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-full h-48 object-cover"
                    />
                  ) : (
                    <div className="w-full h-48 flex items-center justify-center bg-gradient-to-br from-green-50 to-emerald-100">
                      <Package className="h-16 w-16 text-green-600" />
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-bold text-gray-900">{product.name}</h3>
                    {product.customizable && (
                      <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full font-medium">
                        Customizable
                      </span>
                    )}
                  </div>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {product.description}
                  </p>
                  {product.biodegradable_grade && (
                    <div className="mb-4">
                      <span className="inline-flex items-center px-3 py-1 bg-emerald-50 text-emerald-700 text-xs rounded-full font-medium">
                        {product.biodegradable_grade}
                      </span>
                    </div>
                  )}

                  {/* ✅ Request button moved left and full width on mobile */}
                  <div className="flex items-center justify-start">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onNavigate('contact');
                      }}
                      className="w-full sm:w-auto px-4 py-2 bg-green-600 text-white rounded-lg text-sm font-medium hover:bg-green-700"
                    >
                      Request Quote
                    </button>
                  </div>

                  {product.min_order_quantity > 1 && (
                    <p className="text-xs text-gray-500 mt-2">
                      Min. order: {product.min_order_quantity} units
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">{selectedProduct.name}</h2>
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  ✕
                </button>
              </div>

              {selectedProduct.images && selectedProduct.images.length > 0 ? (
                <img
                  src={selectedProduct.images[0]}
                  alt={selectedProduct.name}
                  className="w-full h-64 object-cover rounded-lg mb-6"
                />
              ) : (
                <div className="w-full h-64 flex items-center justify-center bg-gradient-to-br from-green-50 to-emerald-100 rounded-lg mb-6">
                  <Package className="h-24 w-24 text-green-600" />
                </div>
              )}

              <p className="text-gray-700 mb-6">{selectedProduct.description}</p>

              {selectedProduct.features && selectedProduct.features.length > 0 && (
                <div className="mb-6">
                  <h3 className="font-bold text-gray-900 mb-3">Features</h3>
                  <ul className="space-y-2">
                    {selectedProduct.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-green-600 mr-2">✓</span>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {selectedProduct.sizes && selectedProduct.sizes.length > 0 && (
                <div className="mb-6">
                  <h3 className="font-bold text-gray-900 mb-3">Available Sizes</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProduct.sizes.map((size, idx) => (
                      <div key={idx} className="px-4 py-2 bg-gray-100 rounded-lg">
                        <span className="font-medium">{size.name}</span>
                        {size.price > 0 && (
                          <span className="text-sm text-gray-600 ml-2">₹{size.price}</span>
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
                      <span key={idx} className="px-4 py-2 bg-gray-100 rounded-lg">
                        {color}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* ✅ Full-width on mobile */}
              <div className="flex items-center justify-start pt-6 border-t">
                <button
                  onClick={() => {
                    setSelectedProduct(null);
                    onNavigate('contact');
                  }}
                  className="w-full sm:w-auto px-6 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700"
                >
                  Request Custom Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
