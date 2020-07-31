import React from 'react'
import PropTypes from 'prop-types'
import TwentyTwenty from 'react-twentytwenty'
import DisplayOptionsEnum from '../DisplayOptionEnum'
import './DiffContainer.scss'

const renderDiffContainer = (testName, viewport, displayOption) => {
  const testImage = `/test_image?test_name=${testName}&viewport=${viewport.name}`
  const referenceImage = `/reference_image?test_name=${testName}&viewport=${viewport.name}`
  const diffImage = `/diff_image?test_name=${testName}&viewport=${viewport.name}`
  switch (displayOption) {
    case DisplayOptionsEnum.SIDE_BY_SIDE:
      return (
        <TwentyTwenty
          left={<img src={referenceImage}/>}
          right={<img src={testImage}/>}
          slider={<div className="slider" />}
        />
      )
    case DisplayOptionsEnum.PREVIOUS:
      return <img src={referenceImage}/>
    case DisplayOptionsEnum.CURRENT:
      return <img src={testImage}/>
    case DisplayOptionsEnum.DIFF:
      return <img src={diffImage}/>
  }
}

const DiffContainer = ({ viewport, displayOption, testName }) => (
  <center className='diff-container'>
    {
      renderDiffContainer(testName, viewport, displayOption)
    }
  </center>
)

DiffContainer.propTypes = {
  viewport: PropTypes.string.isRequired,
  displayOption: PropTypes.oneOf(
    DisplayOptionsEnum.SIDE_BY_SIDE,
    DisplayOptionsEnum.PREVIOUS,
    DisplayOptionsEnum.CURRENT,
    DisplayOptionsEnum.DIFF
  ).isRequired,
  testName: PropTypes.string.isRequired
}

export default DiffContainer
