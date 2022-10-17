import React from 'react'
import {helpers} from '../data/helpers.js'
import {FaLink} from 'react-icons/fa'

function Fordev() {
    const items =helpers;

  return (<div className='fordev'>


    <div className='fordev-container'>
         
        {items.map((itm)=>  {
        let topics=itm.topics.split(",")

            return(<div className='fordev-cart'>
               <div className='dev-cart-title'> <h3>{itm.main}</h3></div>
              <a href={itm.url} target='blank'>{<FaLink/>} </a>
             <p>{itm.desc}</p>   
            <ul>
           {topics.map( (t)=><li>{t}</li>)}</ul>        
             
           
            </div>)
           
        } )  }
<div>

</div>

    </div>

    <div  className='spread'><h3> for dev subtitle</h3></div>

    </div>
  )
}

export default Fordev