let initialSentencePosition = {};
let initialPositions = {};  // Declare initialPositions globally

// Define data for soups and ingredients
const soups = ["Tom Yum", "Minestrone", "Pho", "Gazpacho", "Lentil Soup"];
const ingredients = ["ginger", "basil", "cabbage", "lemongrass", "garlic"];


function saveInitialPositions() {
    const sentenceElement = document.getElementById("sentence");
    if (sentenceElement) {
        initialSentencePosition = {
            left: window.getComputedStyle(sentenceElement).left,
            top: window.getComputedStyle(sentenceElement).top,
        };
    }

    const words = ["try", "soupName", "with", "ingredient1", "and", "ingredient2", "period", "soupEmoji"];
    words.forEach(word => {
        const element = document.getElementById(word);
        if (element) {
            initialPositions[word] = {
                left: window.getComputedStyle(element).left,
                top: window.getComputedStyle(element).top,
            };
        }
    });
}

// Call the function to save the initial positions when the page loads
window.addEventListener('load', saveInitialPositions);

const sentenceElement = document.getElementById("sentence");
const margin = 100; // Adjust the margin as needed

// Set initial placeholder content
sentenceElement.innerHTML = "Try <span id='soupName'>[A Soup]</span> with <span id='ingredient1'>[Ingredient One]</span> and <span id='ingredient2'>[Ingredient Two]</span>.";

function showStaticWords() {
    const staticWords = ["try", "with", "and", "period"];
    staticWords.forEach(word => {
        const element = document.getElementById(word);
        if (element) {
            element.style.display = "inline"; // Show the element
        }
    });
}

function hideStaticWords() {
    const staticWords = ["try", "with", "and", "period"];
    staticWords.forEach(word => {
        const element = document.getElementById(word);
        if (element) {
            element.style.display = "none";
        }
    });
}

function generateRandomSentence() {
    const randomSoup = getRandomElement(soups);
    const randomIngredient1 = getRandomElement(ingredients);
    const randomIngredient2 = getRandomElement(ingredients);

    // Display corresponding images
    displayIngredientImage("ingredientImage1", randomIngredient1);
    displayIngredientImage("ingredientImage2", randomIngredient2);

    // Display soup image
    const soupImageElement = document.getElementById("soupImage");
    if (soupImageElement) {
        const soupImagePath = `images/${randomSoup.toLowerCase()}.png`;
        soupImageElement.src = soupImagePath;
        soupImageElement.classList.remove("hidden");

        // Set random position for the soup image
        setPositionAndRotation("soupEmoji", false); // false to keep rotation
    }

    // Hide static words
    hideStaticWords();

    sentenceElement.innerHTML = `<span class="word" id="try">try</span> <span id='soupName'>${randomSoup}</span> <span class="word" id="with">with</span> <span id='ingredient1'>${randomIngredient1}</span> <span class="word" id="and">and</span> <span id='ingredient2'>${randomIngredient2}</span> <span class="word" id="period">.</span>`;

    // Set random position and rotation for each word
    setPositionAndRotation("try");
    setPositionAndRotation("soupName");
    setPositionAndRotation("with");
    setPositionAndRotation("ingredient1");
    setPositionAndRotation("and");
    setPositionAndRotation("ingredient2");
    setPositionAndRotation("period");

    // Set random position for soup bowl
    setPositionAndRotation("soupEmoji", false); // false to keep rotation

    // Reset sentence after 1 second
    setTimeout(resetSentence, 1000);
}

function displayIngredientImage(imageId, ingredient) {
    const imageElement = document.getElementById(imageId);
    if (imageElement) {
        // Use a relative path for the image
        const imagePath = `images/${ingredient.toLowerCase()}.png`;
        imageElement.src = imagePath;
        imageElement.classList.remove("hidden");

        // Set random position for the ingredient image
        setPositionAndRotation(imageId, false); // false to keep rotation
    }
}

let transitionDuration = 2;

function resetSentence() {
    // Show static words
    showStaticWords();

    // Restore initial position of the placeholder sentence
    const sentenceElement = document.getElementById("sentence");
    if (sentenceElement && initialSentencePosition) {
        sentenceElement.style.left = initialSentencePosition.left;
        sentenceElement.style.top = initialSentencePosition.top;
    }

    // Restore initial positions of individual words with proximity
    const words = ["try", "with", "and", "soupName", "ingredient1", "ingredient2", "period", "soupEmoji"];
    const proximity = 20; // Adjust the proximity as needed

    let currentLeft = initialSentencePosition.left ? parseFloat(initialSentencePosition.left) : margin;
    const initialTop = initialSentencePosition.top ? parseFloat(initialSentencePosition.top) : margin;

    // Group the words "try," "with," and "and" together
    const groupedWords = ["try", "with", "and"];

    words.forEach(word => {
        const element = document.getElementById(word);
        if (element && initialPositions[word]) {
            // Use CSS transition for smooth movement
            element.style.transition = `left ${transitionDuration}s, top ${transitionDuration}s, transform ${transitionDuration}s`;

            // Check if the word is part of the grouped words
            if (groupedWords.includes(word)) {
                // Set position for grouped words
                element.style.left = `${currentLeft}px`;
            } else {
                // Set position for individual words
                element.style.left = `${currentLeft}px`;
                element.style.top = `${initialTop}px`;
                element.style.transform = `rotate(0deg)`;
            }

            currentLeft += element.clientWidth + proximity;
        }
    });

    // Reset transition property after the animation is complete
    setTimeout(() => {
        words.forEach(word => {
            const element = document.getElementById(word);
            if (element) {
                element.style.transition = 'none';
            }
        });
    }, transitionDuration * 1000);
}


function setPositionAndRotation(elementId, changeRotation = true) {
    const element = document.getElementById(elementId);
    if (element) {
        const margin = 20; // Adjust margin as needed

        // Get the dimensions of the viewport
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;

        // Calculate the maximum allowed positions
        const maxX = viewportWidth - element.clientWidth - margin;
        const maxY = viewportHeight - element.clientHeight - margin;

        // Calculate random positions within the limits
        const randomX = Math.max(Math.min(Math.random() * maxX, maxX), margin);
        const randomY = Math.max(Math.min(Math.random() * maxY, maxY), margin);

        // Keep the current rotation if specified
        const currentRotation = changeRotation ? Math.random() * 360 : getRotation(element);

        // Set position and rotation
        element.style.position = "fixed"; // Use fixed positioning
        element.style.left = `${randomX}px`;
        element.style.top = `${randomY}px`;
        element.style.transform = `rotate(${currentRotation}deg)`;
    }
}

function getRotation(element) {
    const style = window.getComputedStyle(element);
    const matrix = new DOMMatrix(style.transform);
    return Math.round(Math.atan2(matrix.b, matrix.a) * (180 / Math.PI));
}

function getRandomElement(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

document.getElementById("soupEmoji").addEventListener("click", generateRandomSentence);

