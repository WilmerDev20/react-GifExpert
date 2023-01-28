

import React from 'react'

export const GifGridItem = ({ id, title , url }) => {
  return (
    <>
        <div className='card'>  
        <img id={id} src={url} alt={title}/>
        <p key={id}> {title} </p>
        </div>

    
    </>
  )
}
