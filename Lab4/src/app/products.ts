export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
}

export const products = [
    {
      id: 1,
      name: 'Laptop',
      price: 999.99,
      description: 'Powerful laptop with the latest features and high-performance specifications.',
      imageUrl: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/macbook-air-space-gray-select-201810?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1664472289661',
      link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-mgn93-serebristyi-100798912/?c=750000000'
    },
    {
      id: 2,
      name: 'Smartphone',
      price: 699.99,
      description: 'Premium smartphone with a stunning display, powerful camera, and long battery life.',
      imageUrl: 'https://www.apple.com/newsroom/images/2023/09/apple-debuts-iphone-15-and-iphone-15-plus/article/Apple-iPhone-15-lineup-hero-230912_inline.jpg.large_2x.jpg',
      link: 'https://kaspi.kz/shop/p/apple-iphone-15-128-gb-dual-sim-chernyi-113933011/?c=750000000'
    },
    {
      id: 3,
      name: 'Wireless Headphones',
      price: 349.99,
      description: 'Noise-canceling wireless headphones for an immersive audio experience.',
      imageUrl: 'https://www.bhphotovideo.com/cdn-cgi/image/format=auto,fit=scale-down,width=500,quality=95/https://www.bhphotovideo.com/images/images500x500/sony_6505727_sony_wh_1000xm5_wireless_noise_canceling_1652389511_1706293.jpg',
      link: 'https://kaspi.kz/shop/p/sony-wh-1000xm5-chernyi-105259822/?c=750000000'
    },
    {
      id: 4,
      name: 'Fitness Tracker',
      price: 79.99,
      description: 'Track your fitness activities with this sleek and feature-packed fitness tracker.',
      imageUrl: 'https://m.media-amazon.com/images/W/MEDIAX_849526-T3/images/I/61YwaovfYFL._AC_SL1500_.jpg',
      link: 'https://kaspi.kz/shop/p/xiaomi-mi-band-7-chernyi-105075100/?c=750000000'
    },
    {
      id: 5,
      name: 'Coffee Maker',
      price: 49.99,
      description: 'Automatic coffee maker with programmable settings for the perfect cup every time.',
      imageUrl: 'https://www.cuisinart.com/globalassets/cuisinart-image-feed/ss-16/ss16_lifestyle1_web.jpg',
      link: 'https://kaspi.kz/shop/p/kofemashina-dsp-ka-3092-chernyi-111322478/?c=750000000'
    },
    {
      id: 6,
      name: 'Portable Speaker',
      price: 59.99,
      description: 'Compact and portable speaker with rich sound, perfect for on-the-go music lovers.',
      imageUrl: 'https://i5.walmartimages.com/seo/JBL-Flip-4-Waterproof-Portable-Bluetooth-Speaker_6286516b-1493-4e49-990a-853f9c6b3452_1.ad2dac4a782c31d1dba4ce3ac2819fd8.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF',
      link: 'https://kaspi.kz/shop/p/jbl-flip-6-chernyi-105120720/?c=750000000'
    },
    {
      id: 7,
      name: 'Bluetooth Keyboard',
      price: 39.99,
      description: 'Wireless Bluetooth keyboard for comfortable typing on multiple devices.',
      imageUrl: 'https://m.media-amazon.com/images/W/MEDIAX_849526-T3/images/I/71HvSDz5OnL._AC_SL1500_.jpg',
      link: ''
    },
    {
      id: 8,
      name: 'External Hard Drive',
      price: 89.99,
      description: 'High-capacity external hard drive for secure storage and easy data backup.',
      imageUrl: 'https://i.ebayimg.com/images/g/-zsAAOSwwypj2Ndu/s-l1600.jpg',
      link: 'https://kaspi.kz/shop/p/transcend-ts1tsj25m3s-1000-gb-7300440/?c=750000000'
    },
    {
      id: 9,
      name: 'Smart Thermostat',
      price: 129.99,
      description: 'Programmable smart thermostat for efficient and energy-saving temperature control.',
      imageUrl: 'https://cdn.thewirecutter.com/wp-content/media/2022/11/smartthermostats-2048px-2898-2x1-1.jpg?auto=webp&quality=75&crop=2:1&width=1024&dpr=2',
      link: 'https://kaspi.kz/shop/p/datchik-temperatury-aqara-smart-radiator-thermostat-e1-srts-a01-ekosistema-apple-homekit-umnyi-dom-jandeksa-aqara-hub-107419554/?c=750000000'
    },
    {
      id: 10,
      name: 'Digital Camera',
      price: 1499.99,
      description: 'Professional-grade digital camera with advanced features for stunning photography.',
      imageUrl: 'https://www.bhphotovideo.com/cdn-cgi/image/format=auto,fit=scale-down,width=500,quality=95/https://www.bhphotovideo.com/images/images500x500/Canon_3814B016_EOS_7D_Digital_SLR_1275324315_680674.jpg',
      link: 'https://kaspi.kz/shop/p/canon-eos-rp-rf-24-105-f4-7-1-is-stm-101149860/?c=750000000'
    }
  
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/