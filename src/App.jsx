import { useState } from 'react'
import './App.css'
import ApexChart from './component/chart'
import Regularchart from './component/Regularchart'

function App() {
  const [randomnum,setRandomnum] =useState( Math.floor(Math.random() * 60))

  return (
    <div>

      <div className='center'>
        <h1>you aginst the market</h1>
    </div >
        <ApexChart randomnum={randomnum} setRandomnum={setRandomnum} />
        
    </div>
  )
}

export default App










