/* eslint-disable import/prefer-default-export */
import styled from 'styled-components'

export const ButtonPrimary = styled.button`
  padding: 0.75em 1.5em;
  width: 100%;
  border-radius: 0.375em;
  border: none;
  background-color: var(--clr-blue);
  color: var(--clr-white);
  font-weight: var(--fw-bold);
  font-size: var(--fs-body);
  font-family: var(--ff-primary);
  max-width: ${(props) => (props.$maxWidth ? props.$maxWidth : 'none')};

  &:disabled {
    cursor: not-allowed;
    background-color: red;
  }
`
