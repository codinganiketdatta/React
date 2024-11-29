import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
<main className='bg-zinc-500 h-screen w-full'>
  <h1 className='text-5xl text-orange-500 font-bold'>Zentry</h1>
</main>
  )
}

export default App
