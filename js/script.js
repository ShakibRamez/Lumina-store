// Simple Cart
let cartCount = 0;
const cartCountEl = document.getElementById('cartCount');

// Hamburger Menu
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

// Sample Products
const products = [
  { id: 1, name: "Midnight Watch", price: 1299, img: "https://picsum.photos/id/201/400/400" },
  { id: 2, name: "Golden Silk Dress", price: 899, img: "https://picsum.photos/id/1011/400/400" },
  { id: 3, name: "Leather Tote Bag", price: 650, img: "https://picsum.photos/id/180/400/400" },
  { id: 4, name: "Aviator Sunglasses", price: 320, img: "https://picsum.photos/id/106/400/400" }
];

// Render Products
function renderProducts() {
  const grid = document.getElementById('productsGrid');
  grid.innerHTML = '';

  products.forEach(product => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <img src="${product.img}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>$${product.price}</p>
      <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
    `;
    grid.appendChild(card);
  });

  // Add to cart buttons
  document.querySelectorAll('.add-to-cart').forEach(btn => {
    btn.addEventListener('click', () => {
      cartCount++;
      cartCountEl.textContent = cartCount;
      btn.textContent = 'Added ✓';
      setTimeout(() => btn.textContent = 'Add to Cart', 1500);
    });
  });
}

renderProducts();
