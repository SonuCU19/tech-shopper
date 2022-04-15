const Product = require("./models/product");

const products = [
  {
    name: "ASUS ZenBook Flip 13",
    price: 82990.0,
    desc: `Free upgrade to Windows 11 when available. Disclaimer-Upgrade rollout plan is being finalized and is scheduled to begin late in 2021 and continue into 2022. Specific timing will vary by device.
           Processor: 11th Gen Intel Core i5-1135G7 Processor, 2.4 GHz Base Speed, Up to 4.2 GHz Turbo Boost Speed, 4 Cores, 8 Threads, 6MB Cache.
           Memory & Storage: 8GB onboard LPDDR4X 4266MHz RAM with | Storage: 512GB M.2 NVMe PCIe SSD + 32GB Optane Memory.
           Graphics: Integrated Intel Iris Xᵉ Graphics`,
    img: "https://res.cloudinary.com/dgg6kudxc/image/upload/v1647348364/Tech-Ecommerce/home-laptop_xfdast.png",
    type: "Laptops",
    category: "swiper",
  },
  {
    name: "boAt Airdopes 441",
    price: 2000,
    desc: `Keep yourself plugged all day as the Airdopes 441 provide Talk time/music time - 5 Hours per bud, Charging Time : 1.5 Hours, Standby Time : 70 Hours
           It is equipped with IWP (Insta Wake N’ Pair) Technology that powers on the earbuds and puts them into connection mode as soon as one opens the lid of the carry case
           TWS Airdopes 441 offers true wireless experience with latest Bluetooth v5.0
           It is IPX7 rated for resistance against water and sweat to provide a carefree listening experience`,
    img: "https://res.cloudinary.com/dgg6kudxc/image/upload/v1647348383/Tech-Ecommerce/home-earbud_zj1b8g.png",
    type: "Headphones",
    category: "swiper",
  },
  {
    name: "Apple iPhone 13 Mini (128GB)",
    price: 68000,
    desc:  `13 cm (5.4-inch) Super Retina XDR display
            Cinematic mode adds shallow depth of field and shifts focus automatically in your videos
            Advanced dual-camera system with 12MP Wide and Ultra Wide cameras; Photographic Styles, Smart HDR 4, Night mode, 4K Dolby Vision HDR recording
            12MP TrueDepth front camera with Night mode, 4K Dolby Vision HDR recording
            A15 Bionic chip for lightning-fast performance
            Up to 17 hours of video playback
            Durable design with Ceramic Shield`,
    img: "https://res.cloudinary.com/dgg6kudxc/image/upload/v1647348374/Tech-Ecommerce/home-phone_um7dx3.png",
    type: "Phones",
    category: "swiper",
  },
  {
    name: "OPPO A31 (Mystery Black, 6GB RAM, 128GB Storage)",
    price: 13000,
    desc: `12+2+2MP triple rear camera (12MP main camera+2MP macro lens+2MP depth camera) with Portrait bokeh, macro lens, dazzle color mode, AI beautification | 8MP front camera. OTG : Supported NFC : No
           16.5 centimeters (6.5-inch) waterdrop multi touch screen with an 89% screen to body ratio | 1600 x 720 pixels resolution, 269 ppi pixel density
           Memory, Storage & SIM: 6GB RAM | 128GB internal memory expandable up to 256GB | Dual SIM (nano+nano) dual-standby (4G+4G)
           Android Pie v9.0 based on ColorOS 6.1 operating system with 2.3GHz Mediatek 6765 octa core processor, IMG GE8320
           4230mAH lithium-polymer battery providing talk-time of 45 hours and standby time of 450 hours`,
    img: "https://res.cloudinary.com/dgg6kudxc/image/upload/v1647350961/Tech-Ecommerce/product-1_nupe1x.png",
    type: "Phones",
    category: "new",
  },
  {
    name: "boAt Rockerz 370 Bluetooth Wireless On Ear Headphone",
    price: 1000,
    desc: `Battery: Rockerz 370 offers a playback time of up to 12 hours.. Frequency Response 20Hz-20KHz,Sensitivity (dB) 79dB±3DB,Impedance 32Ω. Driver Type:Moving Coil Driver
           Bluetooth: It has Bluetooth v5.0 with a range of 10m and is compatible with Android & iOS
           ANC: NA. No. of Mic: 1. Other Inclusions: Micro USB Charging Cable, Warranty Card, User Manual
           Lightweight Ergonomic Design with Easy Controls
           Instant Voice Assistant. Drivers: 40mm Drivers with boAt Signature Sound. Cozy Padded Earcups.`,
    img: "https://res.cloudinary.com/dgg6kudxc/image/upload/v1647351140/Tech-Ecommerce/product-2_qwo8gx.png",
    type: "Headphones",
    category: "new",
  },
  {
    name: "OPPO A31 (Fantasy White, 6GB RAM, 128GB Storage)",
    price: 13000,
    desc: `12+2+2MP triple rear camera (12MP main camera+2MP macro lens+2MP depth camera) with Portrait bokeh, macro lens, dazzle color mode, AI beautification | 8MP front camera
           16.5 centimeters (6.5-inch) waterdrop multi touch screen with an 89% screen to body ratio | 1600 x 720 pixels resolution, 269 ppi pixel density
           Memory, Storage & SIM: 6GB RAM | 128GB internal memory expandable up to 256GB | Dual SIM (nano+nano) dual-standby (4G+4G)
           Android Pie v9.0 based on ColorOS 6.1 operating system with 2.3GHz Mediatek 6765 octa core processor, IMG GE8320
           4230mAH lithium-polymer battery providing talk-time of 45 hours and standby time of 450 hours`,
    img: "https://res.cloudinary.com/dgg6kudxc/image/upload/v1647351140/Tech-Ecommerce/product-3_jusgvt.png",
    type: "Phones",
    category: "new",
  },
  {
    name: "Acer Extensa 15 Thin and Light Business Laptop",
    price: 75000,
    desc: `Fast and Easy Computing : Perfect budget laptop under 30000 for students and working professionals that helps get jobs done quickly and efficiently thanks to the AMD 3020e dual-core processor.
           Redefined Design and Light Weight :The latest Extensa Acer Laptop has been redesigned to be thinner and lighter than ever. With less than 20mm thin and with a weight of around 1.9kg, it can accompany you wherever you need to go
           Ease of Storage: 4 GB RAM Laptop with 256GB SSD helps easily store and share important projects and data`,
    img: "https://res.cloudinary.com/dgg6kudxc/image/upload/v1647361250/Tech-Ecommerce/product-4_fi09jv.png",
    type: "Laptops",
    category: "new",
  },
  {
    name: "Apple iPhone 13 (128GB) - Midnight",
    price: 75000,
    desc: `15 cm (6.1-inch) Super Retina XDR display
           Cinematic mode adds shallow depth of field and shifts focus automatically in your videos
           Advanced dual-camera system with 12MP Wide and Ultra Wide cameras; Photographic Styles, Smart HDR 4, Night mode, 4K Dolby Vision HDR recording
           12MP TrueDepth front camera with Night mode, 4K Dolby Vision HDR recording
           A15 Bionic chip for lightning-fast performance
           Up to 19 hours of video playback
           Durable design with Ceramic Shield`,
    img: "https://res.cloudinary.com/dgg6kudxc/image/upload/v1647351187/Tech-Ecommerce/product-5_itrvvs.png",
    type: "Phones",
    category: "new",
  },

  {
    name: "Cosmic Byte H11 Gaming headphone",
    price: 800,
    desc: `This Certified Refurbished product is tested to work and look like new with minimal to no signs of wear & tear; the product comes with relevant accessories and is backed by a minimum six month supplier backed warranty; box may be generic
           Driver size: 40mm, impedance: 32 ohms
           Suitable for PC, laptops, mobiles, PS4, Xbox One
           Single 3.5 mm audio mic jack
           Volume rocker`,
    img: "https://res.cloudinary.com/dgg6kudxc/image/upload/v1647351206/Tech-Ecommerce/product-6_n6yli4.png",
    type: "Headphones",
    category: "new",
  },

  {
    name: "Dell 15 (2021) AMD Ryzen 3",
    price: 39000,
    desc: `Processor: AMD Ryzen 3-3250U (2.60 GHz up to 3.50 GHz)
    RAM & Storage: 8GB DDR4 (2 DIMM Slots) & 256GB SSD
    Software: Win 11 + Office H&S 2021
    Display: 15.6" FHD WVA AG Narrow Border
    Port: "2x USB 3.2 Gen1 ,1x USB 2.0, HDMI 1.4b, SD Card reader, Audio jack
    WiFi & BT: 802.11ac 1x1 WiFi and Bluetooth`,
    img: "https://res.cloudinary.com/dgg6kudxc/image/upload/v1647351205/Tech-Ecommerce/product-8_kph4ai.png",
    type: "Laptops",
    category: "shop",
  },

  {
    name: "Samsung Galaxy S20 FE 5G",
    price: 40000,
    desc: `5G Ready powered by Qualcomm Snapdragon 865 Octa-Core processor, 8GB RAM, 128GB internal memory expandable up to 1TB, Android 11.0 operating system and dual SIM
    Triple Rear Camera Setup - 12MP (Dual Pixel) OIS F1.8 Wide Rear Camera + 8MP OIS Tele Camera + 12MP Ultra Wide | 30X Space Zoom, Single Take & Night Mode | 32MP F2.2 Front Punch Hole Camera
    6.5-inch(16.40 centimeters) Infinity-O Super AMOLED Display with 120Hz Refresh rate, 1080 x 2400 (FHD+) Resolution "
    4500 mAh battery (Non -removable) with Super Fast Charging, FAst Wireless Charging & Finger Print sensor
    IP68 Rated, MicroSD Card Slot (Expandable upto 1 TB), Dual Nano Sim, Hybrid Sim Slot, 5G+5G Dual stand by`,
    img: "https://res.cloudinary.com/dgg6kudxc/image/upload/v1647351212/Tech-Ecommerce/product-10_zhndee.png",
    type: "Phones",
    category: "shop",
  },

  {
    name: "boAt Bassheads 100 in Ear",
    price: 400,
    desc: `The perfect way to add some style and stand out from the crowd with the boAt BassHeads 100 "Hawk" inspired earphones. Impedance 16Ω, Sensitivity (dB) 92db ±3db, Frequency Response 20Hz-20KHz
    The stylish BassHeads 100 superior coated wired earphones are a definite fashion statement - wear your attitude with its wide variety of collection
    The powerful 10mm dynamic driver with the speaker resistance of 16 ohm enables the earphone to deliver a punchy, rhythmic response to the most demanding tracks
    Features a HD microphone to make crystal clear calls - making life easier on the go, play/pause music or answer/end calls with one-click, track forward with two-clicks or back with 3 clicks make these earphones extremely user-friendly`,
    img: "https://res.cloudinary.com/dgg6kudxc/image/upload/v1647351186/Tech-Ecommerce/product-11_vjbrde.png",
    type: "Headphones",
    category: "shop",
  },

  {
    name: "Acer Aspire 7 AMD Ryzen 5 Hexa Core 5500U",
    price: 70000,
    desc: `This laptop packs a punch in terms of performance as it comes with an AMD Ryzen 5500U processor and NVIDIA GeForce GTX 1650 graphics processor.
    It Features a 39.62 cm (15.6) Full HD LED Backlit screen, with an 81.61% screen-to-body ratio, which offers clean and detailed visuals, irrespective of whether you're playing games, creating a presentation, or watching videos.
    This laptop comes with a dual-band Wi-Fi 6 (802.11ax) connectivity that helps offer up to three times enhanced network throughput and reduced latency by up to 75% when compared to its predecessor, the Wi-Fi 5 (802.11ac) standard.
    Along with the USB Type-C port, this laptop also comes with one USB 2.0 port and two SuperSpeed USB 5 Gbps Type-A ports (one of these can be used for offline charging).`,
    img: "https://res.cloudinary.com/dgg6kudxc/image/upload/v1647351208/Tech-Ecommerce/product-12_ipeahy.png",
    type: "Laptops",
    category: "shop",
  },

  {
    name: "boAt Rockerz 450 Bluetooth Wireless in Ear Earphones",
    price: 1500,
    desc: `Its 40mm dynamic drivers help pump out immersive HD audio all day long. Water Resistant : No
    It provides a massive battery backup of upto 15 hours for a superior playback time.
    It has been ergonomically designed and structured as an on-ear headphone to provide the best user experience with its comfortable padded earcushions and lightweight design
    You can control your music without hiccups using the easy access controls, communicate seamlessly using the built-in mic, access voice assistant and always stay in the zone
    Tap into instant wireless connectivity with optimum Bluetooth V4.2 connectivity
    One can connect to boAt Rockerz 450 via not one but two modes, Bluetooth as well as AUX
    1 year warranty from the date of purchase.`,
    img: "https://res.cloudinary.com/dgg6kudxc/image/upload/v1648271334/Tech-Ecommerce/boat-headphone3_vvpbus.png",
    type: "Heaphones",
    category: "shop",
  },

  {
    name: "realme narzo 50A (Oxygen Blue , 4GB RAM)",
    price: 12500,
    desc: `MediaTek Helio G85 Octa-core Processor
    4 GB RAM | 128 GB ROM | Expandable Upto 256 GB
    16.51 cm (6.5 inch) HD+ Display
    50MP+2MP+2MP Primary Camera | 8MP Front Camera`,
    img: "https://res.cloudinary.com/dgg6kudxc/image/upload/v1648270323/Tech-Ecommerce/phone_js1gey.png",
    type: "Phones",
    category: "shop",
  },
  
];

const seedDB = async () => {
  await Product.deleteMany({});
  await Product.insertMany(products);
  console.log("DB Seeded");
};

module.exports = seedDB;
