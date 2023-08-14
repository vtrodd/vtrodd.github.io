import {useEffect, useState} from 'react'
import {useBlogRepoTree} from './useBlogRepoTree'
import {BlogPost} from '../types'
import {useLocalStorage} from 'usehooks-ts'

export const useBlogPost = (year?: string, month?: string, day?: string) => {
  const [stored, setStored] = useLocalStorage<BlogPost>(`blog-${year}-${month}-${day}`, new BlogPost())
  const [post, setPost] = useState<BlogPost>()
  const [loading, setLoading] = useState(true)
  const tree = useBlogRepoTree()

  useEffect(() => {
    if (stored) {
      setPost(stored)
      setLoading(false)
    }
    
    if (!tree.length) return

    const yearFolder = tree.find(item => item.name === year)
    if (!yearFolder) return

    const monthFolder = yearFolder.children.find(item => item.name === month)
    if (!monthFolder) return

    const post = monthFolder.children.find(item => item.name === day)
    if (!post) return

    setLoading(true)

    fetch(`https://raw.githubusercontent.com/vtrodd/blogposts/master/posts/${year}/${month}/${post.name}`)
      .then(res => {
        res.text()
          .then(text => {
            console.log(text)
            const post = new BlogPost(text)
            setPost(post)
            setStored(post)
            setLoading(false)
          })
      })
  }, [tree, year, month, day])


  return [post, loading] as [BlogPost | undefined, boolean]
}