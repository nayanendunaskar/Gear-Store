import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    id: 1,
    title: "Logo Tee",
    description: "A VERSATILE TEE MADE WITH NATURE.",
    price: 5999,
    discountPercentage: 12.9,
    rating: 4.33,
    stock: true,
    brand: "H&M",
    category: "Women",
    type: "Best Seller",
    size: "S",
    thumbnail:
      "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/bdda7140256f4a589533add7007a1c30_9366/adidas-by-stella-mccartney-logo-tee.jpg",
    images: [
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/7653828fd4c24776b35badd7007a3044_9366/adidas_by_Stella_McCartney_Logo_Tee_Black_HB7402_21_model.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/c79cc6d3399f4b358fa7add7007a4414_9366/adidas_by_Stella_McCartney_Logo_Tee_Black_HB7402_22_model.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/baf50920cbaf4c7c85c9add7007a54b8_9366/adidas_by_Stella_McCartney_Logo_Tee_Black_HB7402_23_hover_model.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/1db2024f2863494b8ef9add7007acd29_9366/adidas_by_Stella_McCartney_Logo_Tee_Black_HB7402_01_laydown.jpg",
    ],
  },
  {
    id: 2,
    title: "Disney Graphic Tee",
    description: "A SOFT COTTON TEE SPORTING ONE OF YOUR FAVOURITE BAD GUYS.",
    price: 3599,
    discountPercentage: 50,
    rating: 3.99,
    stock: true,
    brand: "W",
    category: "Men",
    type: "New Arrival",
    size: "M",
    thumbnail:
      "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/ae88674cbb8b479eaea3ae8600fa0de4_9366/disney-graphic-tee.jpg",
    images: [
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/433958a0f94b45ec8841ae8600fa1897_9366/Disney_Graphic_Tee_White_HN4519_21_model.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/b41c64ac5bac4ab1a332ae8600fa2078_9366/Disney_Graphic_Tee_White_HN4519_23_hover_model.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/28a417698a2c4309b64bae8600fa26dd_9366/Disney_Graphic_Tee_White_HN4519_25_model.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/440ba591cc844740b7b1ae8600fa4eed_9366/Disney_Graphic_Tee_White_HN4519_01_laydown.jpg",
    ],
  },
  {
    id: 3,
    title: "Logo Tee",
    description: "A VERSATILE TEE MADE WITH NATURE.",
    price: 6999,
    discountPercentage: 14.9,
    rating: 4.55,
    stock: true,
    brand: "Calvin Klein Jeans",
    category: "Women",
    type: "New Arrival",
    size: "L",
    thumbnail:
      "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/bdda7140256f4a589533add7007a1c30_9366/adidas-by-stella-mccartney-logo-tee.jpg",
    images: [
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/7653828fd4c24776b35badd7007a3044_9366/adidas_by_Stella_McCartney_Logo_Tee_Black_HB7402_21_model.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/c79cc6d3399f4b358fa7add7007a4414_9366/adidas_by_Stella_McCartney_Logo_Tee_Black_HB7402_22_model.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/baf50920cbaf4c7c85c9add7007a54b8_9366/adidas_by_Stella_McCartney_Logo_Tee_Black_HB7402_23_hover_model.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/1db2024f2863494b8ef9add7007acd29_9366/adidas_by_Stella_McCartney_Logo_Tee_Black_HB7402_01_laydown.jpg",
    ],
  },
  {
    id: 4,
    title: "Logo Tee",
    description: "A VERSATILE TEE MADE WITH NATURE.",
    price: 2999,
    discountPercentage: 8.9,
    rating: 4.11,
    stock: true,
    brand: "Nike",
    category: "Women",
    type: "Best Seller",
    size: "XL",
    thumbnail:
      "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/bdda7140256f4a589533add7007a1c30_9366/adidas-by-stella-mccartney-logo-tee.jpg",
    images: [
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/7653828fd4c24776b35badd7007a3044_9366/adidas_by_Stella_McCartney_Logo_Tee_Black_HB7402_21_model.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/c79cc6d3399f4b358fa7add7007a4414_9366/adidas_by_Stella_McCartney_Logo_Tee_Black_HB7402_22_model.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/baf50920cbaf4c7c85c9add7007a54b8_9366/adidas_by_Stella_McCartney_Logo_Tee_Black_HB7402_23_hover_model.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/1db2024f2863494b8ef9add7007acd29_9366/adidas_by_Stella_McCartney_Logo_Tee_Black_HB7402_01_laydown.jpg",
    ],
  },
  {
    id: 5,
    title: "Logo Tee",
    description: "A VERSATILE TEE MADE WITH NATURE.",
    price: 6999,
    discountPercentage: 12.9,
    rating: 4.66,
    stock: false,
    brand: "Levis",
    category: "Men",
    type: "New Arrival",
    size: "XL",
    thumbnail:
      "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/bdda7140256f4a589533add7007a1c30_9366/adidas-by-stella-mccartney-logo-tee.jpg",
    images: [
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/7653828fd4c24776b35badd7007a3044_9366/adidas_by_Stella_McCartney_Logo_Tee_Black_HB7402_21_model.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/c79cc6d3399f4b358fa7add7007a4414_9366/adidas_by_Stella_McCartney_Logo_Tee_Black_HB7402_22_model.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/baf50920cbaf4c7c85c9add7007a54b8_9366/adidas_by_Stella_McCartney_Logo_Tee_Black_HB7402_23_hover_model.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/1db2024f2863494b8ef9add7007acd29_9366/adidas_by_Stella_McCartney_Logo_Tee_Black_HB7402_01_laydown.jpg",
    ],
  },
  {
    id: 6,
    title: "Logo Tee",
    description: "A VERSATILE TEE MADE WITH NATURE.",
    price: 6999,
    discountPercentage: 12.9,
    rating: 4.66,
    stock: false,
    brand: "Louis Philippe",
    category: "Men",
    type: "New Arrival",
    size: "XL",
    thumbnail:
      "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/bdda7140256f4a589533add7007a1c30_9366/adidas-by-stella-mccartney-logo-tee.jpg",
    images: [
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/7653828fd4c24776b35badd7007a3044_9366/adidas_by_Stella_McCartney_Logo_Tee_Black_HB7402_21_model.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/c79cc6d3399f4b358fa7add7007a4414_9366/adidas_by_Stella_McCartney_Logo_Tee_Black_HB7402_22_model.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/baf50920cbaf4c7c85c9add7007a54b8_9366/adidas_by_Stella_McCartney_Logo_Tee_Black_HB7402_23_hover_model.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/1db2024f2863494b8ef9add7007acd29_9366/adidas_by_Stella_McCartney_Logo_Tee_Black_HB7402_01_laydown.jpg",
    ],
  },
];