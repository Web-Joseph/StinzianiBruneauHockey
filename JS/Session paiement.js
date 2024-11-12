const express = require('express');
const stripe = require('stripe')('YOUR_STRIPE_SECRET_KEY'); // Remplacez par votre clé secrète Stripe
const app = express();

app.use(express.json());

app.post('/create-checkout-session', async (req, res) => {
    const { name, email, cours } = req.body;

    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [{
            price_data: {
                currency: 'eur',
                product_data: {
                    name: `Cours de Hockey - ${cours}`,
                },
                unit_amount: 1000, // Exemple de prix (1 EUR = 100 centimes)
            },
            quantity: 1,
        }],
        mode: 'payment',
        success_url: 'YOUR_SUCCESS_URL',
        cancel_url: 'YOUR_CANCEL_URL',
    });

    res.json({ sessionId: session.id });
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
