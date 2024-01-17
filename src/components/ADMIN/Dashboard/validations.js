import React from 'react';
import ListeProduitsNovalide from './ListeProduitsNovalide';
import { Route, Routes } from 'react-router-dom';
import AfficheProductNoValide from './AfficheProductNoValide';

const Validations = () => {
    return (
        <>
        <Routes>
          <Route path="/" element=<ListeProduitsNovalide /> />
          <Route path="/:idProduct" element=<AfficheProductNoValide /> />
        </Routes>
            
        </>
    );
}

export default Validations;
