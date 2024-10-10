// Filtro de Projetos
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter');
    const projectCards = document.querySelectorAll('.project-card');

    // Função para filtrar os projetos
    function filterProjects(category) {
        projectCards.forEach(card => {
            const categories = card.getAttribute('data-category').split(' ');

            if (category === 'all') {
                card.style.display = 'block';
            } else {
                if (categories.includes(category)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            }
        });
    }

    // Evento de clique nos botões de filtro
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const category = this.getAttribute('data-filter');
            filterProjects(category);
        });
    });

    // Exibir todos os projetos inicialmente
    filterProjects('all');
});