import React, { useState } from 'react'

import './index.css'

const africanCountries = [
  {
    name: 'Malawi',
    population: 2.5
  },
  {
    name: 'South Africa',
    population: 5.1
  },
  {
    name: 'Namibia',
    population: 3.4
  },
  {
    name: 'Tanzania',
    population: 3.9
  },
  {
    name: 'Zambia',
    population: 2.2
  }
]

const App = () => {
  const [countryIndex, setCountryIndex] = useState(0)
  const [ activeCountry, setActiveCountry ] = useState(africanCountries[countryIndex])

  const addIndex = () => {
    setCountryIndex(countryIndex + 1)
  }
  return (
    <div className='container'>
      <div className='row'>
        <div className='column'>
        <div className='cta'>
              <button className='ui button secondary'>previous country</button>
              <button className="ui button primary">next country</button>
            </div>
            <p>Country: &nbsp; {activeCountry.name}</p>
            <p>Population: &nbsp; {activeCountry.population}</p>           
        </div>
      </div>
    </div>
  )
}

export default App