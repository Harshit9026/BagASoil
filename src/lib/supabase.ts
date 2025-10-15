import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Database = {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string;
          email: string;
          full_name: string | null;
          phone: string | null;
          role: 'customer' | 'admin' | 'product_manager' | 'marketing_manager';
          created_at: string;
          updated_at: string;
        };
        Insert: Omit<Database['public']['Tables']['profiles']['Row'], 'created_at' | 'updated_at'>;
        Update: Partial<Database['public']['Tables']['profiles']['Insert']>;
      };
      products: {
        Row: {
          id: string;
          category_id: string | null;
          name: string;
          slug: string;
          description: string | null;
          base_price: number;
          images: string[];
          sizes: Array<{ name: string; price: number }>;
          colors: string[];
          biodegradable_grade: string | null;
          features: string[];
          specifications: Record<string, string>;
          customizable: boolean;
          in_stock: boolean;
          min_order_quantity: number;
          created_at: string;
          updated_at: string;
        };
      };
      product_categories: {
        Row: {
          id: string;
          name: string;
          slug: string;
          description: string | null;
          image_url: string | null;
          display_order: number;
          created_at: string;
        };
      };
      inquiries: {
        Row: {
          id: string;
          user_id: string | null;
          name: string;
          email: string;
          phone: string | null;
          product_type: string | null;
          message: string;
          attachment_url: string | null;
          status: 'new' | 'in_progress' | 'quoted' | 'closed';
          assigned_to: string | null;
          created_at: string;
          updated_at: string;
        };
      };
      newsletter_subscribers: {
        Row: {
          id: string;
          email: string;
          name: string | null;
          subscribed: boolean;
          subscribed_at: string;
          unsubscribed_at: string | null;
        };
      };
      blog_posts: {
        Row: {
          id: string;
          author_id: string | null;
          title: string;
          slug: string;
          content: string;
          excerpt: string | null;
          featured_image: string | null;
          tags: string[];
          published: boolean;
          published_at: string | null;
          created_at: string;
          updated_at: string;
        };
      };
      sustainability_metrics: {
        Row: {
          id: string;
          metric_date: string;
          products_delivered: number;
          plastic_waste_saved_kg: number;
          carbon_offset_kg: number;
          trees_equivalent: number;
          customers_served: number;
          created_at: string;
        };
      };
    };
  };
};
