import styled from '@emotion/styled'

import colors from 'styles/colors'

export const Container = styled.button<{ isRed?: boolean }>`
  cursor: pointer;
  width: 100%;
  padding: 18px 12px;
  color: ${colors.white};
  background: ${({ isRed }) => (isRed ? colors.red : colors.green)};
  border: 1px solid
    ${({ isRed }) => (isRed ? colors.redDark : colors.greenDark)};
  border-radius: 4px;
  box-sizing: border-box;
  box-shadow: 0px 4px 0px
    ${({ isRed }) => (isRed ? colors.redDark : colors.greenDark)};

  :hover {
    opacity: 0.9;
  }
`
