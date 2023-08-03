import React from 'react'

const Text = (props) => {
  return (
    <div className='paratext' style={{fontSize:props.fsize, fontWeight:props.fwt}}>
        {props.text}
    </div>
  )
}

export default Text
