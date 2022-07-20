import React, { useState } from 'react'
import classnames from 'classnames'

import './index.css'

const africanCountries = [ 
  {
    name: 'South Africa',
    population: 51.3,
    motto: 'diverse people unite',
    code: 'za'
  },
  {
    name: 'Malawi',
    population: 19.1,
    motto: 'Unity and Freedom',
    code: 'mw'
  },
  {
    name: 'Namibia',
    population: 2.5,
    motto: 'Unity, Liberty, Justice',
    code: 'na'
  },
  {
    name: 'Tanzania',
    population: 59.7,
    motto: 'Freedom and Unity',
    code: 'tz'
  },
  {
    name: 'Zambia',
    population: 18.3,
    motto: 'One Zambia, One Nation',
    code: 'zm'
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
          <h1>Five African Countries</h1>          
          <div className='description'>
            <span className={classnames('flag-icon', `flag-icon-${activeCountry.code}`)}/>
            <p><strong>Country:</strong> &nbsp; {activeCountry.name}</p>
            <p><strong>Population:</strong> &nbsp; {activeCountry.population}m</p>
            <p><strong>Motto:</strong> &nbsp; {activeCountry.motto}</p>
          </div> 
          <div className='cta'>
            <button
              className='ui button secondary'
              onClick={prevCountry}
            >
              Prev Country
            </button>
            <button
              className="ui button primary"
              onClick={nextCountry}
            >
              Next Country
            </button>
          </div>         
        </div>
      </div>
    </div>
  )
}

export default App