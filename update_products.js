const fs = require('fs');

const productsFile = 'src/lib/products.js';
let content = fs.readFileSync(productsFile, 'utf8');

const imageMap = {
  "nomad-laptop-stand": [
    "/products/nomad-laptop-stand/ApexLaptopStand1.webp",
    "/products/nomad-laptop-stand/ApexLaptopStand2.webp",
    "/products/nomad-laptop-stand/ApexLaptopStand3.webp",
    "/products/nomad-laptop-stand/ApexLaptopStand4.webp",
    "/products/nomad-laptop-stand/ApexLaptopStand5.webp"
  ],
  "nomad-compact-keyboard": [
    "/products/nomad-compact-keyboard/PortableKeyboard1.webp",
    "/products/nomad-compact-keyboard/PortableKeyboard2.webp",
    "/products/nomad-compact-keyboard/PortableKeyboard3.webp",
    "/products/nomad-compact-keyboard/PortableKeyboard4.webp"
  ],
  "nomad-foldable-desk": [
    "/products/nomad-foldable-desk/LapDesk1.webp",
    "/products/nomad-foldable-desk/LapDesk2.webp",
    "/products/nomad-foldable-desk/LapDesk3.jpg",
    "/products/nomad-foldable-desk/LapDesk4.jpg"
  ],
  "nomad-monitor-light": [
    "/products/nomad-monitor-light/DeskLamp.webp",
    "/products/nomad-monitor-light/DeskLamp2.webp",
    "/products/nomad-monitor-light/DeskLamp3.webp",
    "/products/nomad-monitor-light/DeskLamp4.webp"
  ],
  "nomad-portable-charger": [
    "/products/nomad-portable-charger/PortableCharger.webp",
    "/products/nomad-portable-charger/PortableCharger2.webp",
    "/products/nomad-portable-charger/PortableCharger3.webp",
    "/products/nomad-portable-charger/PortableCharger4.webp"
  ],
  "nomad-portable-monitor": [
    "/products/nomad-portable-monitor/PortableMonitor1.webp",
    "/products/nomad-portable-monitor/PortableMonitor2.webp",
    "/products/nomad-portable-monitor/PortableMonitor3.webp",
    "/products/nomad-portable-monitor/PortableMonitor4.webp"
  ],
  "nomad-cable-organizer": [
    "/products/nomad-cable-organizer/TangleKit.webp",
    "/products/nomad-cable-organizer/TangleKit2.webp",
    "/products/nomad-cable-organizer/TangleKit3.webp"
  ],
  "nomad-travel-mousepad": [
    "/products/nomad-travel-mousepad/MousePad.webp",
    "/products/nomad-travel-mousepad/MousePad2.webp",
    "/products/nomad-travel-mousepad/MousePad3.webp",
    "/products/nomad-travel-mousepad/MousePad4.webp"
  ],
  "nomad-usbc-hub": [
    "/products/nomad-usbc-hub/USChub.webp",
    "/products/nomad-usbc-hub/USChub2.webp",
    "/products/nomad-usbc-hub/USChub3.webp",
    "/products/nomad-usbc-hub/USChub4.webp"
  ],
  "nomad-webcam-cover": [
    "/products/nomad-webcam-cover/WebcamCover.webp",
    "/products/nomad-webcam-cover/WebcamCover2.webp",
    "/products/nomad-webcam-cover/WebcamCover3.webp",
    "/products/nomad-webcam-cover/WebcamCover4.webp"
  ]
};

// parse the current JS to some degree, but let's just do simple regex replacements
for (const [id, images] of Object.entries(imageMap)) {
  const imageStr = JSON.stringify(images);
  const regex = new RegExp(`(id:\\s*"${id}",[\\s\\S]*?image:\\s*)"([^"]+)"`);
  // Replace the image line with image: images[0], images: [ ... ]
  content = content.replace(regex, `$1"${images[0]}",\n    images: ${imageStr}`);
}

fs.writeFileSync(productsFile, content);
console.log('Updated products.js');
