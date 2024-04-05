import React, { useContext, useState } from 'react'
import { Blog } from '../context/BlogContext'

const BlogForm = () => {
    const {dispatch} = useContext(Blog)
    const [title,setTitle] = useState('')
    const [content,setContent] = useState('')
    
    const handleSubmit = e =>{
        e.preventDefault()
        dispatch({type:'ADD_BLOG_POST',title,content})
        setTitle('')
        setContent('')
    }
return (
    <div className="bg-white p-4 rounded-md shadow-md">
      <form onSubmit={handleSubmit} >
        <input type = "text" placeholder='Title' value={title} onChange={e => setTitle(e.target.value)}  className="w-full mb-2 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"/>
        <textarea placeholder='Content' value= {content} onChange={e => setContent(e.target.value)} className="w-full mb-2 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          rows="4"/>
        <button type = "submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Add Blog Post</button>
      </form>
    </div>
  )
}

export default BlogForm
