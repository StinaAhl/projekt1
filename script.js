document.getElementById('plant-select').addEventListener('change', function() {
    const plantInfo = {
        monstera: {
            name: "Monstera",
            description: "Monstera är en lättskött växt som trivs bäst i halvskugga och med jämn vattning.",
            care: "Håll jorden fuktig, men inte blöt. Placera i ljus, men undvik direkt solljus."
        },
        pilea: {
            name: "Pilea",
            description: "Pilea kallas även för elefantöra och är en populär, lättskött växt.",
            care: "Vattna när jorden börjar torka upp. Trivs bäst i ljusa lägen, men inte i direkt sol."
        },
        'aloe-vera': {
            name: "Aloe Vera",
            description: "Aloe Vera är känd för sina läkande egenskaper och trivs i soliga fönster.",
            care: "Vattna sparsamt och låt jorden torka ut mellan vattningarna. Gillar mycket sol."
        },
        gullranka: {
            name: "Gullranka",
            description: "Gullranka är en robust växt som trivs i de flesta miljöer.",
            care: "Vattna regelbundet och placera i indirekt ljus för bästa tillväxt."
        },
        kaktus: {
            name: "Kaktus",
            description: "Kaktusar är tåliga växter som kräver väldigt lite underhåll.",
            care: "Vattna sparsamt och placera i direkt solljus. Perfekt för soliga fönster."
        },
        fiolfikus: {
            name: "Fiolfikus",
            description: "Fiolfikus är en elegant växt med stora blad, men kan vara lite krävande.",
            care: "Håll jorden lätt fuktig och ge mycket ljus, men undvik direkt sol."
        }
    };

    const selectedPlant = this.value;
    const descriptionElement = document.getElementById('plant-description');

    if (plantInfo[selectedPlant]) {
        descriptionElement.textContent = `${plantInfo[selectedPlant].name}: ${plantInfo[selectedPlant].description} Skötselråd: ${plantInfo[selectedPlant].care}`;
    } else {
        descriptionElement.textContent = "Välj en växt från rullgardinsmenyn för att se information.";
    }
});
