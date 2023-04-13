import { createContext } from 'react'

const GlobalContext = createContext()

const Context = ({ children }) => {
    const nameAdmin = 'santiago ruiz'

  return (
    <GlobalContext.Provider value={nameAdmin}>
        {children}
    </GlobalContext.Provider>    
  )
}

export {Context, GlobalContext}