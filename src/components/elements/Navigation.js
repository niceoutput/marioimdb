import React from 'react';
import { Link } from '@reach/router';
import { StyledNavigation } from '../styles/StyledNavigation';
import { PropTypes } from 'prop-types';

const Navigation = ({ movie }) => (
    <StyledNavigation>
        <div className="navigation-content">
            <Link to="/">
                <span>Home</span>
            </Link>
            <span>|</span>
            <span>{movie}</span>
        </div>
    </StyledNavigation>
);

Navigation.propTypes = {
    movie: PropTypes.string
}

export default Navigation;
