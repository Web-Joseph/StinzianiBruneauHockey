document.getElementById('form-temoignage').addEventListener('submit', function(event) {
    event.preventDefault();  // Empêche la soumission par défaut

    const nom = document.getElementById('nom').value;
    const temoignage = document.getElementById('temoignage').value;

    console.log("Nom:", nom);  // Affiche le nom
    console.log("Témoignage:", temoignage);  // Affiche le témoignage

    // Crée un nouveau bloc de témoignage
    const nouveauTemoignage = document.createElement('div');
    nouveauTemoignage.classList.add('temoignage'); // Applique la classe pour le style

    // Ajoute le contenu au témoignage créé
    nouveauTemoignage.innerHTML = `
        <p class="avis"><em>"${temoignage}"</em></p>
        <p class="nom">– ${nom}</p>
    `;

    // Ajoute le témoignage dans le conteneur
    document.getElementById('liste-temoignages').appendChild(nouveauTemoignage);

    // Réinitialise les champs du formulaire
    document.getElementById('nom').value = '';
    document.getElementById('temoignage').value = '';
});
