import PropTypes from 'prop-types'
import React, { Component } from 'react'

export default class Fib extends Component {
 
  state = {
    seenIndexes: [],
    values: {},
    index: ''
  }

  componentDidMount() {
    this.fetchValues();
    this.fetchIndexes();
  }

  async fetchValues(){
    const values = await axios.get('api/values/current')
    this.setState({
      values: values.data
    })
  }

  async fetchIndexes() {
    const seenIndexes = await axios.get('api/values/all');
    this.setState({
      seenIndexes: seenIndexes.data
    })
  }

  renderSeenIndexes(){
    return this.state.seenIndexes.map(({number}) => {
      number.join(", ")
    })
  }

  renderValues() {
    const entries = [];
    
    for(let key in this.state.values) {
      entries.push(
        <div key={key}>
          for index {key} I calculated {this.state.values[key]}
        </div>
      )
    }
    return entries;
  }

  render() {
    return (
      <div>
        <form>
          <label htmlFor="">Inter your index: </label>
          <input type="text"
            value={this.state.index}
            onChange={(event) => }
          />
          <button>Submit</button>
        </form>
        <h3>Indexes I have seen</h3>
        {this.renderSeenIndexes()}
        <h3>Calculated values</h3>
        {this.renderValues()}
      </div>
    )
  }
}
