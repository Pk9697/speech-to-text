/* eslint-disable import/prefer-default-export */
import styled from 'styled-components'

export const Container = styled.div`
  padding: 1.25em 2.25em;
  display: flex;
  flex-direction: column;
  gap: 2.25em;
`

export const Frame = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1em;
`

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const Title = styled.h2``
export const Text = styled.p`
  font-size: var(--fs-body);
`

export const Metrics = styled.div`
  flex: 1 0 0;
  display: flex;
  flex-direction: column;
  padding: 1em;
  gap: 1em;
  border-radius: 12px;
  border: 1px solid var(--clr-border);
  background: var(--clr-white);
`

export const MetricsIcon = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  border: 1px solid var(--clr-border);
`

export const MetricsGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5em;
`

export const MetricsNumber = styled.h3`
  font-size: 1.25rem;
  font-weight: var(--fw-bold);
  line-height: 1.2;
`

export const MetricsText = styled.p`
  color: var(--clr-metrics-text);
`
