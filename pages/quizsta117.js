import Head from 'next/head';
import { GetServerSideProps } from 'next';
import { parse } from 'cookie';
import styles from '../assets/css/styles.module.css';
import Quiz from "../components/examDisp";
import { quizData } from "../constants/sta117";
import { useState, useEffect } from 'react';


const StartQuiz = ({ name, id }) => {
  const [autoSubmitted, setAutoSubmitted] = useState(false);

  const CountdownTimer = () => {
    const [countdown, setCountdown] = useState(900); // 900 seconds = 15 minutes
    useEffect(() => {
      const timer = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000);
  
      return () => {
        clearInterval(timer);
      };
    }, []);
  
    useEffect(() => {
      if (countdown === 0) {
        console.log('Countdown finished!');
        setAutoSubmitted(true);
      }
    }, [countdown]);
  
    useEffect(() => {
      console.log('autoSubmitted:', autoSubmitted);
    }, [autoSubmitted]);
  
    const minutes = Math.floor(countdown / 60);
    const seconds = countdown % 60;
  
    return (
      <div>
        {minutes < 10 ? '0' + minutes : minutes}:
        {seconds < 10 ? '0' + seconds : seconds}
      </div>
    );
  };
  
  
  return (
	<div className={styles.body}>
		<Head>
			<link rel="icon" href="rcf_logo_172_X_155.png" />
			<title>Start Quiz</title>
		</Head>
		<div className={styles.header}>
        <img className={styles.logo} src="rcf_logo_172_X_155.png" alt="RCF_Logo" width="48" height="48"/>
		<div className={styles.user_info}>
			<div className={styles.timer}>
			<CountdownTimer/>
      {/* <p>status</p> */}
      {/* <p>{autoSubmitted}</p> */}
			</div>
			<img className={styles.ImgCircle} src="avatar.png" alt="img" width="57" height="51"/>
			<div>
				<span className={styles.userid}>{id}</span><br/>
				<span className={styles.user}>{name}</span>
			</div>
		</div>
      </div>
	  <h3 className={styles.instruction}>STA117</h3>
    <div className={styles.container}>
		<div className={styles.exambody}>
			<Quiz quizData={quizData} autoSubmitted= {autoSubmitted} setAutoSubmitted={setAutoSubmitted} name={name} id={id}/>
		</div>
	</div>
	</div>
  );
};

export const getServerSideProps = async (context) => {
  console.log("fetching cookies");
  // Read cookies from the request headers
  const cookies = parse(context.req.headers.cookie || '');

  // Access individual cookie values
  const name = cookies.name || '';
  const id = cookies.id || '';

  console.log("name:", name);
  console.log("id:", id);

  if (!id) {
    // Cookie is not present
    if (context.res) {
      // If running on the server-side, redirect to index page
      context.res.setHeader('Location', '/login');
      context.res.statusCode = 302;
      context.res.end();
    } else {
      // If running on the client-side, redirect to index page
      window.location.href = '/';
    }
  }

  // Pass the cookie values as props
  return {
    props: {
      name,
      id,
    },
  };
};

export default StartQuiz;