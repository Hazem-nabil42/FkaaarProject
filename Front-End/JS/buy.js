let listCart = [];

function checkCart() {
    var cookieValue = document.cookie
    .split('; ')
    .find(row => row.startsWith('listCart='));
    if(cookieValue){
        listCart = JSON.parse(cookieValue.split('=')[1]);
    }
}

checkCart();
addCartToHTML();
function addCartToHTML() {
    let listCartHTML = document.querySelector('.list')
    let form = document.querySelector('.form_Container');
    // form.innerHTML = "";
    listCartHTML.innerHTML = '';
    let totalQuantityHTML = document.getElementById('total-Quant')
    let totalPriceHTML = document.getElementById('total_price');

    let totalQuantity = 0;
    let totalPrice = 0;
    if(listCart){
        listCart.forEach(product => {
            if (product){
                let newP = document.createElement('div');
                newP.classList.add('product');
                newP.innerHTML = `
                
<div class="cart-product-row row flex-wrap flex-sm-row align-items-start align-items-md-center g-3">
<div class="cart-product-delete col-12 my-2 mt-sm-3 mb-sm-0 col-sm-12 col-lg-1 d-grid justify-content-start justify-content-sm-center order-4 order-sm-4 order-lg-0">
<span class="prefix"></span>

<span class="delete-text"></span>
<span class="postfix"></span>
<span class="visually-hidden">Delete</span></a>
</div>
<div class="cart-product-col-img col-3 col-sm-4 col-lg-1 mt-4 mt-lg-3">
<a class="cart-product-image-link" >
<img class="cart-product-image img-fluid rounded w-100 logo-100" src="${product.image}" loading="lazy">
</a>
</div>
<div class="cart-product-col-details col-9 col-sm-8 col-lg-5 order-sm-1 mt-4 mt-sm-3 mt-lg-0 pt-0 pt-sm-0 mb-0 mb-lg-0 text-start text-sm-start">
<h6 class="mb-0"><a class="link-primary fw-bold" > ${product.title} </a></h6>
</div>
<div class="cart-products-action col-12 col-sm-4 col-lg-2 order-2 order-sm-1">
<div class="cart-product-quantity-dropdown">
<div class="form-floating">


<span style="font-size: 1.4rem; color: black; id="quan"> ${product.quantity} </span>

</div>
</div>
</div>
<div class="cart-product-prices order-2 order-sm-0 px-2 p-sm-0 col-8 col-sm-12 col-lg d-grid d-lg-grid justify-content-md-center justify-content-lg-start order-sm-1 d-sm-flex justify-content-sm-between align-items-sm-center gap-sm-3 gap-lg-0">
<div class="totals d-flex gap-1">
<span class="prefix"></span>
<span class="cart-product-total-price fw-bold fs-6 text-green-emphasis" style="color: green">${product.price} KWD </span>
<del class="cart-product-total-before-price"><small style="color: grey;">31.00 SAR</small></del>
<span class="postfix"></span>
</div>
<div class="cart-product-price-each d-none d-flex gap-1">
<span class="prefix"></span>
<span class="text-muted small">للواحد</span>
<span class="text-muted small">26.00 SAR</span>
<span class="postfix"></span>
</div>
</div>
</div>
<hr style="font-size: 1.5rem; color: #000;">`;
        listCartHTML.appendChild(newP);
        totalQuantity = totalQuantity + product.quantity;
        totalPrice = totalPrice + (product.price * product.quantity);
// form.appendChild(newP);
            }
        })
    }
    totalQuantityHTML.innerHTML = totalQuantity;
    totalPriceHTML.innerHTML = totalPrice + '  KWD' ;
}

function delElement($idProduct) {
    // Find the index of the product with the matching API ID
    listCart.forEach(product => {

        if (product.id === $idProduct) {
            document.querySelector('.product').innerHTML = '';
        }
    })
}
