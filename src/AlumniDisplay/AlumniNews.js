import React from 'react';

import '../components/fonts.css';

import { Typography, Container } from '@mui/material';

import NewsList from '../components/NewsList.js';

import news from '../components/news.js';

export default function AlumniNews() {
    
    const final_list = news.map((entry) =>
        <NewsList 
            first={entry.first}
            last={entry.last}
            year={entry.year}
            email={entry.email}
            headline={entry.headline}
            date={entry.date}
            update={entry.update}
        />
    );

    return (
        <div>
            <div className="top-div" />
            <div className="main-body">
                <Container className="container">
                    <div id="header-font" className="header">
                        ALUMNI NEWS
                    </div>
                    {final_list}
                </Container>
            </div> 
        </div>
    );
}