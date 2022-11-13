import React from 'react'
import {projects} from '../data/scratch-data'

function ScratchList() {
  return (
    <div className='scratch-projects'>
<h3> projects  and simple projects </h3>

<div className='projects-container'>



    { projects.map(  (proj) =>{
        return(    <div className='project-cart' >
            <h5 className=''>{proj.name}</h5>
            <a href={proj.url} target='blank' className='link'> link</a>
            <p> {proj.topics}</p>
        </div>
    )
    }


    )
}
    </div>
  </div>)
}

export default ScratchList