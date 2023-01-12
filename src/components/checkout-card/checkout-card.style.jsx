import styled from "styled-components";

export const CheckoutCardContainerCss = styled.div`
width: 100%;
display: flex;
min-height: 100px;
border-bottom: 1px solid darkgrey;
padding: 15px 0;
font-size: 20px;
align-items: center;
`

export const ImgContainerCss = styled.div`
width: 23%;
padding-right: 15px;

img {
  width: 100%;
  height: 100%;
}
`

export const PriceCss = styled.span`
width: 23%;
`

export const NameCss = styled(PriceCss)`
padding-right: 15px;
`

export const QuantityCss = styled(PriceCss)`
display: flex;
`

export const ArrowCss = styled.div`
cursor: pointer;
`

export const ValueCss = styled.span`
margin: 0 10px;
`

export const RemoveButtonCss = styled.div`
padding-left: 12px;
cursor: pointer;
`