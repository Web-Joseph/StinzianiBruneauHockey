const stripe = Stripe('YOUR_STRIPE_PUBLIC_KEY'); // Remplacez par votre clé publique Stripe

document.getElementById('inscriptionForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const cours = document.getElementById('cours').value;

    fetch('/create-checkout-session', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, cours }),
    })
    .then(response => response.json())
    .then(sessionId => {
        return stripe.redirectToCheckout({ sessionId });
    })
    .catch(error => console.error('Erreur lors du paiement', error));
});
