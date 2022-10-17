import React from 'react'
import Logos from './Logos'
import {Link} from 'react-router-dom'



function Navbar() {
  return (    <div className='nav tahoma'>
 <div className='links'   >
<Link  className='lnk' to="/" > Home </Link>
<Link className='lnk' to="/spreadsheets" > Spreadsheets </Link>
<Link  className='lnk' to="/scratch" > Scratch</Link>
<Link  className='lnk' to="/fordev" > Fordev</Link>


</div>

<div className='nav-logo '>
{<Logos  className='float-right'/>} 
</div>


  </div>  )
}

export default Navbar