import './App.css'
import { UseCallback } from './components/UseCallback'
import { UseMemo } from './components/UseMemo'
import { UseRef } from './components/UseRef'

function App() {
  return (
    <>
      <div>
        <h1>React Hooks Usage</h1>
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
