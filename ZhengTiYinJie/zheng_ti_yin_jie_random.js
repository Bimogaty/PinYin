var zheng_ti_yin_jie = ['zhi', 'chi', 'shi', 'ri', 'zi', 'ci', 'si', 'yi', 'wu', 'ye', 'yue', 'yan', 'yuan', 'yu', 'yun', 'yin', 'ying'];
var usedLetters = [];
var totalLetters = zheng_ti_yin_jie.length;

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

    var randomIndex = Math.floor(Math.random() * totalLetters);
    var currentLetter = zheng_ti_yin_jie[randomIndex];

    usedLetters.push(currentLetter);
    zheng_ti_yin_jie.splice(randomIndex, 1);
    totalLetters--;

    // Display the generated letter and remaining count
    document.getElementById("randomLetter").textContent = currentLetter;
    document.getElementById("letterDescription").textContent = "pīn yīn ដែលនៅសល់: " + totalLetters;

    // Change button text after the first click
    if (generateButton.textContent === "ចាប់ផ្តើម") {
        generateButton.textContent = "ប្តូរអក្សរ";
    }
});
