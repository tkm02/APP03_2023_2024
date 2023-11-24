import React from 'react';
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard/Dashboard"

const Producteur = () => {
    return (
        <div>
        <h1>PRODUCTEUR</h1>
        <Routes>
            <Route path='/dashboard' element={<Dashboard /> } />
        </Routes>
        </div>
    );
}

export default Producteur;
