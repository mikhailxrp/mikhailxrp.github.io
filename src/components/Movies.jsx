import React from "react";
import Movie from "./Movie";


const Movies = ({ movies }) => {

    const film = movies.map(movie => {
        return <Movie
            key={movie.id}
            name={movie.name}
            image={movie.poster.url}
            description={movie.shortDescription}
            rating={movie.rating}
            genres={movie.genres}
            year={movie.year}
            trailer={!movie.videos ? "!#" : movie.videos}
        />

    })

    return (
        <div className="card-wrapper pt-5 pb-4">
            {movies.length ? film : <h4>Ничего не найдено...</h4>}
        </div>
    );
};

export default Movies;