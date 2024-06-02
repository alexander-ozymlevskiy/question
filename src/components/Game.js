import React from 'react';

function Game({ step, question, onClickVariant, selectedAnswer, isCorrect, timeLeft, totalQuestions }) {
  const percentage = Math.round((step / totalQuestions) * 100);
  const formattedTimeLeft = `${Math.floor(timeLeft / 60)}:${timeLeft % 60 < 10 ? '0' : ''}${timeLeft % 60}`;

  return (
    <>
      <div className={`timer ${timeLeft <= 0 ? 'time-up' : ''}`}>
        {timeLeft > 0 ? `${formattedTimeLeft}` : 'Час вичерпано!'}
      </div>
      <div className="progress">
        <div style={{ width: `${percentage}%` }} className="progress__inner"></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
        {question.variants.map((text, index) => (
          <li
            key={text}
            onClick={() => onClickVariant(index)}
            className={selectedAnswer === index ? (isCorrect ? 'correct' : 'incorrect') : ''}
          >
            {text}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Game;
