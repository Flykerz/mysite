document.addEventListener("DOMContentLoaded", function () {
    const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

    // Mélanger les cartes
    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    // Distribuer les cartes au joueur et au centre
    const shuffledCards = shuffle([...cards]);
    const playerHand = shuffledCards.slice(0, 6);  // 6 cartes pour le joueur
    const centerHand = shuffledCards.slice(6);     // 6 cartes au centre

    // Afficher les cartes du joueur
    function displayCards(cards, containerId) {
        const container = document.getElementById(containerId);
        container.innerHTML = '';  // Efface les cartes précédentes
        cards.forEach((card, index) => {
            const cardElement = document.createElement('div');
            cardElement.className = 'card';
            cardElement.textContent = card;
            container.appendChild(cardElement);
        });
    }

    // Vérifier si les cartes du joueur forment un trio
    function checkTrio(cards) {
        const trioSimple = cards.every(card => card === cards[0]);  // Vérifie si toutes les cartes sont identiques
        const trioPicante = (cards[0] + cards[1] + cards[2]) === 7; // Exemple pour un trio "picante"
        return trioSimple || trioPicante;
    }

    // Afficher les cartes au joueur
    displayCards(playerHand, 'player-hand');
    displayCards(centerHand, 'center-hand');

    // Gestion du bouton "Vérifier les Trios"
    document.getElementById('check-trio').addEventListener('click', function () {
        const resultElement = document.getElementById('result');
        if (checkTrio(playerHand)) {
            resultElement.textContent = "Félicitations ! Vous avez trouvé un trio.";
        } else {
            resultElement.textContent = "Pas de trio trouvé. Réessayez.";
        }
    });
});