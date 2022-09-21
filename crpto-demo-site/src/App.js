import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import { ThemeProvider } from './context/ThemeContext';
import Home from './routes/Home';
import Signin from './routes/Signin';
import Signup from  './routes/Signup';
import Account from './routes/Account';
import Axios from 'axios';
import axios from 'axios';

function App(){ 
  const [coins, setCoins] = useState([])

  const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true'

useEffect (() => {
  axios.get{url}.then((response) => {
    setCoins(response.data)
    console.log(response.data)
  })
}, [url]) // dont forget dependancy array to prevent it from running and running 


return ( 
  <ThemeProvider>
    <Navbar/>
    <Routes>
      <Route path ='/' element ={<Home />} />
      <Route path ='/signin' element ={<Signin />} />
      <Route path ='/signup' element ={<Signup />} />
      <Route path ='/account' element ={<Account />} />
      
    </Routes>
  </ThemeProvider>
  );
}

export default App;
