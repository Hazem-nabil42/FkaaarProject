
// // function setValue(value) {
// //     console.log(`Value received: ${value}`);
// //     var displayItemId = `${value}`; 
// //     console.log(displayItemId)
// // }
// const products = [
//     {
//         id: 0,
//         image: './assets/logopng.PNG',
//         title: 'vegetables',
//         price: 120,
//     },
//     {
//         id: 1,
//         image: './assets/logopng.PNG',
//         title: 'fruits',
//         price: 130,
//     },
//     {
//         id: 2,
//         image: './assets/logopng.PNG',
//         title: 'food',
//         price: 140,
//     },
//     {
//         id: 3,
//         image: './assets/logopng.PNG',
//         title: 'drinks',
//         price: 150,
//     },
// ];




// // Specify the ID of the item you want to display
// var displayItemId = 0; 

// const addToCartButton = document.getElementById('addToCartBtn');

// // Find the product with the specified ID
// const displayedProduct = products.find((product) => product.id === displayItemId);

// if (displayedProduct) {

//     if (addToCartButton) {
//         addToCartButton.addEventListener('click', function() {
//             addToCart(displayedProduct.id);
//         });
//     } else {
//         console.error('Button not found.');
//     }

//     // Update HTML content with the image details
//     document.getElementById('image').src = displayedProduct.image;
//     document.getElementById('price').innerText = 'Price: ' + displayedProduct.price ;
//     document.getElementById('title').innerText = displayedProduct.title;
//     document.getElementById('summary').innerText = displayedProduct.title;
// }
// else {
//     // Handle the case where the specified ID is not found
//     console.error(`Product with ID ${displayItemId} not found.`);
// }


// // You should call showImageDetails with a valid ID. For example, show details for the first item.
// // showImageDetails(1);

// // function showImageDetails(x) {
// //     // Get the information for the clicked image
// //     const imageInfo = getImageInfo(x);
// //     // Update HTML content with the image details
// //     document.getElementById('image').src = imageInfo.Image;
// //     document.getElementById('price').innerText = 'Price: ' + imageInfo.price;
// //     document.getElementById('title').innerText = imageInfo.title;
// //     document.getElementById('summary').innerText = imageInfo.summary;
// // }


// // function getImageInfo(imageId) {
// //     // You can replace this with your logic to get image information
// //     const imageInfoMap = {
// //         '0': { Image: './assets/logopng.PNG', price: '$10', title: "vegetables", summary: "product 1 vegetables section" },
// //         '1': { Image: './assets/logopng.PNG', price: '$15', title: "fruits", summary: "product 2 fruits section" },
// //         '2': { Image: './assets/logopng.PNG', price: '$20', title: "food", summary: "product 3 food section" },
// //     };
// //     return imageInfoMap[imageId];
// // }



// /* ⁡⁢⁣⁢​‌‍​‌‍‌-------------------------------------------------------------------------- */
// /*                           Cart Functionality                               */
// /* --------------------------------------------------------------------------⁡ ​*/

