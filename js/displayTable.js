const painting = [
    {
        id: 1,
        h3: "Soutenez Le musée",
        figcaption: "Appel aux dons",
        img:"images/musee-giverny-exposition-tableaux.png",
        alt:"Intérieur du musée de Giverny, exposition de tableaux"
    },
    {
        id: 2,
        h3: "Au coeur du musée",
        figcaption: "Boutique / Librairie",
        img:"images/musee-giverny-boutique-librairie.png",
        alt:"Librairie et boutique dans le musée de Giverny"
    }
]

function displayPainting() {
    const paintingMuseum = document.querySelector('#paintingMuseum');
    painting.forEach(function(e){
        paintingMuseum.innerHTML += `<figure>
                                        <img src="${e.img}"
                                            alt="${e.alt}">
                                            <h3>${e.h3}</h3>
                                        <figcaption>${e.figcaption}</figcaption>
                                    </figure>`
    })
}

displayPainting();