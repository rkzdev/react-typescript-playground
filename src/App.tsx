import './App.css'
import { UseCallback } from './components/UseCallback'
import { UseMemo } from './components/UseMemo'

function App() {
  return (
    <>
      <div>
        <h1>React Hooks Usage</h1>
        <UseCallback />

        <hr />
        <UseMemo />
      </div>
    </>
  )
}

export default App
