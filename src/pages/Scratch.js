import React from 'react'
import ScratchList from '../components/ScratchList'
import Logos from '../components/Logos'
function Scratch() {
  return (<>

<div className='scratchCont'>
        <div className='centered '>
             <h2 className="title-anim">  your Creativity </h2>
             <h2 className="title-anim">  ... Learning </h2>
             <h2 className="title-animB"> for all ages </h2>
        </div>
    </div> 
<div>
  {<ScratchList />}
</div>


    <div className='scratch uppercase flex'>
    {<Logos className="float-right"/>}
        <h3 className='uppercase'> scratch </h3>
        
    </div>



    <div className='scratchContext'>       
           <div className='vert-padding'>  <h3 > Scratch in Context</h3>
           <a href="https://docs.google.com/document/d/1D1kHjXvC5XPdpjJsYr7iwI1v6quYsQ0cNo8oxy_2KL8/edit?usp=sharing" target='blank'>
Scratch Training Program
           </a>
           </div>
        
        
    </div> 

    </>  )


}

export default Scratch