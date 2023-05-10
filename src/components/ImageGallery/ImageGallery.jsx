import React from 'react';
import { ImageItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { StyledImageGallery } from './ImageGallery.styled';

export function ImageGallery({ items, onPicture }) {
  return (
    <StyledImageGallery className="gallery">
      {items.map(item => {
        // console.log(item);
        return <ImageItem key={item.id} item={item} onPicture={onPicture} />;
      })}
    </StyledImageGallery>
  );
}
