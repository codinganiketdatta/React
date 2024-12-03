import { useState } from 'react'
import './App.css'
import Hero from './components/Hero'
import Nav from './components/Nav'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Education from './components/Education'
import Header from './components/Contact'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
import Contact from './components/Contact'

function App() {
  let [count, setCount] = useState(0)
  return (
<main className='relative min-h-screen w-screen overflow-x-hidden'>
<Nav />
<Hero />
<About />
<Experience/>
<Projects />
<Education />
<Testimonials />
<Footer />
<Contact/>
</main>
  )
}

export default App
