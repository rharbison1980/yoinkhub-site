export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, category, message } = req.body || {};

  // Validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!name || !email || !category || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Valid email address is required' });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const notifyEmail = process.env.FEEDBACK_NOTIFY_EMAIL;

  // If Resend is not configured, log and return success
  if (!apiKey || !notifyEmail) {
    console.log('[Feedback] Submission received (email not configured):', {
      name,
      email: email.toLowerCase().trim(),
      category,
      message: message.substring(0, 200),
    });
    return res.status(200).json({ success: true });
  }

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'YoinkHub Feedback <noreply@yoinkhub.com>',
        to: notifyEmail,
        subject: `[${category}] Feedback from ${name}`,
        html: `
          <h2>${category}</h2>
          <p><strong>From:</strong> ${name} (${email.toLowerCase().trim()})</p>
          <hr/>
          <p>${message.replace(/\n/g, '<br/>')}</p>
        `,
      }),
    });

    if (!response.ok) {
      throw new Error(`Resend API error: ${response.status}`);
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('[Feedback] Error:', error);
    return res.status(500).json({ error: 'Something went wrong. Please try again.' });
  }
}
