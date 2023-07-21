import React from 'react'

const Gallery = (props) => {
  return (
    <div className='col-6 col-md-4 col-lg-3 mt-1 col-sm-6 text-center border '>
    <h1> {props.name} </h1>
    <p> Class : {props.class}  </p>
    <p> Roll No : {props.roll}  </p>
    </div>
  )
}

export default Gallery
