import { useState } from 'react'
import './App.css'
import BasicButtons from './lab/BasicButtons'
import ColorSwitches from './lab/ColorSwitches'
import BasicTable from './lab/BasicTable'
import TestMUI from './components/TestMUI'

function App() {

  return (
    <>
      <BasicButtons/>
      <ColorSwitches/>
      <BasicTable/>
      <TestMUI/>
    </>
  )
}

export default App