const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

async function captureAllSlides() {
  console.log('Starting slide capture process...');
  
  // Create screenshots directory if it doesn't exist
  const screenshotsDir = path.join(__dirname, 'presentation-screenshots-fixed');
  if (!fs.existsSync(screenshotsDir)) {
    fs.mkdirSync(screenshotsDir, { recursive: true });
  }

  const browser = await puppeteer.launch({ 
    headless: false, // Keep browser visible so you can see what's happening
    defaultViewport: {
      width: 1920,
      height: 1080
    }
  });
  
  const page = await browser.newPage();
  
  try {
    // First, navigate to main page to authenticate
    console.log('Navigating to main presentation page...');
    await page.goto('http://localhost:3000/presentation-app', {
      waitUntil: 'networkidle2'
    });
    
    // Wait a bit for page to fully load
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Check if we need to authenticate
    const needsAuth = await page.$('input[type="password"]');
    
    if (needsAuth) {
      console.log('Authenticating...');
      // Enter password
      await page.type('input[type="password"]', 'koti2025');
      
      // Wait for button to be enabled
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Click the submit button
      await page.click('button:last-child');
      
      // Wait for authentication to complete and main page to load
      console.log('Waiting for authentication to complete...');
      await page.waitForNavigation({ waitUntil: 'networkidle2' });
      await new Promise(resolve => setTimeout(resolve, 2000));
    }
    
    // Now navigate to the technical presentation
    console.log('Navigating to technical presentation...');
    await page.goto('http://localhost:3000/presentation-app/technical-plan', {
      waitUntil: 'networkidle2'
    });
    
    // Wait for presentation to fully load
    console.log('Waiting for presentation to load...');
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    // Check if we're on the presentation page (not password page)
    const isOnPresentation = await page.evaluate(() => {
      // Check if we have the presentation container or slide elements
      return document.querySelector('.presentation-slide') !== null || 
             document.querySelector('[class*="slide"]') !== null ||
             document.querySelector('.pdf-container') !== null;
    });
    
    if (!isOnPresentation) {
      console.log('⚠️  Warning: Still on password page. Trying alternative authentication...');
      
      // Try to authenticate again if needed
      const passwordField = await page.$('input[type="password"]');
      if (passwordField) {
        await page.type('input[type="password"]', 'koti2025');
        await new Promise(resolve => setTimeout(resolve, 500));
        
        // Find and click the submit button
        await page.evaluate(() => {
          const buttons = document.querySelectorAll('button');
          const submitButton = Array.from(buttons).find(b => 
            b.textContent.includes('Access') || 
            b.textContent.includes('Submit') ||
            b.textContent.includes('Enter')
          );
          if (submitButton) submitButton.click();
        });
        
        // Wait for navigation
        await new Promise(resolve => setTimeout(resolve, 5000));
      }
    }
    
    // Verify we're on the actual presentation
    const finalCheck = await page.evaluate(() => {
      return {
        hasSlides: document.querySelector('.presentation-slide') !== null,
        hasPdfContainer: document.querySelector('.pdf-container') !== null,
        hasPasswordField: document.querySelector('input[type="password"]') !== null,
        url: window.location.href,
        title: document.title
      };
    });
    
    console.log('Page status:', finalCheck);
    
    if (finalCheck.hasPasswordField && !finalCheck.hasSlides) {
      console.error('❌ Error: Still on password page. Authentication failed.');
      console.log('Please ensure:');
      console.log('1. The server is running on http://localhost:3000');
      console.log('2. The password is correct (koti2025)');
      console.log('3. Try running the script again');
      return;
    }
    
    // Now capture all 19 slides
    const totalSlides = 19;
    console.log(`\nStarting capture of ${totalSlides} slides...`);
    
    for (let i = 1; i <= totalSlides; i++) {
      console.log(`Capturing slide ${i} of ${totalSlides}...`);
      
      // Wait for slide to fully render and animations to complete
      await new Promise(resolve => setTimeout(resolve, 2500));
      
      // Take screenshot
      const screenshotPath = path.join(screenshotsDir, `technical-slide-${String(i).padStart(2, '0')}.png`);
      await page.screenshot({ 
        path: screenshotPath,
        fullPage: false
      });
      
      console.log(`✓ Saved: ${path.basename(screenshotPath)}`);
      
      // Go to next slide (except for the last one)
      if (i < totalSlides) {
        // Use keyboard navigation
        await page.keyboard.press('ArrowRight');
        // Wait for slide transition animation
        await new Promise(resolve => setTimeout(resolve, 1500));
      }
    }
    
    console.log('\n✅ All slides captured successfully!');
    console.log(`📁 Screenshots saved in: ${screenshotsDir}`);
    
  } catch (error) {
    console.error('❌ Error capturing slides:', error);
    console.error('Error details:', error.message);
  } finally {
    // Keep browser open for a moment so you can see the final state
    await new Promise(resolve => setTimeout(resolve, 2000));
    await browser.close();
  }
}

// Run the capture
captureAllSlides().catch(console.error);