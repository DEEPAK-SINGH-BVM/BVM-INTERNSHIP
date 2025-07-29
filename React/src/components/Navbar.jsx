import React from 'react'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
        <Link to='/'>Home</Link>
        <Link to='/login'>login</Link>
        <Link to='/signup'>signup</Link>
        <Link to='/details'>details</Link>
    </div>
  )
}

export default Navbar