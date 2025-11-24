/**
 * Google Apps Script for Contact Form Submission
 * 
 * Instructions:
 * 1. Open your Google Sheet
 * 2. Go to Extensions → Apps Script
 * 3. Paste this code
 * 4. Save and deploy as Web App
 * 5. Copy the Web App URL and add it to your .env file as GOOGLE_SCRIPT_URL
 */

function doPost(e) {
  try {
    // Get the active spreadsheet
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Parse the incoming JSON data
    const data = JSON.parse(e.postData.contents);
    
    // Extract the form data
    const name = data.name || '';
    const phone = data.phone || '';
    const email = data.email || '';
    const service = data.service || '';
    const message = data.message || '';
    
    // Append the data as a new row (matching the column order: Name, Phone Number, Email, Service/Course, Message)
    sheet.appendRow([name, phone, email, service, message]);
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({ 
        success: true, 
        message: 'Data saved successfully' 
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Log error for debugging
    Logger.log('Error: ' + error.toString());
    
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({ 
        success: false, 
        error: error.toString() 
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}



