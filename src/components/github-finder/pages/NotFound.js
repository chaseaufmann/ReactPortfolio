import React from 'react'

const NotFound = () => {
  return (
    <div className="App">
    <Navbar />
    <div className="container">
    <Alert />
    <div>
      <h1>Not Found</h1>
      <p className="lead">The page you are looking for does not exist</p>
    </div>
    </div>
    </div>
  )
}

export default NotFound
