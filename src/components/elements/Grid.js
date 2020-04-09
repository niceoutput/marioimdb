import React from 'react';
import { StyledGrid, StyledGridContent } from '../styles/StyledGrid';
import { PropTypes } from 'prop-types';


const Grid = ({ header, children }) => (
    <StyledGrid>
        <h1>{header}</h1>
        <StyledGridContent>{children}</StyledGridContent>
    </StyledGrid>
)

Grid.propTypes = {
    header: PropTypes.string
}

export default Grid;
