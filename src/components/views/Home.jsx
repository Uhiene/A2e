import React from 'react'
import QuestionDescription from '../QuestionDescription'
import QuestionTitle from '../QuestionTitle'


const QuestionPage = () => {
  return (
    <div className='w-4/5 mx-auto'>
      <QuestionTitle title={"Ask Quetions"} caption={"22,931,645 questions"} />
      {Array(5).fill().map((q, i) => (
        <QuestionDescription key={i} id={i} withTitle/>
      ))}
    </div> 
  )
}

export default QuestionPage