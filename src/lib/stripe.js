import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe("pk_test_REPLACE_WITH_YOUR_KEY");

export default stripePromise;
