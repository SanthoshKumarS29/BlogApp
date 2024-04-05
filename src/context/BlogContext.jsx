import React, { createContext, useReducer } from 'react'

export const Blog = createContext()

const blogReducer = (state,action) =>{
    switch (action.type){
        case 'ADD_BLOG_POST':
            return[...state,{id : Date.now(),title:action.title,content:action.content }]
        default:
            return state;
            
    }
}

const BlogContext = props => {
    const [blogPost,dispatch] = useReducer(blogReducer,[])
  return (
    <Blog.Provider value={{blogPost,dispatch}}>
        <div className="bg-gray-200 p-4 rounded-md shadow-md">
            {props.children}
        </div>
    </Blog.Provider>
  )
}

export default BlogContext
