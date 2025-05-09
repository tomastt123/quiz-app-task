import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import questions from '../data/questions.json';
import results from '../data/results.json';
import styles from '../styles/Result.module.css';
import logo from '../images/boredpanda.jpg';

export default function Result() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const correct = state?.correctCount ?? 0;
  const total = questions.length;
  const outcome = results.find(r => correct >= r.minCorrect && correct <= r.maxCorrect);

  return (
    <div className={styles.container}>
      <img src={logo} alt="Quiz Intro" className={styles.logo} />
      <h1 className={styles.title}>{outcome.title}</h1>
      <p className={styles.description}>{outcome.description}</p>
      <p className={styles.score}>
        You answered {correct} out of {total} correctly.
      </p>
      <button className={styles.restart} onClick={() => navigate('/')}>
        Try Again
      </button>
    </div>
  );
}
