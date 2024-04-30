import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="card">
        <button className='bg-blue-500 font-black hover:bg-red-400' onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>

      </div>

      <div class="flex flex-row bg-red-500 ">
      <div class="basis-1/4">01</div>
      <div class="basis-1/4">02</div>
      <div class="basis-1/2">03</div>
      </div>
      <h1>Soumaadeep</h1>
    </>
  )
}

export default App
