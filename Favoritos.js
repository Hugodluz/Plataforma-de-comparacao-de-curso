document.addEventListener('DOMContentLoaded', () => {
    const favoriteButtons = document.querySelectorAll('.favorite-btn');
    const favoritesList = document.getElementById('favorites-list');

    // Recupera favoritos do localStorage (se existirem)
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    // Atualiza a interface com cursos favoritados
    function updateUI() {
        favoritesList.innerHTML = ''; // Limpa a lista antes de recriar
        favorites.forEach(course => {
            const li = document.createElement('li');
            li.textContent = course.name;
            favoritesList.appendChild(li);
        });

        // Atualiza botões de favoritos
        favoriteButtons.forEach(button => {
            const courseCard = button.closest('.course-card');
            const courseId = courseCard.getAttribute('data-id');

            if (favorites.some(course => course.id === courseId)) {
                button.classList.add('favorited');
                button.textContent = 'Remover dos Favoritos';
            } else {
                button.classList.remove('favorited');
                button.textContent = 'Adicionar aos Favoritos';
            }
        });
    }

    // Adiciona ou remove cursos dos favoritos
    function toggleFavorite(event) {
        const button = event.target;
        const courseCard = button.closest('.course-card');
        const courseId = courseCard.getAttribute('data-id');
        const courseName = courseCard.querySelector('h3').textContent;

        // Verifica se o curso já está nos favoritos
        const index = favorites.findIndex(course => course.id === courseId);
        if (index === -1) {
            favorites.push({ id: courseId, name: courseName });
        } else {
            favorites.splice(index, 1);
        }

        // Atualiza o localStorage
        localStorage.setItem('favorites', JSON.stringify(favorites));

        // Atualiza a interface
        updateUI();
    }

    // Adiciona evento de clique a todos os botões de favoritos
    favoriteButtons.forEach(button => {
        button.addEventListener('click', toggleFavorite);
    });

    // Inicializa a interface ao carregar a página
    updateUI();
});
