import React from "react";
import { useParams } from "react-router-dom";
//config
import { IMAGE_BASE_URL, POSTER_SIZE } from "../config";

//components
import Grid from "./Grid";
import Spinner from "./Spinner";
import BreadCrumb from "./BreadCrumb";
import MovieInfo from "./MovieInfo";
import MovieInfoBar from "./MovieInfoBar";

//Hook
import { useMovieFetch } from "../hooks/useMovieFetch";
//image
import NoImage from "../images/no_image.jpg";

const Movie = () => {
  const { movieId } = useParams();

  const { state: movie, loading, error } = useMovieFetch(movieId);

  if (loading) return <Spinner />;
  if (error) return <div> Something went Wrong...</div>;
  return (
    <>
      <BreadCrumb movieTitle={movie.original_title} />
      <MovieInfo movie={movie} />
      <MovieInfoBar
        time={movie.runtime}
        budget={movie.budget}
        revenue={movie.revenue}
      />
    </>
  );
};

export default Movie;