import React, { useState, useEffect } from 'react'
import { Route, Routes, Switch, Link } from 'react-router-dom'
import Home from './Home'
import Contect from './Contect'
import Profile from './Profile'
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Viewpost from './Viewpost'
import { auth } from './firebase'

function App() {
  const [user, setUser] = useState('raj');
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser);
        

      } else { 
        setUser(null);
      }
      
    })

    return () => {
      // perform some cleanup actions
      unsubscribe();
    }
  }, []);
  return (

    <>
      {/* <Home></Home> */}


      <Routes>  
         <Route path='/' element={<Home></Home>}></Route>
         <Route path='/instagram' element={<Home></Home>}></Route>
        <Route path='/profile' element={<Profile></Profile>}> </Route>
        <Route path='/viewpost' element={<Viewpost></Viewpost>}></Route>
     
        {/* <Route path='/instagram' element={<Home></Home>}></Route> */}
        
      </Routes>
      
      {
        user?(
          
          <div className="router__link">
         <div className="home">
            <Link to='/'><HomeIcon></HomeIcon> </Link>
  
          </div>
          
          <div className="profile">
            <Link to='/profile'> <AccountCircleIcon></AccountCircleIcon> </Link></div>
            
        </div>
        ):(
          <div className=""></div>
        )
      }
   

    </>

  )


}

export default App;




