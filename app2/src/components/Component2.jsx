import React from 'react'
import "./styles/comp2.scss"
const Component2 = ({ title, desc, image }) => {
  return (
    <div className='card'>
      <div>
        <img src={image} />
      </div>
      <h1>{title}</h1>
      <p>{desc}</p>
    </div>
  )
}

export default Component2
