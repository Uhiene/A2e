import Identicon from 'react-identicons';
import QuestionComment from "./QuestionComment";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti"
import { Link } from 'react-router-dom';

const QuestionDescription = ({withComment, id, withTitle}) => {
  return (
    <div className="flex justify-center items-start pt-5 my-4 w-full 
      border-t-2 border-gray-300 border-t-gray-300">
      <AnswersStats />

      <div className='ml-10 text-start'>
        {withTitle ? (
          <Link
            to={typeof id != 'undefined' ? `/question/${id}` : '#'}
            className='text-lg font-medium'
            >
              Are you ready to go?
          </Link >
        ) : null}
        
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi, tenetur? Possimus numquam veniam laudantium molestias corporis in illum aliquid voluptatibus est laborum sit earum quis architecto rem quos mollitia distinctio, alias labore quas similique, beatae ea nisi expedita! Reprehenderit, rerum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis atque laboriosam aliquam debitis quam mollitia, explicabo quod quasi beatae voluptate voluptatem iusto neque laudantium, quae aspernatur? Maxime quibusdam, voluptatum id expedita facilis dignissimos ratione illo pariatur iste, ducimus distinctio aspernatur numquam, consequuntur ea odio repellendus quod corporis facere iure provident ab enim. Inventore quam excepturi nemo officia cum? Nemo tempora obcaecati quis hic velit veniam excepturi exercitationem fugiat odio eveniet iusto officia, harum corrupti dolorem. Architecto, repellat et? Aut recusandae voluptatibus tenetur repudiandae, perferendis suscipit modi! Perspiciatis, rerum saepe molestias earum dicta numquam cumque quia corporis! Magnam natus fuga quis. 
        </p>

        <div className="flex justify-between items-center flex-wrap my-4">
          <div className="flex space-x-2 justify-center">
            <span className="px-4 py-2.5 rounded bg-blue-100 text-blue-400 font-medium text-xs flex align-center w-max cursor-pointer active:bg-blue-300 transition duration-300 ease" >
            css
            </span>
            <span
            className="px-4 py-2.5 rounded bg-blue-100 text-blue-400 font-medium text-xs flex align-center w-max cursor-pointer active:bg-blue-300 transition duration-300 ease"
            >
            php
            </span>
            <span
            className="px-4 py-2.5 rounded bg-blue-100 text-blue-400 font-medium text-xs flex align-center w-max cursor-pointer active:bg-blue-300 transition duration-300 ease"
            >
            wordpress
            </span>
            <span
            className="px-4 py-2.5 rounded bg-blue-100 text-blue-400 font-medium text-xs flex align-center w-max cursor-pointer active:bg-blue-300 transition duration-300 ease"
            >
            javascript
            </span>
          </div>
          <div className='flex justify-center items-center space-x-2'>
            <Identicon string="randomness" size={20}  className="rounded-full" />
            <p>0x1...fr2</p>
          </div>
        </div>
        
        {withComment ? <QuestionComment/> : null}
      </div>
    </div>
  )
}

const AnswersStats = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <h2>8</h2>
      <h2>Answers</h2>
      <div className='mt-5 text-center text-blue-600'>
        <div>
          <TiArrowSortedUp size={20} />
        </div>
        <p className="text-black">23</p>
        <div>
          <TiArrowSortedDown size={20} />
        </div>
      </div>  
    </div> 
  )
}

export default QuestionDescription