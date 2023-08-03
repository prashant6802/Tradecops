import React from 'react'

const paragr = (props) => {
  return (
    <div className='parafull'>
      <div className='parahead'>
        <img className='paraimg' src={props.image} alt="" />
        <div className='paraheadtext'>{props.heading}</div>
      </div>
    </div>
  )
}

export default paragr
