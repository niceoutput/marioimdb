import React from 'react';
import { StyledMovieThumb } from '../styles/StyledMovieThumb';
import { Link } from '@reach/router';


const MovieThumb = ({ image, movieId, clickable }) => (
    <StyledMovieThumb>
        {clickable ? (
            <Link to={`/${movieId}`}>
                <img className="clickable" src={image} alt="movie clickable" />
            </Link>
        ) : (
            <img src={image} alt="normal movie" />
        )}
    </StyledMovieThumb>
)

export default MovieThumb;
