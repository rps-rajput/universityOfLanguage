export async function POST(request) {
  try {
    const formData = await request.json();
    
    // Validate required fields
    if (!formData.name || !formData.phone || !formData.email || !formData.service) {
      return new Response(
        JSON.stringify({ 
          error: 'Missing required fields',
          message: 'Please fill in all required fields (Name, Phone, Email, Service/Course)'
        }),
        {
          status: 400,
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
    }

    // Get Google Apps Script web app URL from environment variable
    const GOOGLE_SCRIPT_URL = process.env.GOOGLE_SCRIPT_URL;
    
    if (!GOOGLE_SCRIPT_URL) {
      console.error('GOOGLE_SCRIPT_URL environment variable is not set');
      console.log('Form data received:', formData);
      
      // In development, allow testing without Google Script URL
      // In production, this should be configured
      if (process.env.NODE_ENV === 'development' || !process.env.NODE_ENV) {
        console.warn('⚠️  GOOGLE_SCRIPT_URL not set. Form data logged to console only.');
        console.warn('📝 To enable Google Sheets integration:');
        console.warn('   1. Set up Google Apps Script (see GOOGLE_APPS_SCRIPT_SETUP.md)');
        console.warn('   2. Add GOOGLE_SCRIPT_URL to your .env file');
        console.warn('   3. Restart your development server');
        
        // Return success in dev mode for testing UI
        return new Response(
          JSON.stringify({ 
            success: true,
            message: 'Thank you for your message! We will get back to you within 24 hours.',
            warning: 'Development mode: Data logged to console. Set GOOGLE_SCRIPT_URL to enable Google Sheets integration.'
          }),
          {
            status: 200,
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );
      }
      
      return new Response(
        JSON.stringify({ 
          error: 'Server configuration error',
          message: 'Contact form service is not properly configured. Please set GOOGLE_SCRIPT_URL environment variable.'
        }),
        {
          status: 500,
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
    }

    // Prepare data for Google Sheets (matching the column order)
    const sheetData = {
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      service: formData.service,
      message: formData.message || '',
    };

    // Send data to Google Apps Script
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(sheetData),
    });

    if (!response.ok) {
      throw new Error(`Google Script returned status: ${response.status}`);
    }

    const result = await response.text();

    return new Response(
      JSON.stringify({ 
        success: true,
        message: 'Thank you for your message! We will get back to you within 24 hours.',
        data: result
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  } catch (error) {
    console.error('Error submitting contact form:', error);
    return new Response(
      JSON.stringify({ 
        error: 'Failed to submit form',
        message: 'An error occurred while submitting your form. Please try again later.'
      }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }
}

