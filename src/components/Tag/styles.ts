import styled from 'styled-components'
import { colors } from '../../styles'
import { Props } from './Tag'

export const TagContainer = styled.div<Props>`
  background-color: ${colors.green};
  color: ${colors.white};
  font-size: ${(props) => (props.size === 'big' ? '16px' : '10px')};
  padding: ${(props) => (props.size === 'big' ? '8px 16px' : '4px 6px')};
  font-weight: bold;
  border-radius: 8px;
  display: inline-block;
`