import axios from 'axios'
import React, { useState, useEffect } from 'react'

const Search = () => {
  const [term, setTerm] = useState('');

  useEffect(() => {
    const search = async () => {
      await axios.get('https://en.wikipedia.org/w/api.php', {
        params: {
          action: 'query',
          list: 'search',
          origin: '*',
          format: 'json',
          srsearch: 'term',
        }
      })
    }
    search();
  }, [term])
  
  return (
    <div>
      <div className='ui form'>
        <div className='field'>
          <label>Enter Search term</label>
          <input className='input' type='text' value={term}
          onChange={e => setTerm(e.target.value)}/>
        </div>
      </div>
    </div>
  )
}

export default Search