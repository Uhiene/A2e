
import { FaPenAlt, FaTrashAlt,} from 'react-icons/fa';
import Identicon from 'react-identicons';
import { setGlobalState, useGlobalState } from '../store';
import AddComment from './AddComment';
import UpdateComment from './UpdateComment';


const QuestionComment = ({}) => {
  const notify = () => toast("Wow so easy!");
  const [comments] = useGlobalState("comments")
  


  return (
    <div  className="my-4 border-t-2 border-gray-300 border-t-gray-300 pt-5">
      {comments.map((comment, i) => (  
        <Comment key={i} id={i} comment={comment} />
      ))}
        <button 
          className='mt-5 text-blue-500'  
          onClick={ () => setGlobalState('addComment', 'scale-100')} 
        >
          Add Comment
        </button>
        <AddComment />   
    </div>  
  )
}

const Comment = ({id, comment}) => {
  return (
    <div className=''>
      <div className=" flex justify-between"> 
        <div className='flex items-center space-x-3'>
          <h2>{comment}</h2> 
          <FaPenAlt className='text-xs text-blue-500 cursor-pointer'
            onClick={ () => setGlobalState('updateModal', 'scale-100')}
          />
          <FaTrashAlt className='text-xs text-red-500 cursor-pointer'
            onClick={ () => setGlobalState('updateModal', 'scale-100')}
          />
        </div>  
        <div className='flex justify-center items-center space-x-2'>
          <Identicon string="randomness" size={20}  className="rounded-full" />
          <p>0xe...fde2</p>
        </div>
      </div> 
      <UpdateComment />
      <p className='text-slate-500 text-sm font-lg'>
        16, feb 2022
      </p>
    </div>
  )
}

export default QuestionComment