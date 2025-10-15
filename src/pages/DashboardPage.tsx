import { useEffect, useState } from 'react';
import { MessageSquare, Package, User, Mail } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { useAuth } from '../contexts/AuthContext';

interface DashboardPageProps {
  onNavigate: (page: string) => void;
}

interface Inquiry {
  id: string;
  product_type: string | null;
  message: string;
  status: string;
  created_at: string;
}

export default function DashboardPage({ onNavigate }: DashboardPageProps) {
  const { user, profile } = useAuth();
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) {
      onNavigate('login');
      return;
    }
    loadUserData();
  }, [user]);

  const loadUserData = async () => {
    try {
      const { data, error } = await supabase
        .from('inquiries')
        .select('*')
        .eq('user_id', user?.id)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setInquiries(data || []);
    } catch (error) {
      console.error('Error loading user data:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-br from-green-600 to-emerald-700 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-white mb-2">My Dashboard</h1>
          <p className="text-green-50">Welcome back, {profile?.full_name || 'User'}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">My Inquiries</h2>
              {inquiries.length === 0 ? (
                <div className="text-center py-12">
                  <MessageSquare className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600 mb-4">No inquiries yet</p>
                  <button
                    onClick={() => onNavigate('contact')}
                    className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                  >
                    Submit an Inquiry
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  {inquiries.map((inquiry) => (
                    <div key={inquiry.id} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          {inquiry.product_type && (
                            <p className="font-medium text-gray-900 mb-1">{inquiry.product_type}</p>
                          )}
                          <p className="text-sm text-gray-600">{inquiry.message}</p>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap ml-4 ${
                          inquiry.status === 'new'
                            ? 'bg-orange-100 text-orange-700'
                            : inquiry.status === 'in_progress'
                            ? 'bg-blue-100 text-blue-700'
                            : inquiry.status === 'quoted'
                            ? 'bg-green-100 text-green-700'
                            : 'bg-gray-100 text-gray-700'
                        }`}>
                          {inquiry.status.replace('_', ' ')}
                        </span>
                      </div>
                      <p className="text-xs text-gray-500">
                        {new Date(inquiry.created_at).toLocaleString()}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Actions</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <button
                  onClick={() => onNavigate('products')}
                  className="flex items-center justify-center px-6 py-3 bg-white text-gray-900 rounded-lg font-medium hover:shadow-md transition-shadow"
                >
                  <Package className="h-5 w-5 mr-2" />
                  Browse Products
                </button>
                <button
                  onClick={() => onNavigate('contact')}
                  className="flex items-center justify-center px-6 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700"
                >
                  <MessageSquare className="h-5 w-5 mr-2" />
                  New Inquiry
                </button>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Account Information</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <User className="h-5 w-5 text-gray-400 mr-3 mt-1" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">Name</p>
                    <p className="text-sm text-gray-600">{profile?.full_name || 'Not set'}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="h-5 w-5 text-gray-400 mr-3 mt-1" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">Email</p>
                    <p className="text-sm text-gray-600">{profile?.email}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-600 to-emerald-700 rounded-lg p-6 text-white">
              <h3 className="text-lg font-bold mb-3">Your Impact</h3>
              <div className="space-y-3">
                <div>
                  <div className="text-2xl font-bold">{inquiries.length}</div>
                  <div className="text-sm text-green-50">Inquiries Submitted</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">
                    {inquiries.filter(i => i.status === 'quoted').length}
                  </div>
                  <div className="text-sm text-green-50">Quotes Received</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
