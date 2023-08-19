import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { Props } from './Button'

import { colors } from '../../styles'

export const ButtonContainer = styled.button<Props>`
  background-color: ${(props) =>
    props.variant === 'primary' ? colors.green : 'transparent'};
  border: 2px solid
    ${(props) => (props.variant === 'primary' ? colors.green : colors.white)};
  color: ${colors.white};
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  border-radius: 8px;
  padding: 8px 16px;
`
export const ButtonLink = styled(Link)`
  background-color: transparent;
  border: 2px solid ${colors.white};
  color: ${colors.white};
  font-size: 16px;
  font-weight: bold;
  text-decoration: none;
  cursor: pointer;
  border-radius: 8px;
  padding: 8px 16px;
`
