document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();

    var nom = document.getElementById('nom').value;
    var temoignage = document.getElementById('temoignage').value;

    if (nom && temoignage) {
        var newTemoignage = document.createElement('div');
        newTemoignage.classList.add('temoignage');
        newTemoignage.innerHTML = `<p><strong>${nom}:</strong> ${temoignage}</p>`;

        document.getElementById('temoignages-list').appendChild(newTemoignage);
        
        // Réinitialiser le formulaire après soumission
        document.querySelector('form').reset();
    }
});
// Sélectionne le formulaire et la zone des témoignages
const form = document.getElementById('form-temoignage');
const témoignagesList = document.getElementById('liste-temoignages');

// Fonction pour ajouter un témoignage
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche le rechargement de la page

    // Récupérer les données du formulaire
    const nom = document.getElementById('nom').value;
    const temoignage = document.getElementById('temoignage').value;
    const date = new Date().toLocaleDateString(); // Date d'ajout du témoignage

    // Créer un nouvel élément de témoignage
    const newTémoignage = document.createElement('div');
    newTémoignage.classList.add('temoignage');
    newTémoignage.innerHTML = `
        <p><em>"${temoignage}"</em></p>
        <p><strong>– ${nom}</strong></p>
        <p><small>Ajouté le ${date}</small></p>
    `;

    // Ajouter le témoignage au début de la liste
    témoignagesList.insertBefore(newTémoignage, témoignagesList.firstChild);

    // Réinitialiser le formulaire
    form.reset();
});
