// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header';
import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    
      <Header></Header>
      <Outlet />
    </>
  )
}

export default App
