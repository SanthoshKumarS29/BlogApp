import React, { useContext } from 'react'
import { Blog } from '../context/BlogContext'
import BlogPost from './BlogPost'

const BlogList = () => {
    const {blogPost} = useContext(Blog) 
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
      {blogPost.map(blogPost =>(
        <BlogPost key={blogPost.id} blogPost={blogPost} />
      )) }
    </div>
  )
}

export default BlogList
