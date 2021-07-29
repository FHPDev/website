import { loadStripe } from '@stripe/stripe-js'

let stripePromise
const UseStripe = () => {
    if (!stripePromise) {
        stripePromise = loadStripe(process.env.STRIPE_PUBLIC_KEY)
    }
    return stripePromise
}

export default UseStripe