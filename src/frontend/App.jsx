import { useState } from 'react'
import heroImg from '../assets/hero.png'
import reactLogo from '../assets/react.svg'
import viteLogo from '../assets/vite.svg'
import './index.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <div className="hero">
          <marketsButton />
          <newsButton />
          <watchListButton />
        </div>
        <div>
          <searchBar />
        </div>
        <div>
          <indexes />
          <materials />
          <currencies />
        </div>
        <div>
          <charts />
        </div>
      </section>
    </>
  )
}

export default App
