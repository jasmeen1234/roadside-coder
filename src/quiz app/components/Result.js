import React from 'react'

function Result({userAnswer,question,resetQuiz=()=>{}}) {
    const correctAnswer = userAnswer.filter((answer)=>answer).length;
  return (
    <div className='results'>
      <h2>Results</h2>
      <p>You Answrers 3 out of {question.length} questions
      <span onClick={resetQuiz}>Click here to retry</span>
      </p>
      <ul>
        {
            question.map((question, index)=>{
                return<li key={index} data-correct={userAnswer[index]}>Q{index + 1}.{question.question}</li>
            })
        }
      </ul>
    </div>
  )
}

export default Result
