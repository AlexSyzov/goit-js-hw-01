import React, { Component } from "react";
import movieAPI from "../../services/movieAPI";
import Layout from "../Layout";
import { ReviewsList, ReviewsListItem } from "./styled";

export default class Reviews extends Component {
  state = {
    reviews: [],
  };

  async componentDidMount() {
    const { match } = this.props;

    const reviews = await movieAPI.getMovieReviews(match.params.movieID);

    this.setState({ reviews });
  }

  render() {
    const { reviews } = this.state;

    return (
      <>
        {reviews.length > 0 ? (
          <Layout>
            <ReviewsList>
              {reviews.map(({ id, author, content }) => (
                <ReviewsListItem key={id}>
                  <h4>Author: {author}</h4>
                  <p>{content}</p>
                </ReviewsListItem>
              ))}
            </ReviewsList>
          </Layout>
        ) : (
          <Layout>
            <div>Sorry, there are no reviews of this movie.</div>
          </Layout>
        )}
      </>
    );
  }
}
