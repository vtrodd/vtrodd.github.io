import {Route, Routes} from "react-router-dom"
import {GitTreeNode, useBlogRepoTree} from "../../../hooks/useBlogRepoTree"

export const BlogContent = () => {
  return (
    <Routes>
      <Route path="blog" element={<BlogContentInner/>}/>
    </Routes>
  )
}

const BlogContentInner = () => {
  const tree = useBlogRepoTree()
  console.log(tree)
  if (!tree) return <></>


  return (
    <div className="blog-content">
      <div className="blog-content__inner">
        <div className="blog-content__inner__content">
          <div className="blog-content__inner__content__title">
            <h1>Blog</h1>
          </div>
          <div className="blog-content__inner__content__posts">
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
      <li>
        <h2>{treeNode.name}</h2>
        <ul>
          {treeNode.children.map(child => convertTreeNodeToListElement(child))}
        </ul>
      </li>
    )
  } else {
    return (
      <li>
        <a href={treeNode.meta.url}>{treeNode.name}</a>
      </li>
    )
  }
}