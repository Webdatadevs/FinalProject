const main = document.querySelector('.main-products');
const products = document.querySelector('.products');
const basketBtn = document.querySelector('.basket');

// API Products
fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(products => {
        products.forEach(product => {
            const productElement = document.createElement('div');
            productElement.innerHTML = `
                <img src="${product.image}" alt="product-images" class="product-img"> 
                <h2>${product.title}</h2>
                <p>${product.description}</p>
               <span class="for-price">
                    <span class="price">Цена: ${product.price}$</span>
                     <button class="btn">В КОРЗИНУ</button>
               </span>
            `;
            main.appendChild(productElement);

            const basket = document.querySelector('.inner-bascet');
            basket.innerHTML = `
            <img src="${product.image}" alt="basket-images" class="backet-product-img">
            <h1 class="product-name">${product.title}</h1>
            <span class="for-buttons">
                <button class="minus">-</button>
                <p class="count">0</p>
                <button class="plus">+</button>
            </span>
            <h4 class="price-count">${product.price}$</h4>
            <button class="delete-btn">
                <img src="./assets/delete-image.png" alt="delete" class="delete-image">
            </button>
            `;
        });
    })
    .catch(error => {
        console.error('Произошла ошибка при получении продуктов:', error);
    });