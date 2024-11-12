document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');

    // Lorsque l'icône hamburger est cliquée, on bascule l'état du menu
    menuToggle.addEventListener('click', function() {
        nav.classList.toggle('active');
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form-temoignage');
    const listeTemoignages = document.getElementById('liste-temoignages');
    const temoignagesEnAttente = document.getElementById('temoignages-en-attente'); // Zone d'attente

    // Fonction pour simuler l'ajout à la file d'attente de modération
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Empêche le rechargement de la page

        const nom = document.getElementById('nom').value;
        const temoignage = document.getElementById('temoignage').value;

        // Créer un nouvel élément témoignage pour l'attente de validation
        const nouveauTemoignageEnAttente = document.createElement('div');
        nouveauTemoignageEnAttente.classList.add('temoignage');
        nouveauTemoignageEnAttente.classList.add('en-attente');

        nouveauTemoignageEnAttente.innerHTML = `
            <p class="avis"><em>"${temoignage}"</em></p>
            <p class="nom">– ${nom}</p>
            <button class="valider-temoignage">Valider</button>
            <button class="rejeter-temoignage">Rejeter</button>
        `;

        // Ajouter le témoignage à la file d'attente
        temoignagesEnAttente.appendChild(nouveauTemoignageEnAttente);

        // Avertir l'administrateur (ici on utilise un simple log pour l'exemple)
        alert('Un nouveau témoignage a été soumis et est en attente de validation !');

        // Gérer les actions de validation ou de rejet
        const validerBtn = nouveauTemoignageEnAttente.querySelector('.valider-temoignage');
        const rejeterBtn = nouveauTemoignageEnAttente.querySelector('.rejeter-temoignage');

        // Lorsqu'un administrateur valide le témoignage
        validerBtn.addEventListener('click', function () {
            // Ajouter le témoignage à la liste des témoignages validés
            const temoignageValide = document.createElement('div');
            temoignageValide.classList.add('temoignage');
            temoignageValide.innerHTML = `
                <p class="avis"><em>"${temoignage}"</em></p>
                <p class="nom">– ${nom}</p>
            `;
            listeTemoignages.appendChild(temoignageValide);

            // Supprimer le témoignage de la file d'attente
            nouveauTemoignageEnAttente.remove();
        });

        // Lorsqu'un administrateur rejette le témoignage
        rejeterBtn.addEventListener('click', function () {
            // Supprimer le témoignage de la file d'attente
            nouveauTemoignageEnAttente.remove();
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var stripe = Stripe('YOUR_PUBLISHABLE_KEY'); // Remplace par ta clé publique Stripe
    var elements = stripe.elements();
    var card = elements.create('card'); // Crée le champ de carte de crédit
    card.mount('#card-info'); // Associe le champ à l'élément HTML

    var form = document.getElementById('form-inscription');
    form.addEventListener('submit', function (event) {
        event.preventDefault();

        stripe.createToken(card).then(function(result) {
            if (result.error) {
                // Afficher l'erreur si la carte est invalide
                alert(result.error.message);
            } else {
                // Ajouter le token de la carte dans le formulaire et envoyer
                var tokenInput = document.createElement('input');
                tokenInput.type = 'hidden';
                tokenInput.name = 'stripeToken';
                tokenInput.value = result.token.id;
                form.appendChild(tokenInput);

                // Soumettre le formulaire
                form.submit();
            }
        });
    });
});
