const Div = document.getElementById('MCDonald');
const Div = document.getElementById('Trump');

const infoDiv = document.getElementById('info');

MCDonaldDiv.addEventListener('click', function() {
  infoDiv.innerHTML = 'This Is MCDONALD';
});

TrumpDiv.addEventListener('click', function() {
  infoDiv.innerHTML = 'Trump Working on MCDONALD? WHAAAAAA';
});
