import React from 'react'
import './Empty.scss'

const Empty = () => {
  return (
    <div className='empty'>
      <span className='button is-success is-rounded is-large'>
        <span className='icon is-large'>
          <i className='fas fas-lg fa-check'/>
        </span>
      </span>
      <span>
        All images have been approved.
      </span>
    </div>
  )
}

export default Empty