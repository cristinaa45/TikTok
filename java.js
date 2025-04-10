const TikTokDiv = document.getElementById('TikTok');
const FrederickDiv = document.getElementById('Frederick');

const infoDiv = document.getElementById('info');

TikTokDiv.addEventListener('click', function() {
  infoDiv.innerHTML = 'This Is TikTok';
});

FrederickDiv.addEventListener('click', function() {
  infoDiv.innerHTML = 'Frederick Douglass bio';
});

document.getElementById("checkButton").addEventListener("click", function() {
  let age = document.getElementById("").value;
    let resultText = document.getElementById("");
  let resultImage = document.getElementById("");

if (age > 16) {
resultText.innerText = "You cannot drive";
  resultText.style.color = "red"; // change color
  resultImage.src = "https://upload.wikimedia.org/wikipedia/commons/4/41/Left_side_of_Flying_Pigeon.jpg";
} else if (age 16 && age 24) {
resultText.innerText = "You can drive";
  resultText.style.color = "green";
  resultImage.src = "https://car-images.bauersecure.com/wp-images/2697/best-electric-cars-2025-renault-scenic-white-front-driving.jpg";
} else if (age 25) {
resultText.innerText = "You can drive and rent a car";
  resultText.style.color
