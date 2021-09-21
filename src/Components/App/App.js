import { fetchImages } from 'Components/Api/api';
import { LoadMoreBtn } from 'Components/Button/button';
import { ImageGallery } from 'Components/ImageGalleryList/ImageGalleryList';
import SearchBar from 'Components/SearchBar/SearchBar';
import React, { Component } from 'react';

export default class App extends Component {
  state = {
    images: [],
    query: '',
    page: 1,
    largeImage: '',
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query) {
      this.fetchImages();
    }
  }

  fetchImages = () => {
    const { query, page } = this.state;
    return fetchImages(query, page).then(data => {
      this.setState(({ images, page }) => ({
        images: [...images, ...data],
        page: page + 1,
      }));
    });
  };

  onInputChange = query => {
    this.setState({ query: query, page: 1 });
  };

  onImageClick = largeImageUrl => {
    this.setState({ largeImage: largeImageUrl });
  };

  render() {
    return (
      <>
        <SearchBar onSubmit={this.onInputChange}></SearchBar>
        <ImageGallery images={this.state.images} onImageClick={this.onImageClick} />
        {this.state.images.length > 0 && <LoadMoreBtn />}
      </>
    );
  }
}
