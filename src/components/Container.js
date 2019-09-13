import React, {Component} from 'react';
import ApproveButton from './ApproveButton'
import DisplayButtons from './DisplayButtons'
import ViewportButtons from './ViewportButtons'

import DisplayOptionsEnum from '../DisplayOptionEnum'
import DiffContainer from './DiffContainer'

import './Container.scss'

import Empty from "./Empty"

const axios = require('axios')

class Container extends Component {
  constructor(props) {
    super(props)

    const failedTests = props.failedTests

    this.state = {
      failedTests: [
        ...this.setSelectedViewports(failedTests).map(a => {
          return {
            ...a,
            display: DisplayOptionsEnum.DIFF
          }
        }),
      ]
    }
  }

  setSelectedViewports = failedTests =>
    failedTests.map(failedTest => {
      failedTest.viewports[0].selected = true
      return failedTest
    })

  setSelectedViewport = (failedTest, viewport) => {
    const viewports = [...failedTest.viewports].map(vp => {
      return {
        ...vp,
        selected: vp.name === viewport.name
      }
    })

    const failedTests = [...this.state.failedTests]
    const index = failedTests.indexOf(failedTest)
    failedTests.splice(index, 1, {
      ...failedTest,
      viewports
    });

    this.setState({
      failedTests
    })
  }

  changeDisplayOption = (failedTest, selectedOption) => {
    const failedTests = [...this.state.failedTests]
    const index = failedTests.indexOf(failedTest)
    failedTests.splice(index, 1, {
      ...failedTest,
      display: selectedOption
    });

    this.setState({
      failedTests
    })
  }

  approve = (failedTest, viewport) => {
    axios.post(`/approve?test_name=${failedTest.name}&viewport=${viewport.name}`)
      .then(() => {
        const failedTests = [...this.state.failedTests]
        if (failedTest.viewports.length === 1) {
          this.setState({
            failedTests: failedTests.filter(a => a.name !== failedTest.name)
          })
        } else {
          const index = failedTests.indexOf(failedTest)
          const viewports = [...failedTest.viewports]
          failedTests.splice(index, 1, {
            ...failedTest,
            viewports: viewports
              .filter(a => a.name !== viewport.name)
              .map((a, i) => {
                return {
                  ...a,
                  selected: i === 0
                }
              })
          });
          this.setState({
            failedTests
          })
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  renderFailedTest = failedTest => {
    const selectedViewport = failedTest.viewports.find(a => a.selected)
    return (
      <section className='is-small'>
        <div className='card'>
          <nav className='navbar'>
            <div className='navbar-start'>
              <span className='navbar-item'>
                <span className='title is-5'>{failedTest.name}</span>
              </span>
            </div>
            <div className='navbar-end'>
              <span className='navbar-item'>
                <ApproveButton onClick={() => this.approve(failedTest, selectedViewport)}/>
              </span>
              <span className='navbar-item'>
                <DisplayButtons
                  selectedOption={failedTest.display}
                  onClick={selectedOption => this.changeDisplayOption(failedTest, selectedOption)}
                />
              </span>
              <span className='navbar-item'>
                <ViewportButtons viewports={failedTest.viewports}
                                 onClick={(vp) => this.setSelectedViewport(failedTest, vp)}/>
              </span>
            </div>
          </nav>

          <div className='card-content'>
            <DiffContainer testName={failedTest.name} viewport={selectedViewport} displayOption={failedTest.display}/>
          </div>
        </div>
      </section>
    )
  }

  render() {
    return (
      <div>
        {
          this.state.failedTests && this.state.failedTests.length > 0
            ? this.state.failedTests.map(this.renderFailedTest)
            : <Empty/>
        }
      </div>
    )
  }
}

export default Container;