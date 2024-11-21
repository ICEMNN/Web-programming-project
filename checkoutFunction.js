// This page is used to display the items in the cart and the total price of the items in the cart, later will
//to invoice
const storedCartItems = localStorage.getItem('cartItems');
const storedSubTot = localStorage.getItem('subTot');
const storedTax = localStorage.getItem('tax');
const storedTotal = localStorage.getItem('total');

const cartItemsDiv = document.getElementById('cart-items');
if (storedCartItems) {
    cartItemsDiv.innerHTML = storedCartItems;
}

const subTotDiv = document.createElement('p');
subTotDiv.textContent = `Subtotal: $${storedSubTot}`; 
cartItemsDiv.appendChild(subTotDiv);

const taxDiv = document.createElement('p');
taxDiv.textContent = `Tax: $${storedTax}`;
cartItemsDiv.appendChild(taxDiv);

const totalDiv = document.createElement('p');
totalDiv.textContent = `Total: $${storedTotal}`;
cartItemsDiv.appendChild(totalDiv);

const confirmBtn = document.getElementById('confirm-btn');
confirmBtn.addEventListener('click', () => {
    alert('Order confirmed!');
    window.location.href = 'grandeur.html';
});

const backBtn = document.getElementById('back-btn');
backBtn.addEventListener('click', () => {
    window.location.href = 'grandeur.html';
});

