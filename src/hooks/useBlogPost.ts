import {useEffect, useState} from 'react'
import {useBlogRepoTree} from './useBlogRepoTree'
import {BlogPost} from '../types'
import {useLocalStorage} from 'usehooks-ts'

export const useBlogPost = (year?: string, month?: string, day?: string) => {
  const [stored, setStored] = useLocalStorage<BlogPost>(`blog-${year}-${month}-${day}.md`, new BlogPost())
  const [post, setPost] = useState<BlogPost>()
  const [loading, setLoading] = useState(true)
  const tree = useBlogRepoTree()

  const storedStringified = JSON.stringify(stored)

  useEffect(() => {
    const _stored = JSON.parse(storedStringified)

    if (post && post.title === _stored.title) return

    if (_stored.title) {
      setPost(_stored)
      setLoading(false)
      return
    }

    if (!tree.length) return

    const yearFolder = tree.find(item => item.name === year)
    if (!yearFolder) return

    const monthFolder = yearFolder.children.find(item => item.name === month)
    if (!monthFolder) return

    const _post = monthFolder.children.find(item => item.name === `${day}.md`)
    if (!_post) return

    setLoading(true)

    fetch(`https://raw.githubusercontent.com/vtrodd/blogposts/master/posts/${year}/${month}/${_post.name}`)
      .then(res => {
        res.text()
          .then(text => {
            const post = new BlogPost(text)
            setPost(post)
            setStored(post)
            setLoading(false)
          })
      })
  }, [post, tree, year, month, day, storedStringified, setStored])


  return [post, loading] as [BlogPost | undefined, boolean]
}