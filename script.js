// script.js

// Funktion för att hantera uppladdning av växter
document.getElementById('plantForm').addEventListener('submit', function(event) {
  event.preventDefault();

  // Hämta värden från formuläret
  const plantName = document.getElementById('plantName').value;
  const plantPrice = document.getElementById('plantPrice').value;
  const plantCare = document.getElementById('plantCare').value;
  const plantImage = document.getElementById('plantImage').files[0];

  // Skapa en ny läsare för att hantera bilduppladdning
  const reader = new FileReader();
  reader.readAsDataURL(plantImage);

  reader.onload = function(e) {
    const imageUrl = e.target.result;

    // Skapa ett nytt kort för växten
    const plantCard = document.createElement('div');
    plantCard.classList.add('plant-card');

    plantCard.innerHTML = `
      <img src="${imageUrl}" alt="Bild på växt">
      <h3>${plantName}</h3>
      <p>Pris: ${plantPrice} kr</p>
      <button class="more-info-btn">Läs mer</button>
    `;

    // Lägg till kortet i växtlistan
    document.getElementById('plantContainer').appendChild(plantCard);

    // Hantera klick på "Läs mer"-knappen
    const moreInfoBtn = plantCard.querySelector('.more-info-btn');
    moreInfoBtn.addEventListener('click', function() {
      showModal(imageUrl, plantName, plantPrice, plantCare);
    });

    // Rensa formuläret
    document.getElementById('plantForm').reset();
  };
});

// Funktion för att visa modalen
function showModal(imageUrl, name, price, care) {
  document.getElementById('modalPlantImage').src = imageUrl;
  document.getElementById('modalPlantName').innerText = name;
  document.getElementById('modalPlantPrice').innerText = `Pris: ${price} kr`;
  document.getElementById('modalPlantCare').innerText = care;

  // Visa modalen
  const modal = document.getElementById('plantModal');
  modal.style.display = 'block';
}

// Stäng modalen
document.querySelector('.close').addEventListener('click', function() {
  const modal = document.getElementById('plantModal');
  modal.style.display = 'none';
});

// Stäng modalen om användaren klickar utanför innehållet
window.onclick = function(event) {
  const modal = document.getElementById('plantModal');
  if (event.target === modal) {
   
