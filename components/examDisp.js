import React, { useState } from "react";
import styles from "../assets/css/Home.module.css";
import { clearAllCookies } from '../pages/api/cookieUtils';
// import {saveDataEntry} from  '../lib/db_save'
import PouchDB from 'pouchdb';

const db = new PouchDB('my_database');

async function saveDataEntry(username, id, integerValue) {
  try {
    // Generate a unique ID for the data entry
    const entryId = new Date().toISOString();

    // Create the data entry object
    const dataEntry = {
      _id: entryId,
      username,
      id,
      integerValue,
    };

    // Save the data entry to the database
    const response = await db.put(dataEntry);

    console.log('Data entry saved successfully:', response);

    return response;
  } catch (error) {
    console.error('Error saving data entry:', error);
    throw error;
  }
}

const Quiz = ({ quizData, autoSubmitted, setAutoSubmitted, name, id }) => {
  const [currentQuestion, setCurrentQuestion] = React.useState(0); 
  const [selectedAnswer, setSelectedAnswer] = React.useState("");
  const [errorstate, setErrorState] = React.useState('white');
  const [score, setScore] = React.useState(0);
  const [showScore, setShowScore] = React.useState(false);
  const [answers, setAnswers] = useState([]);

  console.log("name", name)
  console.log('id:', id)


  let errorMessage = "Ensure you answer all questions before submitting."
  var answeredQuestions = [];

  //check if questions were fetched successfuly  
  if (!quizData || !quizData.questions || !Array.isArray(quizData.questions)) {
    return <p>No quiz data provided.</p>;
  }

  const handleNext = () => {
    const presentQuestion = currentQuestion;
    answeredQuestions[presentQuestion] = 'red';
    console.log(answeredQuestions);
    // setCurrentQuestion(currentQuestion + 1);
    setCurrentQuestion((prevQuestion) => prevQuestion + 1);
  };

  const handlePrev = () => {
    // setCurrentQuestion(currentQuestion - 1);
    setCurrentQuestion((prevQuestion) => prevQuestion - 1);
  };

  const handleAnswerSelect = (event) => {
    // setSelectedAnswer(event.target.value);
    const selectedAnswer = event.target.value;
    setAnswers((prevAnswers) => {
      const updatedAnswers = [...prevAnswers];
      updatedAnswers[currentQuestion] = selectedAnswer;
      return updatedAnswers;
    });
    console.log('selected:',setSelectedAnswer(event.target.value) );
  };

 const handleQuizSubmit = ( ) => {
   let answerdQuestions = 0;
    answers.forEach(answer => {
      if(answer){
        //differentiate between the answers and the state
        answerdQuestions++;
        // console.log("answered questions:", answerdQuestions) 
      }else{}
    });
    if (answerdQuestions >= 1) {
      // Check if at least 5 questions have been answered ***
      let calculatedScore = 0;
      
      answers.forEach((answer, index) => {
        if (answer === quizData.questions[index].answer) {
          calculatedScore++;
        }
      });
  
      setScore(calculatedScore);
      console.log("score:", calculatedScore);
      console.log(name, id, calculatedScore);
      saveDataEntry(name, id, calculatedScore);
    
  
      setTimeout(() => {
        // Code to execute after the state has been updated
        // For example, navigate to another page or display a message
        window.location.href = "congrat";
      }, 0);
      clearAllCookies();
      setAutoSubmitted(false);
    } else {
      // Display an error modal to prompt the user to answer all questions
      setErrorState('red');
    }
  };
  
  const handleQuizReset = () => {
    setCurrentQuestion(0);
    setSelectedAnswer("");
    setScore(0);
    setShowScore(false);
  };

  if (quizData.questions.length === 0) {
    return <p>No questions found.</p>;
  }else{
      //if questions are found
        //change colors due to user answering
    var colors = []
    answers.forEach((answer, index) => {
      if (answer){
        colors[index] = 'red';
      } else{
        colors[index] = 'blue'
      }});

    console.log("auto complete", autoSubmitted)
    //triggered if time is autocompleted
    if (autoSubmitted) {
      console.log("completed:", autoSubmitted)
      let calculatedScore = 0;
      answers.forEach((answer, index) => {
          if (answer === quizData.questions[index].answer) {
            calculatedScore++;
          }
        });
      setScore(calculatedScore);
      saveDataEntry(name, id, calculatedScore);
      setTimeout(() => {
          // redirect to congrats page
          window.location.href = "congrat";
        }, 0);
      clearAllCookies();
      setAutoSubmitted(false);      
      //end of autocomplete
    } 
  }

  // console.log('colors:', colors);
  const backgroundColorOne = colors[0] === 'red' ? 'red' : '#1488CC';
  const backgroundColorTwo = colors[1] === 'red' ? 'red' : '#1488CC';
  const backgroundColorThree = colors[2] === 'red' ? 'red' : '#1488CC';
  const backgroundColorFour = colors[3] === 'red' ? 'red' : '#1488CC';
  const backgroundColorFive = colors[4] === 'red' ? 'red' : '#1488CC';
  const backgroundColorSix = colors[5] === 'red' ? 'red' : '#1488CC';
  const backgroundColorSeven = colors[6] === 'red' ? 'red' : '#1488CC';
  const backgroundColorEight = colors[7] === 'red' ? 'red' : '#1488CC';
  const backgroundColorNine = colors[8] === 'red' ? 'red' : '#1488CC';
  const backgroundColorTen = colors[9] === 'red' ? 'red' : '#1488CC';
  const backgroundColorEleven = colors[10] === 'red' ? 'red' : '#1488CC';
  const backgroundColorTwelve = colors[11] === 'red' ? 'red' : '#1488CC';
  const backgroundColorThirteen = colors[12] === 'red' ? 'red' : '#1488CC';
  const backgroundColorFourteen = colors[13] === 'red' ? 'red' : '#1488CC';
  const backgroundColorFifteen = colors[14] === 'red' ? 'red' : '#1488CC';
  const backgroundColorSixteen = colors[15] === 'red' ? 'red' : '#1488CC';
  const backgroundColorSeventeen = colors[16] === 'red' ? 'red' : '#1488CC';
  const backgroundColorEighteen = colors[17] === 'red' ? 'red' : '#1488CC';
  const backgroundColorNinteen = colors[18] === 'red' ? 'red' : '#1488CC';
  const backgroundColorTwenty = colors[19] === 'red' ? 'red' : '#1488CC';

  return (
    <div>
      {showScore ? (
        <div>
          <h2>
            {/* You scored {score} out of {quizData.questions.length} */}
          </h2>
          {/* <button onClick={handleQuizReset}>Try Again</button> */}
        </div>
      ) : (
        <div className={styles.examQuestion}>
          <h2>{quizData.questions[currentQuestion].question}</h2>
          <ul>
            {quizData.questions[currentQuestion].options.map(
              (option, index) => (
                <li key={index}>
                  <label>
                    <input
                      type="radio"
                      value={option}
                      checked={selectedAnswer === option}
                      onChange={handleAnswerSelect}
                    />
                    {option}
                  </label>
                </li>
              )
            )}
          </ul>
          <button
            className={styles.prevBtn}
            onClick={handlePrev}
            disabled={currentQuestion === 0}
          >
            Previous
          </button>
          {currentQuestion === quizData.questions.length - 1 ? (
            <button className={styles.subBtn} onClick={handleQuizSubmit}>
              Submit
            </button>
          ) : (
            <button className={styles.nextBtn} onClick={handleNext}>
              Next
            </button>
          )}
        </div>
      )}
      <div className={styles.progress_box}>
        <div className={styles.progress_content}>
          <div className={styles.progress_row}>
            <div className={styles.progress_num} style={{ backgroundColor: backgroundColorOne }}> 1 </div>
            <div className={styles.progress_num} style={{ backgroundColor: backgroundColorTwo }}> 2 </div>
            <div className={styles.progress_num} style={{ backgroundColor: backgroundColorThree }}> 3 </div>
            <div className={styles.progress_num} style={{ backgroundColor: backgroundColorFour }}> 4 </div>
            <div className={styles.progress_num} style={{ backgroundColor: backgroundColorFive }}> 5 </div>
            <div className={styles.progress_num} style={{ backgroundColor: backgroundColorSix }}> 6 </div>
            <div className={styles.progress_num} style={{ backgroundColor: backgroundColorSeven }}> 7 </div>
            <div className={styles.progress_num} style={{ backgroundColor: backgroundColorEight }}> 8 </div>
            <div className={styles.progress_num} style={{ backgroundColor: backgroundColorNine }}> 9 </div>
            <div className={styles.progress_num} style={{ backgroundColor: backgroundColorTen }}> 10 </div>
            <div className={styles.progress_num} style={{ backgroundColor: backgroundColorEleven }}> 11 </div>
            <div className={styles.progress_num} style={{ backgroundColor: backgroundColorTwelve }}> 12 </div>
            <div className={styles.progress_num} style={{ backgroundColor: backgroundColorThirteen }}> 13 </div>
            <div className={styles.progress_num} style={{ backgroundColor: backgroundColorFourteen }}> 14 </div>
            <div className={styles.progress_num} style={{ backgroundColor: backgroundColorFifteen }}> 15 </div>
            <div className={styles.progress_num} style={{ backgroundColor: backgroundColorSixteen }}> 16 </div>
            <div className={styles.progress_num} style={{ backgroundColor: backgroundColorSeventeen }}> 17 </div>
            <div className={styles.progress_num} style={{ backgroundColor: backgroundColorEighteen }}> 18 </div>
            <div className={styles.progress_num} style={{ backgroundColor: backgroundColorNinteen }}> 19 </div>
            <div className={styles.progress_num} style={{ backgroundColor: backgroundColorTwenty }}> 20 </div>
          </div>
          <p style={{color: errorstate}}>{errorMessage}</p>
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
export default Quiz;
