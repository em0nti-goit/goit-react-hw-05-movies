import { useEffect, useState } from 'react';
import { getTrending } from 'api/tmdb';
import MoviesList from 'components/MoviesList';
import CenteredSpinner from 'components/CenteredSpinner';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getTrending()
      .then(data => {
        setMovies(data);
        setLoading(false);
      })
      .catch(error => {
        console.error(`Oh no, error: ${error}`);
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <CenteredSpinner />;
  if (error) return <p>Oops, something went wrong. Please try again later.</p>;

  return (
    <>
      <h1 className="mb-3">Trending today</h1>
      <MoviesList movies={movies} />
    </>
  );
};

export default Home;