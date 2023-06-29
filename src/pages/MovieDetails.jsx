import { getMovieDetailsById } from 'api/tmdb';
import BackLink from 'components/BackLink';
import CenteredSpinner from 'components/CenteredSpinner';
import MovieCard from 'components/MovieCard';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { states } from 'utils/constants';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [state, setState] = useState(states.LOADING);

  useEffect(() => {
    getMovieDetailsById(movieId)
      .then(movieDetails => {
        setMovieDetails(movieDetails);
        setState(states.LOADED);
      })
      .catch(error => {
        setState(states.ERROR);
      });
  }, [movieId]);

  switch (state) {
    case states.LOADING:
      return <CenteredSpinner />;

    case states.LOADED:
      return (
        <>
          <BackLink />
          <MovieCard {...movieDetails} />
        </>
      );

    case states.ERROR:
      return <p>Oops, something went wrong. Please try again later.</p>;

    default:
      return null;
  }
};

export default MovieDetails;
