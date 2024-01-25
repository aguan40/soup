const soupNames = ["Tom Yum", "Minestrone", "Pho", "Gazpacho", "Lentil Soup"];
const ingredients = ["ginger", "basil", "cabbage", "lemongrass", "garlic"];

function generateRandomSentence() {
    const randomSoup = getRandomElement(soupNames);
    const randomIngredient1 = getRandomElement(ingredients);
    const randomIngredient2 = getRandomElement(ingredients);

    const sentenceElement = document.getElementById("sentence");
    
    sentenceElement.innerHTML = `Try <span id="soupName">${randomSoup}</span> with <span id="ingredient1">${randomIngredient1}</span> and <span id="ingredient2">${randomIngredient2}</span>.`;

    // Get the window boundaries
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    // Set random position and rotation for each word
    setPositionAndRotation("soupName");
    setPositionAndRotation("ingredient1");
    setPositionAndRotation("ingredient2");
}

function setPositionAndRotation(elementId) {
    const element = document.getElementById(elementId);
    const randomX = Math.random() * window.innerWidth;
    const randomY = Math.random() * window.innerHeight;
    const randomRotation = Math.random() * 360; // in degrees

    element.style.position = "absolute";
    element.style.left = `${randomX}px`;
    element.style.top = `${randomY}px`;
    element.style.transform = `rotate(${randomRotation}deg)`;
}

function getRandomElement(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}
