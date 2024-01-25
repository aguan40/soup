const sentenceElement = document.getElementById("sentence");

// Set initial placeholder content
sentenceElement.innerHTML = "Try <span id='soupName'>[A Soup]</span> with <span id='ingredient1'>[Ingredient One]</span> and <span id='ingredient2'>[Ingredient Two]</span>.";

function generateRandomSentence() {
    const randomSoup = getRandomElement(soups);
    const randomIngredient1 = getRandomElement(ingredients);
    const randomIngredient2 = getRandomElement(ingredients);

    // Hide static words when the soup bowl is clicked
    hideStaticWords();

    sentenceElement.innerHTML = `<span class="word" id="try">try</span> <span id="soupName">${randomSoup}</span> <span class="word" id="with">with</span> <span id="ingredient1">${randomIngredient1}</span> <span class="word" id="and">and</span> <span id="ingredient2">${randomIngredient2}</span>.`;

    // Set random position and rotation for each word
    setPositionAndRotation("try");
    setPositionAndRotation("soupName");
    setPositionAndRotation("with");
    setPositionAndRotation("ingredient1");
    setPositionAndRotation("and");
    setPositionAndRotation("ingredient2");
}

function hideStaticWords() {
    const staticWords = ["try", "with", "and"];
    staticWords.forEach(word => {
        const element = document.getElementById(word);
        if (element) {
            element.style.display = "none";
        }
    });
}

function setPositionAndRotation(elementId) {
    const element = document.getElementById(elementId);
    const randomX = Math.random() * (window.innerWidth - element.clientWidth);
    const randomY = Math.random() * (window.innerHeight - element.clientHeight);
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

// Define data for soups and ingredients
const soups = ["Tom Yum", "Minestrone", "Pho", "Gazpacho", "Lentil Soup"];
const ingredients = ["ginger", "basil", "cabbage", "lemongrass", "garlic"];

document.getElementById("soupEmoji").addEventListener("click", generateRandomSentence);
