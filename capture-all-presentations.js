const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

// Configuration for each presentation
const presentations = [
  {
    name: 'business-plan',
    url: 'http://localhost:3000/presentation-app/business-plan',
    slides: 23,
    folder: 'business-plan-slides'
  },
  {
    name: 'technical-plan',
    url: 'http://localhost:3000/presentation-app/technical-plan',
    slides: 19,
    folder: 'technical-plan-slides'
  },
  {
    name: 'investor-pitch',
    url: 'http://localhost:3000/presentation-app/investor-pitch',
    slides: 20,
    folder: 'investor-pitch-slides'
  }
];

async function capturePresentation(page, presentation) {
  console.log(`\n📊 Starting capture for: ${presentation.name}`);
  console.log(`   Total slides: ${presentation.slides}`);
  
  // Create directory for this presentation
  const screenshotsDir = path.join(__dirname, 'presentation-screenshots', presentation.folder);
  if (!fs.existsSync(screenshotsDir)) {
    fs.mkdirSync(screenshotsDir, { recursive: true });
  }
  
  // Navigate to the presentation
  console.log('   Navigating to presentation...');
  await page.goto(presentation.url, {
    waitUntil: 'networkidle2',
    timeout: 30000
  });
  
  // Check if we need to authenticate
  const needsAuth = await page.$('input[type="password"]');
  
  if (needsAuth) {
    console.log('   Authenticating...');
    await page.type('input[type="password"]', 'koti2025');
    await page.click('button:last-child');
    await new Promise(resolve => setTimeout(resolve, 3000));
  }
  
  // Capture all slides
  for (let i = 1; i <= presentation.slides; i++) {
    process.stdout.write(`   Capturing slide ${i}/${presentation.slides}...`);
    
    // Wait for slide to fully render
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Take screenshot
    const filename = `${presentation.name}-slide-${String(i).padStart(2, '0')}.png`;
    const screenshotPath = path.join(screenshotsDir, filename);
    
    await page.screenshot({ 
      path: screenshotPath,
      fullPage: false
    });
    
    console.log(` ✓`);
    
    // Go to next slide (except for the last one)
    if (i < presentation.slides) {
      await page.keyboard.press('ArrowRight');
      await new Promise(resolve => setTimeout(resolve, 1000)); // Wait for transition
    }
  }
  
  console.log(`   ✅ Captured all ${presentation.slides} slides for ${presentation.name}`);
  console.log(`   📁 Saved in: ${screenshotsDir}`);
}

async function captureAllPresentations() {
  console.log('🚀 Starting automated slide capture for all presentations');
  console.log('================================================');
  
  const browser = await puppeteer.launch({ 
    headless: false, // Set to true for headless mode
    defaultViewport: {
      width: 1920,
      height: 1080
    },
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  const page = await browser.newPage();
  
  try {
    // Set a custom user agent to avoid detection issues
    await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36');
    
    // Capture each presentation
    for (const presentation of presentations) {
      await capturePresentation(page, presentation);
    }
    
    console.log('\n================================================');
    console.log('🎉 All presentations captured successfully!');
    console.log(`📁 Screenshots saved in: ${path.join(__dirname, 'presentation-screenshots')}`);
    
    // Create an index HTML file to view all screenshots
    await createIndexHTML();
    
  } catch (error) {
    console.error('\n❌ Error capturing slides:', error);
  } finally {
    await browser.close();
  }
}

// Create an HTML index file to easily view all screenshots
async function createIndexHTML() {
  const baseDir = path.join(__dirname, 'presentation-screenshots');
  let html = `<!DOCTYPE html>
<html>
<head>
    <title>Koti Presentation Screenshots</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 20px; background: #f5f5f5; }
        h1 { color: #5daa80; }
        h2 { color: #333; margin-top: 30px; }
        .presentation { margin-bottom: 40px; }
        .slides { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 20px; }
        .slide { background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
        .slide img { width: 100%; height: auto; display: block; }
        .slide-number { padding: 10px; text-align: center; font-weight: bold; color: #666; }
    </style>
</head>
<body>
    <h1>Koti Presentation Screenshots</h1>
`;

  for (const presentation of presentations) {
    html += `<div class="presentation">
        <h2>${presentation.name.replace('-', ' ').toUpperCase()} (${presentation.slides} slides)</h2>
        <div class="slides">`;
    
    const dir = path.join(baseDir, presentation.folder);
    if (fs.existsSync(dir)) {
      const files = fs.readdirSync(dir).sort();
      for (const file of files) {
        if (file.endsWith('.png')) {
          const slideNum = file.match(/\d+/)[0];
          html += `
            <div class="slide">
                <img src="${presentation.folder}/${file}" alt="${file}">
                <div class="slide-number">Slide ${parseInt(slideNum)}</div>
            </div>`;
        }
      }
    }
    
    html += `</div></div>`;
  }

  html += `
    <p style="margin-top: 40px; color: #666; text-align: center;">
        Generated on ${new Date().toLocaleString()}
    </p>
</body>
</html>`;

  const indexPath = path.join(baseDir, 'index.html');
  fs.writeFileSync(indexPath, html);
  console.log(`\n📄 Index HTML created: ${indexPath}`);
  console.log('   Open this file in a browser to view all screenshots easily!');
}

// Check if user wants a specific presentation or all
const args = process.argv.slice(2);
if (args.length > 0 && args[0] === '--help') {
  console.log(`
Usage: node capture-all-presentations.js [options]

Options:
  --help          Show this help message
  --headless      Run in headless mode (no browser window)
  
Without options, captures all presentations in windowed mode.
  `);
  process.exit(0);
}

// Run the capture
captureAllPresentations().catch(console.error);