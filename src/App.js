import React, { useEffect, useState } from 'react';
import './index.scss';
import StartScreen from './components/StartScreen';
import Result from './components/Result';
import Game from './components/Game';
import questions from './data/questions';

function App() {
  const [step, setStep] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [hasStarted, setHasStarted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(600); // 10 минут в секундах
  const [timeIsUp, setTimeIsUp] = useState(false);

  useEffect(() => {
    if (hasStarted && timeLeft > 0) {
      const timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);

      return () => clearTimeout(timer);
    } else if (hasStarted && timeLeft === 0) {
      setTimeIsUp(true);
    }
  }, [hasStarted, timeLeft]);

  const onClickVariant = (index) => {
    if (timeIsUp) return;

    setSelectedAnswer(index);
    const isAnswerCorrect = index === questions[step].correct;
    setIsCorrect(isAnswerCorrect);
    if (isAnswerCorrect) {
      setCorrect(correct + 1);
    }
    setTimeout(() => {
      setStep(step + 1);
      setSelectedAnswer(null);
      setIsCorrect(null);
    }, 1000);
  };

  const startQuiz = () => {
    setHasStarted(true);
  };

  return (
    <div className="App">
      {!hasStarted ? (
        <StartScreen onStart={startQuiz} />
      ) : timeIsUp ? (
        <div className="result">
          <p>Нажаль, час вичерпався. Спробуйте знову.</p>
          <button onClick={() => window.location.reload()}>Спробувати знову</button>
        </div>
      ) : step !== questions.length ? (
        <Game
          step={step}
          question={questions[step]}
          onClickVariant={onClickVariant}
          selectedAnswer={selectedAnswer}
          isCorrect={isCorrect}
          timeLeft={timeLeft}
          totalQuestions={questions.length}
        />
      ) : (
        <Result correct={correct} totalQuestions={questions.length} />
      )}
    </div>
  );
}

export default App;
