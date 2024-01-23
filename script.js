const soupNames = ["Tom Yum", "Minestrone", "Pho", "Gazpacho", "Lentil Soup"];
const ingredients = ["ginger", "basil", "cabbage", "lemongrass", "garlic"];

const sentenceElement = document.getElementById("sentence");
const soupNameElement = document.getElementById("soupName");
const ingredient1Element = document.getElementById("ingredient1");
const ingredient2Element = document.getElementById("ingredient2");

document.body.addEventListener("click", generateRandomSentence);

function generateRandomSentence() {
    const randomSoup = getRandomElement(soupNames);
    const randomIngredient1 = getRandomElement(ingredients);
    const randomIngredient2 = getRandomElement(ingredients);

    soupNameElement.textContent = randomSoup;
    ingredient1Element.textContent = randomIngredient1;
    ingredient2Element.textContent = randomIngredient2;

    // Animate words floating out of the bowl
    sentenceElement.classList.add("animate");
    setTimeout(() => {
        sentenceElement.classList.remove("animate");
    }, 1000);
}

function getRandomElement(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}
