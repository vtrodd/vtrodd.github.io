import {useEffect, useState} from 'react'
import token from '../token'

type GitContentsResponse = {
  _links: {
    git: string
  }
}[]

export const useBlogRepoContents = () => {
  const [contents, setContents] = useState<GitContentsResponse>([])

  useEffect(() => {
    fetch('https://api.github.com/repos/vtrodd/blogposts/contents', {
      headers: {
        'Authorization': `token ${token}`
      }
    })
      .then(res => {
        res.json()
          .then(json => {
            setContents(json)
          })
      })
  }, [])

  return contents
}