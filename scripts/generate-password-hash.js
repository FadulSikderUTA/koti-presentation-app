const CryptoJS = require('crypto-js');

/**
 * Password Hash Generator for Koti Presentation
 * Usage: node scripts/generate-password-hash.js [password]
 */

function generatePasswordHash(password) {
  if (!password) {
    console.error('❌ Error: Please provide a password');
    console.log('Usage: node scripts/generate-password-hash.js [your-password]');
    process.exit(1);
  }

  const hash = CryptoJS.SHA256(password).toString();
  
  console.log('\n🔐 Password Hash Generated Successfully!');
  console.log('==========================================');
  console.log(`Password: ${password}`);
  console.log(`SHA256 Hash: ${hash}`);
  console.log('\n📝 Add this to your environment variables:');
  console.log(`NEXT_PUBLIC_ENCRYPTED_PASSWORD=${hash}`);
  console.log('\n🚀 For Vercel deployment, add this environment variable in your Vercel dashboard.');
  console.log('⚠️  Keep this hash secure and do not commit it to version control.');
  
  return hash;
}

// Get password from command line arguments
const password = process.argv[2];

if (!password) {
  console.log('🔐 Koti Password Hash Generator');
  console.log('==============================');
  console.log('This script generates SHA256 hashes for your presentation password.\n');
  console.log('Usage: node scripts/generate-password-hash.js [your-password]');
  console.log('Example: node scripts/generate-password-hash.js mySecurePassword123');
  process.exit(1);
}

generatePasswordHash(password);