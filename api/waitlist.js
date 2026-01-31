export default async function handler(req, res) {
  // Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email } = req.body || {};

  // Server-side email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    return res.status(400).json({ error: 'Valid email address is required' });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const audienceId = process.env.RESEND_AUDIENCE_ID;

  // If Resend is not configured, log the email and return success
  // This lets the site work during development before Resend is set up
  if (!apiKey || !audienceId) {
    console.log('[Waitlist] Email collected (Resend not configured):', email.toLowerCase().trim());
    return res.status(200).json({ success: true, message: 'subscribed' });
  }

  try {
    const response = await fetch(
      `https://api.resend.com/audiences/${audienceId}/contacts`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email.toLowerCase().trim(),
          unsubscribed: false,
        }),
      }
    );

    if (response.status === 409) {
      return res.status(200).json({ success: true, message: 'already_subscribed' });
    }

    if (!response.ok) {
      throw new Error(`Resend API error: ${response.status}`);
    }

    return res.status(200).json({ success: true, message: 'subscribed' });
  } catch (error) {
    console.error('[Waitlist] Error:', error);
    return res.status(500).json({ error: 'Something went wrong. Please try again.' });
  }
}
