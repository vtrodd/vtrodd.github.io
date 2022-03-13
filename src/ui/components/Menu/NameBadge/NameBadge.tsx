import { Link } from 'react-router-dom'
import './NameBadge.scss'

export const NameBadge = () => {
  return (
    <Link to='/' className='name-badge'>
      <span className='tap' />
      <span className='water' />
      <div className='tags'>
        <h2>Vic Trodd</h2>
        <h3>Web & Software Developer</h3>
      </div>
    </Link>
  )
}