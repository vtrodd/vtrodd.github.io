import {useParams} from 'react-router-dom'
import {useBlogPost} from '../../../hooks/useBlogPost'
import ReactMarkdown from 'react-markdown'

export const BlogPost = () => {
  const {year, month, day} = useParams()
  const [post, loading] = useBlogPost(year, month, day)

  if (loading) return <div>Loading...</div>
  if (!post) return <div>Something went wrong...</div>

  return (
    <div className="blog-post">
      <h1>{post.title}</h1>
      <ReactMarkdown children={post.content} />
    </div>
  )
}