/*
  # Create contact submissions table

  1. New Tables
    - `contact_submissions`
      - `id` (uuid, primary key)
      - `name` (text, required) - Customer's full name
      - `email` (text, required) - Customer's email address
      - `phone` (text, optional) - Customer's phone number
      - `service` (text, optional) - Service they're interested in
      - `message` (text, required) - Their message/project details
      - `created_at` (timestamp) - When the submission was made
      - `status` (text, default 'new') - Status of the lead (new, contacted, quoted, closed)

  2. Security
    - Enable RLS on `contact_submissions` table
    - Add policy for inserting new submissions (public access for form)
    - Add policy for reading submissions (authenticated users only)

  3. Purpose
    - Store all contact form submissions from the website
    - Track lead status and follow-up progress
    - Maintain customer contact information
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  service text,
  message text NOT NULL,
  status text DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'quoted', 'closed')),
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert contact form submissions
CREATE POLICY "Anyone can submit contact forms"
  ON contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Allow authenticated users to read all submissions (for admin dashboard)
CREATE POLICY "Authenticated users can read submissions"
  ON contact_submissions
  FOR SELECT
  TO authenticated
  USING (true);

-- Allow authenticated users to update submission status
CREATE POLICY "Authenticated users can update submissions"
  ON contact_submissions
  FOR UPDATE
  TO authenticated
  USING (true);