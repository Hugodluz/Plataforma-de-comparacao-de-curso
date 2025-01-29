document.addEventListener('DOMContentLoaded', () => {
    const categoryFilter = document.getElementById('category-filter');
    const priceFilter = document.getElementById('price-filter');
    const ratingFilter = document.getElementById('rating-filter');
    const courses = document.querySelectorAll('.course-card');
  
    // Função para filtrar cursos
    function filterCourses() {
      const categoryValue = categoryFilter.value;
      const priceValue = parseFloat(priceFilter.value) || Infinity;
      const ratingValue = parseFloat(ratingFilter.value) || 0;
  
      courses.forEach(course => {
        const courseCategory = course.getAttribute('data-category');
        const coursePrice = parseFloat(course.getAttribute('data-price'));
        const courseRating = parseFloat(course.getAttribute('data-rating'));
  
        // Verifica se o curso atende aos filtros
        const matchesCategory = categoryValue === 'all' || courseCategory === categoryValue;
        const matchesPrice = coursePrice <= priceValue;
        const matchesRating = courseRating >= ratingValue;
  
        // Mostra ou oculta o curso
        if (matchesCategory && matchesPrice && matchesRating) {
          course.classList.remove('hidden');
        } else {
          course.classList.add('hidden');
        }
      });
    }
  
    // Adiciona event listeners para atualizar os filtros
    categoryFilter.addEventListener('change', filterCourses);
    priceFilter.addEventListener('input', filterCourses);
    ratingFilter.addEventListener('input', filterCourses);
  });
  