document.addEventListener('DOMContentLoaded', () => {
    new TypeIt(".animated", {
        speed: 130,
        loop: true
    }).type('programador.', {delay: 900}).delete(12).type('designer gráfico.')
    
    .go()
})

VanillaTilt.init(document.querySelector(".imagem"), {
    max: 25,
    speed: 400
});