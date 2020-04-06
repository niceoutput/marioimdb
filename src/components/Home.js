import React, { useState, useEffect } from 'react';
import {
    API_URL,
    API_KEY,
    IMAGE_BASE_URL,
    BACKDROP_SIZE
} from '../config';
import HeroImage from './elements/HeroImage';
import SearchBar from './elements/SearchBar';
import Grid from './elements/Grid';
import MovieThumb from './elements/MovieThumb';
import LoadMoreBtn from './elements/LoadMoreBtn';
import Spinner from './elements/Spinner';

//Custom hook
import { useHomeFetch } from './hooks/useHomeFetch';

const Home = () => {
    const [{ state, loading, error }, fetchMovies] = useHomeFetch();
    console.log(state);

    if (error) return <span>Something went wrong</span>
    if (!state.movies[0]) return <Spinner />

    return (
        <React.Fragment>
            <HeroImage
                image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.heroImage.backdrop_path}`}
                title={state.heroImage.original_title}
                text={state.heroImage.overview}
            />
            <SearchBar />
            <Grid />
            <MovieThumb />
            <Spinner />
            <LoadMoreBtn />
        </React.Fragment>
    )
}

export default Home;
