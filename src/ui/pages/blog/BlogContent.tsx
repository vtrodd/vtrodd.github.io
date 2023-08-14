import {Link, Route, Routes} from 'react-router-dom'
import {GitTreeNode, useBlogRepoTree} from '../../../hooks/useBlogRepoTree'
import {BlogPost} from '../../components/blogpost/BlogPost'

export const BlogContent = () => {
  return (
    <Routes>
      <Route path='blog' element={<BlogContentInner/>}/>
      <Route path='blog/:year/:month/:day' element={<BlogPost />}/>
    </Routes>
  )
}

const BlogContentInner = () => {
  const tree = useBlogRepoTree()
  if (!tree) return <></>


  return (
    <div className='blog-content'>
      <div className='blog-content__inner'>
        <div className='blog-content__inner__content'>
          <div className='blog-content__inner__content__title'>
            <h1>Blog</h1>
          </div>
          <div className='blog-content__inner__content__posts'>
            <ul>
              {tree.map(convertTreeNodeToListElement)}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

const convertTreeNodeToListElement = (treeNode: GitTreeNode) => {
  if (treeNode.meta.type === 'tree') {
    return (
      <li key={treeNode.meta.path}>
        <h2>{treeNode.name}</h2>
        <ul>
          {treeNode.children.map(child => convertTreeNodeToListElement(child))}
        </ul>
      </li>
    )
  } else {
    return (
      <li key={treeNode.meta.path}>
        <Link to={treeNode.meta.path}>{treeNode.name}</Link>
      </li>
    )
  }
}