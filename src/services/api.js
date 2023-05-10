import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api';
const KEY_API = '34395621-a4ae5341feaa95111ecdda581';

export const fetchImages = async (search, page, perPage) => {
  const response = await axios.get(
    `/?key=${KEY_API}&q=${search}&image_type=photo&per_page=${perPage}&page=${page}`
  );

  return response;
};

// export const onLoagMorefetch = async (search, perPage, KEY_API) => {
//   const response = await axios.get(
//     `/?key=${KEY_API}&q=${search}&image_type=photo&per_page=${perPage}&page=${
//       this.state.page + 1
//     }`
//   );
//   console.log('пошуковий запит');
//   //   console.log(response);
//   return response;
// };

// fetchedImages = async search => {
//   if (this.state.error) {
//     this.setState({ error: null });
//   }
//   try {
//     this.setState({ isLoading: true });

//     const response = await fetchImages();
//     // let response = await axios.get(
//     //   `/?key=${KEY_API}&q=${search}&image_type=photo&per_page=${perPage}&page=1`
//     // );

//     // console.log('Відправили пошуковий запит');

//     if (
//       response.data.totalHits < (this.state.page + 1) * perPage ||
//       response.data.hits === []
//     ) {
//       this.setState({ page: 1, showLoadMoreBtn: false });
//     } else {
//       this.setState({ page: 1, showLoadMoreBtn: true });
//     }

//     this.setState({
//       images: response.data.hits,
//     });
//   } catch (error) {
//     console.error(error);
//   } finally {
//     setTimeout(() => {
//       this.setState({ isLoading: false });
//     }, 500);
//   }
// };

// if (this.state.error) {
//   this.setState({ error: null });
// }
// try {
//   this.setState({ isLoading: true });
//   const response = await axios.get(
//     `/?key=${KEY_API}&q=${search}&image_type=photo&per_page=${perPage}&page=${
//       this.state.page + 1
//     }`
//   );
//   console.log(response, this.state.images);
//   if (response.data.totalHits > (this.state.page + 1) * perPage) {
//     this.setState({
//       showLoadMoreBtn: true,
//     });
//   } else {
//     this.setState({
//       showLoadMoreBtn: false,
//     });
//   }

//   this.setState(prevState => ({
//     images: [...prevState.images, ...response.data.hits],
//     page: prevState.page + 1,
//   }));

//   console.log(this.state);
// } catch (error) {
//   console.error(error);
// } finally {
//   setTimeout(() => {
//     this.setState({ isLoading: false });
//   }, 500);
// }

// onPicture = index => {
//   const { images } = this.state;
//   const picture = images.filter(image => image.id === +index);

//   this.toogleModal();
//   this.setState({ largeImageURL: picture[0].largeImageURL });
// };

// toogleModal = () => {
//   this.setState(prevState => ({ showModal: !prevState.showModal }));
// };
