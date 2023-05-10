import { Button } from 'components/Button/Button';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';

import React, { useState } from 'react';
import {
  StyleSearchbar,
  StyleSearchForm,
  StyleButton,
  StyledButtonLable,
  StyleSerchInput,
} from './Searchbar.styled';

export const Searchbar = ({
  items,
  showLoadMoreBtn,
  onPicture,
  onButtonSubmit,
  onLoadMoreClick,
}) => {
  //State
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = evt => {
    setSearchQuery(evt.target.value);
  };

  const onSubmit = evt => {
    evt.preventDefault();
    const search = searchQuery.trim();
    onButtonSubmit(search);
  };

  const onClickLoadMore = searchQuery => {
    onLoadMoreClick(searchQuery);
  };

  return (
    <>
      <StyleSearchbar>
        <StyleSearchForm onSubmit={onSubmit}>
          <StyleButton type="submit">
            <StyledButtonLable>Search</StyledButtonLable>
          </StyleButton>

          <StyleSerchInput
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={handleInputChange}
            value={searchQuery}
          />
        </StyleSearchForm>
      </StyleSearchbar>

      <ImageGallery items={items} onPicture={onPicture} />
      {showLoadMoreBtn && <Button onClick={onClickLoadMore} />}
    </>
  );
};
