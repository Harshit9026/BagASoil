import { useEffect, useState } from 'react';
import { Package, MessageSquare, Users, TrendingUp, Mail } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { useAuth } from '../contexts/AuthContext';

interface AdminDashboardProps {
  onNavigate: (page: string) => void;
}

interface DashboardStats {
  totalProducts: number;
  totalInquiries: number;
  newInquiries: number;
  subscribers: number;
}

interface Inquiry {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  product_type: string | null;
  message: string;
  status: string;
  created_at: string;
}

export default function AdminDashboard({ onNavigate }: AdminDashboardProps) {
  const { isAdmin } = useAuth();
  const [stats, setStats] = useState<DashboardStats>({
    totalProducts: 0,
    totalInquiries: 0,
    newInquiries: 0,
    subscribers: 0,
  });
  const [recentInquiries, setRecentInquiries] = useState<Inquiry[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'overview' | 'inquiries' | 'products'>('overview');

  useEffect(() => {
    if (!isAdmin) {
      onNavigate('home');
      return;
    }
    loadDashboardData();
  }, [isAdmin]);

  const loadDashboardData = async () => {
    try {
      const [productsRes, inquiriesRes, newInquiriesRes, subscribersRes] = await Promise.all([
        supabase.from('products').select('id', { count: 'exact', head: true }),
        supabase.from('inquiries').select('id', { count: 'exact', head: true }),
        supabase.from('inquiries').select('id', { count: 'exact', head: true }).eq('status', 'new'),
        supabase.from('newsletter_subscribers').select('id', { count: 'exact', head: true }).eq('subscribed', true),
      ]);

      setStats({
        totalProducts: productsRes.count || 0,
        totalInquiries: inquiriesRes.count || 0,
        newInquiries: newInquiriesRes.count || 0,
        subscribers: subscribersRes.count || 0,
      });

      const { data: inquiries } = await supabase
        .from('inquiries')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(10);

      setRecentInquiries(inquiries || []);
    } catch (error) {
      console.error('Error loading dashboard data:', error);
    } finally {
      setLoading(false);
    }
  };

  const updateInquiryStatus = async (inquiryId: string, newStatus: string) => {
    try {
      const { error } = await supabase
        .from('inquiries')
        .update({ status: newStatus, updated_at: new Date().toISOString() })
        .eq('id', inquiryId);

      if (error) throw error;

      setRecentInquiries(prev =>
        prev.map(inq => inq.id === inquiryId ? { ...inq, status: newStatus } : inq)
      );

      await loadDashboardData();
    } catch (error) {
      console.error('Error updating inquiry:', error);
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
          <h1 className="text-3xl font-bold text-white mb-2">Admin Dashboard</h1>
          <p className="text-green-50">Manage your platform and track performance</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <Package className="h-6 w-6 text-green-600" />
              </div>
              <span className="text-sm text-gray-500">Total</span>
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">{stats.totalProducts}</div>
            <div className="text-sm text-gray-600">Products</div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <MessageSquare className="h-6 w-6 text-blue-600" />
              </div>
              <span className="text-sm text-gray-500">All Time</span>
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">{stats.totalInquiries}</div>
            <div className="text-sm text-gray-600">Inquiries</div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-orange-600" />
              </div>
              <span className="text-sm text-gray-500">Pending</span>
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">{stats.newInquiries}</div>
            <div className="text-sm text-gray-600">New Inquiries</div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                <Mail className="h-6 w-6 text-purple-600" />
              </div>
              <span className="text-sm text-gray-500">Active</span>
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">{stats.subscribers}</div>
            <div className="text-sm text-gray-600">Subscribers</div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm">
          <div className="border-b border-gray-200">
            <div className="flex space-x-8 px-6">
              <button
                onClick={() => setActiveTab('overview')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'overview'
                    ? 'border-green-600 text-green-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                Recent Inquiries
              </button>
              <button
                onClick={() => setActiveTab('inquiries')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'inquiries'
                    ? 'border-green-600 text-green-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                All Inquiries
              </button>
              <button
                onClick={() => setActiveTab('products')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'products'
                    ? 'border-green-600 text-green-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                Manage Products
              </button>
            </div>
          </div>

          <div className="p-6">
            {activeTab === 'overview' && (
              <div className="space-y-4">
                {recentInquiries.length === 0 ? (
                  <p className="text-center text-gray-500 py-8">No inquiries yet</p>
                ) : (
                  recentInquiries.map((inquiry) => (
                    <div key={inquiry.id} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="font-bold text-gray-900">{inquiry.name}</h3>
                          <p className="text-sm text-gray-600">{inquiry.email}</p>
                          {inquiry.phone && (
                            <p className="text-sm text-gray-600">{inquiry.phone}</p>
                          )}
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
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
                          <select
                            value={inquiry.status}
                            onChange={(e) => updateInquiryStatus(inquiry.id, e.target.value)}
                            className="text-sm border border-gray-300 rounded px-2 py-1"
                          >
                            <option value="new">New</option>
                            <option value="in_progress">In Progress</option>
                            <option value="quoted">Quoted</option>
                            <option value="closed">Closed</option>
                          </select>
                        </div>
                      </div>
                      {inquiry.product_type && (
                        <p className="text-sm text-gray-600 mb-2">
                          <span className="font-medium">Product:</span> {inquiry.product_type}
                        </p>
                      )}
                      <p className="text-sm text-gray-700 mb-2">{inquiry.message}</p>
                      <p className="text-xs text-gray-500">
                        {new Date(inquiry.created_at).toLocaleString()}
                      </p>
                    </div>
                  ))
                )}
              </div>
            )}

            {activeTab === 'inquiries' && (
              <div className="text-center py-8">
                <MessageSquare className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600">Full inquiry management coming soon</p>
              </div>
            )}

            {activeTab === 'products' && (
              <div className="text-center py-8">
                <Package className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600 mb-4">Product management interface</p>
                <button
                  onClick={() => onNavigate('products')}
                  className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                >
                  View Products
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
