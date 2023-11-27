import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import "../../../styles/ADMIN/Cooperatives.css"
import FormAdd from './FormAdd';
import ListeCooperatives from './ListeCooperatives';
import OneCooperative from './OneCooperative';
const Cooperatives = () => {
    const actionsLink = (
        <>
            <div className='actions'>
                <Link className='add-cooperative' to="/admin/dashboard/cooperatives/form">Ajouter une cooperative</Link>
                <Link className='add-cooperative'>Ajouter une cooperative</Link>
                <Link className='add-cooperative'>Ajouter une cooperative</Link>
            </div>
            <div className='cooperative-main'>
                <ListeCooperatives />
            </div>
        </>
      

    )
    
    return (
        <div className='container-cooperative'>
            <Routes>
                    <Route path='/' element={actionsLink} />
                    <Route path='/form' element={<FormAdd/>} />
                    <Route path='/:idcooperative' element={<OneCooperative />} />
            </Routes>
        </div>
    );
}

export default Cooperatives;
