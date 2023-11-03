/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, useState } from 'react'

const ModalContext = createContext()

function ModalContextProvider({ children }) {
  const [isOpenModal, setIsOpenModal] = useState(false)

  return (
    <ModalContext.Provider value={{ isOpenModal, setIsOpenModal }}>
      {children}
    </ModalContext.Provider>
  )
}

export { ModalContextProvider, ModalContext }
