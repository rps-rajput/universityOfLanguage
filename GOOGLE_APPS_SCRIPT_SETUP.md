# Google Apps Script Setup Instructions

This guide will help you set up Google Apps Script to automatically save contact form submissions to your Google Sheet.

## Step 1: Open Your Google Sheet

1. Open your Google Sheet: https://docs.google.com/spreadsheets/d/1-IgS_5hSqbXlldS2SLxVfUraQ24OfibtXQJ1cziWmLA/edit?usp=sharing
2. Make sure the first row has these column headers (in this exact order):
   - Column A: `Name`
   - Column B: `Phone Number`
   - Column C: `Email`
   - Column D: `Service/Course`
   - Column E: `Message`

## Step 2: Create Google Apps Script

1. In your Google Sheet, click on **Extensions** → **Apps Script**
2. Delete any existing code in the editor
3. Copy and paste the following code:

```javascript
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
    
    // Append the data as a new row (matching the column order)
    sheet.appendRow([name, phone, email, service, message]);
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({ 
        success: true, 
        message: 'Data saved successfully' 
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({ 
        success: false, 
        error: error.toString() 
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

4. Click **Save** (💾) and give your project a name (e.g., "Contact Form Handler")

## Step 3: Deploy as Web App

1. Click on **Deploy** → **New deployment**
2. Click the gear icon (⚙️) next to "Select type" and choose **Web app**
3. Configure the deployment:
   - **Description**: "Contact Form Web App" (or any description)
   - **Execute as**: Select **Me** (your email)
   - **Who has access**: Select **Anyone** (this is important!)
4. Click **Deploy**
5. **Copy the Web App URL** that appears (it will look like: `https://script.google.com/macros/s/.../exec`)
6. Click **Done**

## Step 4: Authorize the Script

1. When you first run the script, you'll be prompted to authorize it
2. Click **Review permissions**
3. Choose your Google account
4. Click **Advanced** → **Go to [Your Project Name] (unsafe)**
5. Click **Allow** to grant permissions

## Step 5: Add Environment Variable

1. In your project root, create or update your `.env` file
2. Add the following line with your Web App URL:

```
GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
```

Replace `YOUR_SCRIPT_ID` with the actual ID from the URL you copied in Step 3.

**Important**: 
- If you're using a different environment file (like `.env.local`), add it there
- Make sure `.env` is in your `.gitignore` file to keep your URL secure
- Restart your development server after adding the environment variable

## Step 6: Test the Integration

1. Fill out the contact form on your website
2. Submit the form
3. Check your Google Sheet - you should see a new row with the submitted data

## Troubleshooting

### If data is not being saved:
1. Make sure the Web App is deployed with "Anyone" access
2. Verify the column headers match exactly (Name, Phone Number, Email, Service/Course, Message)
3. Check the Apps Script execution log: **Executions** in the Apps Script editor
4. Verify the `GOOGLE_SCRIPT_URL` environment variable is set correctly

### If you get permission errors:
1. Re-authorize the script: **Deploy** → **Manage deployments** → Click the edit icon → **Deploy**
2. Make sure "Who has access" is set to **Anyone**

### If you need to update the script:
1. Make your changes in the Apps Script editor
2. Click **Deploy** → **Manage deployments**
3. Click the edit icon (✏️) next to your deployment
4. Change the version to **New version**
5. Click **Deploy**

## Security Note

Since the Google Sheet is publicly accessible, anyone with the Web App URL can submit data. Consider:
- Adding basic validation in the Apps Script
- Implementing rate limiting if needed
- Using a more secure authentication method for production



