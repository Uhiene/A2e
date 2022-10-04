import { FaSearch } from "react-icons/fa"
import { Link} from "react-router-dom"

const Header = () => {
  return (
    <div>
      <header
      className="flex justify-between items-center h-20 shadow-md p-5 fixed z-auto top-0 right-0 left-0 w-full bg-black text-gray-200 border-t-4 border-orange-500"
      >
      <div className="flex justify-between items-center">
        <Link to={'/'}
        className=" text-2xl font-bold hover:text-orange-500 cursor-Linkointer"
        >
        A<b className="text-orange-500 hover:text-white">2</b>E
        </Link>
      </div>
      <div
        className="sm:flex items-center justify-between p-2 bg-slate-600 rounded-lg hidden sm:w-3/5 md:w-1/2"
      >
        <input
          className="w-full border-0 outline-0 px-6 relative text-md text-gray-500 bg-transparent"
          type="text"
          id="search-box"
          placeholder="search here..."
          required
        />
        <FaSearch className="absolute hover:text-orange-500 cursor-pointer"/>
      </div>
      <button
        className="bg-orange-500 p-2 rounded-lg text-white cursor-pointer hover:bg-orange-600 hover:text-slate-200 md:text-xs"
      >
        Connect wallet
      </button>
      </header>
      {/* <div
      className="mt-20 w-full flex items-center justify-between p-2 shadow-md visible md:invisible "
      >
        <input
          className="w-full border-0 outline-0 px-6 relative text-md text-gray-500 bg-transparent placeholder:text-gray-500 "
          type="text"
          id="search-box"
          placeholder="search here..."
          required
        />
        <label
          className="fas fa-search absolute hover:text-orange-500 cursor-pointer">
        </label>
      </div> */}
      <div className="h-20"></div>
    </div>    
  )
}

export default Header