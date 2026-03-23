const assinaturaCards = document.querySelector('.assinatura-cards');
const planoCards = document.querySelectorAll('.plano-card');

function activateCard(card) {
    planoCards.forEach((item) => {
        const isActive = item === card;
        item.classList.toggle('ativo', isActive);
        item.setAttribute('aria-pressed', String(isActive));
    });
}

if (assinaturaCards) {
    assinaturaCards.addEventListener('mouseenter', () => {
        assinaturaCards.classList.add('cards-abertos');
    }, { once: true });
}

planoCards.forEach((card) => {
    card.addEventListener('mouseenter', () => {
        activateCard(card);
    });

    card.addEventListener('focus', () => {
        assinaturaCards?.classList.add('cards-abertos');
        activateCard(card);
    });

    card.addEventListener('click', () => {
        activateCard(card);
    });

    card.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            assinaturaCards?.classList.add('cards-abertos');
            activateCard(card);
        }
    });
});
