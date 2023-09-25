import { createContext } from 'react'

export interface CurrentUser {
  email: string
}

export const CurrentUserContext = createContext<CurrentUser | null>(null)
