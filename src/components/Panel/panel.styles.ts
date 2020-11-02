import styled from '@emotion/styled'

import colors from 'styles/colors'

export const Container = styled.div`
  padding: 0 20px 20px 20px;
  background: ${colors.beige};
  border: 1px solid ${colors.brown};
  border-radius: 8px;
  box-sizing: border-box;
  box-shadow: 0px 4px 0px ${colors.brown};

  > h2 {
    text-align: center;
    font-size: 1.2em;
    margin-bottom: 10px;
    padding: 8px 0;
    border-bottom: 1px solid ${colors.brown};
  }
`
