import { useNavigate } from 'react-router-dom';

import {
  DirectoryItemContainerCss,
  BackgroundImageCss,
  BodyCss
} from './directory-item.style.jsx'

const DirectoryItem = ({ category }) => {
    const { imageUrl, title, route } = category;
    const navigate = useNavigate()

    const navigateHandler = () => navigate(route);

    return(
      <DirectoryItemContainerCss onClick={navigateHandler}>
        <BackgroundImageCss imageUrl={imageUrl}/>
        <BodyCss>
          <h2>{title}</h2>
          <p>Shop Now</p>
        </BodyCss>
      </DirectoryItemContainerCss>
    )
}

export default DirectoryItem;