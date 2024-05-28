import React from 'react';
import './index.scss';

const questions = [
  {
    title: 'аа я тебя люблю',
    variants: ['мг', 'ичо', 'и я люблю сашк'],
    correct: 2,
  },
  {
    title: 'Кого я люблю больше всего на свете ... ? ',
    variants: ['меня', 'правилный ответ-1', 'прочитай ответ-2'],
    correct: 0,
  },
  {
    title: 'Вместе навсегда ?',
    variants: [
      'хзхз',
      'дад',
      'ни',
    ],
    correct: 1,
  },
  {
    title: 'Умничка моя, я тебя люблю<3',
    variants: [
      'и я тебя люблю',
    ],
    correct: 0,
  },
];

function Result({ correct, totalQuestions }) {
  return (
    <div className="result">
      <img
        src="https://art.kartinkof.club/uploads/posts/2023-07/thumbs/1688918091_art-kartinkof-club-p-anime-art-paren-i-devushka-potselui-62.jpg"
        alt="Result icon"
      />
      <h2>Вы отгадали {correct} ответа из {totalQuestions}</h2>
      <button onClick={() => window.location.reload()}>Попробовать снова</button>
    </div>
  );
}

function Game({ step, question, onClickVariant }) {
  const percentage = Math.round((step / questions.length) * 100);

  return (
    <>
      <div className="progress">
        <div style={{ width: `${percentage}%` }} className="progress__inner"></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
        {question.variants.map((text, index) => (
          <li onClick={() => onClickVariant(index)} key={text}>
            {text}
          </li>
        ))}
      </ul>
    </>
  );
}

function App() {
  const [step, setStep] = React.useState(0);
  const [correct, setCorrect] = React.useState(0);
  const question = questions[step];

  const onClickVariant = (index) => {
    console.log(step, index);
    setStep(step + 1);

    if (index === question.correct) {
      setCorrect(correct + 1);
    }
  };

  return (
    <div className="App">
      {step !== questions.length ? (
        <Game step={step} question={question} onClickVariant={onClickVariant} />
      ) : (
        <Result correct={correct} totalQuestions={questions.length} />
      )}
    </div>
  );
}

export default App;
