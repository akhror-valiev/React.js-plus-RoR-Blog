import React from 'react'
import { Route, Routes } from 'react-router-dom'
import PostsList from '../features/posts/PostsList'
import PostDetails from '../features/posts/PostDetails'


const AppRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<PostsList/>}/>
        <Route path="posts/:id" element={<PostDetails/>}/>
        <Route path='/new' element={<h1>New Post form</h1>}/>
    </Routes>
  )
}

export default AppRoutes;