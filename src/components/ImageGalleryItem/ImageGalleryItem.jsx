import React from 'react';
// import { Component } from 'react';
import { StyledImageItem, StyledImageItemImg } from './ImageGalleryItem.styled';

export const ImageItem = ({ item, onPicture }) => {
  const onImageClick = evt => {
    const id = evt.currentTarget.id;

    onPicture(id);
  };

  return (
    <StyledImageItem className="gallery-item">
      <StyledImageItemImg
        src={item.webformatURL}
        alt={item.tags}
        onClick={onImageClick}
        id={item.id}
      ></StyledImageItemImg>
    </StyledImageItem>
  );
};

// export class ImageItem extends Component {
//   onImageClick = evt => {
//     const id = evt.currentTarget.id;
//     this.props.onPicture(id);
//   };

//   render() {
//     const { item } = this.props;

//     return (
//       <StyledImageItem className="gallery-item">
//         <StyledImageItemImg
//           src={item.webformatURL}
//           alt={item.tags}
//           onClick={this.onImageClick}
//           id={item.id}
//         ></StyledImageItemImg>
//       </StyledImageItem>
//     );
//   }
// }
