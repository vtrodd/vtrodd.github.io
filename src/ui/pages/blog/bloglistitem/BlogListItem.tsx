import {Link} from 'react-router-dom'
import {useBlogPost} from '../../../../hooks/useBlogPost'
import {GitTreeNode} from '../../../../hooks/useBlogRepoTree'
import './BlogListItem.scss'

export const BlogListItem = ({treeNode}: {treeNode: GitTreeNode}) => {
  const [year, month, day] = treeNode.meta.path.split('/')
  const [blogpost, loading] = useBlogPost(year, month, day.slice(0, -3))
  const loaded = blogpost && !loading;

  const date = new Date(treeNode.meta.path.slice(0, -3))

  return (
    <Link to={treeNode.meta.path.slice(0, -3)} className='blog-list-item'>
      <div>
        <h3>{loaded ? blogpost?.title : 'Loading...'}</h3>
        <p><i>{days[date.getDay()]}, {ordinal(date.getDate())} {months[date.getMonth()]} {date.getFullYear()}</i></p>
      </div>
    </Link>
  )
}

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
const ordinal = (n: number) => {
  const s = ['th', 'st', 'nd', 'rd']
  const v = n % 100
  return n + (s[(v - 20) % 10] || s[v] || s[0])
}