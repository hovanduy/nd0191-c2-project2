import { Link } from 'react-router-dom'

export default function Header() {

  return (
    <div className='header'>
      <div>
        <span className='link'><Link to='/home'>List Question</Link></span>
        <span className='link'><Link to='/add'>Create a new question</Link></span>
        <span className='link'><Link to='/leaderboard'>Leader Board</Link></span>
      </div>
    </div>
  )
}