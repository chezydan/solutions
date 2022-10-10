import React from 'react'
import {Link} from 'react-router-dom'



function Navbar() {
  return (    <div className='nav tahoma'>
<Link  className='link' to="/" > Home </Link>
<Link className='link' to="/spreadsheets" > Spreadsheets </Link>
<Link  className='link' to="/scratch" > Scratch</Link>

  </div>  )
}

export default Navbar