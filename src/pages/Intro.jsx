import React from 'react';
import { useNavigate } from 'react-router-dom';
import questions from '../data/questions.json';
import styles from '../styles/Intro.module.css';
import logo from '../images/boredpanda.jpg';

const Intro = () => {
  const navigate = useNavigate();
  const totalQuestions = questions.length;

  const handleStart = () => {
    navigate('/quiz');
  };

  return (
    <div className={styles.container}>
       <img src={logo} alt="Quiz Intro" className={styles.logo} />
      <h1 className={styles.title}>Welcome to the Bored Panda Quiz!</h1>
      <p className={styles.description}>
        This is a quiz consisting of  <strong>{totalQuestions}</strong> questions.  
        Test your knowledge and see how well you do!
      </p>
      <button className={styles.startButton} onClick={handleStart}>
        Start Quiz
      </button>
    </div>
  );
};

export default Intro;
