import React from 'react';
import { StyledMovieThumb } from '../styles/StyledMovieThumb';


const MovieThumb = ({ image, movieId, clickable }) => (
    <StyledMovieThumb>
        {clickable ? (
            <img className="clickable" src={image} alt="movie clickable" />
        ) : (
            <img src={image} alt="normal movie" />
        )}
    </StyledMovieThumb>
)

export default MovieThumb;
