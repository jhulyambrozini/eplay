import styled from 'styled-components'
import { colors } from '../../styles'
type InputGroupProps = {
  maxWidth?: string
  marginTop?: string
}

type TabButtonProps = {
  isActive: boolean
}

export const Row = styled.div<InputGroupProps>`
  display: flex;
  align-items: flex-end;
  column-gap: 24px;
  margin-top: ${(props) => props.marginTop || '0'};
`
export const InputGroup = styled.div<InputGroupProps>`
  flex: auto;
  max-width: ${(props) => props.maxWidth || 'auto'};
  label {
    font-size: 14px;
    margin-bottom: 8px;
    display: block;
  }

  input,
  select {
    background-color: ${colors.white};
    border: 1px solid ${colors.white};
    height: 32px;
    padding: 0 8px;
    width: 100%;
  }
`
export const TabButton = styled.button<TabButtonProps>`
  border-radius: 8px;
  font-size: 14px;
  font-weight: bold;
  color: ${colors.white};
  background-color: ${(props) =>
    props.isActive ? colors.green : colors.black};
  height: 32px;
  border: none;
  cursor: pointer;
  margin-right: 16px;
  padding: 0 8px;

  img {
    margin-right: 8px;
  }
`
