import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import questions from '../data/questions.json';
import styles from '../styles/Quiz.module.css';

const importAll = (r) => {
      let images = {};
      r.keys().forEach((item) => { images[item.replace('./', '')] = r(item); });
      return images;
    };
    const images = importAll(require.context('../images', false, /\.(png|jpe?g|svg|webp|avif)$/));
    


export default function Quiz() {
  const navigate = useNavigate();
  const [current, setCurrent] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const q = questions[current];

  const handleAnswer = (idx) => {
    if (idx === q.correctIndex) {
      setCorrectCount(c => c + 1);
    }
    if (current + 1 < questions.length) {
      setCurrent(i => i + 1);
    } else {
      navigate('/result', { state: { correctCount: correctCount + (idx === q.correctIndex ? 1 : 0) } });
    }
  };

  return (
    <div className={styles.container}>
       <div className={styles.imageWrapper}>
        <img
            src={images[q.image]}
            alt={`Question ${q.id}`}
            className={styles.image}
        />
        </div>
      <h2 className={styles.question}>{q.text}</h2>
      <div className={styles.options}>
        {q.options.map((opt, i) => (
          <button key={i} onClick={() => handleAnswer(i)} className={styles.option}>
            {opt}
          </button>
        ))}
      </div>
      <p className={styles.progress}>
        {current + 1} / {questions.length}
      </p>
    </div>
  );
}
