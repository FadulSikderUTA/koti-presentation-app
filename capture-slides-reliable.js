const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

async function captureAllSlides() {
  console.log('🚀 Starting reliable slide capture process...');
  console.log('================================================\n');
  
  // Create screenshots directory
  const screenshotsDir = path.join(__dirname, 'presentation-screenshots-working');
  if (!fs.existsSync(screenshotsDir)) {
    fs.mkdirSync(screenshotsDir, { recursive: true });
  }

  const browser = await puppeteer.launch({ 
    headless: false, // Keep visible to debug
    defaultViewport: {
      width: 1920,
      height: 1080
    },
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  const page = await browser.newPage();
  
  try {
    // Step 1: Go to main page first
    console.log('Step 1: Navigating to main page for authentication...');
    await page.goto('http://localhost:3000/presentation-app', {
      waitUntil: 'networkidle0',
      timeout: 30000
    });
    
    // Small wait for React to mount
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Step 2: Check and handle authentication
    let isAuthenticated = false;
    
    // Check if password field exists
    const hasPasswordField = await page.evaluate(() => {
      return document.querySelector('input[type="password"]') !== null;
    });
    
    if (hasPasswordField) {
      console.log('Step 2: Password required. Authenticating...');
      
      // Type password
      await page.type('input[type="password"]', 'koti2025', { delay: 50 });
      
      // Small wait for input to register
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Find and click the Access button
      await page.evaluate(() => {
        const buttons = Array.from(document.querySelectorAll('button'));
        const accessButton = buttons.find(btn => 
          btn.textContent.includes('Access') || 
          btn.textContent.includes('Submit')
        );
        if (accessButton && !accessButton.disabled) {
          accessButton.click();
        }
      });
      
      // Wait for page to change after authentication
      console.log('   Waiting for authentication to complete...');
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      // Verify we're authenticated by checking if we're on the hub page
      const isOnHub = await page.evaluate(() => {
        // Check for presentation cards or links
        return document.querySelector('a[href*="technical-plan"]') !== null ||
               document.querySelector('[href*="business-plan"]') !== null;
      });
      
      if (isOnHub) {
        console.log('   ✓ Authentication successful! On presentation hub.');
        isAuthenticated = true;
      }
    } else {
      // Already authenticated
      console.log('Step 2: Already authenticated or no auth required.');
      isAuthenticated = true;
    }
    
    // Step 3: Navigate to technical presentation
    console.log('\nStep 3: Navigating to Technical Presentation...');
    
    // Method 1: Try clicking the link
    const linkClicked = await page.evaluate(() => {
      const link = document.querySelector('a[href*="technical-plan"]');
      if (link) {
        link.click();
        return true;
      }
      return false;
    });
    
    if (linkClicked) {
      console.log('   Clicked Technical Architecture link...');
      await new Promise(resolve => setTimeout(resolve, 3000));
    } else {
      // Method 2: Direct navigation
      console.log('   Navigating directly to technical presentation...');
      await page.goto('http://localhost:3000/presentation-app/technical-plan', {
        waitUntil: 'networkidle0'
      });
      await new Promise(resolve => setTimeout(resolve, 2000));
    }
    
    // Step 4: Check if we need to authenticate again (session might have expired)
    const needsAuthAgain = await page.evaluate(() => {
      return document.querySelector('input[type="password"]') !== null;
    });
    
    if (needsAuthAgain) {
      console.log('   Session expired. Re-authenticating...');
      await page.type('input[type="password"]', 'koti2025', { delay: 50 });
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Click submit
      await page.evaluate(() => {
        const buttons = Array.from(document.querySelectorAll('button'));
        const submitBtn = buttons.find(b => !b.disabled);
        if (submitBtn) submitBtn.click();
      });
      
      await new Promise(resolve => setTimeout(resolve, 4000));
    }
    
    // Step 5: Verify we're on the presentation
    console.log('\nStep 4: Verifying presentation loaded...');
    const presentationStatus = await page.evaluate(() => {
      return {
        hasSlideContainer: document.querySelector('.presentation-slide') !== null,
        hasPdfContainer: document.querySelector('.pdf-container') !== null,
        hasPasswordInput: document.querySelector('input[type="password"]') !== null,
        hasCanvas: document.querySelector('canvas') !== null,
        bodyText: document.body.innerText.substring(0, 100),
        slideCount: document.querySelectorAll('.presentation-slide').length
      };
    });
    
    console.log('   Presentation status:', {
      hasSlides: presentationStatus.hasSlideContainer,
      hasPdfContainer: presentationStatus.hasPdfContainer,
      stillNeedsPassword: presentationStatus.hasPasswordInput,
      slideCount: presentationStatus.slideCount
    });
    
    if (presentationStatus.hasPasswordInput && !presentationStatus.hasSlideContainer) {
      console.error('\n❌ ERROR: Still on password page!');
      console.log('Debugging info:', presentationStatus.bodyText);
      console.log('\nTroubleshooting:');
      console.log('1. Make sure the server is running: npm run dev');
      console.log('2. Try opening http://localhost:3000/presentation-app manually');
      console.log('3. Verify the password is: koti2025');
      return;
    }
    
    // Step 6: Start capturing slides
    const totalSlides = 19;
    console.log(`\n✅ Presentation loaded! Starting capture of ${totalSlides} slides...`);
    console.log('================================================\n');
    
    for (let i = 1; i <= totalSlides; i++) {
      process.stdout.write(`📸 Capturing slide ${i}/${totalSlides}...`);
      
      // Longer wait for first slide to ensure everything is loaded
      if (i === 1) {
        await new Promise(resolve => setTimeout(resolve, 3000));
      } else {
        await new Promise(resolve => setTimeout(resolve, 2000));
      }
      
      // Take screenshot
      const filename = `technical-slide-${String(i).padStart(2, '0')}.png`;
      const screenshotPath = path.join(screenshotsDir, filename);
      
      await page.screenshot({ 
        path: screenshotPath,
        fullPage: false,
        captureBeyondViewport: false
      });
      
      // Get file size to verify it was saved
      const stats = fs.statSync(screenshotPath);
      const fileSizeKB = Math.round(stats.size / 1024);
      
      console.log(` ✓ (${fileSizeKB}KB)`);
      
      // Navigate to next slide
      if (i < totalSlides) {
        await page.keyboard.press('ArrowRight');
        await new Promise(resolve => setTimeout(resolve, 1200));
      }
    }
    
    console.log('\n================================================');
    console.log('🎉 SUCCESS! All slides captured!');
    console.log(`📁 Location: ${screenshotsDir}`);
    console.log(`📊 Total slides: ${totalSlides}`);
    
    // List all files
    const files = fs.readdirSync(screenshotsDir);
    console.log(`📄 Files created: ${files.length} PNG files`);
    
  } catch (error) {
    console.error('\n❌ Fatal error:', error.message);
    console.error('Stack trace:', error.stack);
  } finally {
    console.log('\nClosing browser in 3 seconds...');
    await new Promise(resolve => setTimeout(resolve, 3000));
    await browser.close();
  }
}

// Run with error handling
console.clear();
captureAllSlides()
  .then(() => console.log('\n✅ Script completed successfully!'))
  .catch(err => console.error('\n❌ Script failed:', err));