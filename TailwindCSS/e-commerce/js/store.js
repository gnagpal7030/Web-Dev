import '../styles/style.css'

const productCards = document.querySelectorAll('[data-product-card]')
const productSearch = document.querySelector('#product-search')
const productCount = document.querySelector('#product-count')
const addButtons = document.querySelectorAll('[data-product-name]')
const cartCount = document.querySelector('#cart-count')
const bagItems = document.querySelector('#bag-items')
const bagEmpty = document.querySelector('#bag-empty')
const bagTotal = document.querySelector('#bag-total')
const bagStatus = document.querySelector('#bag-status')
const clearBagButton = document.querySelector('#clear-bag')
const checkoutForm = document.querySelector('#checkout-form')
const customerName = document.querySelector('#customer-name')
const demoConfirmation = document.querySelector('#demo-confirmation')
const deliveryOption = document.querySelector('#delivery-option')
const deliveryMessage = document.querySelector('#delivery-message')
const checkoutMessage = document.querySelector('#checkout-message')

// The cart holds one entry per item, so adding the same product twice works.
let cart = []

function calculateTotal() {
  return cart.reduce((total, item) => total + item.price, 0)
}

function renderBag() {
  // Build each row with DOM methods so product names are always treated as text.
  const itemElements = cart.map((item, index) => {
    const row = document.createElement('li')
    row.className =
      'flex items-center justify-between gap-4 rounded-lg border border-[#e9e5dc] bg-white px-4 py-[0.9rem]'

    const itemText = document.createElement('span')
    itemText.textContent = `${item.name} — $${item.price.toFixed(2)}`

    const removeButton = document.createElement('button')
    removeButton.className =
      'rounded-full border border-[#d8d4ca] px-3 py-[0.45rem] text-[#283d32] hover:border-[#283d32]'
    removeButton.type = 'button'
    removeButton.textContent = 'Remove'
    removeButton.setAttribute('aria-label', `Remove ${item.name} from bag`)
    removeButton.addEventListener('click', () => {
      cart = cart.filter((_, itemIndex) => itemIndex !== index)
      bagStatus.textContent = 'Item removed from your bag.'
      renderBag()
    })

    row.append(itemText, removeButton)
    return row
  })

  bagItems.replaceChildren(...itemElements)
  cartCount.textContent = cart.length
  bagTotal.textContent = `Total: $${calculateTotal().toFixed(2)}`
  bagEmpty.classList.toggle('hidden', cart.length > 0)
  clearBagButton.disabled = cart.length === 0
}

addButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const productName = button.dataset.productName
    const productPrice = Number(button.dataset.productPrice)

    cart.push({ name: productName, price: productPrice })
    bagStatus.textContent = `${productName} added to your bag.`
    checkoutMessage.textContent = ''
    renderBag()
  })
})

productSearch.addEventListener('input', (event) => {
  const searchText = event.target.value.trim().toLowerCase()
  let visibleCount = 0

  productCards.forEach((card) => {
    const matchesSearch = card.textContent.toLowerCase().includes(searchText)
    card.classList.toggle('hidden', !matchesSearch)

    if (matchesSearch) visibleCount += 1
  })

  productCount.textContent =
    visibleCount === 1 ? '1 thoughtful find' : `${visibleCount} thoughtful finds`
})

clearBagButton.addEventListener('click', () => {
  cart = []
  bagStatus.textContent = 'Your bag has been emptied.'
  checkoutMessage.textContent = ''
  renderBag()
})

deliveryOption.addEventListener('change', (event) => {
  deliveryMessage.textContent = `${event.target.value} delivery is selected.`
})

checkoutForm.addEventListener('submit', (event) => {
  event.preventDefault()

  if (cart.length === 0) {
    checkoutMessage.textContent = 'Add a product to your bag before checking out.'
    return
  }

  if (customerName.value.trim() === '') {
    checkoutMessage.textContent = 'Please enter your name.'
    customerName.focus()
    return
  }

  if (!demoConfirmation.checked) {
    checkoutMessage.textContent = 'Please confirm this is a demo order.'
    return
  }

  const itemCount = cart.length
  const orderTotal = calculateTotal()
  const name = customerName.value.trim()
  const delivery = deliveryOption.value.toLowerCase()

  checkoutMessage.textContent =
    `Thanks, ${name}! Your demo order for ${itemCount} item(s), totaling ` +
    `$${orderTotal.toFixed(2)}, is ready for ${delivery} delivery. ` +
    'No payment was collected.'

  checkoutForm.reset()
  deliveryMessage.textContent = 'Standard delivery is selected.'
  cart = []
  renderBag()
  bagStatus.textContent = ''
})

renderBag()
