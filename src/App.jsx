import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar.jsx'
import HeroSection from './components/HeroSection.jsx'
import FeatureSection from './components/FeatureSection.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <NavBar/>
      <div className='max-w-7xl mx-auto pt-20 px-6'>
        <HeroSection/>
      </div>
      <FeatureSection/>
    </div>
  ) 
}
export default App