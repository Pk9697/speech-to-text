import { useState } from 'react'
import { Body, Container } from './styles/modal'

function Modal({ children, ...restProps }) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    isOpen && (
      <Container>
        <Body {...restProps}>{children}</Body>
      </Container>
    )
  )
}

export default Modal
