import { useState } from "react";
import "./App.css";

const questions = [
  {
    savol: "React nima?",
    variantlar: ["Dasturlash tili", "JavaScript kutubxonasi", "Ma'lumotlar bazasi"],
    togri: 1
  },
  {
    savol: "JSX nima?",
    variantlar: ["JavaScript ichida HTML yozish sintaksisi", "Yangi dasturlash tili", "CSS kutubxonasi"],
    togri: 0
  },
  {
    savol: "useState nima uchun ishlatiladi?",
    variantlar: ["Sahifani yangilash uchun", "Komponent holatini saqlash uchun", "Stil berish uchun"],
    togri: 1
  },
  {
    savol: "Komponentlar orasida ma'lumot uzatish uchun nima ishlatiladi?",
    variantlar: ["State", "Props", "Function"],
    togri: 1
  },
  {
    savol: "useState(0) da 0 nima?",
    variantlar: ["Boshlang'ich qiymat", "Indeks", "Xato kodi"],
    togri: 0
  },
  {
    savol: "React komponenti nomi qanday harf bilan boshlanadi?",
    variantlar: ["Kichik harf", "Katta harf", "Raqam bilan"],
    togri: 1
  },
  {
    savol: "Virtual DOM nima vazifani bajaradi?",
    variantlar: ["Sahifani tezroq yangilaydi", "Ma'lumotni serverga yuboradi", "CSS yozadi"],
    togri: 0
  },
  {
    savol: "Tugma bosilganda funksiya chaqirish uchun qaysi atribut ishlatiladi?",
    variantlar: ["onPress", "onClick", "click"],
    togri: 1
  },
  {
    savol: "setCount nima qiladi?",
    variantlar: ["count qiymatini o'zgartiradi", "Komponentni o'chiradi", "Yangi sahifa ochadi"],
    togri: 0
  },
  {
    savol: "O'zgaruvchi e'lon qilishning to'g'ri usuli qaysi?",
    variantlar: ["variable x = 5", "let x = 5", "x := 5"],
    togri: 1
  }
];

function App() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [finish, setFinish] = useState(false);

  const handleAnswer = (index) => {
    if (index === questions[current].togri) {
      setScore(score + 1);
    }

    if (current + 1 < questions.length) {
      setCurrent(current + 1);
    } else {
      setFinish(true);
    }
  };

  const progress = ((current + 1) / questions.length) * 100;

  if (finish) {
    return (
      <div className="quiz-container">
        <div className="result-card">
          <h1>Test Tugadi</h1>
          <h2>
            Natija: {score} / {questions.length}
          </h2>
          <button
            onClick={() => {
              setCurrent(0);
              setScore(0);
              setFinish(false);
            }}
          >
            Qayta boshlash
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="quiz-container">
      <div className="quiz-card">

        <div className="top">
          <span>Savol {current + 1}/{questions.length}</span>
          <span>Ball: {score}</span>
        </div>

        <div className="progress">
          <div
            className="progress-fill"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        <h2>{questions[current].savol}</h2>

        <div className="answers">
          {questions[current].variantlar.map((item, index) => (
            <button
              key={index}
              className="answer-btn"
              onClick={() => handleAnswer(index)}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;