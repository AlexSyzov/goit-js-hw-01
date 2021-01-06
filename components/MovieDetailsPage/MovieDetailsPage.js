import React, { Component } from "react";
import { Route } from "react-router-dom";
import movieAPI from "../../services/movieAPI";
import Appbar from "../Appbar/Appbar";
import Layout from "../Layout";
import Cast from "../Cast/Cast";
import Reviews from "../Reviews/Reviews";
import {
  Button,
  Title,
  MainContainer,
  Poster,
  OverviewHeader,
  GenresHeader,
  AdditionalHeader,
  AdditionalLink,
  AdditionalList,
  AdditionalListItem,
} from "./styled";
import Loader from "react-loader-spinner";

export default class MovieDetailsPage extends Component {
  state = {
    movie: null,
    from: null,
  };

  async componentDidMount() {
    const { match } = this.props;

    const {
      location: { state },
    } = this.props;

    if (state && state.from) {
      this.setState({ from: state.from });
    }

    const movie = await movieAPI.getMovieDetails(match.params.movieID);

    this.setState({ movie });
  }

  handleReturn = () => {
    const { history } = this.props;

    if (this.state.from) {
      return history.push(this.state.from);
    }

    history.push("/movies");
  };

  render() {
    const { movie } = this.state;
    const { match } = this.props;

    return (
      <>
        <Appbar activeColor={{ color: "#ee82ee" }} />

        {movie ? (
          <>
            <Layout>
              <Button type="button" onClick={this.handleReturn}>
                Return
              </Button>
              <MainContainer>
                <Poster
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  alt={movie.title}
                />
                <div>
                  <div>
                    <Title>
                      {movie.title} ({movie.release_date.slice(0, 4)})
                    </Title>
                    <div>
                      User Score:
                      {movie.vote_average * 10 !== 0
                        ? ` ${movie.vote_average * 10} %`
                        : " undefined"}
                    </div>
                  </div>
                  <OverviewHeader>Overview</OverviewHeader>
                  <p>{movie.overview}</p>
                  <GenresHeader>Genres</GenresHeader>
                  <div>{movie.genres.map(({ name }) => `${name} `)}</div>
                </div>
              </MainContainer>
              <AdditionalHeader>Additional information</AdditionalHeader>
              <AdditionalList>
                <AdditionalListItem>
                  <AdditionalLink to={`/movies/${match.params.movieID}/cast`}>
                    Cast
                  </AdditionalLink>
                </AdditionalListItem>
                <AdditionalListItem>
                  <AdditionalLink
                    to={`/movies/${match.params.movieID}/reviews`}
                  >
                    Reviews
                  </AdditionalLink>
                </AdditionalListItem>
              </AdditionalList>
            </Layout>
          </>
        ) : (
          <Loader type="Audio" color="#ee82ee" height={100} width={100} />
        )}

        <Route path={`${match.path}/cast`} component={Cast} />
        <Route path={`${match.path}/reviews`} component={Reviews} />
      </>
    );
  }
}
