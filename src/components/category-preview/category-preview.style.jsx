import styled from "styled-components";

import { Link } from "react-router-dom";

export const CategoryPreviewContainerCss = styled.div`
display: flex;
flex-direction: column;
margin-bottom: 30px;
`

export const TitleCss = styled(Link)`
font-size: 28px;
font-weight: 400;
margin-bottom: 25px;
cursor: pointer;
transition: all .2s;

 &:hover {
  opacity: 0.4;
}
`

export const PreviewCss = styled.div`
display: grid;
grid-template-columns: repeat(4, 1fr);
column-gap: 20px;
`