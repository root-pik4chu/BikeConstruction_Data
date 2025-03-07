import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Experiment_Mouse_Cursor from '../Components/Experiment/Experiment_Mouse_Cursor'
import Experiment_Two from '../Components/Experiment/Experiment_Two'
import Page_One from '../Components/Pages/Page_One'
import AnimatedButton from '../Components/Pages/AnimatedButton'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className="bg-zinc-950 h-screen w-full">
      {/* <Experiment_Two /> */}
      {/* <Page_One /> */}

      <div className="w-full h-[100vh] bg-zinc-50 flex items-center justify-center gap-5"> <AnimatedButton color_One="bg-amber-400" color_two="bg-rose-600" /><AnimatedButton color_One="bg-zinc-200" color_two="bg-zinc-900" />
      
      </div>
     </div>
    </>
  )
}

export default App
