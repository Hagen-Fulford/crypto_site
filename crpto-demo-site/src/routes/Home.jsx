import React from 'react'
import CoinSearch from '../components/CoinSearch'

const Home = ({coins}) => { // accept coins below from app.js
    return (
    <div>
        <CoinSearch coins={coins}/> 
    </div>
    )
}

export default Home