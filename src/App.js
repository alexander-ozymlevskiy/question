import React from 'react';
import './index.scss';

const questions = [
  {
    title: 'Пошли играть ... ?',
    variants: ['да киц', 'нет', 'позже'],
    correct: 0,
  },
  {
    title: 'Кого я люблю больше всего на свете ... ? ',
    variants: ['свою любимую герл', 'дрочить', 'моблу'],
    correct: 0,
  },
  {
    title: 'На ком я умею лучше всего играть ?',
    variants: [
      'Эйдора',
      'Джой',
      'Сабер',
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
        src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png"
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
