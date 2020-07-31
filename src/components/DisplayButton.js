import React from 'react'
import PropTypes from 'prop-types'
import DisplayOptionsEnum from '../DisplayOptionEnum'

const DisplayButton = ({ icon, selected, onClick, option }) => (
  <span className={`button display-button ${selected ? 'is-info' : ''}`} onClick={() => onClick(option)}>
    <span className='icon is-large'>
      <i className={`fas fas-lg ${icon}`}/>
    </span>
  </span>
)

DisplayButton.propTypes = {
  icon: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  option: PropTypes.oneOf(
    DisplayOptionsEnum.SIDE_BY_SIDE,
    DisplayOptionsEnum.PREVIOUS,
    DisplayOptionsEnum.CURRENT,
    DisplayOptionsEnum.DIFF
  ).isRequired
}

export default DisplayButton
