/*
  # Initial Schema for Bag a Soil Platform

  ## Overview
  Creates the foundational database schema for an eco-friendly biodegradable packaging platform
  with product management, inquiries, orders, and community features.

  ## New Tables
  
  ### 1. profiles
  - `id` (uuid, FK to auth.users) - User profile ID
  - `email` (text) - User email
  - `full_name` (text) - Full name
  - `phone` (text) - Contact number
  - `role` (text) - User role: 'customer', 'admin', 'product_manager', 'marketing_manager'
  - `created_at` (timestamptz) - Account creation timestamp
  - `updated_at` (timestamptz) - Last update timestamp

  ### 2. product_categories
  - `id` (uuid, PK) - Category ID
  - `name` (text) - Category name (e.g., 'Carry Bags', 'Shopping Bags', 'Garbage Bags', 'Custom Bags')
  - `slug` (text) - URL-friendly slug
  - `description` (text) - Category description
  - `image_url` (text) - Category image
  - `display_order` (integer) - Sort order
  - `created_at` (timestamptz) - Creation timestamp

  ### 3. products
  - `id` (uuid, PK) - Product ID
  - `category_id` (uuid, FK) - Category reference
  - `name` (text) - Product name
  - `slug` (text) - URL-friendly slug
  - `description` (text) - Product description
  - `base_price` (decimal) - Base price
  - `images` (jsonb) - Array of image URLs
  - `sizes` (jsonb) - Available sizes with pricing
  - `colors` (jsonb) - Available colors
  - `biodegradable_grade` (text) - Biodegradation certification level
  - `features` (jsonb) - Product features array
  - `specifications` (jsonb) - Technical specifications
  - `customizable` (boolean) - Whether product supports customization
  - `in_stock` (boolean) - Stock availability
  - `min_order_quantity` (integer) - Minimum order quantity
  - `created_at` (timestamptz) - Creation timestamp
  - `updated_at` (timestamptz) - Last update timestamp

  ### 4. inquiries
  - `id` (uuid, PK) - Inquiry ID
  - `user_id` (uuid, FK nullable) - User reference (if logged in)
  - `name` (text) - Customer name
  - `email` (text) - Customer email
  - `phone` (text) - Contact number
  - `product_type` (text) - Type of product interested in
  - `message` (text) - Inquiry message
  - `attachment_url` (text) - Custom design file URL
  - `status` (text) - Status: 'new', 'in_progress', 'quoted', 'closed'
  - `assigned_to` (uuid, FK nullable) - Admin user assigned
  - `created_at` (timestamptz) - Inquiry timestamp
  - `updated_at` (timestamptz) - Last update timestamp

  ### 5. quote_requests
  - `id` (uuid, PK) - Quote request ID
  - `inquiry_id` (uuid, FK) - Related inquiry
  - `products` (jsonb) - Array of products with quantities
  - `customization_details` (jsonb) - Custom logo, colors, sizes
  - `estimated_quantity` (integer) - Total estimated quantity
  - `delivery_address` (text) - Shipping address
  - `urgency` (text) - Urgency level: 'standard', 'express', 'urgent'
  - `quote_amount` (decimal nullable) - Quoted price (set by admin)
  - `quote_notes` (text) - Admin notes on quote
  - `status` (text) - Status: 'pending', 'quoted', 'accepted', 'rejected'
  - `created_at` (timestamptz) - Request timestamp
  - `updated_at` (timestamptz) - Last update timestamp

  ### 6. orders
  - `id` (uuid, PK) - Order ID
  - `user_id` (uuid, FK) - Customer reference
  - `quote_request_id` (uuid, FK nullable) - Related quote
  - `order_number` (text) - Unique order number
  - `products` (jsonb) - Ordered products with details
  - `total_amount` (decimal) - Total order amount
  - `status` (text) - Status: 'pending', 'confirmed', 'processing', 'shipped', 'delivered', 'cancelled'
  - `payment_status` (text) - Payment: 'pending', 'paid', 'failed', 'refunded'
  - `shipping_address` (jsonb) - Delivery address details
  - `tracking_number` (text) - Shipment tracking
  - `notes` (text) - Order notes
  - `created_at` (timestamptz) - Order timestamp
  - `updated_at` (timestamptz) - Last update timestamp

  ### 7. newsletter_subscribers
  - `id` (uuid, PK) - Subscriber ID
  - `email` (text, unique) - Subscriber email
  - `name` (text nullable) - Subscriber name
  - `subscribed` (boolean) - Subscription status
  - `subscribed_at` (timestamptz) - Subscription timestamp
  - `unsubscribed_at` (timestamptz nullable) - Unsubscribe timestamp

  ### 8. blog_posts
  - `id` (uuid, PK) - Post ID
  - `author_id` (uuid, FK) - Author reference
  - `title` (text) - Post title
  - `slug` (text) - URL-friendly slug
  - `content` (text) - Post content (markdown)
  - `excerpt` (text) - Short excerpt
  - `featured_image` (text) - Cover image URL
  - `tags` (jsonb) - Array of tags
  - `published` (boolean) - Publication status
  - `published_at` (timestamptz nullable) - Publication timestamp
  - `created_at` (timestamptz) - Creation timestamp
  - `updated_at` (timestamptz) - Last update timestamp

  ### 9. sustainability_metrics
  - `id` (uuid, PK) - Metric ID
  - `metric_date` (date) - Date of metric
  - `products_delivered` (integer) - Total products delivered
  - `plastic_waste_saved_kg` (decimal) - Estimated plastic waste saved
  - `carbon_offset_kg` (decimal) - Carbon offset achieved
  - `trees_equivalent` (decimal) - Environmental impact in trees
  - `customers_served` (integer) - Number of customers
  - `created_at` (timestamptz) - Record timestamp

  ## Security
  - Enable RLS on all tables
  - Policies for authenticated users to manage their own data
  - Admin-only policies for product and inquiry management
  - Public read access for products and blog posts
*/

-- Create profiles table
CREATE TABLE IF NOT EXISTS profiles (
  id uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email text NOT NULL,
  full_name text,
  phone text,
  role text NOT NULL DEFAULT 'customer' CHECK (role IN ('customer', 'admin', 'product_manager', 'marketing_manager')),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own profile"
  ON profiles FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "Users can update own profile"
  ON profiles FOR UPDATE
  TO authenticated
  USING (auth.uid() = id)
  WITH CHECK (auth.uid() = id);

CREATE POLICY "Users can insert own profile"
  ON profiles FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = id);

-- Create product_categories table
CREATE TABLE IF NOT EXISTS product_categories (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  slug text UNIQUE NOT NULL,
  description text,
  image_url text,
  display_order integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE product_categories ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view categories"
  ON product_categories FOR SELECT
  TO authenticated, anon
  USING (true);

CREATE POLICY "Admins can manage categories"
  ON product_categories FOR ALL
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM profiles
      WHERE profiles.id = auth.uid()
      AND profiles.role IN ('admin', 'product_manager')
    )
  )
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM profiles
      WHERE profiles.id = auth.uid()
      AND profiles.role IN ('admin', 'product_manager')
    )
  );

-- Create products table
CREATE TABLE IF NOT EXISTS products (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  category_id uuid REFERENCES product_categories(id) ON DELETE SET NULL,
  name text NOT NULL,
  slug text UNIQUE NOT NULL,
  description text,
  base_price decimal(10, 2) NOT NULL DEFAULT 0,
  images jsonb DEFAULT '[]'::jsonb,
  sizes jsonb DEFAULT '[]'::jsonb,
  colors jsonb DEFAULT '[]'::jsonb,
  biodegradable_grade text,
  features jsonb DEFAULT '[]'::jsonb,
  specifications jsonb DEFAULT '{}'::jsonb,
  customizable boolean DEFAULT false,
  in_stock boolean DEFAULT true,
  min_order_quantity integer DEFAULT 1,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE products ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view products"
  ON products FOR SELECT
  TO authenticated, anon
  USING (true);

CREATE POLICY "Admins can manage products"
  ON products FOR ALL
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM profiles
      WHERE profiles.id = auth.uid()
      AND profiles.role IN ('admin', 'product_manager')
    )
  )
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM profiles
      WHERE profiles.id = auth.uid()
      AND profiles.role IN ('admin', 'product_manager')
    )
  );

-- Create inquiries table
CREATE TABLE IF NOT EXISTS inquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES profiles(id) ON DELETE SET NULL,
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  product_type text,
  message text NOT NULL,
  attachment_url text,
  status text DEFAULT 'new' CHECK (status IN ('new', 'in_progress', 'quoted', 'closed')),
  assigned_to uuid REFERENCES profiles(id) ON DELETE SET NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE inquiries ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own inquiries"
  ON inquiries FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can create inquiries"
  ON inquiries FOR INSERT
  TO authenticated, anon
  WITH CHECK (true);

CREATE POLICY "Admins can view all inquiries"
  ON inquiries FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM profiles
      WHERE profiles.id = auth.uid()
      AND profiles.role IN ('admin', 'product_manager', 'marketing_manager')
    )
  );

CREATE POLICY "Admins can update inquiries"
  ON inquiries FOR UPDATE
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM profiles
      WHERE profiles.id = auth.uid()
      AND profiles.role IN ('admin', 'product_manager', 'marketing_manager')
    )
  )
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM profiles
      WHERE profiles.id = auth.uid()
      AND profiles.role IN ('admin', 'product_manager', 'marketing_manager')
    )
  );

-- Create quote_requests table
CREATE TABLE IF NOT EXISTS quote_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  inquiry_id uuid REFERENCES inquiries(id) ON DELETE CASCADE,
  products jsonb DEFAULT '[]'::jsonb,
  customization_details jsonb DEFAULT '{}'::jsonb,
  estimated_quantity integer DEFAULT 0,
  delivery_address text,
  urgency text DEFAULT 'standard' CHECK (urgency IN ('standard', 'express', 'urgent')),
  quote_amount decimal(10, 2),
  quote_notes text,
  status text DEFAULT 'pending' CHECK (status IN ('pending', 'quoted', 'accepted', 'rejected')),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE quote_requests ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own quote requests"
  ON quote_requests FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM inquiries
      WHERE inquiries.id = quote_requests.inquiry_id
      AND inquiries.user_id = auth.uid()
    )
  );

CREATE POLICY "Users can create quote requests"
  ON quote_requests FOR INSERT
  TO authenticated
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM inquiries
      WHERE inquiries.id = quote_requests.inquiry_id
      AND inquiries.user_id = auth.uid()
    )
  );

CREATE POLICY "Admins can manage quote requests"
  ON quote_requests FOR ALL
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM profiles
      WHERE profiles.id = auth.uid()
      AND profiles.role IN ('admin', 'product_manager')
    )
  )
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM profiles
      WHERE profiles.id = auth.uid()
      AND profiles.role IN ('admin', 'product_manager')
    )
  );

-- Create orders table
CREATE TABLE IF NOT EXISTS orders (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES profiles(id) ON DELETE SET NULL,
  quote_request_id uuid REFERENCES quote_requests(id) ON DELETE SET NULL,
  order_number text UNIQUE NOT NULL,
  products jsonb DEFAULT '[]'::jsonb,
  total_amount decimal(10, 2) NOT NULL,
  status text DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'processing', 'shipped', 'delivered', 'cancelled')),
  payment_status text DEFAULT 'pending' CHECK (payment_status IN ('pending', 'paid', 'failed', 'refunded')),
  shipping_address jsonb DEFAULT '{}'::jsonb,
  tracking_number text,
  notes text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE orders ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own orders"
  ON orders FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Admins can manage orders"
  ON orders FOR ALL
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM profiles
      WHERE profiles.id = auth.uid()
      AND profiles.role IN ('admin', 'product_manager')
    )
  )
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM profiles
      WHERE profiles.id = auth.uid()
      AND profiles.role IN ('admin', 'product_manager')
    )
  );

-- Create newsletter_subscribers table
CREATE TABLE IF NOT EXISTS newsletter_subscribers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  name text,
  subscribed boolean DEFAULT true,
  subscribed_at timestamptz DEFAULT now(),
  unsubscribed_at timestamptz
);

ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can subscribe"
  ON newsletter_subscribers FOR INSERT
  TO authenticated, anon
  WITH CHECK (true);

CREATE POLICY "Admins can view subscribers"
  ON newsletter_subscribers FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM profiles
      WHERE profiles.id = auth.uid()
      AND profiles.role IN ('admin', 'marketing_manager')
    )
  );

CREATE POLICY "Admins can manage subscribers"
  ON newsletter_subscribers FOR UPDATE
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM profiles
      WHERE profiles.id = auth.uid()
      AND profiles.role IN ('admin', 'marketing_manager')
    )
  )
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM profiles
      WHERE profiles.id = auth.uid()
      AND profiles.role IN ('admin', 'marketing_manager')
    )
  );

-- Create blog_posts table
CREATE TABLE IF NOT EXISTS blog_posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  author_id uuid REFERENCES profiles(id) ON DELETE SET NULL,
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  content text NOT NULL,
  excerpt text,
  featured_image text,
  tags jsonb DEFAULT '[]'::jsonb,
  published boolean DEFAULT false,
  published_at timestamptz,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view published posts"
  ON blog_posts FOR SELECT
  TO authenticated, anon
  USING (published = true);

CREATE POLICY "Authors can view own drafts"
  ON blog_posts FOR SELECT
  TO authenticated
  USING (auth.uid() = author_id);

CREATE POLICY "Admins can manage blog posts"
  ON blog_posts FOR ALL
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM profiles
      WHERE profiles.id = auth.uid()
      AND profiles.role IN ('admin', 'marketing_manager')
    )
  )
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM profiles
      WHERE profiles.id = auth.uid()
      AND profiles.role IN ('admin', 'marketing_manager')
    )
  );

-- Create sustainability_metrics table
CREATE TABLE IF NOT EXISTS sustainability_metrics (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  metric_date date NOT NULL UNIQUE,
  products_delivered integer DEFAULT 0,
  plastic_waste_saved_kg decimal(10, 2) DEFAULT 0,
  carbon_offset_kg decimal(10, 2) DEFAULT 0,
  trees_equivalent decimal(10, 2) DEFAULT 0,
  customers_served integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE sustainability_metrics ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view metrics"
  ON sustainability_metrics FOR SELECT
  TO authenticated, anon
  USING (true);

CREATE POLICY "Admins can manage metrics"
  ON sustainability_metrics FOR ALL
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM profiles
      WHERE profiles.id = auth.uid()
      AND profiles.role = 'admin'
    )
  )
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM profiles
      WHERE profiles.id = auth.uid()
      AND profiles.role = 'admin'
    )
  );

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_products_category ON products(category_id);
CREATE INDEX IF NOT EXISTS idx_products_slug ON products(slug);
CREATE INDEX IF NOT EXISTS idx_inquiries_user ON inquiries(user_id);
CREATE INDEX IF NOT EXISTS idx_inquiries_status ON inquiries(status);
CREATE INDEX IF NOT EXISTS idx_orders_user ON orders(user_id);
CREATE INDEX IF NOT EXISTS idx_orders_status ON orders(status);
CREATE INDEX IF NOT EXISTS idx_blog_posts_published ON blog_posts(published);
CREATE INDEX IF NOT EXISTS idx_blog_posts_slug ON blog_posts(slug);

-- Create function to automatically update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create triggers for updated_at
CREATE TRIGGER update_profiles_updated_at BEFORE UPDATE ON profiles
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_products_updated_at BEFORE UPDATE ON products
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_inquiries_updated_at BEFORE UPDATE ON inquiries
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_quote_requests_updated_at BEFORE UPDATE ON quote_requests
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_orders_updated_at BEFORE UPDATE ON orders
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_blog_posts_updated_at BEFORE UPDATE ON blog_posts
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();