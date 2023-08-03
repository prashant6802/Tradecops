import React from 'react'

const Textwithbar = (props) => {

  return (
    <div style={{width:"98vw", textAlign:"center", marginBottom:"5vw", display:"flex", justifyContent:"center"}}>
      <div className='textwithbar' style={{ fontSize:props.fsize, width:"90%", textAlign:"center", borderTop:"0.1vw solid grey"}}>
        {props.text}
      </div>
    </div>
  )
}

export default Textwithbar
