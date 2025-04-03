document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    const indicadores = document.querySelectorAll('.indicador');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let currentSlide = 0;
    const totalSlides = slides.length;

    // Função para mostrar o slide atual
    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
        
        indicadores.forEach((indicador, i) => {
            indicador.classList.toggle('active', i === index);
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

    // Event listeners para os indicadores
    indicadores.forEach((indicador, index) => {
        indicador.addEventListener('click', () => {
            showSlide(index);
        });
    });

    // Auto-play (opcional)
    let intervalId = setInterval(nextSlide, 3000);

    // Pausar auto-play quando o mouse estiver sobre o carrossel
    const carroselContainer = document.querySelector('.carrosel-container');
    carroselContainer.addEventListener('mouseenter', () => {
        clearInterval(intervalId);
    });

    // Retomar auto-play quando o mouse sair do carrossel
    carroselContainer.addEventListener('mouseleave', () => {
        intervalId = setInterval(nextSlide, 3000);
    });
});