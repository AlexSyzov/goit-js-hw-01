import React, { Component } from "react";
import Searchbox from "../Searchbox/Searchbox";
import Appbar from "../Appbar/Appbar";
import getQueryParams from "../../utils/getQueryParams";
import movieAPI from "../../services/movieAPI";
import { MovieLink, MovieList, MovieListItem } from "../movieListStyled";
import Layout from "../Layout";
import Loader from "react-loader-spinner";

export default class MoviesPage extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    const { query } = getQueryParams(this.props.location.search);

    if (query) {
      this.fetchMoviesWithQuery(query);
    }
  }

  componentDidUpdate(prevProps) {
    const { query: prevQuery } = getQueryParams(prevProps.location.search);
    const { query: nextQuery } = getQueryParams(this.props.location.search);

    if (prevQuery !== nextQuery) {
      this.setState({ movies: [] });
      this.fetchMoviesWithQuery(nextQuery);
    }
  }

  async fetchMoviesWithQuery(query) {
    const searchedMovies = await movieAPI.getMovies(query);

    this.setState({ movies: searchedMovies });
  }

  handleQueryChange = (query) => {
    this.props.history.push({
      ...this.props.location,
      search: `query=${query}`,
    });
  };

  render() {
    const { movies } = this.state;
    const { match, location } = this.props;

    return (
      <>
        <Appbar />
        <Layout>
          <Searchbox onSubmit={this.handleQueryChange} />
          {movies.length > 0 ? (
            <MovieList>
              {movies.map(({ id, title }) => (
                <MovieListItem key={id}>
                  <MovieLink
                    to={{
                      pathname: `${match.url}/${id}`,
                      state: { from: location },
                    }}
                  >
                    {title}
                  </MovieLink>
                </MovieListItem>
              ))}
            </MovieList>
          ) : (
            location.search && (
              <Loader
                type="Audio"
                color="#ee82ee"
                height={100}
                width={100}
                timeout={300}
              />
            )
          )}
        </Layout>
      </>
    );
  }
}
