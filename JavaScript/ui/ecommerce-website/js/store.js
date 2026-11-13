document.addEventListener('DOMContentLoaded', function () {
    const productCards = document.querySelectorAll('.product-card');
    const productSearch = document.getElementById('product-search');
    const productCount = document.getElementById('product-count');
    const addButtons = document.querySelectorAll('.add-to-bag');
    const cartCount = document.getElementById('cart-count');
    const bagItems = document.getElementById('bag-items');
    const bagEmpty = document.getElementById('bag-empty');
    const bagTotal = document.getElementById('bag-total');
    const bagStatus = document.getElementById('bag-status');
    const clearBagButton = document.getElementById('clear-bag');
    const checkoutForm = document.getElementById('checkout-form');
    const customerName = document.getElementById('customer-name');
    const demoConfirmation = document.getElementById('demo-confirmation');
    const deliveryOption = document.getElementById('delivery-option');
    const deliveryMessage = document.getElementById('delivery-message');
    const checkoutMessage = document.getElementById('checkout-message');
    let cart = [];

    function calculateTotal() {
        let total = 0;
        cart.forEach(function (item) {
            total += item.price;
        });
        return total;
    }

    function renderBag() {
        let itemMarkup = '';
        const total = calculateTotal();

        cart.forEach(function (item, index) {
            itemMarkup += `
                <li class="bag-item">
                    <span>${item.name} — $${item.price.toFixed(2)}</span>
                    <button class="remove-item" type="button" data-item-index="${index}"
                        aria-label="Remove ${item.name} from bag">Remove</button>
                </li>
            `;
        });

        bagItems.innerHTML = itemMarkup;
        cartCount.textContent = cart.length;
        bagTotal.textContent = `Total: $${total.toFixed(2)}`;
        bagEmpty.style.display = cart.length === 0 ? '' : 'none';
        clearBagButton.disabled = cart.length === 0;

        const removeButtons = document.querySelectorAll('.remove-item');
        removeButtons.forEach(function (removeButton) {
            removeButton.addEventListener('click', function () {
                const itemIndex = Number(removeButton.getAttribute('data-item-index'));
                const remainingItems = [];

                cart.forEach(function (item, index) {
                    if (index !== itemIndex) {
                        remainingItems.push(item);
                    }
                });

                cart = remainingItems;
                bagStatus.textContent = 'Item removed from your bag.';
                renderBag();
            });
        });
    }

    addButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            const productName = button.getAttribute('data-product-name');
            const productPrice = Number(button.getAttribute('data-product-price'));

            cart.push({ name: productName, price: productPrice });
            bagStatus.textContent = `${productName} added to your bag.`;
            checkoutMessage.textContent = '';
            renderBag();
        });
    });

    productSearch.addEventListener('input', function (event) {
        const searchText = event.target.value.trim().toLowerCase();
        let visibleCount = 0;

        productCards.forEach(function (card) {
            const productText = card.textContent.toLowerCase();
            const matchesSearch = productText.indexOf(searchText) !== -1;
            card.style.display = matchesSearch ? '' : 'none';

            if (matchesSearch) {
                visibleCount += 1;
            }
        });

        productCount.textContent = visibleCount === 1
            ? '1 thoughtful find'
            : `${visibleCount} thoughtful finds`;
    });

    clearBagButton.addEventListener('click', function () {
        while (cart.length > 0) {
            cart.pop();
        }

        bagStatus.textContent = 'Your bag has been emptied.';
        checkoutMessage.textContent = '';
        renderBag();
    });

    customerName.addEventListener('focus', function () {
        customerName.style.borderColor = '#283d32';
    });

    customerName.addEventListener('blur', function () {
        customerName.style.borderColor = '#d8d4ca';
    });

    deliveryOption.addEventListener('change', function (event) {
        deliveryMessage.textContent = `${event.target.value} delivery is selected.`;
    });

    checkoutForm.addEventListener('submit', function (event) {
        event.preventDefault();

        if (cart.length === 0) {
            checkoutMessage.textContent = 'Add a product to your bag before checking out.';
            return;
        }

        if (customerName.value.trim() === '') {
            checkoutMessage.textContent = 'Please enter your name.';
            customerName.focus();
            return;
        }

        if (!demoConfirmation.checked) {
            checkoutMessage.textContent = 'Please confirm this is a demo order.';
            return;
        }

        const itemCount = cart.length;
        const orderTotal = calculateTotal();
        const name = customerName.value.trim();
        const delivery = deliveryOption.value.toLowerCase();

        checkoutMessage.textContent =
            `Thanks, ${name}! Your demo order for ${itemCount} item(s), totaling ` +
            `$${orderTotal.toFixed(2)}, is ready for ${delivery} delivery. ` +
            'No payment was collected.';

        checkoutForm.reset();
        deliveryMessage.textContent = 'Standard delivery is selected.';

        while (cart.length > 0) {
            cart.pop();
        }

        renderBag();
        bagStatus.textContent = '';
    });

    renderBag();
});
