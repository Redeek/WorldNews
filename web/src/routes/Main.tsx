import React from 'react';
import {Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Home from '../pages/Home'
import News from '../pages/News'

const Main = () => {
    return (
        <Container>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/news" element={<News />} />
            </Routes>
        </Container>
    )
}

export default Main
