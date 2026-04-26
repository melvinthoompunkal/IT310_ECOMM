const fs = require('fs');
const path = require('path');

const picturesDir = path.join(__dirname, 'Pictures');
const publicProductsDir = path.join(__dirname, 'public', 'products');

const mapping = {
  "Apex_Laptop_Stand": "nomad-laptop-stand",
  "KeyLite_Compact_Keyboard": "nomad-compact-keyboard",
  "Lap_Desk": "nomad-foldable-desk",
  "Monitor_Light": "nomad-monitor-light",
  "Portable_Charger": "nomad-portable-charger",
  "Portable_Monitor": "nomad-portable-monitor",
  "TangleFree_Cable_Kit": "nomad-cable-organizer",
  "Travel_Mouse_Pad": "nomad-travel-mousepad",
  "USB-C_Hub": "nomad-usbc-hub",
  "Webcam_Cover": "nomad-webcam-cover"
};

// Create public/products dir if it doesn't exist
if (!fs.existsSync(publicProductsDir)) {
  fs.mkdirSync(publicProductsDir, { recursive: true });
}

const productImagesMap = {};

for (const [folderName, productId] of Object.entries(mapping)) {
  const sourceFolder = path.join(picturesDir, folderName);
  const destFolder = path.join(publicProductsDir, productId);
  
  if (!fs.existsSync(destFolder)) {
    fs.mkdirSync(destFolder, { recursive: true });
  }

  if (fs.existsSync(sourceFolder)) {
    const files = fs.readdirSync(sourceFolder).filter(file => file.endsWith('.webp') || file.endsWith('.png') || file.endsWith('.jpg'));
    const imagePaths = [];

    // Sort files to ensure predictable order
    files.sort();

    files.forEach((file) => {
      const sourceFile = path.join(sourceFolder, file);
      const destFile = path.join(destFolder, file);
      fs.copyFileSync(sourceFile, destFile);
      imagePaths.push(`/products/${productId}/${file}`);
    });

    productImagesMap[productId] = imagePaths;
  }
}

console.log(JSON.stringify(productImagesMap, null, 2));
