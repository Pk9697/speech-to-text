import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 1.5em;
  gap: 1.5em;
  border-radius: 12px;
  border: 1px solid var(--clr-border);
  background-color: var(--clr-white);
`
export const Title = styled.h3`
  font-size: 1.125rem;
  line-height: 1.2;
  font-weight: var(--fw-bold);
  color: var(--clr-black);
`
export const Divider = styled.div`
  border-bottom: 1px solid var(--clr-border);
`
export const RowGroup = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  gap: 0.5em;
`
export const Row = styled.div`
  display: flex;
  /* justify-content: space-between; */
  border-bottom: 1px solid var(--clr-border);
  background-color: ${(props) =>
    props.$selected ? 'var(--clr-accent)' : 'var(--clr-white)'};

  &:last-child {
    border-bottom: none;
  }
`
export const Cell = styled.div`
  flex: 1;
  padding: 0.875em 1em;
  display: flex;
  align-items: center;
`
export const CheckBox = styled.input`
  border-radius: 6px;
`
export const Text = styled.p`
  color: var(--clr-table);
`

export const Link = styled.a``
