import React from 'react';

const restartQuiz = () => {
  window.location.reload(); // Перезагрузка страницы при нажатии кнопки "Попробовать снова"
};

function Result({ correct, totalQuestions }) {
  return (
    <div className="result">
      <img
        src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png"
        alt="Result icon"
      />
      <h2>Ви відгадали {correct} відповіді з {totalQuestions}</h2>
      <button onClick={restartQuiz}>Спробувати знову</button>
    </div>
  );
}

export default Result;
