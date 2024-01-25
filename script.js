const sentenceElement = document.getElementById("sentence");
const soupEmojiElement = document.getElementById("soupEmoji");

soupEmojiElement.addEventListener("click", generateRandomSentence);

function generateRandomSentence() {
    const randomSoup = getRandomElement(soupNames);
    const randomIngredient1 = getRandomElement(ingredients);
    const randomIngredient2 = getRandomElement(ingredients);

    // Create elements for each part of the sentence
    const soupElement = createRandomElement(randomSoup);
    const withElement = createRandomElement("with");
    const ingredient1Element = createRandomElement(randomIngredient1);
    const andElement = createRandomElement("and");
    const ingredient2Element = createRandomElement(randomIngredient2);

    // Append elements to the body
    document.body.appendChild(soupElement);
    document.body.appendChild(withElement);
    document.body.appendChild(ingredient1Element);
    document.body.appendChild(andElement);
    document.body.appendChild(ingredient2Element);

    // Position elements randomly on the screen
    positionRandomly(soupElement);
    positionRandomly(withElement);
    positionRandomly(ingredient1Element);
    positionRandomly(andElement);
    positionRandomly(ingredient2Element);
}

function createRandomElement(text) {
    const element = document.createElement("div");
    element.textContent = text;
    element.style.position = "absolute";
    element.style.color = "#27420F"; // Adjust color if needed
    return element;
}

function positionRandomly(element) {
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    element.style.left = x + "px";
    element.style.top = y + "px";
}

function getRandomElement(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}
