addToCartButtons.forEach(button => {
  button.addEventListener('click', () => {
    const item = button.parentElement;
    const itemName = item.querySelector('h2').textContent;
    const itemPrice = parseFloat(item.querySelector('p').textContent.replace('Price: $', ''));

    const cartItem = document.createElement('li');
    cartItem.textContent = `${itemName} - $${itemPrice.toFixed(2)}`;
    
    const removeButton = document.createElement('button');
    removeButton.className = 'remove-from-cart';
    removeButton.textContent = 'Remove';
    removeButton.addEventListener('click', () => {
      cartItemsList.removeChild(cartItem);
      total -= itemPrice;
      cartTotal.textContent = total.toFixed(2);
    });
    cartItem.appendChild(removeButton);

    cartItemsList.appendChild(cartItem);
    
    total += itemPrice;
    cartTotal.textContent = total.toFixed(2);
  });
});

document.addEventListener('click', event => {
  if (event.target && event.target.classList.contains('remove-from-cart')) {
    const clickedRemoveButton = event.target;
    const cartItem = clickedRemoveButton.parentElement;
    const itemPrice = parseFloat(cartItem.textContent.match(/\$([\d\.]+)/)[1]);

    cartItemsList.removeChild(cartItem);
    total -= itemPrice;
    cartTotal.textContent = total.toFixed(2);
  }
});