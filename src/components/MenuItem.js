import React from 'react'

function MenuItem({image, name, price}) {
  return (
    <div className='menuItem'>
        <div style={{backgroundImage:`url(${image})`}}></div>
        <h1>{name}</h1>
        <h1>₹{price}</h1>
    </div>
  )
}

export default MenuItem