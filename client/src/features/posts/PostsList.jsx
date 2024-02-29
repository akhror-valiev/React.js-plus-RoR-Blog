import React from 'react'
import {API_URL} from "../../constants";
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';



const PostsList = () => {

  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)


useEffect(()=>{
  async function loadPosts(){

    try {
      const response = await fetch(API_URL);
      if (response.ok){
        const json = await response.json()
        setPosts(json) 
      } else{
        throw response;

      }
    }catch(e){
        setError("Error occured")
        console.log("Error occured")
      }finally{
        setLoading(false)
      }
    }
    loadPosts()
},[])

  return (
    <div>
      {posts.map((post)=>(
        <div key={post.id} className='post-container'>
          <h2>
            <Link to={`/posts/${post.id}`}>
            {post.title}
            </Link>
          </h2>
           
          <p>{post.body}</p>
          </div>
      ))}
    </div>
  );
}

export default PostsList