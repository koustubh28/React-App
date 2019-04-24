import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: true
      }
    }
    
  render() {
    return this.state.isLoggedIn && <div>Welcome Koustubh</div>
        // this.state.isLoggedIn ?
        // <div>Welcome Koustubh</div> :
        // <div>Welcome Guest</div>

    // let message
    // if (this.state.isLoggedIn) {
    //     message = <div>Welcome Koustubh</div>
    // } else {
    //     message = <div>Welcome Guest</div>
    // }

    // return <div>{message}</div>

    // return (
    //   <div>
    //       <div>Welcome Koustubh</div>
    //       <div>Welcome Guest</div>
    //   </div>
    // )
  }
}

export default UserGreeting
