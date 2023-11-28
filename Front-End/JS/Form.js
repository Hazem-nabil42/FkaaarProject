

let listCart = [];
let params = {
    from_name: "",  // Add from_name, email, and whatsapp fields
    email: "",
    Whatsapp: "",
    place: "",
    street: "",
    home: "",
    piece: "",
    paymentMeth: "",
    cashDelivery: "",
    p1: "", t1: "", q1: "",
    p2: "", t2: "", q2: "",
    p3: "", t3: "", q3: "",
    p4: "", t4: "", q4: "",
    p5: "", t5: "", q5: "",
};

function checkCart() {
    var cookieValue = document.cookie
        .split('; ')
        .find(row => row.startsWith('listCart='));
    if (cookieValue) {
        listCart = JSON.parse(cookieValue.split('=')[1]);
    }
}

checkCart();
addCartToHTML();

function addCartToHTML() {
    if (listCart) {
        let i = 0;
        listCart.forEach((product) => {
            if (product) {
                params[`p${i + 1}`] = product.price;
                params[`t${i + 1}`] = product.title;
                params[`q${i + 1}`] = product.quantity;
                i++;
            }
        });
    }

    // Add event listener to get values from additional inputs
    let submitButton = document.getElementById('submit-btn');
    submitButton.addEventListener('click', function () {
        // Update params with values from additional inputs
        params.from_name = document.getElementById("name").value,
        params.email = document.getElementById("email").value,
        params.Whatsapp = document.getElementById("Whatsapp").value,
        params.place = document.getElementById("place").value,
        params.street = document.getElementById("street").value,
        params.home = document.getElementById("home").value,
        params.piece = document.getElementById("piece").value,
        params.paymentMeth = document.getElementById("pay-meth").value,
        params.cashDelivery = document.getElementById("type-deliver").value,

        sendMail(params);
    });
}

function sendMail(params) {
    const serviceID = "service_103hsht";
    const templateID = "template_j2kcezm";

    emailjs.send(serviceID, templateID, params)
        .then(() => alert('Email sent successfully'))
        .catch((err) => console.log(err))
}