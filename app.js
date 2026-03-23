// ========================================
// PURE DEFENSE — STORE & UI LOGIC
// ========================================

// ===== PRODUCT CATALOG =====
const PRODUCTS = {
  // Individual Units
  '80001':  { id: '80001',  name: 'Pure Defense 1oz',               price: 8.95,    image: './assets/img-1oz-can.png',       category: 'Individual Units',       description: 'Push button compact. Perfect for personal carry.' },
  '80003':  { id: '80003',  name: 'Pure Defense 3oz Trigger',       price: 12.95,    image: './assets/img-3oz-can.png',       category: 'Individual Units',       description: 'Precision trigger spray for targeted application.' },
  '80033':  { id: '80033',  name: 'Pure Defense 3oz Push Button',   price: 12.95,    image: './assets/img-3oz-can.png',       category: 'Individual Units',       description: 'Push-button aerosol for quick, even coverage.' },
  '80007':  { id: '80007',  name: 'Pure Defense 7oz Trigger',       price: 14.95,    image: './assets/img-7oz-can.png',       category: 'Individual Units',       description: 'Full-size trigger spray. The workhorse.' },

  // Bulk Cases
  '81311':  { id: '81311',  name: '1oz Case — 344 Units',           price: 2399.00,  image: './assets/img-bulk-case.png',     category: 'Bulk Cases',             description: 'Full case of 344 cans. $6.99/unit.' },
  '83144':  { id: '83144',  name: '3oz Trigger Case — 144 Units',   price: 1499.00,  image: './assets/img-bulk-case.png',     category: 'Bulk Cases',             description: '$10.41/unit. Stock clinics, job sites, or retail.' },
  '87070':  { id: '87070',  name: '7oz Trigger Case — 70 Units',    price: 849.00,  image: './assets/img-bulk-case.png',     category: 'Bulk Cases',             description: '$12.13/unit. Standard professional case.' },
  '80207':  { id: '80207',  name: '7oz Twin Pack',                  price: 24.95,    image: './assets/img-7oz-can.png',       category: 'Bulk Cases',             description: 'Two 7oz trigger cans packaged together.' },

  // Dispensers & Stations
  '2110':   { id: '2110',   name: 'Eye Wash Magazine Dispenser',    price: 349.95,  image: './assets/img-dispenser.png',     category: 'Dispensers & Stations',  description: 'Wall-mounted magazine dispenser for high-traffic areas.' },
  '87079':  { id: '87079',  name: 'Twin 7oz Station w/ Mirror',     price: 59.95,   image: './assets/img-twin-station.png',  category: 'Dispensers & Stations',  description: 'Screw-mount twin station with built-in mirror.' },
  '87085':  { id: '87085',  name: 'Twin 7oz Station — Adhesive',    price: 59.95,   image: './assets/img-twin-station.png',  category: 'Dispensers & Stations',  description: 'Adhesive tape mount. No drilling required.' },
  '87086':  { id: '87086',  name: 'Truck / Wall Mount',             price: 12.95,    image: './assets/img-wall-mount.png',    category: 'Dispensers & Stations',  description: 'Holds one 7oz can. Mount in vehicles or workshops.' },

  // Carry Bags & Holsters
  '2098':   { id: '2098',   name: '12-Pack Carry Bag',              price: 64.95,   image: './assets/img-carry-bag.png',     category: 'Carry Bags & Holsters',  description: 'Holds 12 x 7oz cans. For field medics.' },
  '2097':   { id: '2097',   name: '15-Pack Carry Bag',              price: 74.95,   image: './assets/img-carry-bag.png',     category: 'Carry Bags & Holsters',  description: 'Holds 15 x 7oz cans. Extra capacity.' },
  '01095':  { id: '01095',  name: '3oz Belt Holster',               price: 18.95,    image: './assets/img-holster.png',       category: 'Carry Bags & Holsters',  description: 'Black holster for 3oz cans. Clips to duty belts.' },

  // First Aid Supplies
  '90100':  { id: '90100',  name: 'Wound Care Refill Pack',         price: 29.95,   image: './assets/img-supplies-pack.png', category: 'First Aid Supplies',     description: 'Antiseptic wipes, ointment, bandages, gloves.' },
  '90200':  { id: '90200',  name: 'Trauma Response Pack',           price: 79.95,   image: './assets/img-trauma-kit.png',    category: 'First Aid Supplies',     description: 'Tourniquet, hemostatic gauze, trauma pad, shears.' },
  '90300':  { id: '90300',  name: 'Overdose Response Kit',          price: 89.95,   image: './assets/img-narcan-kit.png',    category: 'First Aid Supplies',     description: 'Narcan 4mg, fentanyl strips, CPR shield.' },
  '90400':  { id: '90400',  name: 'OTC Medication Pack',            price: 19.95,    image: './assets/img-med-pack.png',      category: 'First Aid Supplies',     description: 'Ibuprofen, acetaminophen, aspirin, Benadryl packets.' },

  // First Aid Kits
  'KIT-BASE': { id: 'KIT-BASE', name: 'Base Kit',                   price: 199.00,  image: './assets/img-first-aid-kit.png', category: 'First Aid Kits',         description: 'Starter kit with 2x 7oz cans and essentials.' },
  'KIT-PRO':  { id: 'KIT-PRO',  name: 'Pro Kit',                    price: 299.00,  image: './assets/img-first-aid-kit.png', category: 'First Aid Kits',         description: 'Professional kit with 4x 7oz cans and expanded supplies.' },
  'KIT-TAC':  { id: 'KIT-TAC',  name: 'Tactical Kit',               price: 399.00,  image: './assets/img-first-aid-kit.png', category: 'First Aid Kits',         description: 'Tactical kit with tourniquet, hemostatic gauze, MOLLE bag.' },
  'KIT-FULL': { id: 'KIT-FULL', name: 'Fully Loaded Kit',           price: 499.00,  image: './assets/img-first-aid-kit.png', category: 'First Aid Kits',         description: 'Premium kit with 8x cans, Narcan, and full supplies.' },

  // Eye Wash Station Tiers (purchasable ones)
  'EWS-PERSONAL': { id: 'EWS-PERSONAL', name: 'Personal Station',   price: 149.00,   image: './assets/img-eye-wash-station.png', category: 'Eye Wash Stations',  description: 'Single wall-mount bracket with 1x 7oz can.' },
  'EWS-TWIN':     { id: 'EWS-TWIN',     name: 'Twin Station',       price: 249.00,  image: './assets/img-twin-station.png',     category: 'Eye Wash Stations',  description: 'Twin bracket with mirror and 2x 7oz cans.' },
  'EWS-MAG':      { id: 'EWS-MAG',      name: 'Magazine Dispenser', price: 749.00,  image: './assets/img-dispenser.png',        category: 'Eye Wash Stations',  description: 'Wall-mounted rack holding 6x 7oz cans.' },

  // Quote-only items (not purchasable via cart - kept for reference)
  'EWS-IND':   { id: 'EWS-IND',   name: 'Industrial Station',      price: 3995.00, image: './assets/img-eye-wash-station.png', category: 'Eye Wash Stations',  description: 'Full cabinet with signage and 12-can capacity.' },
  'EWS-ENT':   { id: 'EWS-ENT',   name: 'Enterprise System',       price: 12500.00, image: './assets/img-eye-wash-station.png', category: 'Eye Wash Stations',  description: 'Multi-point installation with 4 stations.' },

  // Institutional Packages (quote only - kept for reference)
  'INST-START': { id: 'INST-START', name: 'Starter Package',        price: 399.00,  image: './assets/img-bulk-case.png',  category: 'Institutional', description: '10 cans, 1 wall station, training guide.' },
  'INST-PRO':   { id: 'INST-PRO',   name: 'Professional Package',   price: 1495.00,  image: './assets/img-bulk-case.png',  category: 'Institutional', description: '50 cans, 3 stations, carry bag, training.' },
  'INST-ENT':   { id: 'INST-ENT',   name: 'Enterprise Package',     price: 4995.00, image: './assets/img-bulk-case.png',  category: 'Institutional', description: '200 cans, 8 stations, 2 carry bags, annual service.' },
};

const SHIPPING_THRESHOLD = 100;
const SHIPPING_RATE = 9.95;


// ===== CART STATE =====
let cart = [];
let shippingInfo = {};


// ===== UTILITY =====
function formatPrice(amount) {
  return '$' + amount.toFixed(2);
}

function generateOrderNumber() {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let result = 'PD-';
  for (let i = 0; i < 8; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

function getCartTotal() {
  return cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
}

function getCartItemCount() {
  return cart.reduce((sum, item) => sum + item.quantity, 0);
}

function getShippingCost() {
  const subtotal = getCartTotal();
  return subtotal >= SHIPPING_THRESHOLD ? 0 : SHIPPING_RATE;
}


// ===== LOCAL STORAGE =====
function saveCart() {
  try {
    localStorage.setItem('pureDefenseCart', JSON.stringify(cart));
  } catch (e) {
    console.warn('Could not save cart to localStorage:', e);
  }
}

function loadCart() {
  try {
    const saved = localStorage.getItem('pureDefenseCart');
    if (saved) {
      cart = JSON.parse(saved);
    }
  } catch (e) {
    console.warn('Could not load cart from localStorage:', e);
    cart = [];
  }
}


// ===== CART OPERATIONS =====
function addToCart(productId) {
  const product = PRODUCTS[productId];
  if (!product) return;

  const existing = cart.find(item => item.id === productId);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
      image: product.image
    });
  }

  saveCart();
  updateCartBadge();
  renderCartDrawer();
  showToast(`${product.name} added to cart`);
}

function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  saveCart();
  updateCartBadge();
  renderCartDrawer();
}

function updateQuantity(productId, newQty) {
  const item = cart.find(item => item.id === productId);
  if (!item) return;

  if (newQty <= 0) {
    removeFromCart(productId);
    return;
  }

  item.quantity = newQty;
  saveCart();
  updateCartBadge();
  renderCartDrawer();
}

function clearCart() {
  cart = [];
  saveCart();
  updateCartBadge();
  renderCartDrawer();
}


// ===== CART BADGE =====
function updateCartBadge() {
  const badge = document.getElementById('cartBadge');
  if (!badge) return;

  const count = getCartItemCount();
  if (count > 0) {
    badge.textContent = count;
    badge.classList.add('visible');
  } else {
    badge.textContent = '';
    badge.classList.remove('visible');
  }
}


// ===== TOAST =====
function showToast(message) {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <span class="toast-icon">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
    </span>
    <span>${message}</span>
  `;
  container.appendChild(toast);

  setTimeout(() => {
    toast.classList.add('removing');
    setTimeout(() => toast.remove(), 300);
  }, 2500);
}


// ===== CART DRAWER =====
function openCartDrawer() {
  const drawer = document.getElementById('cartDrawer');
  const overlay = document.getElementById('cartOverlay');
  if (drawer) drawer.classList.add('open');
  if (overlay) overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
  renderCartDrawer();
}

function closeCartDrawer() {
  const drawer = document.getElementById('cartDrawer');
  const overlay = document.getElementById('cartOverlay');
  if (drawer) drawer.classList.remove('open');
  if (overlay) overlay.classList.remove('open');
  document.body.style.overflow = '';
}

function renderCartDrawer() {
  const itemsContainer = document.getElementById('cartItems');
  const emptyState = document.getElementById('cartEmpty');
  const summary = document.getElementById('cartSummary');

  if (!itemsContainer) return;

  if (cart.length === 0) {
    itemsContainer.innerHTML = '';
    if (emptyState) emptyState.classList.add('visible');
    if (summary) summary.classList.remove('visible');
    return;
  }

  if (emptyState) emptyState.classList.remove('visible');
  if (summary) summary.classList.add('visible');

  itemsContainer.innerHTML = cart.map(item => `
    <div class="cart-item">
      <img class="cart-item-img" src="${item.image}" alt="${item.name}" loading="lazy">
      <div class="cart-item-details">
        <span class="cart-item-name">${item.name}</span>
        <span class="cart-item-price">${formatPrice(item.price)} each</span>
        <div class="quantity-controls">
          <button data-action="decrease" data-id="${item.id}" aria-label="Decrease quantity">−</button>
          <span class="qty-value">${item.quantity}</span>
          <button data-action="increase" data-id="${item.id}" aria-label="Increase quantity">+</button>
        </div>
      </div>
      <div class="cart-item-actions">
        <span class="cart-item-total">${formatPrice(item.price * item.quantity)}</span>
        <button class="cart-item-remove" data-action="remove" data-id="${item.id}" aria-label="Remove item">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2"/></svg>
        </button>
      </div>
    </div>
  `).join('');

  // Update summary
  const subtotal = getCartTotal();
  const shipping = getShippingCost();
  const total = subtotal + shipping;

  const subtotalEl = document.getElementById('cartSubtotal');
  const shippingEl = document.getElementById('cartShipping');
  const totalEl = document.getElementById('cartTotal');

  if (subtotalEl) subtotalEl.textContent = formatPrice(subtotal);
  if (shippingEl) shippingEl.textContent = shipping === 0 ? 'FREE' : formatPrice(shipping) + ' flat rate';
  if (totalEl) totalEl.textContent = formatPrice(total);
}


// ===== CHECKOUT =====
let currentStep = 1;

function openCheckout() {
  closeCartDrawer();
  const overlay = document.getElementById('checkoutOverlay');
  if (overlay) {
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  goToStep(1);
}

function closeCheckout() {
  const overlay = document.getElementById('checkoutOverlay');
  if (overlay) {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  }
  // Don't reset steps if on confirmation
  if (currentStep !== 4) {
    goToStep(1);
  }
}

function goToStep(step) {
  currentStep = step;

  // Update step visibility
  for (let i = 1; i <= 4; i++) {
    const stepEl = document.getElementById('checkoutStep' + i);
    if (stepEl) {
      stepEl.classList.toggle('active', i === step);
    }
  }

  // Update step dots
  const dots = document.querySelectorAll('.step-dot');
  dots.forEach(dot => {
    const dotStep = parseInt(dot.getAttribute('data-step'));
    dot.classList.remove('active', 'completed');
    if (dotStep === step) dot.classList.add('active');
    else if (dotStep < step) dot.classList.add('completed');
  });

  // Render step content
  if (step === 2) renderReviewStep();
  if (step === 3) renderPaymentStep();

  // Scroll to top of checkout
  const overlay = document.getElementById('checkoutOverlay');
  if (overlay) overlay.scrollTop = 0;
}

function validateShippingForm() {
  let isValid = true;

  const fields = [
    { id: 'shipName',     errorId: 'shipNameError',     msg: 'Name is required',                validate: v => v.trim().length > 0 },
    { id: 'shipEmail',    errorId: 'shipEmailError',    msg: 'Valid email required',             validate: v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) },
    { id: 'shipPhone',    errorId: 'shipPhoneError',    msg: 'Phone number required',            validate: v => /[\d\-\(\)\+\s]{7,}/.test(v) },
    { id: 'shipAddress1', errorId: 'shipAddress1Error', msg: 'Address is required',              validate: v => v.trim().length > 0 },
    { id: 'shipCity',     errorId: 'shipCityError',     msg: 'City is required',                 validate: v => v.trim().length > 0 },
    { id: 'shipState',    errorId: 'shipStateError',    msg: 'State is required',                validate: v => v.length > 0 },
    { id: 'shipZip',      errorId: 'shipZipError',      msg: 'Valid ZIP code required',          validate: v => /^\d{5}(-\d{4})?$/.test(v.trim()) },
  ];

  fields.forEach(field => {
    const input = document.getElementById(field.id);
    const error = document.getElementById(field.errorId);
    if (!input) return;

    const val = input.value;
    if (!field.validate(val)) {
      isValid = false;
      if (input) input.classList.add('error');
      if (error) error.textContent = field.msg;
    } else {
      if (input) input.classList.remove('error');
      if (error) error.textContent = '';
    }
  });

  return isValid;
}

function collectShippingInfo() {
  shippingInfo = {
    name:     document.getElementById('shipName')?.value?.trim() || '',
    email:    document.getElementById('shipEmail')?.value?.trim() || '',
    phone:    document.getElementById('shipPhone')?.value?.trim() || '',
    address1: document.getElementById('shipAddress1')?.value?.trim() || '',
    address2: document.getElementById('shipAddress2')?.value?.trim() || '',
    city:     document.getElementById('shipCity')?.value?.trim() || '',
    state:    document.getElementById('shipState')?.value || '',
    zip:      document.getElementById('shipZip')?.value?.trim() || '',
  };
}

function renderReviewStep() {
  const reviewItems = document.getElementById('reviewItems');
  const reviewAddress = document.getElementById('reviewAddress');
  const reviewTotals = document.getElementById('reviewTotals');

  if (reviewItems) {
    reviewItems.innerHTML = cart.map(item => `
      <div class="review-item">
        <img class="review-item-img" src="${item.image}" alt="${item.name}" loading="lazy">
        <div class="review-item-info">
          <span class="review-item-name">${item.name}</span>
          <span class="review-item-qty">Qty: ${item.quantity} × ${formatPrice(item.price)}</span>
        </div>
        <span class="review-item-total">${formatPrice(item.price * item.quantity)}</span>
      </div>
    `).join('');
  }

  if (reviewAddress) {
    const addr2 = shippingInfo.address2 ? `<br>${shippingInfo.address2}` : '';
    reviewAddress.innerHTML = `
      <h4>Shipping Address</h4>
      <p>${shippingInfo.name}<br>
      ${shippingInfo.address1}${addr2}<br>
      ${shippingInfo.city}, ${shippingInfo.state} ${shippingInfo.zip}<br>
      ${shippingInfo.email} · ${shippingInfo.phone}</p>
    `;
  }

  if (reviewTotals) {
    const subtotal = getCartTotal();
    const shipping = getShippingCost();
    const total = subtotal + shipping;
    reviewTotals.innerHTML = `
      <div class="review-totals-row"><span>Subtotal</span><span>${formatPrice(subtotal)}</span></div>
      <div class="review-totals-row"><span>Shipping</span><span>${shipping === 0 ? 'FREE' : formatPrice(shipping)}</span></div>
      <div class="review-totals-row"><span>Tax</span><span>Calculated at payment</span></div>
      <div class="review-totals-row grand-total"><span>Grand Total</span><span>${formatPrice(total)}</span></div>
    `;
  }
}

function renderPaymentStep() {
  const paymentTotal = document.getElementById('paymentTotal');
  if (paymentTotal) {
    const subtotal = getCartTotal();
    const shipping = getShippingCost();
    paymentTotal.textContent = formatPrice(subtotal + shipping);
  }
}

function placeOrder() {
  const orderNum = generateOrderNumber();

  // Render confirmation
  const orderNumberEl = document.getElementById('orderNumber');
  if (orderNumberEl) orderNumberEl.textContent = 'Order #' + orderNum;

  const confirmSummary = document.getElementById('confirmationSummary');
  if (confirmSummary) {
    const subtotal = getCartTotal();
    const shipping = getShippingCost();
    const total = subtotal + shipping;
    confirmSummary.innerHTML = cart.map(item => `
      <div class="review-item">
        <img class="review-item-img" src="${item.image}" alt="${item.name}" loading="lazy">
        <div class="review-item-info">
          <span class="review-item-name">${item.name}</span>
          <span class="review-item-qty">Qty: ${item.quantity} × ${formatPrice(item.price)}</span>
        </div>
        <span class="review-item-total">${formatPrice(item.price * item.quantity)}</span>
      </div>
    `).join('') + `
      <div class="review-totals-row grand-total" style="margin-top: var(--space-4); padding-top: var(--space-3); border-top: 1px solid var(--color-border);">
        <span>Total</span><span>${formatPrice(total)}</span>
      </div>
    `;
  }

  const confirmAddr = document.getElementById('confirmationAddress');
  if (confirmAddr) {
    const addr2 = shippingInfo.address2 ? `<br>${shippingInfo.address2}` : '';
    confirmAddr.innerHTML = `
      <h4>Shipping To</h4>
      <p>${shippingInfo.name}<br>
      ${shippingInfo.address1}${addr2}<br>
      ${shippingInfo.city}, ${shippingInfo.state} ${shippingInfo.zip}</p>
    `;
  }

  // Clear the cart
  clearCart();

  // Go to step 4
  goToStep(4);
}


// ===== EVENT LISTENERS SETUP =====
function initStore() {
  // Load cart from localStorage
  loadCart();
  updateCartBadge();

  // Cart icon
  const cartIconBtn = document.getElementById('cartIconBtn');
  if (cartIconBtn) {
    cartIconBtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      openCartDrawer();
    });
  }

  // Cart close
  const cartCloseBtn = document.getElementById('cartCloseBtn');
  if (cartCloseBtn) cartCloseBtn.addEventListener('click', closeCartDrawer);

  const cartOverlay = document.getElementById('cartOverlay');
  if (cartOverlay) cartOverlay.addEventListener('click', closeCartDrawer);

  // Continue Shopping (empty cart)
  const continueShopping = document.getElementById('continueShopping');
  if (continueShopping) continueShopping.addEventListener('click', closeCartDrawer);

  // Proceed to Checkout
  const checkoutBtn = document.getElementById('checkoutBtn');
  if (checkoutBtn) checkoutBtn.addEventListener('click', openCheckout);

  // Checkout close
  const checkoutCloseBtn = document.getElementById('checkoutCloseBtn');
  if (checkoutCloseBtn) {
    checkoutCloseBtn.addEventListener('click', () => {
      if (currentStep === 4) {
        // On confirmation, close and reset
        closeCheckout();
        goToStep(1);
        resetShippingForm();
      } else {
        closeCheckout();
      }
    });
  }

  // Shipping form submit
  const shippingForm = document.getElementById('shippingForm');
  if (shippingForm) {
    shippingForm.addEventListener('submit', (e) => {
      e.preventDefault();
      if (validateShippingForm()) {
        collectShippingInfo();
        goToStep(2);
      }
    });
  }

  // Edit shipping
  const editShippingBtn = document.getElementById('editShippingBtn');
  if (editShippingBtn) editShippingBtn.addEventListener('click', () => goToStep(1));

  // Edit cart
  const editCartBtn = document.getElementById('editCartBtn');
  if (editCartBtn) {
    editCartBtn.addEventListener('click', () => {
      closeCheckout();
      setTimeout(openCartDrawer, 350);
    });
  }

  // Continue to payment
  const continueToPaymentBtn = document.getElementById('continueToPaymentBtn');
  if (continueToPaymentBtn) continueToPaymentBtn.addEventListener('click', () => goToStep(3));

  // Place order
  const placeOrderBtn = document.getElementById('placeOrderBtn');
  if (placeOrderBtn) placeOrderBtn.addEventListener('click', placeOrder);

  // Continue shopping (confirmation)
  const continueShoppingBtn = document.getElementById('continueShoppingBtn');
  if (continueShoppingBtn) {
    continueShoppingBtn.addEventListener('click', () => {
      closeCheckout();
      goToStep(1);
      resetShippingForm();
    });
  }

  // Add to cart buttons (delegated)
  document.addEventListener('click', (e) => {
    const addBtn = e.target.closest('.btn-add-cart');
    if (addBtn) {
      e.preventDefault();
      e.stopPropagation();
      const productId = addBtn.getAttribute('data-product-id');
      if (productId) {
        addToCart(productId);

        // Button feedback
        const originalText = addBtn.textContent;
        addBtn.textContent = 'Added!';
        addBtn.classList.add('added');
        setTimeout(() => {
          addBtn.textContent = originalText;
          addBtn.classList.remove('added');
        }, 1500);
      }
      return;
    }

    // Cart item quantity controls (delegated)
    const actionBtn = e.target.closest('[data-action]');
    if (actionBtn) {
      const action = actionBtn.getAttribute('data-action');
      const id = actionBtn.getAttribute('data-id');
      if (!id) return;

      const item = cart.find(i => i.id === id);
      if (!item) return;

      if (action === 'increase') updateQuantity(id, item.quantity + 1);
      else if (action === 'decrease') updateQuantity(id, item.quantity - 1);
      else if (action === 'remove') removeFromCart(id);
    }
  });
}

function resetShippingForm() {
  const form = document.getElementById('shippingForm');
  if (form) form.reset();
  // Clear all error states
  document.querySelectorAll('.checkout-form .error').forEach(el => el.classList.remove('error'));
  document.querySelectorAll('.form-error').forEach(el => el.textContent = '');
  shippingInfo = {};
}


// ===== EXISTING FUNCTIONALITY (PRESERVED) =====

// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navLinks = document.getElementById('navLinks');

if (mobileMenuBtn && navLinks) {
  mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    const isOpen = navLinks.classList.contains('open');
    mobileMenuBtn.innerHTML = isOpen
      ? '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M18 6L6 18M6 6l12 12"/></svg>'
      : '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M3 12h18M3 6h18M3 18h18"/></svg>';
  });

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      mobileMenuBtn.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M3 12h18M3 6h18M3 18h18"/></svg>';
    });
  });
}


// FAQ Accordion
document.querySelectorAll('.faq-q').forEach(btn => {
  btn.addEventListener('click', () => {
    const expanded = btn.getAttribute('aria-expanded') === 'true';
    document.querySelectorAll('.faq-q').forEach(other => {
      other.setAttribute('aria-expanded', 'false');
      other.nextElementSibling.classList.remove('open');
    });
    if (!expanded) {
      btn.setAttribute('aria-expanded', 'true');
      btn.nextElementSibling.classList.add('open');
    }
  });
});


// Scroll Reveal
const revealSections = document.querySelectorAll('.section, .trust-bar');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
revealSections.forEach(section => revealObserver.observe(section));


// Smooth Scroll for Nav (skip cart/checkout-related buttons)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    // Don't interfere with add-to-cart or other store buttons
    if (this.closest('.btn-add-cart') || this.closest('.cart-drawer') || this.closest('.checkout-overlay')) return;

    const href = this.getAttribute('href');
    if (href === '#') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});


// Nav Background on Scroll
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  if (scrollY > 50) {
    nav.style.background = 'rgba(5, 10, 18, 0.95)';
  } else {
    nav.style.background = 'rgba(5, 10, 18, 0.85)';
  }
}, { passive: true });


// Sticky Mobile CTA Bar
const stickyCta = document.getElementById('stickyCta');
const heroSection = document.getElementById('hero');
if (stickyCta && heroSection) {
  const stickyObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        stickyCta.classList.add('visible');
      } else {
        stickyCta.classList.remove('visible');
      }
    });
  }, { threshold: 0, rootMargin: '0px' });
  stickyObserver.observe(heroSection);
}


// ===== INITIALIZE STORE =====
initStore();
