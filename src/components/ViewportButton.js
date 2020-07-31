import React from 'react'
import PropTypes from 'prop-types'

const ViewportButton = ({ viewport, onClick }) => (
  <span className={`button ${viewport.selected ? 'is-info' : ''}`} onClick={() => onClick(viewport)}>
    {viewport.name}
  </span>
)

ViewportButton.propTypes = {
  viewport: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired
}

export default ViewportButton
