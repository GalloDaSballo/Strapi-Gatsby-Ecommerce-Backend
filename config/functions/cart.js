const TAX_RATE = process.env.TAX_RATE || 0.1
const FREE_SHIPPING_THRESHOLD = process.env.FREE_SHIPPING_THRESHOLD || 10000
const SHIPPING_RATE = process.env.SHIPPING_RATE || 500

const cartSubtotal = (cart) => {
    //Sum up all of the individual product costs
    const subTotal = cart.reduce((counter, product) => {
        return counter + product.price_in_cent * product.qty
    }, 0)

    return subTotal
}

const shouldPayShipping = (cart) => {
    const subTotal = cartSubtotal(cart)
    
    return subTotal < FREE_SHIPPING_THRESHOLD
}

const cartTotal = (cart) => {
    const subTotal = cartSubtotal(cart)

    const shipping = shouldPayShipping(cart) ? SHIPPING_RATE : 0

    const total = subTotal + subTotal * TAX_RATE + shipping

    return Math.round(total)
}

module.exports = {
    cartSubtotal,
    shouldPayShipping,
    cartTotal,
}