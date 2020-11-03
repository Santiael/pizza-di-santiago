import styled from '@emotion/styled'

import colors from 'styles/colors'

export const Container = styled.div<{ disabled?: boolean }>`
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  display: flex;
  align-items: center;
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};

  > label {
    cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
    margin-left: 10px;
  }
`

export const Checkbox = styled.div<{ checked: boolean }>`
  position: relative;
  width: 16px;
  min-width: 16px;
  height: 16px;
  min-height: 16px;
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
    transform: translate(-50%, -50%);
  }
`

export const ImageFrame = styled.div`
  width: 62px;
  min-width: 62px;
  height: 62px;
  min-height: 62px;
  margin-left: 10px;
  padding: 2px;
  border: 2px solid ${colors.brown};

  > img {
    width: 100%;
    height: 100%;
  }
`
