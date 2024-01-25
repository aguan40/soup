const sentenceElement = document.getElementById("sentence");

function generateRandomSentence() {
    const randomSoup = getRandomElement(soupNames);
    const randomIngredient1 = getRandomElement(ingredients);
    const randomIngredient2 = getRandomElement(ingredients);

    sentenceElement.innerHTML = `Try <span class="word" id="try">try</span> <span id="soupName">${randomSoup}</span> with <span class="word" id="with">with</span> <span id="ingredient1">${randomIngredient1}</span> and <span class="word" id="and">and</span> <span id="ingredient2">${randomIngredient2}</span>.`;

    // Set random position and rotation for each word
    setPositionAndRotation("try");
    setPositionAndRotation("soupName");
    setPositionAndRotation("with");
    setPositionAndRotation("ingredient1");
    setPositionAndRotation("and");
    setPositionAndRotation("ingredient2");
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

document.getElementById("soupEmoji").addEventListener("click", generateRandomSentence);
