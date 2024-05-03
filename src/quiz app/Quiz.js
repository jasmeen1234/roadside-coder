import React,{useState} from 'react'
import question from './constants/question.json'
import './quiz.css'
import Question from './components/Question';
import Result from './components/Result';
function Quiz() {
    const[currentQuestion, setCurrentQuestion]=useState(0);
    const[userAnswer,setUserAnswer]=useState([]);
// keep all logic
const handleNextQuestion=(isCorrect)=>{
    setCurrentQuestion(currentQuestion + 1)
    setUserAnswer([...userAnswer,isCorrect]);
console.log(userAnswer);
}

const resetQuiz=()=>{
    setCurrentQuestion(0);
    setUserAnswer([]);
}


  return (
    <div className="App">
      <h1>World quiz</h1>
      {/* Question component */}
      {currentQuestion <question.length &&(
      <Question question={question[currentQuestion]} onAnswerClick={handleNextQuestion}/>
      )}
    {/* Result component */}
    {currentQuestion===question.length &&(
    <Result  userAnswer={userAnswer} question={question} resetQuiz={resetQuiz}/>
)}
    </div>
  )
}

export default Quiz
