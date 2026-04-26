const products = [
  {
    id: "nomad-laptop-stand",
    name: "Apex Laptop Stand",
    price: 59.99,
    category: "Stands",
    description:
      "Ergonomic aluminum laptop stand with adjustable height and angle. Folds flat for easy packing in any backpack.",
    image: "/products/nomad-laptop-stand/ApexLaptopStand1.webp",
    images: ["/products/nomad-laptop-stand/ApexLaptopStand1.webp","/products/nomad-laptop-stand/ApexLaptopStand2.webp","/products/nomad-laptop-stand/ApexLaptopStand3.webp","/products/nomad-laptop-stand/ApexLaptopStand4.webp","/products/nomad-laptop-stand/ApexLaptopStand5.webp"],
  },
  {
    id: "nomad-portable-monitor",
    name: "VoyagerView 15.6\" Portable Monitor",
    price: 149.99,
    category: "Monitors",
    description:
      "Ultra-slim 1080p IPS portable monitor with USB-C and mini-HDMI. Your second screen, anywhere in the world.",
    image: "/products/nomad-portable-monitor/PortableMonitor1.webp",
    images: ["/products/nomad-portable-monitor/PortableMonitor1.webp","/products/nomad-portable-monitor/PortableMonitor2.webp","/products/nomad-portable-monitor/PortableMonitor3.webp","/products/nomad-portable-monitor/PortableMonitor4.webp"],
  },
  {
    id: "nomad-compact-keyboard",
    name: "KeyLite Compact Keyboard",
    price: 49.99,
    category: "Keyboards",
    description:
      "Low-profile mechanical keyboard with Bluetooth 5.0 and a rechargeable battery that lasts up to 3 months.",
    image: "/products/nomad-compact-keyboard/PortableKeyboard1.webp",
    images: ["/products/nomad-compact-keyboard/PortableKeyboard1.webp","/products/nomad-compact-keyboard/PortableKeyboard2.webp","/products/nomad-compact-keyboard/PortableKeyboard3.webp","/products/nomad-compact-keyboard/PortableKeyboard4.webp"],
  },
  {
    id: "nomad-cable-organizer",
    name: "TangleFree Cable Kit",
    price: 19.99,
    category: "Accessories",
    description:
      "Set of 6 silicone cable clips and a roll-up organizer pouch. Keep every cable tidy and tangle-free on the go.",
    image: "/products/nomad-cable-organizer/TangleKit.webp",
    images: ["/products/nomad-cable-organizer/TangleKit.webp","/products/nomad-cable-organizer/TangleKit2.webp","/products/nomad-cable-organizer/TangleKit3.webp"],
  },
  {
    id: "nomad-usbc-hub",
    name: "HubMax 8-in-1 USB-C Hub",
    price: 44.99,
    category: "Hubs",
    description:
      "Compact USB-C hub with HDMI 4K, 3× USB-A, SD/microSD, and 100W pass-through charging in a palm-sized shell.",
    image: "/products/nomad-usbc-hub/USChub.webp",
    images: ["/products/nomad-usbc-hub/USChub.webp","/products/nomad-usbc-hub/USChub2.webp","/products/nomad-usbc-hub/USChub3.webp","/products/nomad-usbc-hub/USChub4.webp"],
  },
  {
    id: "nomad-travel-mousepad",
    name: "GlidePad Travel Mouse Pad",
    price: 24.99,
    category: "Accessories",
    description:
      "Premium microfiber mouse pad that rolls up and secures with a magnetic snap. Fits in your pocket.",
    image: "/products/nomad-travel-mousepad/MousePad.webp",
    images: ["/products/nomad-travel-mousepad/MousePad.webp","/products/nomad-travel-mousepad/MousePad2.webp","/products/nomad-travel-mousepad/MousePad3.webp","/products/nomad-travel-mousepad/MousePad4.webp"],
  },
  {
    id: "nomad-portable-charger",
    name: "PowerVault 20K Portable Charger",
    price: 39.99,
    category: "Chargers",
    description:
      "20,000 mAh power bank with dual USB-C PD ports and an LED display. Charge your laptop and phone simultaneously.",
    image: "/products/nomad-portable-charger/PortableCharger.webp",
    images: ["/products/nomad-portable-charger/PortableCharger.webp","/products/nomad-portable-charger/PortableCharger2.webp","/products/nomad-portable-charger/PortableCharger3.webp","/products/nomad-portable-charger/PortableCharger4.webp"],
  },
  {
    id: "nomad-monitor-light",
    name: "LumiBar Monitor Light",
    price: 34.99,
    category: "Lighting",
    description:
      "Clip-on monitor light bar with adjustable color temperature and brightness. Zero screen glare, pure focus.",
    image: "/products/nomad-monitor-light/DeskLamp.webp",
    images: ["/products/nomad-monitor-light/DeskLamp.webp","/products/nomad-monitor-light/DeskLamp2.webp","/products/nomad-monitor-light/DeskLamp3.webp","/products/nomad-monitor-light/DeskLamp4.webp"],
  },
  {
    id: "nomad-foldable-desk",
    name: "FlexDesk Foldable Lap Desk",
    price: 69.99,
    category: "Desks",
    description:
      "Bamboo lap desk with built-in phone slot and wrist rest. Folds in half for easy carry between cafés and co-working spaces.",
    image: "/products/nomad-foldable-desk/LapDesk1.webp",
    images: ["/products/nomad-foldable-desk/LapDesk1.webp","/products/nomad-foldable-desk/LapDesk2.webp","/products/nomad-foldable-desk/LapDesk3.jpg","/products/nomad-foldable-desk/LapDesk4.jpg"],
  },
  {
    id: "nomad-webcam-cover",
    name: "StealthSlide Webcam Cover (3-Pack)",
    price: 9.99,
    category: "Privacy",
    description:
      "Ultra-thin sliding webcam covers that fit any laptop. Protect your privacy without compromising your camera quality.",
    image: "/products/nomad-webcam-cover/WebcamCover.webp",
    images: ["/products/nomad-webcam-cover/WebcamCover.webp","/products/nomad-webcam-cover/WebcamCover2.webp","/products/nomad-webcam-cover/WebcamCover3.webp","/products/nomad-webcam-cover/WebcamCover4.webp"],
  },
];

export function getAllProducts() {
  return products;
}

export function getProductById(id) {
  return products.find((p) => p.id === id) || null;
}

export function getFeaturedProducts() {
  return products.slice(0, 4);
}

export function getRelatedProducts(currentId, count = 3) {
  return products.filter((p) => p.id !== currentId).slice(0, count);
}
