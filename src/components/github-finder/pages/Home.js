import React from 'react'
import Search from '../users/Search';
import Users from '../users/Users';
import Navbar from '../layout/Navbar';
import Alert from '../layout/Alert';


const Home = () => (    
  <div className="App">
       <Navbar />
       <div className="container">
       <Alert />
<Search/>
<Users/>
</div>
</div>
);
  


export default Home