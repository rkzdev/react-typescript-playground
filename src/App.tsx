import './App.css'
import { UseCallback } from './components/UseCallback'
import { UseLayoutEffect } from './components/UseLayoutEffect'
import { UseMemo } from './components/UseMemo'
import { UseReducer } from './components/UseReducer'
import { UseRef } from './components/UseRef'

function App() {
  return (
    <>
      <div>
        <h1>React Hooks Usage</h1>
        <UseLayoutEffect />
        <hr />
        <UseReducer />
        <hr />
        <UseRef />
        <hr />
        <UseMemo />
        <hr />
        <UseCallback />
      </div>
    </>
  )
}

export default App
