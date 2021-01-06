import React, { Component } from "react";
import movieAPI from "../../services/movieAPI";
import Layout from "../Layout";
import { Portrait, CastList, CastListItem, ActorInfo } from "./styled";

export default class Cast extends Component {
  state = {
    cast: [],
  };

  async componentDidMount() {
    const { match } = this.props;

    const cast = await movieAPI.getMovieCredits(match.params.movieID);

    this.setState({ cast });
  }

  render() {
    const { cast } = this.state;

    return (
      <>
        {cast.length > 0 ? (
          <Layout>
            <CastList>
              {cast.map(
                ({
                  cast_id,
                  profile_path,
                  gender,
                  original_name,
                  character,
                }) => (
                  <CastListItem key={cast_id}>
                    <Portrait
                      src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
                      alt={gender === 1 ? "Female" : "Male"}
                    />
                    <ActorInfo>
                      <div>{original_name}</div>
                      <div>Character: {character ? character : " no data"}</div>
                    </ActorInfo>
                  </CastListItem>
                )
              )}
            </CastList>
          </Layout>
        ) : (
          <Layout>
            <div>Sorry, there is no data about the cast of this movie.</div>
          </Layout>
        )}
      </>
    );
  }
}
