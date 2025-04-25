document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let currentSlide = 0;
    const totalSlides = slides.length;

    // Função para mostrar o slide atual
    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
        
        currentSlide = index;
    }

    // Avançar para o próximo slide
    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
    }

    // Voltar para o slide anterior
    function prevSlide() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        showSlide(currentSlide);
    }

    // Event listeners para os botões
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);
    ;


    let intervalId = setInterval(nextSlide, 3000);

    const carroselContainer = document.querySelector('.carrosel-container');
    carroselContainer.addEventListener('mouseenter', () => {
        clearInterval(intervalId);
    });

    carroselContainer.addEventListener('mouseleave', () => {
        intervalId = setInterval(nextSlide, 3000);
    });
});


 function curriculo(){
    window.location.href="../Tela-curriculo/Tela-curriculo.html"
}

function linguagem(){

    window.location.href="../Tela-linguagens/Tela-linguagens.html"

}

function natureza(){
    
    window.location.href="../Tela-natureza/Tela-natureza.html"

}

function matematica(){
    
    window.location.href="../Tela-Matematica/Tela-matematica.html"

}

function humanas(){
    window.location.href="../Tela-humanas/Tela-humanas.html"

}

function tecnico(){

    window.location.href="../Tela-tecnico/Tela-tecnico.html"


}
