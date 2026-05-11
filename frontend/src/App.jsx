import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import {Toaster} from 'react-hot-toast'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Success from './pages/Success'
import "./App.css"
import ScrollToTop from './components/scrollToTop'

const App = () => {
  return <Router>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/success' element={<Success/>}/>
      <Route path='*' element={<NotFound/>}/>
    </Routes>
    <Toaster/>
    <ScrollToTop/>
  </Router>
}

export default App