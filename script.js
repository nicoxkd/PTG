// Opcional: Cambiar el texto cada cierto tiempo
const textArray = ["Pito Gang"];
let index = 0;

function changeText() {
    document.getElementById('changing-text').textContent = textArray[index];
    index = (index + 1) % textArray.length;
}

setInterval(changeText, 3000); // Cambiar cada 3 segundos

// Función para crear estrellas de manera aleatoria
function createStars() {
    const starsContainer = document.getElementById('stars-container');

    for (let i = 0; i < 200; i++) { // Aumentamos el número de estrellas a 200
        const star = document.createElement('div');
        star.classList.add('star');
        star.style.top = `${Math.random() * 100}%`;
        star.style.left = `${Math.random() * 100}%`;
        star.style.animationDuration = `${Math.random() * 5 + 2}s`; // Duración de la animación
        starsContainer.appendChild(star);
    }
}

createStars();
