import React, { Component } from 'react';
import './App.css';
//import Greet from './components/Greet'
//import Welcome from './components/Welcome'
//import Message from './components/Message'
//import Counter from './components/Counter'
//import FunctionClick from './components/FunctionClick'
//import ClassClick from './components/ClassClick'
//import EventBind from './components/EventBind'
//import ParentComponent from './components/ParentComponent'
//import UserGreeting from './components/UserGreeting'
//import NameList from './components/NameList'
//import Stylesheet from './components/Stylesheet'
//import Inline from './components/Inline'
import './appStyles.css'
import styles from './components/appStyles.module.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className='error'>Error</h1>
        <h1 className={styles.success}>Success</h1>
        {/* <Inline /> */}
        {/* <Stylesheet primary={true} /> */}
        {/* <NameList /> */}
        {/* <UserGreeting /> */}
        {/* <ParentComponent /> */}
        {/* <FunctionClick />
        <ClassClick />
        <EventBind /> */}
        {/* <Counter /> */}
        {/* <Message /> */}
        {/* <Greet name="Koustubh" heroName="Batman" />
        <Greet name="Lovkesh" heroName="Superman" />
        <Greet name="Deepak" heroName="Captain America" /> 
        <br />
        <Welcome name="Koshi Moshi" /> */}
      </div>
    );
  }
}

export default App;
