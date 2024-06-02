const questions = [
    {
      title: 'Який метод відповідає за виведення інформації через React JS компонент?',
      variants: ['console', 'print', 'ReactDOM', 'react', 'render'],
      correct: 4,
    },
    {
      title: 'Від якого класу йде успадкування всіх компонентів?',
      variants: ['Component', 'React.Component', 'ReactComponent', 'ComponentReact', 'ReactJS.Component'],
      correct: 1,
    },
    {
      title: 'Де правильно передана функція як властивість?',
      variants: [
        'argument=(this.someFunction)',
        'argument={someFunction}',
        'argument={this.someFunction ()}',
        'argument={this.someFunction}',
        'argument={this.someFunction {}}'
      ],
      correct: 3,
    },
    {
      title: 'Де правильно створено компонент?',
      variants: [
        'class App extends React.Component ({})',
        'React.Component {}',
        'class App {}',
        'class App extends Component {}',
        'class App extends React.Component {}',
      ],
      correct: 4,
    },
    {
      title: 'Як багато компонентів може бути на сайті?',
      variants: [
        'Не більше 100',
        'Не більше 300',
        'Не більше 10',
        'Не більше 50',
        'Необмежена кількість',
      ],
      correct: 4,
    },
    {
      title: 'React JS – це...',
      variants: [
        'фреймворк',
        'JavaScript бібліотека',
        'MVC-фреймворк',
        'Back-end платформа',
      ],
      correct: 1,
    },
    {
      title: 'Яка компанія розробила React JS?',
      variants: [
        'GitHub',
        'Facebook',
        'Twitter',
        'Google',
        'Amazon',
      ],
      correct: 1,
    },
    {
      title: 'Чи можна писати не використовуючи Babel?',
      variants: [
        'Ні, не можна',
        'Так, можна',
      ],
      correct: 1,
    },
    {
      title: 'Чим властивості відрізняються від станів?',
      variants: [
        'Властивості можна змінювати, стани не можна',
        'Властивості для роботи зі значеннями, стани для роботи з функціями',
        'Стани для роботи зі значеннями, властивості для роботи з функціями',
        'Стани можна змінювати, властивості не можна',
      ],
      correct: 3,
    },
    {
      title: 'Куди можна вбудувати готовий код із методу render()?',
      variants: [
        'Тільки в div',
        'Тільки тег, у якого є id',
        'У будь-який тег',
        'У div або ж у span',
      ],
      correct: 2,
    },
  ];
  
  export default questions;
  
  