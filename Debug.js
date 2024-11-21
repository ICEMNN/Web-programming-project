window.addEventListener('load', function() {
    console.log('Page loaded');
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    console.log('Cart:', cart);
    const itemList = document.getElementById('itemList');
    const subTotElement = document.getElementById('subTot');
    const taxElement = document.getElementById('tax');
    const totalElement = document.getElementById('total');
    let subtotal = 0;
    // Display cart items
    cart.forEach(item => {
        console.log('Item:', item);
        const li = document.createElement("li");
        li.textContent = `${item.name}: $${item.price} x ${item.quantity}`;
        itemList.appendChild(li);
        subtotal += item.price * item.quantity;
    });
    // Calculate totals
    const taxRate = 0.15;
    const tax = subtotal * taxRate;
    const total = subtotal + tax;
    // Update cart summary
    subTotElement.textContent = `$${subtotal.toFixed(2)}`;
    taxElement.textContent = `$${tax.toFixed(2)}`;
    totalElement.textContent = `$${total.toFixed(2)}`;
});
