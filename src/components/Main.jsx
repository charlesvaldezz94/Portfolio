import React from "react"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { 
  Navbar, 
  Home,
  Resume,
  Projects,
  Footer 
} from "./"

const Main = () => {
  return (
    <Router>
    <div className="mainRouter">
      <Navbar />
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/resume' element={<Resume/>} />
      <Route path='/projects' element={<Projects/>} />

      </Routes> 
      <Footer />
      </div>
      </Router>
  )
};

export default Main;
