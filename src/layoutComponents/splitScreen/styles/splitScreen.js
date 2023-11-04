import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  height: 100%;
`
export const Pane = styled.div`
  flex: ${(props) => props.$weight};
  max-width: ${(props) => (props.$maxWidth ? props.$maxWidth : 'none')};
`
