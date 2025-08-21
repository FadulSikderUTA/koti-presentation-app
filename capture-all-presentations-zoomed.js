const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

// Configuration for each presentation
const presentations = [
  {
    name: 'business-plan',
    url: 'http://localhost:3000/presentation-app/business-plan',
    slides: 23,
    folder: 'business-plan-150zoom',
    linkText: 'business-plan'
  },
  {
    name: 'technical-plan',
    url: 'http://localhost:3000/presentation-app/technical-plan',
    slides: 19,
    folder: 'technical-plan-150zoom',
    linkText: 'technical-plan'
  },
  {
    name: 'investor-pitch',
    url: 'http://localhost:3000/presentation-app/investor-pitch',
    slides: 20,
    folder: 'investor-pitch-150zoom',
    linkText: 'investor-pitch'
  }
];

async function capturePresentation(page, presentation, isFirstPresentation) {
  console.log(`\n📊 Starting capture for: ${presentation.name.toUpperCase()}`);
  console.log(`   Total slides: ${presentation.slides}`);
  console.log(`   Zoom level: 150%`);
  
  // Create directory for this presentation
  const screenshotsDir = path.join(__dirname, 'all-presentations-150zoom', presentation.folder);
  if (!fs.existsSync(screenshotsDir)) {
    fs.mkdirSync(screenshotsDir, { recursive: true });
  }
  
  // If not the first presentation, go back to hub first
  if (!isFirstPresentation) {
    console.log('   Navigating back to presentation hub...');
    await page.goto('http://localhost:3000/presentation-app', {
      waitUntil: 'networkidle0'
    });
    await new Promise(resolve => setTimeout(resolve, 2000));
  }
  
  // Navigate to the specific presentation
  console.log(`   Navigating to ${presentation.name}...`);
  
  // Try clicking the link first
  const linkClicked = await page.evaluate((linkText) => {
    const link = document.querySelector(`a[href*="${linkText}"]`);
    if (link) {
      link.click();
      return true;
    }
    return false;
  }, presentation.linkText);
  
  if (linkClicked) {
    console.log('   Clicked presentation link, waiting for load...');
    await new Promise(resolve => setTimeout(resolve, 3000));
  } else {
    // Direct navigation as fallback
    await page.goto(presentation.url, {
      waitUntil: 'networkidle0'
    });
    await new Promise(resolve => setTimeout(resolve, 2000));
  }
  
  // Check if authentication is needed (shouldn't be after first presentation)
  const needsAuth = await page.$('input[type="password"]');
  if (needsAuth) {
    console.log('   Re-authenticating...');
    await page.type('input[type="password"]', 'koti2025', { delay: 50 });
    await new Promise(resolve => setTimeout(resolve, 500));
    
    await page.evaluate(() => {
      const buttons = Array.from(document.querySelectorAll('button'));
      const submitBtn = buttons.find(b => !b.disabled);
      if (submitBtn) submitBtn.click();
    });
    
    await new Promise(resolve => setTimeout(resolve, 3000));
  }
  
  // Ensure zoom is set to 150%
  await page.evaluate(() => {
    document.body.style.zoom = '150%';
  });
  
  // Also use CDP for more reliable zoom
  try {
    const client = await page.target().createCDPSession();
    await client.send('Emulation.setPageScaleFactor', { pageScaleFactor: 1.5 });
  } catch (e) {
    console.log('   Note: CDP zoom method not available, using CSS zoom only');
  }
  
  // Wait for zoom to apply
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  // Verify presentation loaded
  const status = await page.evaluate(() => {
    return {
      hasSlides: document.querySelector('.presentation-slide') !== null,
      slideCount: document.querySelectorAll('.presentation-slide').length
    };
  });
  
  console.log(`   ✓ Presentation loaded with ${status.slideCount} slides`);
  
  // Capture all slides
  for (let i = 1; i <= presentation.slides; i++) {
    process.stdout.write(`   📸 Slide ${i}/${presentation.slides}...`);
    
    // Wait for slide to render
    if (i === 1) {
      await new Promise(resolve => setTimeout(resolve, 2500));
    } else {
      await new Promise(resolve => setTimeout(resolve, 2000));
    }
    
    // Take screenshot
    const filename = `${presentation.name}-slide-${String(i).padStart(2, '0')}.png`;
    const screenshotPath = path.join(screenshotsDir, filename);
    
    await page.screenshot({ 
      path: screenshotPath,
      fullPage: false
    });
    
    const stats = fs.statSync(screenshotPath);
    const fileSizeKB = Math.round(stats.size / 1024);
    console.log(` ✓ (${fileSizeKB}KB)`);
    
    // Go to next slide
    if (i < presentation.slides) {
      await page.keyboard.press('ArrowRight');
      await new Promise(resolve => setTimeout(resolve, 1200));
    }
  }
  
  console.log(`   ✅ Captured all ${presentation.slides} slides for ${presentation.name}`);
}

async function captureAllPresentations() {
  console.log('🚀 Starting automated capture for ALL presentations at 150% zoom');
  console.log('================================================================\n');
  
  const browser = await puppeteer.launch({ 
    headless: false, // Keep visible to monitor progress
    defaultViewport: {
      width: 1920,
      height: 1080
    },
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  const page = await browser.newPage();
  
  try {
    // Initial authentication
    console.log('🔐 Initial authentication...');
    await page.goto('http://localhost:3000/presentation-app', {
      waitUntil: 'networkidle0'
    });
    
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Check and handle authentication
    const hasPasswordField = await page.evaluate(() => {
      return document.querySelector('input[type="password"]') !== null;
    });
    
    if (hasPasswordField) {
      console.log('   Entering password...');
      await page.type('input[type="password"]', 'koti2025', { delay: 50 });
      await new Promise(resolve => setTimeout(resolve, 500));
      
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
      
      console.log('   Waiting for authentication...');
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      console.log('   ✓ Authentication successful!\n');
    }
    
    // Set initial zoom
    console.log('🔍 Setting zoom to 150%...');
    await page.evaluate(() => {
      document.body.style.zoom = '150%';
    });
    
    try {
      const client = await page.target().createCDPSession();
      await client.send('Emulation.setPageScaleFactor', { pageScaleFactor: 1.5 });
      console.log('   ✓ Zoom set successfully\n');
    } catch (e) {
      console.log('   ✓ CSS zoom applied\n');
    }
    
    // Capture each presentation
    for (let idx = 0; idx < presentations.length; idx++) {
      await capturePresentation(page, presentations[idx], idx === 0);
    }
    
    // Create summary
    console.log('\n================================================================');
    console.log('🎉 SUCCESS! All presentations captured at 150% zoom!');
    console.log('================================================================\n');
    
    const baseDir = path.join(__dirname, 'all-presentations-150zoom');
    console.log('📁 Screenshots saved in:', baseDir);
    console.log('\n📊 Summary:');
    
    let totalSlides = 0;
    for (const pres of presentations) {
      const presDir = path.join(baseDir, pres.folder);
      if (fs.existsSync(presDir)) {
        const files = fs.readdirSync(presDir).filter(f => f.endsWith('.png'));
        console.log(`   • ${pres.name}: ${files.length} slides`);
        totalSlides += files.length;
      }
    }
    
    console.log(`\n   Total: ${totalSlides} slides captured`);
    console.log('   Zoom: 150% for all slides');
    
    // Create HTML viewer
    await createHTMLViewer(baseDir);
    
  } catch (error) {
    console.error('\n❌ Fatal error:', error.message);
    console.error('Stack trace:', error.stack);
  } finally {
    console.log('\nClosing browser in 3 seconds...');
    await new Promise(resolve => setTimeout(resolve, 3000));
    await browser.close();
  }
}

async function createHTMLViewer(baseDir) {
  let html = `<!DOCTYPE html>
<html>
<head>
    <title>Koti Presentations - 150% Zoom</title>
    <style>
        body { 
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif; 
            margin: 0; 
            padding: 20px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
        }
        .container {
            max-width: 1400px;
            margin: 0 auto;
            background: white;
            border-radius: 20px;
            padding: 30px;
            box-shadow: 0 20px 40px rgba(0,0,0,0.1);
        }
        h1 { 
            color: #333;
            text-align: center;
            margin-bottom: 10px;
            font-size: 2.5em;
        }
        .subtitle {
            text-align: center;
            color: #666;
            margin-bottom: 30px;
            font-size: 1.2em;
        }
        h2 { 
            color: #5daa80; 
            margin-top: 40px;
            padding-bottom: 10px;
            border-bottom: 2px solid #5daa80;
        }
        .presentation { 
            margin-bottom: 50px; 
        }
        .slides { 
            display: grid; 
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); 
            gap: 20px; 
            margin-top: 20px;
        }
        .slide { 
            background: white; 
            border-radius: 12px; 
            overflow: hidden; 
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
            transition: transform 0.3s, box-shadow 0.3s;
            cursor: pointer;
        }
        .slide:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 12px rgba(0,0,0,0.15);
        }
        .slide img { 
            width: 100%; 
            height: auto; 
            display: block; 
        }
        .slide-number { 
            padding: 12px; 
            text-align: center; 
            font-weight: 600; 
            color: #555;
            background: #f8f9fa;
            font-size: 0.9em;
        }
        .stats {
            display: flex;
            justify-content: space-around;
            margin: 30px 0;
            padding: 20px;
            background: #f8f9fa;
            border-radius: 10px;
        }
        .stat {
            text-align: center;
        }
        .stat-number {
            font-size: 2em;
            font-weight: bold;
            color: #5daa80;
        }
        .stat-label {
            color: #666;
            margin-top: 5px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Koti Presentation Screenshots</h1>
        <div class="subtitle">All slides captured at 150% zoom for better visibility</div>
        
        <div class="stats">
            <div class="stat">
                <div class="stat-number">3</div>
                <div class="stat-label">Presentations</div>
            </div>
            <div class="stat">
                <div class="stat-number">62</div>
                <div class="stat-label">Total Slides</div>
            </div>
            <div class="stat">
                <div class="stat-number">150%</div>
                <div class="stat-label">Zoom Level</div>
            </div>
        </div>
`;

  for (const presentation of presentations) {
    const cleanName = presentation.name.replace(/-/g, ' ').toUpperCase();
    html += `
        <div class="presentation">
            <h2>${cleanName} (${presentation.slides} slides)</h2>
            <div class="slides">`;
    
    const dir = path.join(baseDir, presentation.folder);
    if (fs.existsSync(dir)) {
      const files = fs.readdirSync(dir).filter(f => f.endsWith('.png')).sort();
      for (const file of files) {
        const slideNum = file.match(/\d+/)[0];
        html += `
                <div class="slide" onclick="window.open('${presentation.folder}/${file}', '_blank')">
                    <img src="${presentation.folder}/${file}" alt="${file}" loading="lazy">
                    <div class="slide-number">Slide ${parseInt(slideNum)}</div>
                </div>`;
      }
    }
    
    html += `
            </div>
        </div>`;
  }

  html += `
        <p style="margin-top: 40px; color: #666; text-align: center; font-size: 0.9em;">
            Generated on ${new Date().toLocaleString()} | Click any slide to view full size
        </p>
    </div>
</body>
</html>`;

  const indexPath = path.join(baseDir, 'index.html');
  fs.writeFileSync(indexPath, html);
  console.log(`\n📄 HTML viewer created: ${indexPath}`);
  console.log('   Open this file in a browser to view all screenshots!');
}

// Run the script
console.clear();
captureAllPresentations()
  .then(() => console.log('\n✅ All done! Script completed successfully!'))
  .catch(err => console.error('\n❌ Script failed:', err));