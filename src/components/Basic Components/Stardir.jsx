import React from 'react'

const Stardir = (props) => {
  return (
    <>
      <div style={{width:props.width, height:props.height, display:"flex", justifyContent:props.side, paddingLeft:"2vw", paddingRight:"5vw"}}>
        <img className='tacstar' src="https://i.imgur.com/cHW9MDF.png" alt="" />
      </div>
    </>
  )
}

export default Stardir
