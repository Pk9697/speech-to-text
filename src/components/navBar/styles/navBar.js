import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  padding: 0.75em 0;
  align-items: center;
  gap: 0.625em;
  background-color: var(--clr-white);
`
export const LogoContainer = styled.div`
  flex: 1;
  display: flex;
  padding: 0.5em 1.5em;
  align-items: center;
`
export const Logo = styled.h2`
  font-weight: var(--fw-bolder);
  color: var(--clr-blue);
  line-height: 1;
`
export const Search = styled.div`
  display: flex;
  align-items: center;
  flex: 3;
`
export const SearchIcon = styled.div`
  display: flex;
  align-items: center;
  margin-right: -30px;
  z-index: 2;
`
export const SearchInput = styled.input`
  display: block;
  flex: 1;
  width: 100%;
  max-width: 600px;
  padding: 0.625em 0.75em;
  padding-left: 30px;
  background-color: var(--clr-grey-50);
  border: none;
`
export const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  padding: 0.625em;
  border-radius: 20px;
  background: var(--clr-nav-icon);
`
export const Avatar = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const AvatarImage = styled.img`
  object-fit: cover;
`
