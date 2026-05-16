// Lumina Store JavaScript

document.addEventListener('DOMContentLoaded', () => {
    console.log('Lumina Store آماده است!');

    // Simple cart functionality
    let cartCount = 0;
    const cartIcon = document.querySelector('.fa-shopping-cart');

    // Sample products
    const products = [
        { id: 1, name: 'کت و شلوار لوکس', price: '۱۲,۵۰۰,۰۰۰', img: 'https://picsum.photos/id/1060/400/320' },
        { id: 2, name: 'پیراهن ابریشمی', price: '۴,۸۰۰,۰۰۰', img: 'https://picsum.photos/id/201/400/320' },
        { id: 3, name: 'ساعت رولکس', price: '۸۵,۰۰۰,۰۰۰', img: 'https://picsum.photos/id/1074/400/320' },
        { id: 4, name: 'کیف دستی چرم', price: '۶,۲۰۰,۰۰۰', img: 'https://picsum.photos/id/180/400/320' }
    ];

    const productGrid = document.querySelector('.product-grid');

    if (productGrid) {
        products.forEach(product => {
            const card = document.createElement('div');
            card.className = 'product-card';
            card.innerHTML = `
                <img src="${product.img}" alt="${product.name}">
                <div class="product-info">
                    <h3>${product.name}</h3>
                    <p class="price">${product.price} تومان</p>
                    <button class="btn add-to-cart" data-id="${product.id}">افزودن به سبد</button>
                </div>
            `;
            productGrid.appendChild(card);
        });
    }

    // Add to cart
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('add-to-cart')) {
            cartCount++;
            if (cartIcon) cartIcon.style.color = '#d4af37';
            alert('به سبد خرید اضافه شد!');
        }
    });

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) target.scrollIntoView({ behavior: 'smooth' });
        });
    });
});