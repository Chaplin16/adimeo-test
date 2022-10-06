const painting = [
    {
        id: 1,
        h3: "Soutenez Le musée",
        text: "Appel aux dons",
        img:"images/musee-giverny-exposition-tableaux.png"
    },
    {
        id: 2,
        h3: "Au coeur du musée",
        text: "Boutique / Librairie",
        img:"images/musee-giverny-boutique-librairie.png"
    },
]

function displayPainting() {
    const paintingMuseum = document.querySelector('#paintingMuseum');
    painting.forEach(function(e){
        paintingMuseum.innerHTML += ``
    })
}