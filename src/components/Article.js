import React from 'react'

const Article = ({ title, date, preview }) => {
  const formattedDate = date
    ? new Date(date).toLocaleDateString()
    : 'January 1,1970'
  return (
    <article>
      <h3>{title}</h3>
      <small>{formattedDate}</small>
      <p>{'Setting up the building blocks of your site'}</p>
    </article>
  )
}

export default Article
