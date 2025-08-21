const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

async function captureAllSlides() {
  console.log('Starting slide capture process...');
  
  // Create screenshots directory if it doesn't exist
  const screenshotsDir = path.join(__dirname, 'presentation-screenshots');
  if (!fs.existsSync(screenshotsDir)) {
    fs.mkdirSync(screenshotsDir, { recursive: true });
  }

  const browser = await puppeteer.launch({ 
    headless: false, // Set to true for headless mode
    defaultViewport: {
      width: 1920,
      height: 1080
    }
  });
  
  const page = await browser.newPage();
  
  try {
    // Navigate to the presentation
    console.log('Navigating to presentation...');
    await page.goto('http://localhost:3000/presentation-app/technical-plan', {
      waitUntil: 'networkidle2'
    });
    
    // Check if we need to authenticate
    const needsAuth = await page.$('input[type="password"]');
    
    if (needsAuth) {
      console.log('Authenticating...');
      // Enter password
      await page.type('input[type="password"]', 'koti2025');
      
      // Click the submit button
      await page.click('button:last-child');
      
      // Wait for navigation to complete
      await new Promise(resolve => setTimeout(resolve, 3000));
    }
    
    // Now capture all 19 slides
    const totalSlides = 19;
    
    for (let i = 1; i <= totalSlides; i++) {
      console.log(`Capturing slide ${i} of ${totalSlides}...`);
      
      // Wait for slide to fully render
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Take screenshot
      const screenshotPath = path.join(screenshotsDir, `technical-slide-${String(i).padStart(2, '0')}.png`);
      await page.screenshot({ 
        path: screenshotPath,
        fullPage: false // Just capture viewport
      });
      
      console.log(`✓ Saved: ${screenshotPath}`);
      
      // Go to next slide (except for the last one)
      if (i < totalSlides) {
        await page.keyboard.press('ArrowRight');
        // Wait for slide transition animation
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
    }
    
    console.log('\n✅ All slides captured successfully!');
    console.log(`📁 Screenshots saved in: ${screenshotsDir}`);
    
  } catch (error) {
    console.error('Error capturing slides:', error);
  } finally {
    await browser.close();
  }
}

// Run the capture
captureAllSlides().catch(console.error);