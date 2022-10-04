
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/views/Home'
import AddQuestion from './components/AddQuestion';
import Question from './components/views/Question'


function App() {
  return (
    <div className="min-h-screen">
      <Header/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/question/:id' element={<Question />} />
      </Routes>

      <AddQuestion />

      <ToastContainer 
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  )
}

export default App
