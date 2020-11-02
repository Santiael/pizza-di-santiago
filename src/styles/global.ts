import { css } from '@emotion/core'

import colors from './colors'

export default css`
  @import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@700&display=swap');

  body {
    margin: 0;
    background-color: ${colors.cream};

    *:not(script) {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      color: ${colors.brownDark};
      font-family: 'Comfortaa', sans-serif;
      font-size: 1.2rem;
      font-weight: bold;
    }

    *:focus {
      outline: none;
    }
  }
`
