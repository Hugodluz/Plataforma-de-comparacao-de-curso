document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('mode-toggle');
    const body = document.body;
  
    // Verificar preferência salva no localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      body.className = savedTheme;
      toggleButton.textContent = savedTheme === 'dark-mode' ? 'Modo Claro' : 'Modo Escuro';
    }
  
    toggleButton.addEventListener('click', () => {
      if (body.classList.contains('light-mode')) {
        body.className = 'dark-mode';
        toggleButton.textContent = 'Modo Claro';
        localStorage.setItem('theme', 'dark-mode');
      } else {
        body.className = 'light-mode';
        toggleButton.textContent = 'Modo Escuro';
        localStorage.setItem('theme', 'light-mode');
      }
    });
  });
  