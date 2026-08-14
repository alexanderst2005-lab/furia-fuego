// FURIA & FUEGO — High-Performance JavaScript Engine (Optimized for Mobile & Low GPU)

const WHATSAPP_NUMBER = "573000000000";

// Extras Master Database
const extrasList = [
  { id: "ext-1", name: "Extra Queso Cheddar", price: 3000 },
  { id: "ext-2", name: "Extra Tocineta Crujiente", price: 4000 },
  { id: "ext-3", name: "Extra Carne 150g", price: 7000 },
  { id: "ext-4", name: "Jalapeños Picantes", price: 2000 },
  { id: "ext-5", name: "Salsa Furia Especial", price: 2000 },
  { id: "ext-6", name: "Salsa BBQ Ahumada", price: 2000 },
  { id: "ext-7", name: "Salsa Habanero Picante", price: 2000 },
  { id: "ext-8", name: "Aros de Cebolla Crujientes", price: 5000 }
];

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
    img: "/assets/hero-burger.png",
    category: "burgers",
    ingredients: ["2x Carne de Res", "3x Queso Cheddar", "Baño de Salsa de Queso", "Tocineta"]
  },
  {
    id: "b-8",
    name: "FURIOSA CRISPY",
    desc: "Carne de res, pollo crispy, queso cheddar, tocineta y salsa especial.",
    price: 29900,
    tag: "🆕 NUEVO",
    img: "/assets/hero-burger.png",
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
    img: "/assets/crispy-chicken.png",
    category: "crispy",
    ingredients: ["Pollo Crispy Gold", "Queso Cheddar", "Doble Tocineta Ahumada", "Salsa BBQ"]
  },
  {
    id: "c-3",
    name: "CRISPY CHEESE",
    desc: "Pollo crispy, doble queso, salsa de queso y cebolla crispy.",
    price: 23900,
    tag: "💥 FAVORITO",
    img: "/assets/crispy-chicken.png",
    category: "crispy",
    ingredients: ["Pollo Crispy", "Doble Queso", "Salsa de Queso Derretido", "Cebolla Crispy"]
  },
  {
    id: "c-4",
    name: "CRISPY INFERNO",
    desc: "Pollo crispy, queso, jalapeños, tocineta y salsa picante.",
    price: 24900,
    tag: "🌶️ PICANTE",
    img: "/assets/crispy-chicken.png",
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
    img: "/assets/tacos-flames.png",
    category: "tacos",
    ingredients: ["3x Tacos", "Carne de Res", "Queso Cheddar", "Tocineta", "Jalapeños", "Salsa Picante"]
  },
  {
    id: "t-3",
    name: "TACOS BBQ",
    desc: "Tres tacos de carne, queso, cebolla caramelizada y BBQ ahumada.",
    price: 21900,
    tag: "💥 FAVORITO",
    img: "/assets/tacos-flames.png",
    category: "tacos",
    ingredients: ["3x Tacos", "Carne Desmechada", "Queso Melted", "Cebolla Caramelizada", "Salsa BBQ Ahumada"]
  },
  {
    id: "t-4",
    name: "TACOS CRISPY",
    desc: "Tres tacos con pollo crispy, queso, lechuga y salsa especial.",
    price: 21900,
    tag: "🆕 NUEVO",
    img: "/assets/tacos-flames.png",
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
    img: "/assets/caos-fries.png",
    category: "fries",
    ingredients: ["Papas Crujientes", "Carne Desmechada Juicy", "Queso Cheddar", "Tocineta", "Salsa Especial"]
  },
  {
    id: "f-3",
    name: "FRIES INFERNO",
    desc: "Papas, queso, jalapeños, carne y salsa picante.",
    price: 21900,
    tag: "🌶️ PICANTE",
    img: "/assets/caos-fries.png",
    category: "fries",
    ingredients: ["Papas Fritas", "Carne Picada", "Queso", "Jalapeños Rodajas", "Salsa Picante Habanero"]
  },
  {
    id: "f-4",
    name: "BACON CHEESE FRIES",
    desc: "Papas, abundante queso cheddar y doble tocineta.",
    price: 19900,
    tag: "💥 FAVORITO",
    img: "/assets/caos-fries.png",
    category: "fries",
    ingredients: ["Papas Doradas", "Abundante Queso Cheddar", "Doble Tocineta Crujiente"]
  },
  {
    id: "f-5",
    name: "FRIES BBQ",
    desc: "Papas, carne desmechada, queso y salsa BBQ ahumada.",
    price: 22900,
    tag: "🆕 NUEVO",
    img: "/assets/caos-fries.png",
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
    img: "/assets/hero-burger.png",
    category: "dogs",
    ingredients: ["Salchicha Premium Jumbo", "Queso Fundido", "Tocineta Bits", "Papas Fosforito", "Cebolla", "Salsas de la Casa"]
  },
  {
    id: "d-2",
    name: "HOT DOG DEMENCIAL",
    desc: "Salchicha premium, queso cheddar, carne desmechada, tocineta, papas y salsa Furia.",
    price: 23900,
    tag: "👑 PREMIUM",
    img: "/assets/hero-burger.png",
    category: "dogs",
    ingredients: ["Salchicha Jumbo", "Queso Cheddar", "Carne Desmechada", "Tocineta", "Papas Crunch", "Salsa Furia"]
  },
  {
    id: "d-3",
    name: "HOT DOG INFERNO",
    desc: "Salchicha, queso, jalapeños, tocineta y salsa picante.",
    price: 20900,
    tag: "🌶️ PICANTE",
    img: "/assets/hero-burger.png",
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
    img: "/assets/crispy-chicken.png",
    category: "wings",
    ingredients: ["5x Tiras de Pollo Crispy", "Papas Fritas", "Salsa Furia Dip", "Bebida 500ml"]
  },
  {
    id: "w-2",
    name: "BOX INFERNO",
    desc: "Tiras de pollo crispy picantes, papas, salsa picante y bebida.",
    price: 26900,
    tag: "🌶️ PICANTE",
    img: "/assets/crispy-chicken.png",
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
    img: "/assets/crispy-chicken.png",
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
    img: "/assets/drink-fuego.png",
    category: "bebidas",
    ingredients: ["Fórmula Secreta Furia", "Cítricos Oscuros", "Hielo Extra"]
  },
  {
    id: "dr-3",
    name: "EXPLOSIÓN CÍTRICA",
    desc: "Bebida cítrica fría con hielo.",
    price: 8900,
    tag: "HELADO",
    img: "/assets/drink-fuego.png",
    category: "bebidas",
    ingredients: ["Limón & Naranja", "Burbujas Refrescantes", "Hielo"]
  },
  {
    id: "dr-4",
    name: "GASEOSA",
    desc: "Diferentes opciones de gaseosa (Coca-Cola, Sprite, Premio).",
    price: 5900,
    tag: "FRÍO",
    img: "/assets/drink-fuego.png",
    category: "bebidas",
    ingredients: ["Gaseosa 400ml Helada"]
  },
  {
    id: "dr-5",
    name: "AGUA EMBOTELLADA",
    desc: "Agua purificada fría.",
    price: 4500,
    tag: "NATURAL",
    img: "/assets/drink-fuego.png",
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
    img: "/assets/furia-suprema.png",
    category: "postres",
    ingredients: ["Brownie de Chocolate Caliente", "Bola Helado de Vainilla", "Fudge de Chocolate", "Galleta Crujiente"]
  },
  {
    id: "p-2",
    name: "OREO CAOS",
    desc: "Helado de vainilla, Oreo triturada, chocolate y crema.",
    price: 13900,
    tag: "💥 FAVORITO",
    img: "/assets/furia-suprema.png",
    category: "postres",
    ingredients: ["Helado Vainilla Creamy", "Trozos de Galleta Oreo", "Jarabe de Chocolate", "Crema Batida"]
  },
  {
    id: "p-3",
    name: "FUEGO BROWNIE",
    desc: "Brownie caliente con helado y salsa de chocolate.",
    price: 12900,
    tag: "CALIENTE",
    img: "/assets/furia-suprema.png",
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
    img: "/assets/la-bestia.png",
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
  initFireCanvas();
  renderProducts();
  renderExtrasGrid();
  renderCombosSection();
  setupCategoryFilters();
  setupProductModal();
  setupCartDrawer();
  setupMobileNav();
});

// INTRO SPLASH & ROCK-SOLID NAV SCROLLING ENGINE
function initIntroSplash() {
  const splash = document.getElementById("intro-splash");
  const btnEnter = document.getElementById("btn-enter");

  if (!splash) return;

  function unlockSplash() {
    splash.style.transition = "opacity 0.2s ease";
    splash.style.opacity = "0";
    splash.style.pointerEvents = "none";
    setTimeout(() => {
      splash.style.display = "none";
    }, 200);
  }

  if (btnEnter) {
    btnEnter.addEventListener("click", unlockSplash);
  }

  // Exact Pixel Offset Scrolling for Navigation Links (.nav-scroll-btn)
  document.querySelectorAll(".nav-scroll-btn").forEach(btn => {
    btn.addEventListener("click", function (e) {
      const href = this.getAttribute("href");
      if (!href || !href.startsWith("#") || href === "#") return;

      const targetEl = document.querySelector(href);
      if (targetEl) {
        e.preventDefault();
        unlockSplash();

        // Calculate exact pixel position relative to current viewport
        const targetY = targetEl.getBoundingClientRect().top + window.pageYOffset - 80;
        window.scrollTo({
          top: targetY,
          behavior: "smooth"
        });
      }
    });
  });
}

// LIGHTWEIGHT FIRE CANVAS PARTICLES (THROTTLED & AUTO-PAUSED ON LOW POWER / HIDDEN)
function initFireCanvas() {
  const canvas = document.getElementById("fire-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  const isMobile = window.innerWidth < 768;
  const particleCount = isMobile ? 12 : 25;

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  let isTabActive = true;
  document.addEventListener("visibilitychange", () => {
    isTabActive = !document.hidden;
  });

  window.addEventListener("resize", () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }, { passive: true });

  const particles = [];

  class Particle {
    constructor() { this.reset(); }
    reset() {
      this.x = Math.random() * width;
      this.y = height + Math.random() * 30;
      this.radius = Math.random() * 2 + 1;
      this.speedY = Math.random() * 1.2 + 0.5;
      this.speedX = (Math.random() - 0.5) * 0.5;
      this.alpha = Math.random() * 0.5 + 0.2;
      this.color = Math.random() > 0.4 ? "#ff0033" : "#ffcc00";
    }
    update() {
      this.y -= this.speedY;
      this.x += this.speedX;
      this.alpha -= 0.003;
      if (this.y < 0 || this.alpha <= 0) this.reset();
    }
    draw() {
      ctx.globalAlpha = this.alpha;
      ctx.fillStyle = this.color;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  for (let i = 0; i < particleCount; i++) particles.push(new Particle());

  function animate() {
    if (isTabActive) {
      ctx.clearRect(0, 0, width, height);
      particles.forEach(p => { p.update(); p.draw(); });
    }
    requestAnimationFrame(animate);
  }
  animate();
}

// RENDER PRODUCTS GRID WITH LAZY LOADING & HARDWARE ACCELERATION
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
    card.className = "product-card rounded-xl overflow-hidden flex flex-col justify-between group cursor-pointer transform-gpu";

    card.innerHTML = `
      <div class="relative overflow-hidden bg-black/80">
        <span class="absolute top-3 left-3 bg-red text-white text-xs font-condensed font-bold px-3 py-1 rounded shadow z-10">
          ${product.tag}
        </span>
        <img src="${product.img}" alt="${product.name}" loading="lazy" decoding="async" class="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-300">
      </div>
      <div class="p-5 flex flex-col flex-grow justify-between space-y-4">
        <div>
          <h3 class="text-2xl font-heading text-white uppercase tracking-wider">${product.name}</h3>
          <p class="text-gray-400 text-xs font-body mt-1 line-clamp-2">${product.desc}</p>
        </div>
        <div class="flex items-center justify-between pt-3 border-t border-white/10">
          <span class="text-2xl font-heading text-red">${formatMoney(product.price)}</span>
          <button class="btn-furia text-base px-4 py-1.5 font-heading tracking-wider flex items-center gap-1 add-quick-btn"
                  data-id="${product.id}">
            AGREGAR 🔥
          </button>
        </div>
      </div>
    `;

    card.addEventListener("click", (e) => {
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
    card.className = "bg-black/60 border border-white/10 p-4 rounded-lg flex items-center justify-between hover:border-yellow transition-all cursor-pointer";
    card.innerHTML = `
      <div>
        <div class="font-condensed text-white text-base font-bold uppercase">${extra.name}</div>
        <div class="text-red font-heading text-lg">${formatMoney(extra.price)}</div>
      </div>
      <button class="btn-furia text-xs px-3 py-1 font-heading uppercase font-bold add-extra-direct-btn">
        + AGREGAR
      </button>
    `;

    card.querySelector(".add-extra-direct-btn").addEventListener("click", (e) => {
      e.stopPropagation();
      addToCart(extra.name, extra.price, "/assets/furia-suprema.png", []);
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
    card.className = "combo-card border border-red/40 bg-black/90 p-5 flex flex-col justify-between relative group hover:border-red transition-all rounded-xl cursor-pointer transform-gpu";

    card.innerHTML = `
      <div class="absolute -top-3 right-4 bg-red text-white font-heading px-3 py-0.5 text-xs tracking-widest rounded shadow">
        ${combo.tag}
      </div>
      <div>
        <div class="overflow-hidden mb-4 rounded-lg">
          <img src="${combo.img}" alt="${combo.name}" loading="lazy" decoding="async" class="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300">
        </div>
        <h3 class="text-3xl font-heading text-white uppercase mb-1">${combo.name}</h3>
        <p class="text-gray-400 text-xs mb-3">${combo.desc}</p>
      </div>
      <div class="flex items-center justify-between pt-3 border-t border-white/10">
        <span class="text-3xl font-heading text-red">${formatMoney(combo.price)}</span>
        <button class="btn-furia px-5 py-1.5 text-base font-heading add-combo-btn" data-id="${combo.id}">
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

  function closeModal() {
    modal.querySelector(".transform").classList.add("scale-95");
    setTimeout(() => {
      modal.classList.add("pointer-events-none", "opacity-0");
      modal.classList.remove("opacity-100");
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
    const chosenExtras = Array.from(selectedModalExtras).map(id => extrasList.find(e => e.id === id));
    addToCart(activeModalProduct.name, activeModalProduct.price, activeModalProduct.img, chosenExtras, modalQuantity);
    closeModal();
  });
}

function openProductModal(product) {
  activeModalProduct = product;
  modalQuantity = 1;
  selectedModalExtras.clear();

  const modal = document.getElementById("product-modal");
  const title = document.getElementById("modal-title");
  const price = document.getElementById("modal-price");
  const desc = document.getElementById("modal-desc");
  const img = document.getElementById("modal-img");
  const tag = document.getElementById("modal-tag");
  const ingredientsList = document.getElementById("modal-ingredients");
  const extrasContainer = document.getElementById("modal-extras-list");

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

  extrasContainer.innerHTML = "";
  extrasList.forEach(extra => {
    const label = document.createElement("label");
    label.className = "flex items-center gap-2 p-2 border border-white/10 rounded bg-black/40 hover:border-yellow cursor-pointer select-none";
    label.innerHTML = `
      <input type="checkbox" value="${extra.id}" class="accent-red w-4 h-4 rounded cursor-pointer">
      <span class="text-gray-200">${extra.name}</span>
      <span class="text-yellow font-bold ml-auto">${formatMoney(extra.price)}</span>
    `;

    const checkbox = label.querySelector("input");
    checkbox.addEventListener("change", () => {
      if (checkbox.checked) selectedModalExtras.add(extra.id);
      else selectedModalExtras.delete(extra.id);
      updateModalTotals();
    });

    extrasContainer.appendChild(label);
  });

  updateModalTotals();

  modal.classList.remove("pointer-events-none", "opacity-0");
  modal.classList.add("opacity-100");
  modal.querySelector(".transform").classList.remove("scale-95");
}

function updateModalTotals() {
  document.getElementById("modal-qty-val").innerText = modalQuantity;
  if (!activeModalProduct) return;

  let extrasSum = 0;
  selectedModalExtras.forEach(id => {
    const found = extrasList.find(e => e.id === id);
    if (found) extrasSum += found.price;
  });

  const singlePrice = activeModalProduct.price + extrasSum;
  const totalPrice = singlePrice * modalQuantity;
  document.getElementById("modal-price").innerText = formatMoney(totalPrice);
}

// CART & WHATSAPP
function setupCartDrawer() {
  const cartBtn = document.getElementById("cart-btn");
  const cartCloseBtn = document.getElementById("cart-close-btn");
  const cartDrawer = document.getElementById("cart-drawer");
  const cartBackdrop = document.getElementById("cart-backdrop");
  const whatsappSubmitBtn = document.getElementById("whatsapp-submit-btn");

  function openCart() {
    cartDrawer.classList.remove("pointer-events-none", "opacity-0");
    cartDrawer.classList.add("opacity-100");
    cartDrawer.querySelector(".transform").classList.remove("translate-x-full");
  }

  function closeCart() {
    cartDrawer.querySelector(".transform").classList.add("translate-x-full");
    setTimeout(() => {
      cartDrawer.classList.add("pointer-events-none", "opacity-0");
      cartDrawer.classList.remove("opacity-100");
    }, 200);
  }

  cartBtn.addEventListener("click", openCart);
  cartCloseBtn.addEventListener("click", closeCart);
  cartBackdrop.addEventListener("click", closeCart);
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
    row.className = "flex flex-col bg-black/80 border border-white/10 p-3 rounded-lg space-y-2";

    const extrasText = item.extras.length > 0
      ? `<div class="text-xs text-yellow font-body">+ ${item.extras.map(e => e.name).join(", ")}</div>`
      : "";

    row.innerHTML = `
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-3">
          <img src="${item.img}" alt="${item.name}" loading="lazy" class="w-14 h-14 object-cover rounded">
          <div>
            <h4 class="font-heading text-white text-xl uppercase leading-none">${item.name}</h4>
            ${extrasText}
            <span class="text-red font-condensed font-bold text-sm">${formatMoney(item.unitPrice)} c/u</span>
          </div>
        </div>

        <div class="flex items-center gap-2">
          <button class="bg-gray-800 text-white w-7 h-7 rounded flex items-center justify-center font-bold btn-minus cursor-pointer" data-index="${index}">-</button>
          <span class="font-bold text-white text-lg w-5 text-center">${item.quantity}</span>
          <button class="bg-gray-800 text-white w-7 h-7 rounded flex items-center justify-center font-bold btn-plus cursor-pointer" data-index="${index}">+</button>
        </div>
      </div>
    `;

    container.appendChild(row);
  });

  container.querySelectorAll(".btn-minus").forEach(btn => {
    btn.addEventListener("click", () => {
      const idx = parseInt(btn.dataset.index);
      if (cart[idx].quantity > 1) cart[idx].quantity--;
      else cart.splice(idx, 1);
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
