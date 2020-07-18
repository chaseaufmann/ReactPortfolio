import React from 'react';
import Navbar from '../layout/Navbar';
import Alert from '../layout/Alert';


export const About = () => {
  return (
    <div className="App">
       <Navbar />
       <div className="container">
       <Alert />
      <h1>About this App</h1>
      <p>App to search Github users</p>
      </div>
    </div>
  )
}

export default About