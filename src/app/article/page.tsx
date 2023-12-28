import React from 'react'
import { getArticle } from './_service'

export const revalidate = 10

const Article = async () => {
    const article = await getArticle()
    console.log(article.data.data.results)
  return (
    <div>Article</div>
  )
}

export default Article