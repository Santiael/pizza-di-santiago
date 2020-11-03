import styled from '@emotion/styled'

export const Container = styled.div`
  > div {
    margin-bottom: 30px;
  }
`

export const Field = styled.p`
  margin-bottom: 15px;
  text-align: center;

  :last-of-type {
    margin-bottom: 0;
  }
`

export const List = styled.ul`
  > li {
    width: fit-content;
    margin: 5px auto 0;
    font-size: 1rem;
  }
`

export const PriceWrapper = styled.div`
  margin-top: 60px;
`

export const ButtonsWrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 3fr;
  grid-column-gap: 20px;
`
