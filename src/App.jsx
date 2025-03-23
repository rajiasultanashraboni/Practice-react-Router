
import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import Nav from './Components/Nav'
import Home from './Components/Home'
import About from './Components/About'
import Users from './Components/Users'
import { useEffect, useState } from 'react'
import ShowDetails from './Components/ShowDetails'
import Posts from './Components/Posts'
import Details from './Components/Details'


function App() {

  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])
  
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setPosts(data))
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
          <Route path='/posts' element={<Posts posts={posts}></Posts>}></Route>
          <Route path='/post/:id' element={<Details></Details>}></Route>
        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
