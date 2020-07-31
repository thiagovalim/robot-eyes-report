import React from 'react'
import PropTypes from 'prop-types'

const ApproveButton = ({ onClick }) => (
  <span className='button is-success' onClick={onClick}>
    <span className='icon is-large'>
      <i className='fas fas-lg fa-check'/>
    </span>
  </span>
)

ApproveButton.propTypes = {
  onClick: PropTypes.func.isRequired
}

export default ApproveButton
