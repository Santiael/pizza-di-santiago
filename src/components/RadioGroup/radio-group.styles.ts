import styled from '@emotion/styled'

export const Container = styled.div``

export const OptionWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  :last-of-type {
    margin-bottom: 0;
  }

  > div:first-of-type {
    cursor: pointer;
    display: flex;
    align-items: center;

    > label {
      cursor: pointer;
    }
  }
`

export const Label = styled.label`
  margin: 0 5px 0 10px;

  > div {
    font-size: 0.8rem;
    line-height: 1.125rem;
  }
`

export const Description = styled.span`
  height: fit-content;
  margin-left: 5px;
  font-size: 0.8rem;
  line-height: 1rem;
`

export const Value = styled.span`
  margin-left: auto;
`
