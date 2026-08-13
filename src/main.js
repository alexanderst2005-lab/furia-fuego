// FURIA & FUEGO - Main Logic Engine

// Config: Change this to your business WhatsApp number
const WHATSAPP_NUMBER = "573000000000";

// State
let cart = [];
let currentCategory = "all";

// Products Data
const products = [
  {
    id: "burg-1",
    name: "LA FURIOSA",
    desc: "Doble carne, doble queso, tocineta crujiente y salsa Furia.",
    price: 24900,
    tag: "🔥 FAVORITO",
    img: "/assets/hero-burger.png",
    category: "burgers",
    spice: 3
  },
  {
    id: "burg-2",
    name: "FUEGO NEGRO",
    desc: "Carne a la parrilla, queso cheddar, cebolla caramelizada y salsa BBQ ahumada.",
    price: 27900,
    tag: "NUEVO",
    img: "/assets/furia-suprema.png",
    category: "burgers",
    spice: 2
  },
  {
    id: "burg-3",
    name: "LA BESTIA",
    desc: "Triple carne, queso, tocineta, pepinillos y salsa especial.",
    price: 32900,
    tag: "BEST SELLER",
    img: "/assets/hero-burger.png",
    category: "burgers",
    spice: 4
  },
  {
    id: "burg-4",
    name: "INFERNO",
    desc: "Doble carne, queso, jalapeños, tocineta y salsa picante.",
    price: 28900,
    tag: "🔥 PICANTE",
    img: "/assets/hero-burger.png",
    category: "burgers",
    spice: 4
  },
  {
    id: "taco-1",
    name: "TACOS EN LLAMAS",
    desc: "Carne sazonada, queso, cebolla, cilantro y salsa de la casa.",
    price: 19900,
    tag: "🔥 FAVORITO",
    img: "/assets/tacos-flames.png",
    category: "tacos",
    spice: 2
  },
  {
    id: "taco-2",
    name: "TACOS FURIOSOS",
    desc: "Carne, queso, jalapeños, tocineta y salsa picante.",
    price: 22900,
    tag: "NUEVO",
    img: "/assets/tacos-flames.png",
    category: "tacos",
    spice: 3
  },
  {
    id: "fries-1",
    name: "CAOS FRIES",
    desc: "Papas crujientes, queso cheddar, tocineta y salsa Furia.",
    price: 17900,
    tag: "BEST SELLER",
    img: "/assets/caos-fries.png",
    category: "fries",
    spice: 1
  },
  {
    id: "fries-2",
    name: "FRIES DEMENCIALES",
    desc: "Papas, carne desmechada, queso, tocineta y salsa especial.",
    price: 23900,
    tag: "🔥 FAVORITO",
    img: "/assets/caos-fries.png",
    category: "fries",
    spice: 3
  },
  {
    id: "crisp-1",
    name: "CRISPY FUEGO",
    desc: "Pollo crispy, salsa picante y acompañamiento.",
    price: 21900,
    tag: "NUEVO",
    img: "/assets/crispy-chicken.png",
    category: "crispy",
    spice: 2
  },
  {
    id: "crisp-2",
    name: "CRISPY FURIOSO",
    desc: "Pollo crispy, queso, tocineta y salsa especial.",
    price: 24900,
    tag: "🔥 FAVORITO",
    img: "/assets/crispy-chicken.png",
    category: "crispy",
    spice: 3
  },
  {
    id: "drink-1",
    name: "FUEGO ROJO",
    desc: "Bebida fría de frutos rojos.",
    price: 8900,
    tag: "HELADO",
    img: "/assets/drink-fuego.png",
    category: "bebidas",
    spice: 1
  },
  {
    id: "drink-2",
    name: "EXPLOSIÓN",
    desc: "Bebida cítrica con hielo.",
    price: 8900,
    tag: "HELADO",
    img: "/assets/drink-fuego.png",
    category: "bebidas",
    spice: 1
  },
  {
    id: "drink-3",
    name: "BLACK FURY",
    desc: "Bebida oscura de la casa.",
    price: 9900,
    tag: "EXCLUSIVA",
    img: "/assets/drink-fuego.png",
    category: "bebidas",
    spice: 1
  }
];

// Format currency
function formatMoney(amount) {
  return "$" + amount.toLocaleString("es-CO");
}

// DOM Ready initialization
document.addEventListener("DOMContentLoaded", () => {
  initIntroSplash();
  initFireCanvas();
  renderProducts();
  setupCategoryFilters();
  setupSpiceSelector();
  setupCartDrawer();
  setupMobileNav();
});

// INTRO SPLASH HANDLER
function initIntroSplash() {
  const splash = document.getElementById("intro-splash");
  const btnEnter = document.getElementById("btn-enter");

  btnEnter.addEventListener("click", () => {
    splash.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    splash.style.opacity = "0";
    splash.style.transform = "scale(1.05)";
    setTimeout(() => {
      splash.style.display = "none";
    }, 600);
  });
}

// FIRE CANVAS PARTICLES
function initFireCanvas() {
  const canvas = document.getElementById("fire-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener("resize", () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const particles = [];
  const particleCount = 40;

  class Particle {
    constructor() {
      this.reset();
    }
    reset() {
      this.x = Math.random() * width;
      this.y = height + Math.random() * 50;
      this.radius = Math.random() * 2.5 + 1;
      this.speedY = Math.random() * 1.5 + 0.5;
      this.speedX = (Math.random() - 0.5) * 0.8;
      this.alpha = Math.random() * 0.6 + 0.3;
      this.color = Math.random() > 0.4 ? "#ff0033" : "#ffcc00";
    }
    update() {
      this.y -= this.speedY;
      this.x += this.speedX;
      this.alpha -= 0.003;
      if (this.y < 0 || this.alpha <= 0) {
        this.reset();
      }
    }
    draw() {
      ctx.save();
      ctx.globalAlpha = this.alpha;
      ctx.fillStyle = this.color;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }
  }

  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);
    particles.forEach(p => {
      p.update();
      p.draw();
    });
    requestAnimationFrame(animate);
  }

  animate();
}

// RENDER PRODUCTS GRID
function renderProducts(filterCategory = "all", filterSpice = null) {
  const grid = document.getElementById("products-grid");
  if (!grid) return;

  grid.innerHTML = "";

  let filtered = products;
  if (filterCategory !== "all") {
    filtered = filtered.filter(p => p.category === filterCategory);
  }
  if (filterSpice) {
    filtered = filtered.filter(p => p.spice === filterSpice);
  }

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="col-span-full text-center py-12 text-gray-400 text-xl font-condensed">
        🔥 No hay productos en este nivel. ¡Prueba otro nivel de Furia!
      </div>
    `;
    return;
  }

  filtered.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card rounded-lg overflow-hidden flex flex-col justify-between group";

    card.innerHTML = `
      <div class="relative overflow-hidden bg-black/60">
        <span class="absolute top-3 left-3 bg-red text-white text-xs font-condensed font-bold px-3 py-1 rounded shadow-md z-10">
          ${product.tag}
        </span>
        <img src="${product.img}" alt="${product.name}" class="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500">
      </div>
      <div class="p-6 flex flex-col flex-grow justify-between space-y-4">
        <div>
          <h3 class="text-3xl font-heading text-white uppercase tracking-wider">${product.name}</h3>
          <p class="text-gray-400 text-sm font-body mt-1">${product.desc}</p>
        </div>
        <div class="flex items-center justify-between pt-4 border-t border-white/10">
          <span class="text-3xl font-heading text-red">${formatMoney(product.price)}</span>
          <button class="btn-furia text-lg px-4 py-2 font-heading tracking-wider flex items-center gap-1 add-to-cart-trigger" 
                  data-name="${product.name}" data-price="${product.price}" data-img="${product.img}">
            AGREGAR 🔥
          </button>
        </div>
      </div>
    `;

    grid.appendChild(card);
  });

  // Attach event listeners to Add buttons
  grid.querySelectorAll(".add-to-cart-trigger").forEach(btn => {
    btn.addEventListener("click", () => {
      const name = btn.dataset.name;
      const price = parseInt(btn.dataset.price);
      const img = btn.dataset.img;
      addToCart(name, price, img);
    });
  });
}

// CATEGORY FILTERS HANDLER
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

// SPICE SELECTOR HANDLER
function setupSpiceSelector() {
  const spiceCards = document.querySelectorAll(".spice-card");

  spiceCards.forEach(card => {
    card.addEventListener("click", () => {
      const spiceLevel = parseInt(card.dataset.spice);
      const menuSection = document.getElementById("menu");
      if (menuSection) {
        menuSection.scrollIntoView({ behavior: "smooth" });
      }
      renderProducts("all", spiceLevel);
      showToast(`🔥 FILTRADO POR NIVEL 0${spiceLevel}`);
    });
  });
}

// SHOPPING CART & WHATSAPP INTEGRATION
function setupCartDrawer() {
  const cartBtn = document.getElementById("cart-btn");
  const cartCloseBtn = document.getElementById("cart-close-btn");
  const cartDrawer = document.getElementById("cart-drawer");
  const cartBackdrop = document.getElementById("cart-backdrop");
  const whatsappSubmitBtn = document.getElementById("whatsapp-submit-btn");

  // Attach static buttons on page (like Hero or Combos buttons)
  document.querySelectorAll(".add-to-cart-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const name = btn.dataset.name;
      const price = parseInt(btn.dataset.price);
      const img = btn.dataset.img;
      addToCart(name, price, img);
    });
  });

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
    }, 300);
  }

  cartBtn.addEventListener("click", openCart);
  cartCloseBtn.addEventListener("click", closeCart);
  cartBackdrop.addEventListener("click", closeCart);

  whatsappSubmitBtn.addEventListener("click", sendWhatsAppOrder);
}

function addToCart(name, price, img) {
  const existing = cart.find(item => item.name === name);
  if (existing) {
    existing.quantity++;
  } else {
    cart.push({ name, price, img, quantity: 1 });
  }
  updateCartUI();
  showToast(`🔥 ¡${name} AGREGADO!`);
}

function updateCartUI() {
  const cartBadge = document.getElementById("cart-badge");
  const container = document.getElementById("cart-items-container");
  const totalPriceEl = document.getElementById("cart-total-price");

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

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
    row.className = "flex items-center justify-between bg-black/60 border border-white/10 p-3 rounded-lg";

    row.innerHTML = `
      <div class="flex items-center gap-3">
        <img src="${item.img}" alt="${item.name}" class="w-14 h-14 object-cover rounded">
        <div>
          <h4 class="font-heading text-white text-xl uppercase leading-none">${item.name}</h4>
          <span class="text-red font-condensed font-bold">${formatMoney(item.price)}</span>
        </div>
      </div>

      <div class="flex items-center gap-2">
        <button class="bg-gray-800 text-white w-7 h-7 rounded flex items-center justify-center font-bold btn-minus" data-index="${index}">-</button>
        <span class="font-bold text-white text-lg w-5 text-center">${item.quantity}</span>
        <button class="bg-gray-800 text-white w-7 h-7 rounded flex items-center justify-center font-bold btn-plus" data-index="${index}">+</button>
      </div>
    `;

    container.appendChild(row);
  });

  // Quantity Modifier Listeners
  container.querySelectorAll(".btn-minus").forEach(btn => {
    btn.addEventListener("click", () => {
      const idx = parseInt(btn.dataset.index);
      if (cart[idx].quantity > 1) {
        cart[idx].quantity--;
      } else {
        cart.splice(idx, 1);
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
}

// SEND WHATSAPP ORDER
function sendWhatsAppOrder() {
  if (cart.length === 0) {
    alert("Tu carrito está vacío. Agrega algún producto para pedir por WhatsApp.");
    return;
  }

  let text = `🔥 *NUEVO PEDIDO - FURIA & FUEGO* 🔥\n\n`;
  text += `_¡El hambre no se combate. Se desata!_\n\n`;
  text += `*DETALLE DE MI PEDIDO:*\n`;

  let total = 0;
  cart.forEach(item => {
    const subtotal = item.price * item.quantity;
    total += subtotal;
    text += `• ${item.quantity}x *${item.name}* - ${formatMoney(subtotal)}\n`;
  });

  text += `\n*TOTAL A PAGAR:* ${formatMoney(total)}\n\n`;
  text += `📍 *Dirección de entrega:* (Escribe tu dirección aquí)\n`;
  text += `💳 *Método de Pago:* (Nequi / Daviplata / Efectivo)`;

  const encodedText = encodeURIComponent(text);
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedText}`;

  window.open(whatsappUrl, "_blank");
}

// MOBILE NAV TOGGLE
function setupMobileNav() {
  const menuBtn = document.getElementById("mobile-menu-btn");
  const nav = document.getElementById("mobile-nav");

  if (!menuBtn || !nav) return;

  menuBtn.addEventListener("click", () => {
    nav.classList.toggle("hidden");
  });

  nav.querySelectorAll(".mobile-link").forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.add("hidden");
    });
  });
}

// TOAST NOTIFICATION
function showToast(msg) {
  const toast = document.getElementById("toast");
  if (!toast) return;

  toast.innerText = msg;
  toast.classList.remove("translate-y-24", "opacity-0");
  toast.classList.add("translate-y-0", "opacity-100");

  setTimeout(() => {
    toast.classList.add("translate-y-24", "opacity-0");
    toast.classList.remove("translate-y-0", "opacity-100");
  }, 2500);
}
