const TAX_RATE = process.env.TAX_RATE || 0.1
const FREE_SHIPPING_THRESHOLD = process.env.FREE_SHIPPING_THRESHOLD || 10000
const SHIPPING_RATE = process.env.SHIPPING_RATE || 500

const cartSubtotal = (cart) => {
    //Sum up all of the individual product costs
    const subTotal = cart.reduce((counter, product) => {
        return counter + parseInt(product.price_in_cent) * product.qty
    }, 0)

    return subTotal
}

const shouldPayShipping = (cart) => {
    const subTotal = cartSubtotal(cart)
    
    return subTotal < FREE_SHIPPING_THRESHOLD
}

const cartTaxes = (cart) => {
    const subTotal = cartSubtotal(cart)

    return subTotal * TAX_RATE
}

const cartTotal = (cart) => {
    if(cart.length === 0){
        return 0
    }
    
    const subTotal = cartSubtotal(cart)

    const shipping = shouldPayShipping(cart) ? SHIPPING_RATE : 0

    const total = subTotal + cartTaxes(cart) + shipping

    return Math.round(total)
}

module.exports = {
    cartSubtotal,
    shouldPayShipping,
    cartTotal,
    cartTaxes
}