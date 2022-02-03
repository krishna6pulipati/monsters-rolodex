import React from 'react';
import './seach-box.css';

const SearchBox = ({placeHolder, handleChange }) => (
    <input className="search"
        type="search" placeholder={placeHolder} onChange={handleChange}                
        />
);

export default SearchBox;
