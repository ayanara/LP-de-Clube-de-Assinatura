const assinaturaCards = document.querySelector('.assinatura-cards');
const planoCards = document.querySelectorAll('.plano-card');

if (assinaturaCards) {
    assinaturaCards.addEventListener('mouseenter', () => {
        assinaturaCards.classList.add('cards-abertos');
    }, { once: true });
}

planoCards.forEach((card) => {
    card.addEventListener('mouseenter', () => {
        planoCards.forEach((item) => item.classList.remove('ativo'));
        card.classList.add('ativo');
    });
});
