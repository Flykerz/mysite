const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// Variables pour le personnage
let x = 10;
let y = canvas.height - 50;
let vitesse = 5;

// Fonction pour dessiner le personnage
function dessiner() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillRect(x, y, 50, 50); // Un simple rectangle pour commencer
    requestAnimationFrame(dessiner);
}

// Écouter les touches pour déplacer le personnage
document.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'ArrowLeft':
            x -= vitesse;
            break;
        case 'ArrowRight':
            x += vitesse;
            break;
    }
});

dessiner();