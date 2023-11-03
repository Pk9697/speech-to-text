import styled from 'styled-components'

export const Container = styled.div`
  background-color: var(--clr-white);
  padding: 2.5em 3.125em;
  display: flex;
  flex-direction: column;
  gap: 3em;
  border-radius: 16px;
`
export const Frame = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.$flexCol ? 'column' : 'row')};
  width: 100%;
  gap: ${(props) => (props.$gap ? props.$gap : '0')};
`
export const Title = styled.h2`
  color: var(--clr-black);
  font-weight: var(--fw-bold);
  line-height: 1.45;
`
export const Icon = styled.button`
  margin-left: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: none;
  background-color: var(--clr-white);
`
export const Label = styled.p`
  color: var(--clr-black);
  font-weight: var(--fw-500);
  line-height: 1.45;
`
export const Text = styled.p`
  font-size: 1rem;
  font-weight: var(--fw-bold);
`
export const Select = styled.select`
  padding: 1em;
  border-radius: 8px;
  border: 1px solid #d0d5dd;
`
export const Option = styled.option``
export const File = styled.input``
export const Input = styled.input`
  padding: 1em;
  border: 1px solid #d0d5dd;
  border-radius: 8px;
  border: 1px solid #d0d5dd;
`
export const CheckBox = styled.input``
