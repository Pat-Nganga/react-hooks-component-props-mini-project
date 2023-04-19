import React from 'react'
import blogData from '../data/blog'
import Header from './Header'
import About from './About'
import ArticleList from './ArticleList'

console.log(blogData)

function App() {
   const articles = [
     {
       id: 1,
       title: 'Components 101',
       date: 'December 15, 2020',
       preview: 'Setting up the building blocks of your site',
     },
     {
       id: 2,
       title: 'React Hooks',
       date: 'January 10, 2021',
       preview: 'A deep dive into the world of React Hooks',
     },
     {
       id: 3,
       title: 'CSS Grid Layout',
       date: 'February 5, 2021',
       preview: 'How to create complex layouts using CSS Grid',
     },
   ]
  return (
    <div className='App'>
      <Header blogName='My Blog' />
      <About
        imageSrc='https://via.placeholder.com/215'
        abouText='lorem ipsum'
      />
      <ArticleList articles={articles}/>

    </div>
  )
}

export default App
