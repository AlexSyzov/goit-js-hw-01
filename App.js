import React, { Component } from "react";
import imagesAPI from "./services/imagesAPI";
import Searchbar from "./components/Searchbar/Searchbar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Button from "./components/Button/Button";
import Loader from "react-loader-spinner";
import Modal from "./components/Modal/Modal";
import { LargeImage, LoaderBox } from "./styled";
import Error from "./components/Error/Error";
import "../node_modules/react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export default class App extends Component {
  state = {
    images: [],
    page: 1,
    totalPages: 1,
    error: null,
    searchQuery: "",
    isLoading: false,
    largeImage: null,
  };

  componentDidUpdate(prevProps, prevState) {
    const { searchQuery: prevQuery } = prevState;
    const { searchQuery: nextQuery } = this.state;

    if (prevQuery !== nextQuery) {
      this.fetchImages();
    }
  }

  fetchImages = async () => {
    const { searchQuery, page } = this.state;

    this.setState({ isLoading: true });

    try {
      const response = await imagesAPI.fetchImagesWithQuery(searchQuery, page);
      const { hits: images, total: totalImages } = response.data;
      const { perPage } = response;

      this.setState((prevState) => ({
        images: [...prevState.images, ...images],
        page: prevState.page + 1,
        totalPages: Math.ceil(totalImages / perPage),
      }));
    } catch (error) {
      this.setState({ error: error });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  handleFormSubmission = (searchQuery) => {
    if (searchQuery !== this.state.searchQuery) {
      this.setState({
        images: [],
        page: 1,
        searchQuery: searchQuery,
      });
    }
  };

  handleLoadMoreBtnClick = async () => {
    await this.fetchImages(this.state.searchQuery);

    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  handleModalOpening = (largeImageURL, description) => {
    this.setState({ largeImage: { url: largeImageURL, description } });
  };

  handleModalClosing = () => {
    this.setState({ largeImage: null });
  };

  render() {
    const { images, page, totalPages, isLoading, largeImage } = this.state;

    return (
      <>
        <Searchbar onSubmit={this.handleFormSubmission} />
        {this.state.error && <Error />}
        {images.length > 0 && (
          <ImageGallery
            images={images}
            onModalOpening={this.handleModalOpening}
          />
        )}
        {isLoading && (
          <LoaderBox>
            <Loader
              type="Circles"
              color="#00BFFF"
              height={100}
              width={100}
              className="spinner"
            />
          </LoaderBox>
        )}
        {images.length > 0 && page < totalPages && !isLoading && (
          <Button onClick={this.handleLoadMoreBtnClick} />
        )}
        {largeImage && (
          <Modal onModalClosing={this.handleModalClosing}>
            <LargeImage src={largeImage.url} alt={largeImage.description} />
          </Modal>
        )}
      </>
    );
  }
}
