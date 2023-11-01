import { ButtonPrimary } from './styles/button'

function Button({ children, ...restProps }) {
  return <ButtonPrimary {...restProps}>{children}</ButtonPrimary>
}

export default Button
