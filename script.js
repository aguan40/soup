const sentenceElement = document.getElementById("sentence");
const soupEmojiElement = document.getElementById("soupEmoji");

soupEmojiElement.addEventListener("click", generateRandomSentence);

function generateRandomSentence() {
    const randomSoup = getRandomElement(soupNames);
    const randomIngredient1 = getRandomElement(ingredients);
    const randomIngredient2 = getRandomElement(ingredients);

    // Create a container div for the dynamic sentence
    const sentenceContainer = document.createElement("div");
    sentenceContainer.style.position = "absolute";
    sentenceContainer.style.color = "#27420F"; // Adjust color if needed

    // Create elements for each part of the sentence
    const tryElement = createRandomElement("Try");
    const soupElement = createRandomElement(randomSoup);
    const withElement = createRandomElement("with");
    const ingredient1Element = createRandomElement(randomIngredient1);
    const andElement = createRandomElement("and");
    const ingredient2Element = createRandomElement(randomIngredient2);

    // Append elements to the container
    sentenceContainer.appendChild(tryElement);
    sentenceContainer.appendChild(soupElement);
    sentenceContainer.appendChild(withElement);
    sentenceContainer.appendChild(ingredient1Element);
    sentenceContainer.appendChild(andElement);
    sentenceContainer.appendChild(ingredient2Element);

    // Append the container to the body
    document.body.appendChild(sentenceContainer);

    // Position and rotate the container randomly on the screen
    positionAndRotateRandomly(sentenceContainer);
}

function createRandomElement(text) {
    const element = document.createElement("span");
    element.textContent = text;
    return element;
}

function positionAndRotateRandomly(element) {
    const containerWidth = element.offsetWidth;
    const containerHeight = element.offsetHeight;

    const maxX = window.innerWidth - containerWidth;
    const maxY = window.innerHeight - containerHeight;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;
    const rotation = Math.random() * 360; // Random rotation in degrees

    element.style.left = x + "px";
    element.style.top = y + "px";
    element.style.transform = `rotate(${rotation}deg)`;
}


function getRandomElement(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}
