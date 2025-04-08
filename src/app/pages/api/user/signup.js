// pages/api/user/signup.js
import { query } from 'src/app/lib/db';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { userName, userEmail, userPhone } = req.body;

    // Validate required fields
    if (!userName || !userEmail || !userPhone) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    // Insert user data into UserInfo table
    await query(
      'INSERT INTO UserInfo (UserName, UserEmail, UserPhone) VALUES (?, ?, ?)',
      [userName, userEmail, userPhone]
    );

    // Return success response
    return res.status(200).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Signup error:', error);
    return res.status(500).json({ message: 'Database error', error: error.message });
  }
}