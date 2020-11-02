import styled from '@emotion/styled'

import colors from 'styles/colors'

export const Container = styled.div<{ checked?: boolean }>`
  position: relative;
  width: 16px;
  min-width: 16px;
  height: 16px;
  min-height: 16px;
  border-radius: 50%;
  border: 1px solid ${colors.brown};

  :after {
    content: '';
    display: ${({ checked }) => (checked ? 'block' : 'none')};
    position: absolute;
    top: 50%;
    left: 50%;
    width: 10px;
    height: 10px;
    background-color: ${colors.brown};
    border-radius: 50%;
    transform: translate(-50%, -50%);
  }
`
