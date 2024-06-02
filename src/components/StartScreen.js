import React from 'react';

function StartScreen({ onStart }) {
  return (
    <div className="result">
      <h1>React Test</h1>
      <h3>Час на виконання тесту 10 хвилин.</h3>
      <button onClick={onStart}>Почати</button>
    </div>
  );
}

export default StartScreen;