import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  min-height: 100vh;
  height: 100%;
`
export const Pane = styled.div`
  flex: ${(props) => props.$weight};
`
