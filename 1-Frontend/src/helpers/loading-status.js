import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const LoadingIcon = () => {
    return <FontAwesomeIcon icon={faSpinner} spin className="loading-icon" />; // Correctly pass the icon object and use the spin prop
};

export default LoadingIcon;