import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 1.5em;
  background-color: var(--clr-white);
  height: 100%;
  max-height: 90vh;
`

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2em;
  width: 100%;
`

export const LogoContainer = styled.div`
  display: flex;
  padding: 0.5em 1.5em;
  align-items: center;
  gap: 4px;
`

export const Logo = styled.h2`
  font-weight: var(--fw-bolder);
  color: var(--clr-blue);
  line-height: 1;
`

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
`

export const MenuItem = styled.div`
  background-color: ${(props) =>
    props.$selected ? 'var(--clr-accent)' : 'var(--clr-white)'};
  display: flex;
  align-items: center;
  padding: 0.75em 1em;
  gap: 0.75em;
  cursor: pointer;
  border-radius: 0.25em;
`

export const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => (props.$colorBlue ? 'var(--clr-blue)' : '')};
`

export const Text = styled.p`
  color: ${(props) =>
    props.$bold ? `var(--clr-text-black)` : `var(--clr-text)`};
  font-weight: ${(props) => (props.$bold ? `var(--fw-bold)` : `var(--fw-reg)`)};
`

export const TextSmall = styled.p`
  color: var(--clr-text-small);
  font-size: var(--fs-small);
  text-align: center;
`

export const Upgrade = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1em;
  border-radius: 0.5em;
  gap: 1em;
  background-color: var(--clr-accent);
`
