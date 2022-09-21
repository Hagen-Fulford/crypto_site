import React from 'react'
import CoinSearch from '../components/CoinSearch'
import Trending from '../components/Trending'

const Home = ({coins}) => { // accept coins below from app.js
    return (
    <div>
        <CoinSearch coins={coins}/> 
        <Trending />
    </div>
    )
}

export default Home