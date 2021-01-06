import React, { Component } from "react";
import movieAPI from "../../services/movieAPI";
import Appbar from "../Appbar/Appbar";
import Layout from "../Layout";
import { MovieLink, MovieList, MovieListItem } from "../movieListStyled";
import { Title } from "./styled";
import Loader from "react-loader-spinner";

export default class HomePage extends Component {
  state = {
    movies: [],
  };

  async componentDidMount() {
    const trending = await movieAPI.getTrending();

    this.setState({ movies: trending });
  }

  render() {
    const { movies } = this.state;
    const { location } = this.props;

    return (
      <>
        <Appbar />

        <Layout>
          <Title>Trending today</Title>
          {movies.length > 0 ? (
            <MovieList>
              {movies.map((movie) => (
                <MovieListItem key={movie.id}>
                  <MovieLink
                    to={{
                      pathname: `/movies/${movie.id}`,
                      state: { from: location },
                    }}
                  >
                    {movie.name || movie.title}
                    {/* Not every object has 'name' && 'title' properties,
                  but each one has 'name' || 'title' property */}
                  </MovieLink>
                </MovieListItem>
              ))}
            </MovieList>
          ) : (
            <Loader type="Audio" color="#ee82ee" height={100} width={100} />
          )}
        </Layout>
      </>
    );
  }
}
