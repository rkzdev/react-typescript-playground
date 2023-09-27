import { UseCallback } from '../components/UseCallback'
import { UseMemo } from '../components/UseMemo'
import { UseRef } from '../components/UseRef'
import { UseReducer } from '../components/UseReducer'
import { UseLayoutEffect } from '../components/UseLayoutEffect'

export const HooksPage = () => {
  return (
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
  )
}
