const TikTokDiv = document.getElementById('TikTok');
const FrederickDiv = document.getElementById('Frederick');

const infoDiv = document.getElementById('info');

TikTokDiv.addEventListener('click', function() {
  infoDiv.innerHTML = 'This Is TikTok';
});

FrederickDiv.addEventListener('click', function() {
  infoDiv.innerHTML = 'Frederick Douglass bio';
});
