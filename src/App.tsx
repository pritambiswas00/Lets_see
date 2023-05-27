import { useState } from 'react'
import Update from '@/components/update'
import logoVite from './assets/logo-vite.svg'
import logoElectron from './assets/logo-electron.svg';
import { Page } from "react-onsenui"
import './App.scss'
import MainApp from './container/MainApp/MainApp';


// Usage: Call the function to get the root directory path

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <div className='App'>
      <MainApp/>
    </div>
  )
}

export default App
