
/* -------------------------------------------------------------------------- */
/*                        Apearance of shopping window                        */
/* -------------------------------------------------------------------------- */
const Icon = document.getElementById('CartIcon');
const cart_box = document.getElementById('cart-modal')
const close = document.getElementById('close-btn')
Icon.addEventListener('click', () => {
    if (cart_box.style.left == '-100%'){
        cart_box.style.left = '0';
    }
    else {
        cart_box.style.left = '-100%';
    }
});

close.addEventListener('click', () => {
    cart_box.style.left = '-100%';
})







/* ⁡⁣⁢⁣​‌‍‌-------------------------------------------------------------------------- */
/*            Cookies and addToCart and Display JSON Functionality            */
/* --------------------------------------------------------------------------​⁡ */



let products = null;

fetch('product.json')
.then(response => response.json())
.then (data => {
    products = data;
    addDataToHTML();
});



let products_2 = null;

fetch('product_2.json')
.then(response => response.json())
.then(data => {
    products_2 = data;
    addDataToHTML();
})



function addDataToHTML() {
    let listProductHTML = document.querySelector('.cards');
    let listProductHTML_2 = document.querySelector('.cards_2');
    listProductHTML.innerHTML = '';
    listProductHTML_2.innerHTML = '';

    if (products != null ) {
        products.forEach(product => {
            let newProduct = document.createElement('div');
            newProduct.classList.add('card');
            newProduct.innerHTML = 
            `    <!-- first_section_image_type -->
            <section class="first_section">
                <a class="Product-image" href="./details_folder/detail_${product.id}.html">
                    <img src="${product.image}" alt="product" id="Imagee">
                </a>
                <span>${product.title}</span>
                <h4>Halal Sausage 350g</h4>
            </section>
<!-- Stars_section -->
            <div class="starts">
                <img src="https://abdelrahmanahmed20021.github.io/GROCY/images/icons/star.svg" alt="star">
                <img src="https://abdelrahmanahmed20021.github.io/GROCY/images/icons/star.svg" alt="star">
                <img src="https://abdelrahmanahmed20021.github.io/GROCY/images/icons/star.svg" alt="star">
                <img src="https://abdelrahmanahmed20021.github.io/GROCY/images/icons/star.svg" alt="star">
                <img src="https://abdelrahmanahmed20021.github.io/GROCY/images/icons/star-space.svg" alt="star">
            </div>
            

            <span class="span-2">By <span style="color: rgb(59, 183, 126);">mr.food</span></span> <br>
<!-- Price -->
            <div class="Price_block">
                <span class="price">${product.price}</span> 
                <span>10$</span>
            </div>

            <span>Sold: 7/50</span> <br>
<!-- Button -->
            <div class="div_btn">
                <button onclick="addCart(${product.id})"> 
                    <img src="https://abdelrahmanahmed20021.github.io/GROCY/images/icons/shopping-cart.svg" alt="icon">
                    Add to cart
                </button>
            </div>`;
                        listProductHTML.appendChild(newProduct);
        });
    }

    if (products_2 != null ) {

        products_2.forEach(product => {
            let newProduct_2 = document.createElement('div');
            newProduct_2.classList.add('card');
            newProduct_2.innerHTML = 
            `    <!-- first_section_image_type -->
            <section class="first_section">
                <a class="Product-image" href="./details_folder/detail_${product.id}.html" onclick="./detail.html">
                    <img src="${product.image}" alt="product" id="Imagee">
                </a>
                <span>${product.title}</span>
                <h4>Halal Sausage 350g</h4>
            </section>
<!-- Stars_section -->
            <div class="starts">
                <img src="https://abdelrahmanahmed20021.github.io/GROCY/images/icons/star.svg" alt="star">
                <img src="https://abdelrahmanahmed20021.github.io/GROCY/images/icons/star.svg" alt="star">
                <img src="https://abdelrahmanahmed20021.github.io/GROCY/images/icons/star.svg" alt="star">
                <img src="https://abdelrahmanahmed20021.github.io/GROCY/images/icons/star.svg" alt="star">
                <img src="https://abdelrahmanahmed20021.github.io/GROCY/images/icons/star-space.svg" alt="star">
            </div>
            

            <span class="span-2">By <span style="color: rgb(59, 183, 126);">mr.food</span></span> <br>
<!-- Price -->
            <div class="Price_block">
                <span class="price">${product.price}</span> 
                <span>10$</span>
            </div>

            <span>Sold: 7/50</span> <br>
<!-- Button -->
            <div class="div_btn">
                <button onclick="addCart(${product.id})"> 
                    <img src="https://abdelrahmanahmed20021.github.io/GROCY/images/icons/shopping-cart.svg" alt="icon">
                    Add to cart
                </button>
            </div>`;
                    listProductHTML_2.appendChild(newProduct_2);
        });
    }
}
let listCart =[];
/* -------------------------------------------------------------------------- */
/*                             and get cookie data                            */
/* -------------------------------------------------------------------------- */
function checkCart() {
    var cookieValue = document.cookie
    .split('; ')
    .find(row => row.startsWith('listCart='));
    if (cookieValue) {
        listCart = JSON.parse(cookieValue.split('=')[1]);
    }
}
checkCart();

function addCart($idProduct) {
    let productCopy;

    // Check if the product belongs to the first category
    if (products.some(product => product.id == $idProduct)) {
        productCopy = JSON.parse(JSON.stringify(products));
    } 
    // Check if the product belongs to the second category
    else if (products_2.some(product => product.id == $idProduct)) {
        productCopy = JSON.parse(JSON.stringify(products_2));
    } else {
        console.error("Product not found");
        return;
    }

    if (!listCart[$idProduct]) {
        let dataProduct = productCopy.filter(
            product => product.id == $idProduct
        )[0];
        listCart[$idProduct] = dataProduct;
        listCart[$idProduct].quantity = 1;
    } else {
        listCart[$idProduct].quantity++;
    }

    // Cookies
    let timeSave = "expires=Sun, 26 Nov 2025 20:33:00 UTC";
    document.cookie = "listCart=" + JSON.stringify(listCart) + "; " + timeSave + "; path=/;";
    addCartToHTML();
}


addCartToHTML();
function addCartToHTML() {
    let listCartHTML = document.querySelector('#cart-items');
    listCartHTML.innerHTML = '';

    let totalHTML = document.querySelector('#counter');
    let totalQuantity = 0;

    let totalPriceHTML = document.getElementById('total');
    totalPrice = 0;


    if (listCart) {
        listCart.forEach(product => {
            if (product) {
                let newCart = document.createElement('a');
                newCart.classList.add('item');
                newCart.innerHTML = `    
                
                    <img src="${product.image}"></img>
                    <div class="pro-info">
                        <h6>${product.title}</h6>
                        <div class="price">
                            <strong>${product.price}</strong>
                            <span>
                                <del>10.00$</del>
                            </span> 
                        </div>
                    </div>
                    <div id="quantity">
                        <button onclick="changeQuantity(${product.id}, '-')" id="minus">-</button>
                        <span id="num">${product.quantity}</span>
                        <button onclick="changeQuantity(${product.id}, '+')" id="plus">+</button>
                    </div>`;
                listCartHTML.appendChild(newCart);
                totalQuantity = totalQuantity + product.quantity;
                totalPrice = totalPrice + (product.price * product.quantity);
            }
        });
        totalHTML.innerHTML = totalQuantity;
        totalPriceHTML.innerHTML = totalPrice + "السعر بالدينار";
        
    }
}




function changeQuantity ($idProduct, $type){
    switch ($type) {
        case '-':
            listCart[$idProduct].quantity--;
            if (listCart[$idProduct].quantity <= 0) {
                delete listCart[$idProduct];
            }
            break;
        case '+':
            listCart[$idProduct].quantity++;
            break;
        default:
            break;
    }
    // save new data to cookie
    let timeSave = "expires=Sun, 26 Nov 2025 20:33:00 UTC"
    document.cookie = "listCart="+JSON.stringify(listCart)+"; "+timeSave+"; path=/;";

    addCartToHTML();
    // updateBuyButtonVisibility();
}




function delElement($idProduct) {
    listCart.forEach((product) => {
        if (product.id === $idProduct) {
            delete listCart[$idProduct];
        }
    });

    // Update the cookie, HTML, and buy button visibility after removing the product
    let timeSave = "expires=Sun, 26 Nov 2025 20:33:00 UTC";
    document.cookie = "listCart=" + JSON.stringify(listCart) + "; " + timeSave + "; path=/;";
    addCartToHTML();
    updateBuyButtonVisibility();
}