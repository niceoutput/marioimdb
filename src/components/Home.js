import React, { useState } from 'react';
import {
    IMAGE_BASE_URL,
    BACKDROP_SIZE,
    POSTER_SIZE,
    POPULAR_BASE_URL,
    SEARCH_BASE_URL
} from '../config';
import HeroImage from './elements/HeroImage';
import SearchBar from './elements/SearchBar';
import Grid from './elements/Grid';
import MovieThumb from './elements/MovieThumb';
import LoadMoreBtn from './elements/LoadMoreBtn';
import Spinner from './elements/Spinner';
import NoImage from './images/no_image.jpg';

//Custom hook
import { useHomeFetch } from './hooks/useHomeFetch';

const Home = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [
        {
            state: { movies, currentPage, totalPages, heroImage },
            loading,
            error
        },
        fetchMovies
    ] = useHomeFetch(searchTerm);

    const searchMovies = search => {
        const endpoint = search ? `${SEARCH_BASE_URL}${search}` : `${POPULAR_BASE_URL}`;

        setSearchTerm(search);
        fetchMovies(endpoint);
    }

    const loadMoreMovies = () => {
        const searchEndpoint = `${SEARCH_BASE_URL}${searchTerm}&page=${currentPage + 1}`;
        const popularEndpoint = `${POPULAR_BASE_URL}&page=${currentPage + 1}`;

        const endpoint = searchTerm ? searchEndpoint : popularEndpoint;

        fetchMovies(endpoint);
    }

    if (error) return <span>Something went wrong</span>
    if (!movies[0]) return <Spinner />

    return (
        <React.Fragment>
            {!searchTerm && (
                <HeroImage
                    image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${heroImage.backdrop_path}`}
                    title={heroImage.original_title}
                    text={heroImage.overview}
                    />
            )}
            <SearchBar callback={searchMovies} />
            <Grid header={searchTerm ? 'Search Result' : 'Popular movies'}>
                {movies.map(movie => (
                    <MovieThumb
                        key={movie.id}
                        clickable
                        image={
                            movie.poster_path
                                ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
                                : NoImage
                        }
                        movieId={movie.id}
                        movieName={movie.original_title}
                    />
                ))}
            </Grid>
            {loading && <Spinner />}
            {currentPage < totalPages && !loading &&(
                <LoadMoreBtn text="Load More" callback={loadMoreMovies} />
            )}
        </React.Fragment>
    )
}

export default Home;
