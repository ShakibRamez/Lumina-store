// Lumina Store - JavaScript
let cartCount = 0;
const cartCountEl = document.getElementById('cart-count');

const products = [
    {
        id: 1,
        name: "Midnight Velvet Blazer",
        price: 1290,
        image: "https://picsum.photos/id/1015/600/400"
    },
    {
        id: 2,
        name: "Golden Hour Silk Dress",
        price: 980,
        image: "https://picsum.photos/id/1027/600/400"
    },
    {
        id: 3,
        name: "Obsidian Leather Jacket",
        price: 1450,
        image: "https://picsum.photos/id/106/600/400"
    },
    {
        id: 4,
        name: "Ivory Cashmere Coat",
        price: 2150,
        image: "https://picsum.photos/id/201/600/400"
    }
];

function renderProducts() {
    const grid = document.getElementById('products-grid');
    grid.innerHTML = '';

    products.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <div class="product-info">
                <h3>${product.name}</h3>
                <p class="price">$${product.price}</p>
                <button class="btn" onclick="addToCart(${product.id})">Add to Cart</button>
            </div>
        `;
        grid.appendChild(card);
    });
}

function addToCart(id) {
    cartCount++;
    cartCountEl.textContent = cartCount;
    
    // Simple animation
    const btns = document.querySelectorAll('.btn');
    btns.forEach(btn => {
        if (btn.getAttribute('onclick').includes(id)) {
            btn.style.transform = 'scale(0.95)';
            setTimeout(() => btn.style.transform = 'scale(1)', 200);
        }
    });
    
    alert(`✅ Added to cart: ${products.find(p => p.id === id).name}`);
}

// Initialize
window.onload = renderProducts;