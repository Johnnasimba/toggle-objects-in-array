import React, { useState } from 'react'

import './index.css'

const africanCountries = [ 
  {
    name: 'South Africa',
    population: 51.3,
    motto: 'diverse people unite'
  },
  {
    name: 'Malawi',
    population: 19.1,
    motto: 'Unity and Freedom'
  },
  {
    name: 'Namibia',
    population: 2.5,
    motto: 'Unity, Liberty, Justice'
  },
  {
    name: 'Tanzania',
    population: 59.7,
    motto: 'Freedom and Unity'
  },
  {
    name: 'Zambia',
    population: 18.3,
    motto: 'One Zambia, One Nation'
  }
]

const App = () => {
  const [countryIndex, setCountryIndex] = useState(0)

  const nextCountry = () => {
    let index = countryIndex
    index++
    if (index >= africanCountries.length) {
      index = 0
    }
    setCountryIndex(index)
  }
  const prevCountry = () => {
    let index = countryIndex
    index--
    if (index < 0) {
      index = africanCountries.length - 1
    }
    setCountryIndex(index)
  }

  let activeCountry = africanCountries[countryIndex]
  return (
    <div className='container'>
      <div className='row'>
        <div className='column'>
          <div className='cta'>
            <button
              className='ui button secondary'
              onClick={prevCountry}
            >
              previous country
            </button>
            <button
              className="ui button primary"
              onClick={nextCountry}
            >
              next country
            </button>
          </div>
          <div>
            <p><strong>Country:</strong> &nbsp; {activeCountry.name}</p>
            <p><strong>Population:</strong> &nbsp; {activeCountry.population}m</p>
            <p><strong>Motto:</strong> &nbsp; {activeCountry.motto}</p>
          </div>          
        </div>
      </div>
    </div>
  )
}

export default App