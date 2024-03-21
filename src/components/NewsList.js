import React from 'react';

import './fonts.css';

import { Typography, Container, Divider } from '@mui/material';

const NewsList = ({ first , last , year , email , headline , date , update }) => {
    return (
        <div id="news-font">
            <Divider />
            <h2>{headline}</h2>
            <h3>{date}</h3>
            <p>{update}</p>
            <h4>{first} {last} | Grad. {year} | {email}</h4>
        </div>
    );
}

export default NewsList;