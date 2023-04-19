import React from 'react'

function ArticleList({ articles }) {
  return (
    <div>
      {articles.map((article) => (
        <article
          key={article.id}
          title={article.title}
          date={article.date}
          preview={article.preview}
        />
      ))}
    </div>
  )
}
export default ArticleList