import PropTypes from 'prop-types'
import React, { Component } from 'react'

export default class Fib extends Component {
 
  state = {
    seenIndexes: [],
    values: {},
    index: ''
  }

  componentDidMount() {
    
  }

  render() {
    return (
      <div>Fib</div>
    )
  }
}
