import QuestionDescription from "../QuestionDescription"
import QuestionTitle from "../QuestionTitle"
import Answers from "../Answers"

const Question = () => {
  return (
    <>
      <QuestionTitle 
        title={"Are web developers content creators"}
        caption={"Asked 2 days ago, modified 3 min ago"}
      />
      <div className="px-20 flex justify-center flex-col items-center">
        <QuestionDescription withComment />
        <Answers />
      </div> 
    </>
  )
}

export default Question