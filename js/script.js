let cartCount = 0;
const cartCountEl = document.getElementById('cartCount');

document.getElementById('hamburger').addEventListener('click', () => {
  document.getElementById('navMenu').classList.toggle('active');
});

const products = [
  { name: "Signature Evening Gown", price: 1890, img: "https://picsum.photos/id/1015/600/800" },
  { name: "Luxury Leather Jacket", price: 1250, img: "https://picsum.photos/id/201/600/800" },
  { name: "Gold Chain Necklace", price: 420, img: "https://picsum.photos/id/106/600/800" },
  { name: "Premium Silk Shirt", price: 680, img: "https://picsum.photos/id/133/600/800" }
];

const grid = document.getElementById('productsGrid');

products.forEach(product => {
  const card = document.createElement('div');
  card.className = 'product-card';
  card.innerHTML = `
    <img src="${product.img}" alt="${product.name}">
    <h3>${product.name}</h3>
    <p>$${product.price}</p>
    <button class="add-to-cart">Add to Cart</button>
  `;
  card.querySelector('.add-to-cart').addEventListener('click', () => {
    cartCount++;
    cartCountEl.textContent = cartCount;
    alert(`${product.name} added to cart!`);
  });
  grid.appendChild(card);
});  
