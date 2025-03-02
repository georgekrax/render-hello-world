const puppeteer = require('puppeteer');

// Main function to test Puppeteer
async function testPuppeteer() {
  try {
    // Launch the browser in headless mode with necessary options
    const browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    // Create a new page in the browser
    const page = await browser.newPage();

    // Navigate to an example page
    await page.goto('https://www.google.com');

    // Get the page title
    const title = await page.title();
    console.log(`Page title (Google): ${title}`);

    // Close the browser
    await browser.close();

    console.log('Puppeteer is working correctly!');
  } catch (error) {
    // Handle errors if Puppeteer doesn't work correctly
    console.error('Error during Puppeteer usage:', error);
  }
}

// Run the test function
testPuppeteer();
