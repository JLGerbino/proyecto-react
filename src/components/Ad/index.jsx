import React from 'react';
import './styles.css';

const Ad = ({children}) => {
  return (
    <div className='ad-container'>
        <div className='ad'>
          {children}
        </div>
    </div>
  )
}

export default Ad