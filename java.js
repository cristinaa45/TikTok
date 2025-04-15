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
  let age = document.getElementById("ageInput").value;
    let resultText = document.getElementById("resultText");
  let resultImage = document.getElementById("resultImage");
});

if (age <= 15) {
resultText.innerText = "You cannot drive";
  resultText.style.color = "red"; // change color
  resultImage.src = "https://upload.wikimedia.org/wikipedia/commons/4/41/Left_side_of_Flying_Pigeon.jpg";
} else if (age >= 16 && age <= 24) {
resultText.innerText = "You can drive";
  resultText.style.color = "green";
  resultImage.src = "https://car-images.bauersecure.com/wp-images/2697/best-electric-cars-2025-renault-scenic-white-front-driving.jpg";
} else if (age > 25) {
resultText.innerText = "You can drive and rent a car";
  resultText.style.color;
}

const container = document.getElementById("list-container");

for (let i = 1; i <= 5; i++) {
  const p = document.createElement("p");
  p.textContent = "This is item #" + i;
  container.appendChild(p);
}
let j = 1;
while (j <= 5) {
  const p = document.createElement("p");
  p.textContent = "While loop item #" + j;
  container.appendChild(p);
  j++;
}

for (let a = 1; a <= 20; a++) {
  const p = document.createElement("p");
  p.textContent = "Red or blue?" + a ;

  if (a % 2 == 0) {
    p.style.color = "blue";
  } else {
    p.style.color = "red";
  }

  container.appendChild(p);
}
