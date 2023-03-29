import PropTypes from 'prop-types';

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


GifGridItem.propTypes={
  title:PropTypes.string.isRequired,
  url:PropTypes.string.isRequired,
}