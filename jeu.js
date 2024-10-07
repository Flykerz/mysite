// Initialisation des cartes
const plateau = document.getElementById('plateau-de-jeu');
const cartes = Array.from({ length: 12 }, (_, i) => i + 1);
let mainJoueur = [];
let cartesSelectionnees = [];

// Fonction pour afficher les cartes
function afficherCartes() {
    plateau.innerHTML = '';
    cartes.forEach((carte) => {
        const carteEl = document.createElement('div');
        carteEl.classList.add('carte');
        carteEl.textContent = carte;
        carteEl.addEventListener('click', () => jouerCarte(carte, carteEl));
        plateau.appendChild(carteEl);
    });
}

// Fonction pour jouer une carte
function jouerCarte(carte, element) {
    if (mainJoueur.length === 0 ||
        carte === mainJoueur[mainJoueur.length - 1] + 1 ||
        carte === mainJoueur[mainJoueur.length - 1] - 1) {

        mainJoueur.push(carte);
        cartesSelectionnees.push(element);
        element.classList.add('active');

        if (mainJoueur.length === 3) {
            verifierTrio();
        }
    } else {
        alert("Vous ne pouvez jouer qu'une carte plus grande ou plus petite !");
    }
}

// Fonction pour vérifier le trio
function verifierTrio() {
    alert(`Vous avez formé un trio avec les cartes : ${mainJoueur.join(', ')}`);
    resetJeu();
}

// Réinitialiser le jeu après un trio
function resetJeu() {
    mainJoueur = [];
    cartesSelectionnees.forEach((element) => element.classList.remove('active'));
    cartesSelectionnees = [];
}

document.getElementById('jouer').addEventListener('click', () => {
    if (mainJoueur.length === 3) {
        verifierTrio();
    } else {
        alert("Sélectionnez 3 cartes pour former un trio.");
    }
});

afficherCartes();