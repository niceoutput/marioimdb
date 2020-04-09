import React from 'react';
import { Link } from '@reach/router';
import { StyledNavigation } from '../styles/StyledNavigation';


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

export default Navigation;
