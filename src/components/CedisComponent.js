import React from 'react';
import PropTypes from 'prop-types';
import '../styles/menu.css';

const CedisComponent = ({ id, name}) => (
    <ul>
        <li>
        <a href={`/cedis/${id}`}>
            { name }
        </a>
        </li>
    </ul>
)


CedisComponent.propTypes = {
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    box_count: PropTypes.number.isRequired,
}

export default CedisComponent;
