import React from 'react'

const CoinSearch = ({coins}) => {
    return (
    <div>
        <div>
            <h1>Search Crypto</h1>
            <form type='text' placeholder='Search a coin'></form>
        </div>
        <table>
            <thead>
                {/* setting up table headings */}
                <tr>
                    <th></th>
                    <th>#</th>
                    <th>Coin</th>
                    <th></th>
                    <th>Price</th>
                    <th>24hr</th>
                    <th>24hr Volume</th>
                    <th>Mkt</th>
                    <th>Last 7 Days</th>
                </tr>
            </thead>
            {/* map through and display all of the coins  */}
            <tbody>
                {coins.map((coin) =>{
                    <tr>
                        <td><AiOutlineStar/></td>
                        <td>{coin.market_cap_rank}</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>

                })}

            </tbody>

        </table>



    </div>
    )
}

export default CoinSearch;