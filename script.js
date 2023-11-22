var sheng_mu = ['b', 'p', 'm', 'f', 'd', 't', 'n', 'l', 'g', 'k', 'h', 'j', 'q', 'x', 'zh', 'ch', 'sh', 'r', 'z', 'c', 's', 'y', 'u'];
var yun_mu = ['a', 'o', 'e', 'i', 'u', 'ü', 'ai', 'ei', 'ui', 'ao', 'ou', 'iu', 'ie', 'üe', 'er', 'an', 'en', 'in', 'un', 'ün', 'ang', 'eng', 'ing', 'ong'];
var zheng_ti_yin_jie = ['zhi', 'chi', 'shi', 'ri', 'zi', 'ci', 'si', 'yi', 'wu', 'ye', 'yue', 'yan', 'yuan', 'yu', 'yun', 'yin', 'ying'];


var generatedLetters = sheng_mu.concat(yun_mu, zheng_ti_yin_jie);
var usedLetters = [];
var totalLetters = generatedLetters.length;

document.getElementById("generateButton").addEventListener("click", function() {
    if (totalLetters === 0) {
        document.getElementById("randomLetter").textContent = "Finish!!!";
        document.getElementById("letterDescription").textContent = "";
        
        // Change the circle to a rectangle when words finish
        var circleElement = document.getElementById("circleElement");
        circleElement.style.borderRadius = "10%";
        circleElement.style.width = "200px"; // Set the desired width for the rectangle
        circleElement.style.height = "80px"; // Set the desired height for the rectangle
        circleElement.style.backgroundColor = "#226f54"; // Set the background color
        
        return;
    }

    var randomIndex = Math.floor(Math.random() * generatedLetters.length);
    var randomLetter = generatedLetters[randomIndex];

    usedLetters.push(randomLetter);
    generatedLetters.splice(randomIndex, 1);
    totalLetters--;

    // Display the generated letter and remaining count
    document.getElementById("randomLetter").textContent = randomLetter;
    document.getElementById("letterDescription").textContent = "pīn yīn ដែលនៅសល់: " + totalLetters;

    // Change button text after the first click
    if (generateButton.textContent === "ចាប់ផ្តើម") {
        generateButton.textContent = "ប្តូរអក្សរ";
    }
});