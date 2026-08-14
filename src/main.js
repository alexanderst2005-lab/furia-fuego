// FURIA & FUEGO — Zero-Lag High Speed Engine (No Heavy Canvas Loops)

const WHATSAPP_NUMBER = "573000000000";

// Extras Master Database & Icon Registry
const allExtrasMap = {
  "ext-cheddar": { id: "ext-cheddar", name: "Extra Queso Cheddar", price: 3000, icon: "🧀", img: "/assets/crispy-cheese.png" },
  "ext-bacon": { id: "ext-bacon", name: "Extra Tocineta Crujiente", price: 4000, icon: "🥓", img: "/assets/crispy-bacon.png" },
  "ext-patty": { id: "ext-patty", name: "Extra Carne 150g", price: 7000, icon: "🥩", img: "/assets/la-furiosa.png" },
  "ext-crispy": { id: "ext-crispy", name: "Extra Filete Pollo Crispy", price: 6000, icon: "🍗", img: "/assets/furiosa-crispy.png" },
  "ext-jalapeno": { id: "ext-jalapeno", name: "Jalapeños Picantes", price: 2000, icon: "🌶️", img: "/assets/fries-inferno.png" },
  "ext-onion": { id: "ext-onion", name: "Aros de Cebolla Crujientes", price: 5000, icon: "🧅", img: "/assets/fries-bbq.png" },
  "ext-sauce-furia": { id: "ext-sauce-furia", name: "Salsa Furia Especial", price: 2000, icon: "🔥", img: "/assets/drink-fuego.png" },
  "ext-sauce-bbq": { id: "ext-sauce-bbq", name: "Salsa BBQ Ahumada", price: 2000, icon: "🥫", img: "/assets/tacos-bbq.png" },
  "ext-sauce-habanero": { id: "ext-sauce-habanero", name: "Salsa Habanero Picante", price: 2000, icon: "🌶️", img: "/assets/fries-inferno.png" },

  "ext-cheese-sauce": { id: "ext-cheese-sauce", name: "Salsa de Queso Cheddar", price: 3500, icon: "🧀", img: "/assets/crispy-cheese.png" },
  "ext-bacon-bits": { id: "ext-bacon-bits", name: "Bits de Tocineta", price: 3500, icon: "🥓", img: "/assets/bacon-cheese-fries.png" },
  "ext-pulled-beef": { id: "ext-pulled-beef", name: "Extra Carne Desmechada", price: 6000, icon: "🥩", img: "/assets/hot-dog-demencial.png" },

  "ext-dip-ranch": { id: "ext-dip-ranch", name: "Dip Salsa Ranch / Queso Azul", price: 2500, icon: "🥛", img: "/assets/drink-fuego.png" },
  "ext-fries-side": { id: "ext-fries-side", name: "Porción de Papas Fritas", price: 6000, icon: "🍟", img: "/assets/caos-fries.png" },

  "ext-fries-upgrade": { id: "ext-fries-upgrade", name: "Agrandar Papas a Caos Fries", price: 4000, icon: "🍟", img: "/assets/caos-fries.png" },
  "ext-drink-upgrade": { id: "ext-drink-upgrade", name: "Agrandar Bebida a 1 Litro", price: 3000, icon: "🥤", img: "/assets/drink-fuego.png" }
};

// Global Extras Grid list for main page #extras-section
const extrasList = [
  allExtrasMap["ext-cheddar"],
  allExtrasMap["ext-bacon"],
  allExtrasMap["ext-patty"],
  allExtrasMap["ext-jalapeno"],
  allExtrasMap["ext-sauce-furia"],
  allExtrasMap["ext-sauce-bbq"],
  allExtrasMap["ext-onion"],
  allExtrasMap["ext-fries-side"]
];

// Helper to get allowed extras for a specific product based on category
function getProductAllowedExtras(product) {
  if (!product) return [];

  const cat = product.category;

  // Bebidas -> NO EXTRAS
  if (cat === "bebidas") {
    return [];
  }

  // Postres -> NO EXTRAS
  if (cat === "postres") {
    return [];
  }

  // Burgers
  if (cat === "burgers") {
    return [
      allExtrasMap["ext-cheddar"],
      allExtrasMap["ext-bacon"],
      allExtrasMap["ext-patty"],
      allExtrasMap["ext-jalapeno"],
      allExtrasMap["ext-onion"],
      allExtrasMap["ext-sauce-furia"],
      allExtrasMap["ext-sauce-bbq"]
    ];
  }

  // Crispy Pollo
  if (cat === "crispy") {
    return [
      allExtrasMap["ext-crispy"],
      allExtrasMap["ext-cheddar"],
      allExtrasMap["ext-bacon"],
      allExtrasMap["ext-jalapeno"],
      allExtrasMap["ext-sauce-habanero"],
      allExtrasMap["ext-sauce-bbq"]
    ];
  }

  // Tacos
  if (cat === "tacos") {
    return [
      allExtrasMap["ext-cheddar"],
      allExtrasMap["ext-pulled-beef"],
      allExtrasMap["ext-bacon-bits"],
      allExtrasMap["ext-jalapeno"],
      allExtrasMap["ext-sauce-furia"],
      allExtrasMap["ext-sauce-habanero"]
    ];
  }

  // Caos Fries (Papas)
  if (cat === "fries") {
    return [
      allExtrasMap["ext-cheese-sauce"],
      allExtrasMap["ext-bacon-bits"],
      allExtrasMap["ext-pulled-beef"],
      allExtrasMap["ext-jalapeno"],
      allExtrasMap["ext-sauce-habanero"]
    ];
  }

  // Hot Dogs
  if (cat === "dogs") {
    return [
      allExtrasMap["ext-cheddar"],
      allExtrasMap["ext-bacon"],
      allExtrasMap["ext-pulled-beef"],
      allExtrasMap["ext-jalapeno"],
      allExtrasMap["ext-sauce-furia"]
    ];
  }

  // Wings & Box
  if (cat === "wings") {
    return [
      allExtrasMap["ext-sauce-bbq"],
      allExtrasMap["ext-dip-ranch"],
      allExtrasMap["ext-sauce-habanero"],
      allExtrasMap["ext-fries-side"]
    ];
  }

  // Combos
  if (cat === "combos") {
    return [
      allExtrasMap["ext-cheddar"],
      allExtrasMap["ext-bacon"],
      allExtrasMap["ext-fries-upgrade"],
      allExtrasMap["ext-drink-upgrade"]
    ];
  }

  return [];
}

// Complete Products Database
const products = [
  // BURGERS
  {
    id: "b-1",
    name: "LA FURIOSA",
    desc: "Doble carne de res a la parrilla, doble queso cheddar, tocineta crujiente, cebolla caramelizada, lechuga, tomate y salsa Furia.",
    price: 24900,
    tag: "🔥 MÁS VENDIDO",
    img: "/assets/la-furiosa.png",
    category: "burgers",
    ingredients: ["2x Carne de Res 150g", "2x Queso Cheddar", "Tocineta Crujiente", "Cebolla Caramelizada", "Lechuga & Tomate", "Salsa Furia"]
  },
  {
    id: "b-2",
    name: "FUEGO NEGRO",
    desc: "Carne de res a la parrilla, queso cheddar, tocineta, cebolla caramelizada y salsa BBQ ahumada.",
    price: 26900,
    tag: "🆕 NUEVO",
    img: "/assets/fuego-negro.png",
    category: "burgers",
    ingredients: ["Carne a la Parrilla", "Queso Cheddar", "Tocineta Ahumada", "Cebolla Caramelizada", "Salsa BBQ Ahumada"]
  },
  {
    id: "b-3",
    name: "LA BESTIA",
    desc: "Triple carne de res, triple queso cheddar, doble tocineta, pepinillos, cebolla y salsa especial de la casa.",
    price: 32900,
    tag: "👑 PREMIUM",
    img: "/assets/la-bestia.png",
    category: "burgers",
    ingredients: ["3x Carne de Res", "3x Queso Cheddar", "Doble Tocineta", "Pepinillos & Cebolla", "Salsa Especial Furia"]
  },
  {
    id: "b-4",
    name: "INFERNO",
    desc: "Doble carne, queso cheddar, jalapeños, tocineta, cebolla crispy y salsa picante Furia.",
    price: 28900,
    tag: "🌶️ PICANTE",
    img: "/assets/inferno-burger.png",
    category: "burgers",
    ingredients: ["2x Carne de Res", "Queso Cheddar", "Jalapeños Picantes", "Tocineta", "Cebolla Crispy", "Salsa Picante Inferno"]
  },
  {
    id: "b-5",
    name: "BBQ FURY",
    desc: "Doble carne, queso cheddar, tocineta, aros de cebolla y salsa BBQ.",
    price: 27900,
    tag: "💥 FAVORITO",
    img: "/assets/bbq-fury.png",
    category: "burgers",
    ingredients: ["2x Carne de Res", "Queso Cheddar", "Tocineta", "Aros de Cebolla Crujientes", "Salsa BBQ Ahumada"]
  },
  {
    id: "b-6",
    name: "TRIPLE CAOS",
    desc: "Tres carnes, queso cheddar, tocineta, cebolla crispy y salsa Furia.",
    price: 31900,
    tag: "👑 PREMIUM",
    img: "/assets/triple-caos.png",
    category: "burgers",
    ingredients: ["3x Carne de Res", "Queso Cheddar", "Tocineta Crujiente", "Cebolla Crispy", "Salsa Furia Secreta"]
  },
  {
    id: "b-7",
    name: "CHEESE MONSTER",
    desc: "Doble carne, triple queso cheddar, salsa de queso fundido y tocineta.",
    price: 27900,
    tag: "💥 FAVORITO",
    img: "/assets/cheese-monster.png",
    category: "burgers",
    ingredients: ["2x Carne de Res", "3x Queso Cheddar", "Baño de Salsa de Queso", "Tocineta"]
  },
  {
    id: "b-8",
    name: "FURIOSA CRISPY",
    desc: "Carne de res, pollo crispy, queso cheddar, tocineta y salsa especial.",
    price: 29900,
    tag: "🆕 NUEVO",
    img: "/assets/furiosa-crispy.png",
    category: "burgers",
    ingredients: ["1x Carne de Res", "1x Filete Pollo Crispy", "Queso Cheddar", "Tocineta", "Salsa Especial"]
  },

  // CRISPY POLLO
  {
    id: "c-1",
    name: "CRISPY FUEGO",
    desc: "Filete de pollo crispy, queso cheddar, lechuga, tomate y salsa picante.",
    price: 21900,
    tag: "🌶️ PICANTE",
    img: "/assets/crispy-chicken.png",
    category: "crispy",
    ingredients: ["Filete Pollo Crispy Extra Crujiente", "Queso Cheddar", "Lechuga & Tomate", "Salsa Picante Furia"]
  },
  {
    id: "c-2",
    name: "CRISPY BACON",
    desc: "Pollo crispy, queso cheddar, doble tocineta y salsa BBQ.",
    price: 23900,
    tag: "💥 FAVORITO",
    img: "/assets/crispy-bacon.png",
    category: "crispy",
    ingredients: ["Pollo Crispy Gold", "Queso Cheddar", "Doble Tocineta Ahumada", "Salsa BBQ"]
  },
  {
    id: "c-3",
    name: "CRISPY CHEESE",
    desc: "Pollo crispy, doble queso, salsa de queso y cebolla crispy.",
    price: 23900,
    tag: "💥 FAVORITO",
    img: "/assets/crispy-cheese.png",
    category: "crispy",
    ingredients: ["Pollo Crispy", "Doble Queso", "Salsa de Queso Derretido", "Cebolla Crispy"]
  },
  {
    id: "c-4",
    name: "CRISPY INFERNO",
    desc: "Pollo crispy, queso, jalapeños, tocineta y salsa picante.",
    price: 24900,
    tag: "🌶️ PICANTE",
    img: "/assets/crispy-inferno.png",
    category: "crispy",
    ingredients: ["Pollo Crispy Picante", "Queso Cheddar", "Jalapeños Sliced", "Tocineta", "Salsa Habanero"]
  },

  // TACOS
  {
    id: "t-1",
    name: "TACOS EN LLAMAS",
    desc: "Tres tacos de carne de res, queso, cebolla, cilantro y salsa de la casa.",
    price: 19900,
    tag: "🔥 MÁS VENDIDO",
    img: "/assets/tacos-flames.png",
    category: "tacos",
    ingredients: ["3x Tortillas de Maíz", "Carne Sazonada a la Parrilla", "Queso Fundido", "Cebolla & Cilantro", "Salsa Furia"]
  },
  {
    id: "t-2",
    name: "TACOS FURIOSOS",
    desc: "Tres tacos de carne, queso cheddar, tocineta, jalapeños y salsa picante.",
    price: 22900,
    tag: "🌶️ PICANTE",
    img: "/assets/tacos-furiosos.png",
    category: "tacos",
    ingredients: ["3x Tacos", "Carne de Res", "Queso Cheddar", "Tocineta", "Jalapeños", "Salsa Picante"]
  },
  {
    id: "t-3",
    name: "TACOS BBQ",
    desc: "Tres tacos de carne, queso, cebolla caramelizada y BBQ ahumada.",
    price: 21900,
    tag: "💥 FAVORITO",
    img: "/assets/tacos-bbq.png",
    category: "tacos",
    ingredients: ["3x Tacos", "Carne Desmechada", "Queso Melted", "Cebolla Caramelizada", "Salsa BBQ Ahumada"]
  },
  {
    id: "t-4",
    name: "TACOS CRISPY",
    desc: "Tres tacos con pollo crispy, queso, lechuga y salsa especial.",
    price: 21900,
    tag: "🆕 NUEVO",
    img: "/assets/tacos-crispy.png",
    category: "tacos",
    ingredients: ["3x Tacos", "Pollo Crispy Crujiente", "Queso", "Lechuga Fresca", "Salsa Especial"]
  },

  // CAOS FRIES
  {
    id: "f-1",
    name: "CAOS FRIES",
    desc: "Papas fritas crujientes, queso cheddar, tocineta y salsa Furia.",
    price: 17900,
    tag: "🔥 MÁS VENDIDO",
    img: "/assets/caos-fries.png",
    category: "fries",
    ingredients: ["Papas Fritas Corte Especial", "Queso Cheddar Fundido", "Bits de Tocineta", "Salsa Furia"]
  },
  {
    id: "f-2",
    name: "FRIES DEMENCIALES",
    desc: "Papas, carne desmechada, queso cheddar, tocineta y salsa especial.",
    price: 23900,
    tag: "💥 FAVORITO",
    img: "/assets/fries-demenciales.png",
    category: "fries",
    ingredients: ["Papas Crujientes", "Carne Desmechada Juicy", "Queso Cheddar", "Tocineta", "Salsa Especial"]
  },
  {
    id: "f-3",
    name: "FRIES INFERNO",
    desc: "Papas, queso, jalapeños, carne y salsa picante.",
    price: 21900,
    tag: "🌶️ PICANTE",
    img: "/assets/fries-inferno.png",
    category: "fries",
    ingredients: ["Papas Fritas", "Carne Picada", "Queso", "Jalapeños Rodajas", "Salsa Picante Habanero"]
  },
  {
    id: "f-4",
    name: "BACON CHEESE FRIES",
    desc: "Papas, abundante queso cheddar y doble tocineta.",
    price: 19900,
    tag: "💥 FAVORITO",
    img: "/assets/bacon-cheese-fries.png",
    category: "fries",
    ingredients: ["Papas Doradas", "Abundante Queso Cheddar", "Doble Tocineta Crujiente"]
  },
  {
    id: "f-5",
    name: "FRIES BBQ",
    desc: "Papas, carne desmechada, queso y salsa BBQ ahumada.",
    price: 22900,
    tag: "🆕 NUEVO",
    img: "/assets/fries-bbq.png",
    category: "fries",
    ingredients: ["Papas Fritas", "Carne Desmechada", "Queso Fundido", "Salsa BBQ Ahumada"]
  },

  // HOT DOGS
  {
    id: "d-1",
    name: "HOT DOG FURIOSO",
    desc: "Salchicha premium, queso, tocineta, papas fosforito, cebolla y salsas.",
    price: 18900,
    tag: "🔥 MÁS VENDIDO",
    img: "/assets/hot-dog-furioso.png",
    category: "dogs",
    ingredients: ["Salchicha Premium Jumbo", "Queso Fundido", "Tocineta Bits", "Papas Fosforito", "Cebolla", "Salsas de la Casa"]
  },
  {
    id: "d-2",
    name: "HOT DOG DEMENCIAL",
    desc: "Salchicha premium, queso cheddar, carne desmechada, tocineta, papas y salsa Furia.",
    price: 23900,
    tag: "👑 PREMIUM",
    img: "/assets/hot-dog-demencial.png",
    category: "dogs",
    ingredients: ["Salchicha Jumbo", "Queso Cheddar", "Carne Desmechada", "Tocineta", "Papas Crunch", "Salsa Furia"]
  },
  {
    id: "d-3",
    name: "HOT DOG INFERNO",
    desc: "Salchicha, queso, jalapeños, tocineta y salsa picante.",
    price: 20900,
    tag: "🌶️ PICANTE",
    img: "/assets/hot-dog-inferno.svg",
    category: "dogs",
    ingredients: ["Salchicha Premium", "Queso Melted", "Jalapeños Sliced", "Tocineta", "Salsa Picante Inferno"]
  },

  // COMBOS POLLO & ALITAS
  {
    id: "w-1",
    name: "BOX FURIOSO",
    desc: "Tiras de pollo crispy, papas, salsa y bebida.",
    price: 24900,
    tag: "🔥 MÁS VENDIDO",
    img: "/assets/crispy-bacon.png",
    category: "wings",
    ingredients: ["5x Tiras de Pollo Crispy", "Papas Fritas", "Salsa Furia Dip", "Bebida 500ml"]
  },
  {
    id: "w-2",
    name: "BOX INFERNO",
    desc: "Tiras de pollo crispy picantes, papas, salsa picante y bebida.",
    price: 26900,
    tag: "🌶️ PICANTE",
    img: "/assets/crispy-inferno.png",
    category: "wings",
    ingredients: ["5x Tiras Pollo Crispy Picante", "Papas Inferno", "Dip Salsa Habanero", "Bebida Helada"]
  },
  {
    id: "w-3",
    name: "CHICKEN WINGS",
    desc: "Alitas de pollo bañadas en salsa BBQ ahumada.",
    price: 25900,
    tag: "💥 FAVORITO",
    img: "/assets/crispy-chicken.png",
    category: "wings",
    ingredients: ["8x Alitas de Pollo Jugosas", "Salsa BBQ Ahumada Glossy", "Salsa de Ajo Dip"]
  },
  {
    id: "w-4",
    name: "WINGS FUEGO",
    desc: "Alitas de pollo con salsa picante de la casa.",
    price: 26900,
    tag: "🌶️ PICANTE",
    img: "/assets/crispy-inferno.png",
    category: "wings",
    ingredients: ["8x Alitas Picantes", "Salsa Furia Habanero", "Dip Ranch / Queso Azul"]
  },

  // BEBIDAS
  {
    id: "dr-1",
    name: "FUEGO ROJO",
    desc: "Bebida fría de frutos rojos refrescante.",
    price: 8900,
    tag: "HELADO",
    img: "/assets/drink-fuego.png",
    category: "bebidas",
    ingredients: ["Frutos Rojos Naturales", "Hielo Picado", "Toque de Gas"]
  },
  {
    id: "dr-2",
    name: "BLACK FURY",
    desc: "Bebida oscura de la casa con hielo.",
    price: 8900,
    tag: "EXCLUSIVA",
    img: "/assets/black-fury.svg",
    category: "bebidas",
    ingredients: ["Fórmula Secreta Furia", "Cítricos Oscuros", "Hielo Extra"]
  },
  {
    id: "dr-3",
    name: "EXPLOSIÓN CÍTRICA",
    desc: "Bebida cítrica fría con hielo.",
    price: 8900,
    tag: "HELADO",
    img: "/assets/explosion-citrica.svg",
    category: "bebidas",
    ingredients: ["Limón & Naranja", "Burbujas Refrescantes", "Hielo"]
  },
  {
    id: "dr-4",
    name: "GASEOSA",
    desc: "Diferentes opciones de gaseosa (Coca-Cola, Sprite, Premio).",
    price: 5900,
    tag: "FRÍO",
    img: "/assets/gaseosa-fria.svg",
    category: "bebidas",
    ingredients: ["Gaseosa 400ml Helada"]
  },
  {
    id: "dr-5",
    name: "AGUA EMBOTELLADA",
    desc: "Agua purificada fría.",
    price: 4500,
    tag: "NATURAL",
    img: "/assets/agua-embotellada.svg",
    category: "bebidas",
    ingredients: ["Agua Purificada 500ml"]
  },

  // POSTRES
  {
    id: "p-1",
    name: "CHOCO FURY",
    desc: "Brownie caliente, helado de vainilla, chocolate derretido y galleta.",
    price: 12900,
    tag: "DELICIOSO",
    img: "/assets/choco-fury.svg",
    category: "postres",
    ingredients: ["Brownie de Chocolate Caliente", "Bola Helado de Vainilla", "Fudge de Chocolate", "Galleta Crujiente"]
  },
  {
    id: "p-2",
    name: "OREO CAOS",
    desc: "Helado de vainilla, Oreo triturada, chocolate y crema.",
    price: 13900,
    tag: "💥 FAVORITO",
    img: "/assets/oreo-caos.svg",
    category: "postres",
    ingredients: ["Helado Vainilla Creamy", "Trozos de Galleta Oreo", "Jarabe de Chocolate", "Crema Batida"]
  },
  {
    id: "p-3",
    name: "FUEGO BROWNIE",
    desc: "Brownie caliente con helado y salsa de chocolate.",
    price: 12900,
    tag: "CALIENTE",
    img: "/assets/fuego-brownie.svg",
    category: "postres",
    ingredients: ["Brownie Artesanal", "Helado de Vainilla", "Salsa de Chocolate Caliente"]
  },

  // COMBOS
  {
    id: "cb-1",
    name: "COMBO FURIOSO",
    desc: "La Furiosa + Caos Fries mediana + Bebida Frutos Rojos Fuego de 500ml.",
    price: 34900,
    tag: "🔥 MÁS VENDIDO",
    img: "/assets/combo-destruccion.png",
    category: "combos",
    ingredients: ["1x Hamburguesa La Furiosa", "1x Caos Fries Mediana", "1x Bebida Fuego Rojo 500ml"]
  },
  {
    id: "cb-2",
    name: "COMBO BESTIA",
    desc: "La Bestia + Fries Demenciales + Bebida Cítrica.",
    price: 42900,
    tag: "👑 PREMIUM",
    img: "/assets/combo-bestia.svg",
    category: "combos",
    ingredients: ["1x Hamburguesa La Bestia Triple", "1x Fries Demenciales", "1x Bebida Explosión Cítrica"]
  },
  {
    id: "cb-3",
    name: "COMBO CRISPY",
    desc: "Crispy Fuego + papas + bebida.",
    price: 29900,
    tag: "💥 FAVORITO",
    img: "/assets/crispy-chicken.png",
    category: "combos",
    ingredients: ["1x Crispy Fuego Burger", "1x Papas Fritas", "1x Bebida 500ml"]
  },
  {
    id: "cb-4",
    name: "COMBO TACOS",
    desc: "Tacos Furiosos (3x) + papas + bebida.",
    price: 29900,
    tag: "🌮 TACOS",
    img: "/assets/tacos-flames.png",
    category: "combos",
    ingredients: ["3x Tacos Furiosos", "1x Papas Fritas", "1x Bebida Helada"]
  },
  {
    id: "cb-5",
    name: "COMBO PARA COMPARTIR",
    desc: "2 hamburguesas La Furiosa + papas grandes + 2 bebidas + 6 alitas.",
    price: 59900,
    tag: "🔥 GIGANTE",
    img: "/assets/combo-destruccion.png",
    category: "combos",
    ingredients: ["2x Hamburguesas La Furiosa", "1x Caos Fries Familiar", "6x Alitas BBQ", "2x Bebidas 500ml"]
  }
];

// App State
let cart = [];
let currentCategory = "all";
let activeModalProduct = null;
let modalQuantity = 1;
let selectedModalExtras = new Set();

// Formatter
function formatMoney(num) {
  return "$" + num.toLocaleString("es-CO");
}

// DOM Initialization
document.addEventListener("DOMContentLoaded", () => {
  initIntroSplash();
  renderProducts();
  renderExtrasGrid();
  renderCombosSection();
  setupCategoryFilters();
  setupProductModal();
  setupCartDrawer();
  setupMobileNav();
  setupStarSection();
});

// INTRO SPLASH & NAVIGATION ENGINE (GUARANTEED LOCKED INITIAL VIEWPORT)
function initIntroSplash() {
  const splash = document.getElementById("intro-splash");
  const btnEnter = document.getElementById("btn-enter");
  const header = document.getElementById("main-header");
  const content = document.getElementById("main-content");
  const footer = document.getElementById("main-footer");

  // Force browser to start at top of page on reload/open
  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
  }
  window.scrollTo(0, 0);

  if (splash) {
    document.body.style.overflow = "hidden";
  }

  function unlock() {
    if (header) header.classList.remove("hidden");
    if (content) content.classList.remove("hidden");
    if (footer) footer.classList.remove("hidden");

    document.body.style.overflow = "";
    window.scrollTo(0, 0);

    if (splash) {
      splash.style.display = "none";
      if (splash.parentNode) {
        splash.parentNode.removeChild(splash);
      }
    }
  }

  if (btnEnter) {
    btnEnter.addEventListener("click", unlock);
  }

  // Smooth Navigation for .nav-scroll-btn & Dedicated View Triggers
  document.querySelectorAll(".nav-scroll-btn").forEach(btn => {
    btn.addEventListener("click", function (e) {
      const href = this.getAttribute("href");
      if (!href || !href.startsWith("#") || href === "#") return;

      e.preventDefault();
      unlock();

      if (href === "#menu") {
        showDedicatedMenuView("all");
      } else if (href === "#combos") {
        showDedicatedMenuView("combos");
      } else {
        const targetEl = document.querySelector(href);
        if (targetEl) {
          const headerOffset = 75;
          const elementPosition = targetEl.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }
      }
    });
  });

  const btnBackHome = document.getElementById("btn-back-home");
  const brandLogoBtn = document.getElementById("brand-logo-btn");

  if (btnBackHome) {
    btnBackHome.addEventListener("click", showHomeView);
  }
  if (brandLogoBtn) {
    brandLogoBtn.addEventListener("click", (e) => {
      e.preventDefault();
      showHomeView();
    });
  }
}

// DEDICATED VIEW NAVIGATION MANAGER
function showDedicatedMenuView(category = "all") {
  const hero = document.getElementById("hero");
  const backBar = document.getElementById("view-back-bar");

  if (hero) hero.classList.add("hidden");
  if (backBar) backBar.classList.remove("hidden");

  if (category && category !== "all") {
    currentCategory = category;
    const filterBtns = document.querySelectorAll(".menu-filter-btn");
    filterBtns.forEach(b => {
      if (b.dataset.category === category) b.classList.add("active");
      else b.classList.remove("active");
    });
    renderProducts(category);
  }

  window.scrollTo(0, 0);
}

function showHomeView() {
  const hero = document.getElementById("hero");
  const backBar = document.getElementById("view-back-bar");

  if (hero) hero.classList.remove("hidden");
  if (backBar) backBar.classList.add("hidden");

  window.scrollTo(0, 0);
}

// RENDER PRODUCTS GRID WITH NATIVE BROWSER LAZY LOADING
function renderProducts(category = "all") {
  const grid = document.getElementById("products-grid");
  if (!grid) return;

  grid.innerHTML = "";

  let filtered = products;
  if (category !== "all") {
    filtered = products.filter(p => p.category === category);
  }

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="col-span-full text-center py-12 text-gray-400 font-condensed text-xl">
        🔥 No hay productos en esta categoría.
      </div>
    `;
    return;
  }

  const fragment = document.createDocumentFragment();

  filtered.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card rounded-xl overflow-hidden flex flex-col justify-between group cursor-pointer";

    card.innerHTML = `
      <div class="relative overflow-hidden bg-black">
        <span class="absolute top-3 left-3 bg-red text-white text-xs font-condensed font-bold px-3 py-1 rounded shadow z-10">
          ${product.tag}
        </span>
        <img src="${product.img}" alt="${product.name}" loading="lazy" decoding="async" class="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-200">
      </div>
      <div class="p-5 flex flex-col flex-grow justify-between space-y-4">
        <div>
          <h3 class="text-2xl font-heading text-white uppercase tracking-wider">${product.name}</h3>
          <p class="text-gray-400 text-xs font-body mt-1 line-clamp-2">${product.desc}</p>
        </div>
        <div class="flex items-center justify-between pt-3 border-t border-white/10">
          <span class="text-2xl font-heading text-red">${formatMoney(product.price)}</span>
          <button type="button" class="btn-furia text-base px-4 py-1.5 font-heading tracking-wider flex items-center gap-1 add-quick-btn"
                  data-id="${product.id}">
            AGREGAR 🔥
          </button>
        </div>
      </div>
    `;

    card.addEventListener("click", () => {
      openProductModal(product);
    });

    fragment.appendChild(card);
  });

  grid.appendChild(fragment);
}

// RENDER EXTRAS GRID
function renderExtrasGrid() {
  const container = document.getElementById("extras-grid");
  if (!container) return;

  const fragment = document.createDocumentFragment();

  extrasList.forEach(extra => {
    const card = document.createElement("div");
    card.className = "bg-dark-secondary border border-white/10 p-3.5 rounded-xl flex items-center justify-between gap-3 hover:border-yellow transition-all shadow-md cursor-pointer";
    card.innerHTML = `
      <img src="${extra.img}" alt="${extra.name}" class="w-14 h-14 object-cover rounded-lg border border-white/10 shrink-0">
      <div class="flex-1 min-w-0 pr-1">
        <div class="font-condensed text-white text-base sm:text-lg font-bold uppercase leading-tight text-yellow truncate">${extra.name}</div>
        <div class="text-red font-heading text-lg sm:text-xl font-bold mt-0.5">${formatMoney(extra.price)}</div>
      </div>
      <button type="button" class="btn-furia text-xs sm:text-sm px-3.5 py-2 font-heading uppercase font-bold tracking-wider add-extra-direct-btn shrink-0 cursor-pointer">
        + AGREGAR
      </button>
    `;

    card.querySelector(".add-extra-direct-btn").addEventListener("click", (e) => {
      e.stopPropagation();
      addToCart(extra.name, extra.price, extra.img || "/assets/crispy-cheese.png", []);
    });

    fragment.appendChild(card);
  });

  container.appendChild(fragment);
}

// RENDER COMBOS SECTION
function renderCombosSection() {
  const container = document.getElementById("combos-grid");
  if (!container) return;

  const combos = products.filter(p => p.category === "combos");
  const fragment = document.createDocumentFragment();

  combos.forEach(combo => {
    const card = document.createElement("div");
    card.className = "combo-card border border-red/40 bg-black p-5 flex flex-col justify-between relative group hover:border-red transition-colors rounded-xl cursor-pointer";

    card.innerHTML = `
      <div class="absolute -top-3 right-4 bg-red text-white font-heading px-3 py-0.5 text-xs tracking-widest rounded shadow">
        ${combo.tag}
      </div>
      <div>
        <div class="overflow-hidden mb-4 rounded-lg">
          <img src="${combo.img}" alt="${combo.name}" loading="lazy" decoding="async" class="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-200">
        </div>
        <h3 class="text-3xl font-heading text-white uppercase mb-1">${combo.name}</h3>
        <p class="text-gray-400 text-xs mb-3">${combo.desc}</p>
      </div>
      <div class="flex items-center justify-between pt-3 border-t border-white/10">
        <span class="text-3xl font-heading text-red">${formatMoney(combo.price)}</span>
        <button type="button" class="btn-furia px-5 py-1.5 text-base font-heading add-combo-btn" data-id="${combo.id}">
          QUIERO EL COMBO 🔥
        </button>
      </div>
    `;

    card.addEventListener("click", () => openProductModal(combo));
    fragment.appendChild(card);
  });

  container.appendChild(fragment);
}

// CATEGORY FILTERS
function setupCategoryFilters() {
  const filterBtns = document.querySelectorAll(".menu-filter-btn");

  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentCategory = btn.dataset.category;
      renderProducts(currentCategory);
    });
  });
}

// PRODUCT MODAL
function setupProductModal() {
  const modal = document.getElementById("product-modal");
  const backdrop = document.getElementById("modal-backdrop");
  const closeBtn = document.getElementById("modal-close-btn");
  const qtyMinus = document.getElementById("modal-qty-minus");
  const qtyPlus = document.getElementById("modal-qty-plus");
  const addBtn = document.getElementById("modal-add-btn");

  const modalPanel = modal ? modal.querySelector(".transform") : null;

  function closeModal() {
    if (!modal) return;
    document.body.style.overflow = "";
    modal.classList.add("opacity-0");
    modal.classList.remove("opacity-100");
    if (modalPanel) {
      modalPanel.classList.remove("scale-100");
      modalPanel.classList.add("scale-95");
    }
    setTimeout(() => {
      modal.classList.add("hidden");
    }, 200);
  }

  closeBtn.addEventListener("click", closeModal);
  backdrop.addEventListener("click", closeModal);

  qtyMinus.addEventListener("click", () => {
    if (modalQuantity > 1) {
      modalQuantity--;
      updateModalTotals();
    }
  });

  qtyPlus.addEventListener("click", () => {
    modalQuantity++;
    updateModalTotals();
  });

  addBtn.addEventListener("click", () => {
    if (!activeModalProduct) return;
    const allowed = getProductAllowedExtras(activeModalProduct);
    const chosenExtras = Array.from(selectedModalExtras).map(id => allowed.find(e => e.id === id)).filter(Boolean);
    addToCart(activeModalProduct.name, activeModalProduct.price, activeModalProduct.img, chosenExtras, modalQuantity);
    closeModal();
  });
}

function openProductModal(product) {
  activeModalProduct = product;
  modalQuantity = 1;
  selectedModalExtras.clear();

  // Remember & pre-select previously checked extras if product is already in cart
  const existingInCart = cart.find(item => item.name === product.name);
  if (existingInCart && existingInCart.extras) {
    existingInCart.extras.forEach(ex => selectedModalExtras.add(ex.id));
  }

  const modal = document.getElementById("product-modal");
  const title = document.getElementById("modal-title");
  const price = document.getElementById("modal-price");
  const desc = document.getElementById("modal-desc");
  const img = document.getElementById("modal-img");
  const tag = document.getElementById("modal-tag");
  const ingredientsList = document.getElementById("modal-ingredients");
  const extrasWrapper = document.getElementById("modal-extras-wrapper");
  const extrasContainer = document.getElementById("modal-extras-list");
  const modalPanel = modal ? modal.querySelector(".transform") : null;

  title.innerText = product.name;
  desc.innerText = product.desc;
  img.src = product.img;
  tag.innerText = product.tag;

  ingredientsList.innerHTML = "";
  if (product.ingredients && product.ingredients.length > 0) {
    product.ingredients.forEach(ing => {
      const li = document.createElement("li");
      li.className = "flex items-center gap-1.5";
      li.innerHTML = `<span class="text-red">✔</span> <span>${ing}</span>`;
      ingredientsList.appendChild(li);
    });
  }

  const allowedExtras = getProductAllowedExtras(product);

  if (!allowedExtras || allowedExtras.length === 0) {
    if (extrasWrapper) extrasWrapper.classList.add("hidden");
    extrasContainer.innerHTML = "";
  } else {
    if (extrasWrapper) extrasWrapper.classList.remove("hidden");
    extrasContainer.innerHTML = "";

    allowedExtras.forEach(extra => {
      const isChecked = selectedModalExtras.has(extra.id);
      const label = document.createElement("label");
      label.className = `flex items-center gap-3 p-3 border rounded-xl cursor-pointer select-none transition-all ${isChecked ? 'border-yellow bg-yellow/10 shadow-md' : 'border-white/10 bg-black/40 hover:border-yellow'}`;
      label.innerHTML = `
        <input type="checkbox" value="${extra.id}" ${isChecked ? 'checked' : ''} class="accent-red w-4 h-4 rounded cursor-pointer shrink-0">
        <span class="text-lg leading-none shrink-0">${extra.icon}</span>
        <span class="text-gray-200 font-body text-sm font-medium leading-tight flex-1">${extra.name}</span>
        <span class="text-yellow font-bold text-sm ml-auto shrink-0">+${formatMoney(extra.price)}</span>
      `;

      const checkbox = label.querySelector("input");
      checkbox.addEventListener("change", () => {
        if (checkbox.checked) {
          selectedModalExtras.add(extra.id);
          label.classList.add("border-yellow", "bg-yellow/10", "shadow-md");
          label.classList.remove("border-white/10", "bg-black/40");
        } else {
          selectedModalExtras.delete(extra.id);
          label.classList.remove("border-yellow", "bg-yellow/10", "shadow-md");
          label.classList.add("border-white/10", "bg-black/40");
        }
        updateModalTotals();
      });

      extrasContainer.appendChild(label);
    });
  }

  updateModalTotals();

  document.body.style.overflow = "hidden";
  modal.classList.remove("hidden");
  setTimeout(() => {
    modal.classList.remove("opacity-0");
    modal.classList.add("opacity-100");
    if (modalPanel) {
      modalPanel.classList.remove("scale-95");
      modalPanel.classList.add("scale-100");
    }
  }, 10);
}

function updateModalTotals() {
  document.getElementById("modal-qty-val").innerText = modalQuantity;
  if (!activeModalProduct) return;

  const allowedExtras = getProductAllowedExtras(activeModalProduct);

  let extrasSum = 0;
  selectedModalExtras.forEach(id => {
    const found = allowedExtras.find(e => e.id === id);
    if (found) extrasSum += found.price;
  });

  const singlePrice = activeModalProduct.price + extrasSum;
  const totalPrice = singlePrice * modalQuantity;
  document.getElementById("modal-price").innerText = formatMoney(totalPrice);
}

// STAR PRODUCT SECTION HANDLERS
function setupStarSection() {
  const starBtn = document.querySelector(".add-to-cart-btn");
  const customizeBtn = document.getElementById("star-customize-btn");
  const starCardMobile = document.getElementById("star-product-card-mobile");
  const starCardDesktop = document.getElementById("star-product-card-desktop");

  const starProduct = {
    id: "star-suprema",
    name: "LA FURIA SUPREMA",
    desc: "Triple carne a la parrilla de 150g cada una + triple capa de queso cheddar fundido + tocineta crocante ahumada + bañada en nuestra legendaria Salsa Furia picante.",
    price: 34900,
    tag: "👑 PRODUCTO ESTRELLA",
    img: "/assets/furia-suprema.png",
    category: "burgers",
    ingredients: ["3x Carne de Res 150g", "3x Queso Cheddar Fundido", "Tocineta Crocante Ahumada", "Salsa Furia Picante"]
  };

  if (starBtn) {
    starBtn.addEventListener("click", () => {
      addToCart("LA FURIA SUPREMA", 34900, "/assets/furia-suprema.png", []);
      // Open cart drawer immediately so user sees action result
      openCartDrawerGlobal();
    });
  }

  if (customizeBtn) {
    customizeBtn.addEventListener("click", () => {
      openProductModal(starProduct);
    });
  }

  if (starCardMobile) {
    starCardMobile.addEventListener("click", () => openProductModal(starProduct));
  }

  if (starCardDesktop) {
    starCardDesktop.addEventListener("click", () => openProductModal(starProduct));
  }
}

// CART & WHATSAPP
function setupCartDrawer() {
  const cartBtn = document.getElementById("cart-btn");
  const cartCloseBtn = document.getElementById("cart-close-btn");
  const clearCartBtn = document.getElementById("clear-cart-btn");
  const cartDrawer = document.getElementById("cart-drawer");
  const cartBackdrop = document.getElementById("cart-backdrop");
  const whatsappSubmitBtn = document.getElementById("whatsapp-submit-btn");

  const cartPanel = cartDrawer ? cartDrawer.querySelector(".transform") : null;

  function openCart() {
    if (!cartDrawer) return;
    updateCartUI();
    document.body.style.overflow = "hidden";
    cartDrawer.classList.remove("hidden");
    setTimeout(() => {
      cartDrawer.classList.remove("opacity-0");
      cartDrawer.classList.add("opacity-100");
      if (cartPanel) {
        cartPanel.classList.remove("translate-x-full");
        cartPanel.classList.add("translate-x-0");
      }
    }, 10);
  }

  window.openCartDrawerGlobal = openCart;

  function closeCart() {
    if (!cartDrawer) return;
    document.body.style.overflow = "";
    cartDrawer.classList.add("opacity-0");
    cartDrawer.classList.remove("opacity-100");
    if (cartPanel) {
      cartPanel.classList.remove("translate-x-0");
      cartPanel.classList.add("translate-x-full");
    }
    setTimeout(() => {
      cartDrawer.classList.add("hidden");
    }, 200);
  }

  cartBtn.addEventListener("click", openCart);
  cartCloseBtn.addEventListener("click", closeCart);
  cartBackdrop.addEventListener("click", closeCart);
  if (clearCartBtn) {
    clearCartBtn.addEventListener("click", () => {
      if (cart.length === 0) return;
      cart = [];
      updateCartUI();
      showToast("🗑️ ¡CARRO VACIADO!");
    });
  }
  whatsappSubmitBtn.addEventListener("click", sendWhatsAppOrder);
}

function addToCart(name, unitPrice, img, extras = [], qty = 1) {
  const extrasCost = extras.reduce((sum, e) => sum + e.price, 0);
  const itemTotalUnitPrice = unitPrice + extrasCost;
  const extrasKey = extras.map(e => e.name).sort().join(", ");
  const cartItemKey = `${name} | ${extrasKey}`;

  const existing = cart.find(item => item.key === cartItemKey);
  if (existing) {
    existing.quantity += qty;
  } else {
    cart.push({
      key: cartItemKey,
      name,
      unitPrice: itemTotalUnitPrice,
      basePrice: unitPrice,
      img,
      extras,
      quantity: qty
    });
  }

  updateCartUI();
  showToast(`🔥 ¡${name} AGREGADO!`);
}

function updateCartUI() {
  const cartBadge = document.getElementById("cart-badge");
  const container = document.getElementById("cart-items-container");
  const totalPriceEl = document.getElementById("cart-total-price");

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cart.reduce((acc, item) => acc + item.unitPrice * item.quantity, 0);

  cartBadge.innerText = totalItems;
  totalPriceEl.innerText = formatMoney(totalPrice);

  if (cart.length === 0) {
    container.innerHTML = `
      <div class="text-center py-12 text-gray-500 font-condensed text-lg">
        TU CARRO ESTÁ VACÍO. <br>
        <span class="text-red font-bold text-xl">🔥 ¡DESATA TU ANTOJO!</span>
      </div>
    `;
    return;
  }

  container.innerHTML = "";

  cart.forEach((item, index) => {
    const row = document.createElement("div");
    row.className = "flex flex-col bg-black/90 border border-white/15 p-3 rounded-lg space-y-2 relative group hover:border-red/40 transition-colors";

    let extrasHTML = "";
    if (item.extras && item.extras.length > 0) {
      extrasHTML = `<div class="flex flex-wrap gap-1.5 mt-1">`;
      item.extras.forEach((extra, extraIdx) => {
        extrasHTML += `
          <span class="inline-flex items-center gap-1 bg-yellow/10 border border-yellow/40 text-yellow text-xs font-body px-2 py-0.5 rounded-full font-semibold">
            + ${extra.name}
            <button type="button" class="hover:bg-red/30 text-red font-bold rounded-full w-4 h-4 flex items-center justify-center btn-remove-extra cursor-pointer transition-colors" data-cart-index="${index}" data-extra-index="${extraIdx}" title="Quitar ${extra.name}">✕</button>
          </span>
        `;
      });
      extrasHTML += `</div>`;
    }

    row.innerHTML = `
      <div class="flex items-center justify-between gap-2">
        <div class="flex items-center gap-3">
          <img src="${item.img}" alt="${item.name}" loading="lazy" class="w-14 h-14 object-cover rounded border border-red/30">
          <div>
            <h4 class="font-heading text-white text-xl uppercase leading-none">${item.name}</h4>
            ${extrasHTML}
            <span class="text-red font-condensed font-bold text-sm mt-0.5 inline-block">${formatMoney(item.unitPrice)} c/u</span>
          </div>
        </div>

        <div class="flex items-center gap-2">
          <div class="flex items-center border border-white/20 rounded bg-black">
            <button type="button" class="px-2 py-1 text-white font-bold hover:bg-gray-800 btn-minus cursor-pointer" data-index="${index}" title="Restar">-</button>
            <span class="px-2 py-1 font-bold text-white text-sm min-w-[20px] text-center">${item.quantity}</span>
            <button type="button" class="px-2 py-1 text-white font-bold hover:bg-gray-800 btn-plus cursor-pointer" data-index="${index}" title="Sumar">+</button>
          </div>

          <button type="button" class="bg-red/10 hover:bg-red/30 text-red border border-red/30 w-8 h-8 rounded-lg flex items-center justify-center transition-colors btn-delete cursor-pointer" data-index="${index}" title="Eliminar este producto">
            🗑️
          </button>
        </div>
      </div>
    `;

    container.appendChild(row);
  });

  container.querySelectorAll(".btn-minus").forEach(btn => {
    btn.addEventListener("click", () => {
      const idx = parseInt(btn.dataset.index);
      if (cart[idx].quantity > 1) {
        cart[idx].quantity--;
      } else {
        const removedName = cart[idx].name;
        cart.splice(idx, 1);
        showToast(`🗑️ ¡${removedName} ELIMINADO!`);
      }
      updateCartUI();
    });
  });

  container.querySelectorAll(".btn-plus").forEach(btn => {
    btn.addEventListener("click", () => {
      const idx = parseInt(btn.dataset.index);
      cart[idx].quantity++;
      updateCartUI();
    });
  });

  container.querySelectorAll(".btn-delete").forEach(btn => {
    btn.addEventListener("click", () => {
      const idx = parseInt(btn.dataset.index);
      const removedName = cart[idx].name;
      cart.splice(idx, 1);
      updateCartUI();
      showToast(`🗑️ ¡${removedName} ELIMINADO!`);
    });
  });

  container.querySelectorAll(".btn-remove-extra").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const cartIdx = parseInt(btn.dataset.cartIndex);
      const extraIdx = parseInt(btn.dataset.extraIndex);

      const targetItem = cart[cartIdx];
      if (!targetItem || !targetItem.extras[extraIdx]) return;

      const removedExtra = targetItem.extras[extraIdx];
      targetItem.extras.splice(extraIdx, 1);

      const extrasCost = targetItem.extras.reduce((sum, ex) => sum + ex.price, 0);
      targetItem.unitPrice = targetItem.basePrice + extrasCost;

      const extrasKey = targetItem.extras.map(ex => ex.name).sort().join(", ");
      targetItem.key = `${targetItem.name} | ${extrasKey}`;

      const duplicateIdx = cart.findIndex((it, i) => i !== cartIdx && it.key === targetItem.key);
      if (duplicateIdx !== -1) {
        cart[duplicateIdx].quantity += targetItem.quantity;
        cart.splice(cartIdx, 1);
      }

      updateCartUI();
      showToast(`🧀 ¡${removedExtra.name} removido!`);
    });
  });
}

function sendWhatsAppOrder() {
  if (cart.length === 0) {
    alert("Tu carrito está vacío. Agrega algún producto para pedir por WhatsApp.");
    return;
  }

  let text = `🔥 *NUEVO PEDIDO - FURIA & FUEGO* 🔥\n\n`;
  text += `_¡El hambre no se combate. Se desata!_\n\n`;
  text += `*RESUMEN DE MI PEDIDO:*\n`;

  let grandTotal = 0;
  cart.forEach(item => {
    const itemSubtotal = item.unitPrice * item.quantity;
    grandTotal += itemSubtotal;
    text += `• ${item.quantity}x *${item.name}* (${formatMoney(itemSubtotal)})\n`;
    if (item.extras.length > 0) {
      text += `   └ Adicionales: ${item.extras.map(e => e.name).join(", ")}\n`;
    }
  });

  text += `\n*TOTAL GENERAL:* ${formatMoney(grandTotal)}\n\n`;
  text += `📍 *Dirección de Entrega:* (Escribe tu dirección completa)\n`;
  text += `💳 *Forma de Pago:* (Nequi / Daviplata / Efectivo)`;

  const encoded = encodeURIComponent(text);
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
  window.open(whatsappUrl, "_blank");
}

function setupMobileNav() {
  const menuBtn = document.getElementById("mobile-menu-btn");
  const nav = document.getElementById("mobile-nav");
  if (!menuBtn || !nav) return;

  menuBtn.addEventListener("click", () => nav.classList.toggle("hidden"));
  nav.querySelectorAll(".mobile-link").forEach(link => {
    link.addEventListener("click", () => nav.classList.add("hidden"));
  });
}

function showToast(msg) {
  const toast = document.getElementById("toast");
  if (!toast) return;

  toast.innerText = msg;
  toast.classList.remove("translate-y-24", "opacity-0");
  toast.classList.add("translate-y-0", "opacity-100");

  setTimeout(() => {
    toast.classList.add("translate-y-24", "opacity-0");
    toast.classList.remove("translate-y-0", "opacity-100");
  }, 2000);
}
