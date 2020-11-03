import styled from '@emotion/styled'

export const Container = styled.div`
  > div {
    margin-bottom: 30px;
  }
`

export const Menu = styled.div`
  display: flex;
  flex-wrap: wrap;

  > div {
    width: 50%;
    margin: 5px 0;
  }

  @media only screen and (max-width: 600px) {
    flex-direction: column;

    > div {
      width: 100%;
    }
  }
`

export const Info = styled.div`
  font-size: 1rem;
  text-align: center;
`

export const ButtonsWrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 3fr;
  grid-column-gap: 20px;
`
