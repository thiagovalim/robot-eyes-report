import React from 'react'
import PropTypes from 'prop-types'
import ViewportButton from './ViewportButton'

const renderViewportButton = (viewport, onClick) => (
  <ViewportButton viewport={viewport} onClick={onClick}/>
)

const ViewportButtons = ({ viewports, onClick }) => (
  <div className='buttons has-addons viewport-buttons'>
    {
      viewports.map(vp => renderViewportButton(vp, onClick))
    }
  </div>
)

ViewportButtons.propTypes = {
  viewports: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired
}

export default ViewportButtons
