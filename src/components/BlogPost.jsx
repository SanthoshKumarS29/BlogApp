import React from 'react'

const BlogPost = ({blogPost}) => {
  return (
    <div className="bg-white p-4 rounded-md shadow-md mb-4">
      <h2  className="text-xl font-bold mb-2">Title: {blogPost.title}</h2>
      <p className="text-gray-700">{blogPost.content}</p>
    </div>
  )
}

export default BlogPost
