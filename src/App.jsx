
import './App.css'
import BlogForm from './components/BlogForm'
import BlogList from './components/BlogList'
import Header from './components/Header'
import BlogContext from './context/BlogContext'

function App() {
  
  return (
    <>
    <BlogContext>
      <div>
        <Header />
        <BlogList />
        <BlogForm />
      </div>
    </BlogContext>
    </>
  )
}

export default App
