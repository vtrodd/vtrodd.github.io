import {Link, Route, Routes} from 'react-router-dom'
import {GitTreeNode, useBlogRepoTree} from '../../../hooks/useBlogRepoTree'
import {BlogPost} from './blogpost/BlogPost'
import {BlogListItem} from './bloglistitem/BlogListItem'

import './BlogContent.scss'

export const BlogContent = () => {
  return (
    <Routes>
      <Route path='blog' element={<BlogContentInner />} />
      <Route path='blog/:year/:month/:day' element={<BlogPost />} />
    </Routes>
  )
}

const BlogContentInner = () => {
  const tree = useBlogRepoTree()
  if (!tree) return <></>


  return (
    <div id='blog-content'>
      <ul>
        {tree.map(convertTreeNodeToListElement)}
      </ul>
    </div>
  )
}

const convertTreeNodeToListElement = (treeNode: GitTreeNode): React.ReactNode => {
  // first we need to sort them by most recent year, month, day
  treeNode.children.sort((a, b) => (a.name > b.name) ? -1 : ((b.name > a.name) ? 1 : 0))

  if (treeNode.meta.type === 'tree') {
    return treeNode.children.map(child => convertTreeNodeToListElement(child))
  } else {
    return (
      <li key={treeNode.meta.path}>
        <BlogListItem treeNode={treeNode} />
      </li>
    )
  }
}