import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import FormSendProducts from './FormSendProducts';

const Stock = () => {
    return (
        <div>
            <h2>Bonjour</h2>
            <Link to="/cooperative/dashboard/stock/add-products">Ajouter produits</Link>
            <Routes>
                <Route path='/add-products' element={<FormSendProducts/>}/>
            </Routes>
        </div>
    );
}

export default Stock;
