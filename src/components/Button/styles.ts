import styled from '@emotion/styled'

import colors from 'styles/colors'

interface IContainerProps {
  isRed?: boolean
  disabled?: boolean
}

export const Container = styled.button<IContainerProps>`
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  width: 100%;
  padding: 18px 12px;
  color: ${colors.white};
  background: ${({ isRed }) => (isRed ? colors.red : colors.green)};
  background: ${({ isRed }) => (isRed ? colors.red : colors.green)};
  border: 1px solid
    ${({ isRed }) => (isRed ? colors.redDark : colors.greenDark)};
  border-radius: 4px;
  box-sizing: border-box;
  box-shadow: 0px 4px 0px
    ${({ isRed }) => (isRed ? colors.redDark : colors.greenDark)};
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};

  :hover {
    opacity: ${({ disabled }) => (disabled ? 0.6 : 0.9)};
  }
`
