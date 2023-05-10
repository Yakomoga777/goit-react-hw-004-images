import React, { useState, useEffect } from 'react';
import { StyledApp } from './AppStyled';
import { Searchbar } from './Searchbar/Searchbar';

import { fetchImages } from 'services/api';
import { GlobalStyle } from './Styles/GlobalStyle/GlobalStyle';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';

const perPage = 12;

//* render > didMount > getItem > setState > update > render > didUpdate > setItem

export const App = () => {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [showLoadMoreBtn, setShowLoadMoreBtne] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [largeImageURL, setLargeImageURL] = useState('');

  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    console.log('Did Mount');
  }, []);

  useEffect(() => {
    console.log('Did Update');

    if (searchQuery) {
      const fetchData = async () => {
        try {
          setIsLoading(true);
          const response = await fetchImages(searchQuery, page, perPage);
          setImages(response.data.hits);

          // Перевірка на наявність кнопки LoadMore
          if (response.data.hits.length === perPage) {
            setShowLoadMoreBtne(true);
          } else setShowLoadMoreBtne(false);

          // Пагінація нанатисканні кнопки LoadMore
          if (page > 1) {
            setImages([...images, ...response.data.hits]);
            return;
          }
        } catch (error) {
        } finally {
          setTimeout(() => {
            setIsLoading(false);
          }, 1000);
        }
      };

      fetchData();
    }
  }, [searchQuery, page]);

  const onSubmit = search => {
    setSearchQuery(search);

    setPage(1);
  };

  const onLoadMoreClick = async search => {
    setPage(prevPage => prevPage + 1);
  };

  const onPicture = index => {
    const picture = images.filter(image => image.id === +index);

    toogleModal();
    setLargeImageURL(picture[0].largeImageURL);
  };

  const toogleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <StyledApp>
      {showModal && (
        <Modal onCloseModal={toogleModal}>
          {<img src={largeImageURL} alt={''}></img>}
        </Modal>
      )}
      <GlobalStyle />
      <Searchbar
        onButtonSubmit={onSubmit}
        onLoadMoreClick={onLoadMoreClick}
        items={images}
        showLoadMoreBtn={showLoadMoreBtn}
        onPicture={onPicture}
      />
      {isLoading && <Loader />}
    </StyledApp>
  );
};
