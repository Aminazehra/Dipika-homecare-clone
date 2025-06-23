 const questions = document.querySelectorAll('.question');

    questions.forEach(q => {
      q.addEventListener('click', () => {
        q.classList.toggle('active');
        const allQuestions = document.querySelectorAll('.question');
        allQuestions.forEach(other => {
          if (other !== q) {
            other.classList.remove('active');
          }
        });
      });
    });
 