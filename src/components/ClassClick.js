import React, { Component } from 'react'

class ClassClick extends Component {
    classHandler() {
        console.log('Class Button clicked')
    }
    
  render() {
    return (
      <div>
          <button onClick={this.classHandler}>Click me</button>
      </div>
    )
  }
}

export default ClassClick
