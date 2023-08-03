import React from 'react'

const Largeheading = (props) => {
  return (
    <div className='paragrtitlebot' style={{fontSize:props.fsize}}>
        {props.bot}
    </div>
  )
}

export default Largeheading
