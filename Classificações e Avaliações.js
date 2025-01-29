document.addEventListener('DOMContentLoaded', () => {
    const stars = document.querySelectorAll('.star');
    const ratingOutput = document.getElementById('rating-output');
    let currentRating = 0;
  
    stars.forEach(star => {
      star.addEventListener('mouseover', () => {
        const value = star.getAttribute('data-value');
        highlightStars(value);
      });
  
      star.addEventListener('mouseout', () => {
        highlightStars(currentRating);
      });
  
      star.addEventListener('click', () => {
        currentRating = star.getAttribute('data-value');
        ratingOutput.textContent = `Avaliação: ${currentRating} estrelas`;
      });
    });
  
    function highlightStars(rating) {
      stars.forEach(star => {
        star.classList.toggle('filled', star.getAttribute('data-value') <= rating);
      });
    }
  });
  