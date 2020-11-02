import styled from '@emotion/styled'

export const Container = styled.div`
  > div:first-of-type {
    margin-bottom: 30px;
  }
  > div:last-of-type {
    max-width: 300px;
    margin: 60px auto;

    > div:first-of-type {
      margin-bottom: 30px;
    }
  }
`
