import {useEffect, useState} from 'react'
import token from '../token'
import {useSessionStorage} from 'usehooks-ts'

type GitContentsResponse = {
  name: string
  path: string
  _links: {
    git: string
  }
}[]

export const useBlogRepoContents = () => {
  const [stored, setStored] = useSessionStorage<GitContentsResponse>('blogrepocontents', [])
  const [contents, setContents] = useState<GitContentsResponse>([])

  useEffect(() => {
    if (stored.length) {
      setContents(stored)
      return
    }

    fetch('https://api.github.com/repos/vtrodd/blogposts/contents', {
      // headers: {
      //   'Authorization': `token ${token}`
      // }
    })
      .then(res => {
        res.json()
          .then(json => {
            console.log(json)
            setStored(json)
            setContents(json)
          })
      })
  }, [setStored, stored])

  return contents
}