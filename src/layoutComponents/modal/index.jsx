import { useContext } from 'react'
import { Body, Container } from './styles/modal'
import { ModalContext } from '../../context/modalContext'

function Modal({ children, ...restProps }) {
  const { isOpenModal, setIsOpenModal } = useContext(ModalContext)
  return (
    isOpenModal && (
      <Container onClick={() => setIsOpenModal(false)}>
        <Body onClick={(e) => e.stopPropagation()} {...restProps}>
          {children}
        </Body>
      </Container>
    )
  )
}

export default Modal
