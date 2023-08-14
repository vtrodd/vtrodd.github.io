import {useEffect, useState} from 'react'
import {useBlogRepoContents} from './useBlogRepoContents'
import token from '../token'
import {useSessionStorage} from 'usehooks-ts'

type GitTreeResponse = {
  path: string
  mode: string
  type: string
  sha: string
  size: number
  url: string
}

export type GitTreeNode = {
  name: string
  children: GitTreeNode[]
  meta: GitTreeResponse
}


export const useBlogRepoTree = () => {
  const contents = useBlogRepoContents()
  const [stored, setStored] = useSessionStorage<GitTreeNode[]>('blogrepotree', [])
  const [tree, setTree] = useState<GitTreeNode[]>([])

  useEffect(() => {
    if (!contents.length) return

    if (stored.length) {
      setTree(stored)
      return
    }

    fetch(contents[0]._links.git + '?recursive=1', {
      headers: {
        'Authorization': `token ${token}`
      }
    })
      .then(res => {
        res.json()
          .then(json => {
            const tree = json.tree as GitTreeResponse[]

            // sort the tree by path length to get the highest level first
            tree.sort((a, b) => a.path.length - b.path.length)

            // remove the first item, which is the root folder
            tree.shift()

            // turn array into a nested array
            const nestedTree = [] as GitTreeNode[]
            tree.forEach(item => {
              const path = item.path.split('/')
              const name = path.pop()!
              let current = nestedTree
              path.forEach((folder, i) => {
                const existing = current.find(item => item.name === folder)
                if (existing) {
                  current = existing.children
                }
                else {
                  const newFolder = {
                    name: folder,
                    children: [],
                    meta: item
                  }
                  current.push(newFolder)
                  current = newFolder.children
                }
              })
              current.push({name, children: [], meta: item})
            })

            setTree(nestedTree)
            setStored(nestedTree)
          })
      })
  }, [contents, setStored, stored])

  return tree
}