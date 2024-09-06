// script.js

// Funktion för att hantera uppladdning av växter
document.getElementById('plantForm').addEventListener('submit', function(event) {
  event.preventDefault();

  // Hämta värden från formuläret
  const plantName = document.getElementById('plantName').value;
  const plantPrice = document.getElementById('plantPrice').value;
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
    `;

    // Lägg till kortet i växtlistan
    document.getElementById('plantContainer').appendChild(plantCard);

    // Rensa formuläret
    document.getElementById('plantForm').reset();
  };
});
