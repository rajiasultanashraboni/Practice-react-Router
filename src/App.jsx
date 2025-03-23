
import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import Nav from './Components/Nav'
import Home from './Components/Home'
import About from './Components/About'
import Users from './Components/Users'
import { useEffect, useState } from 'react'
import ShowDetails from './Components/ShowDetails'


function App() {

  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])
  
  

  return (
    <>
    
      <BrowserRouter>
        <Nav></Nav>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/about' element={<About></About>}></Route>
          <Route path='/users' element={<Users users={users}></Users>} ></Route>
          <Route path='/user/:id' element={<ShowDetails></ShowDetails>}></Route>
        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
