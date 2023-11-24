import React from 'react';
import '../styles/MesRoutes/MesRoutes.css'
import { Link } from 'react-router-dom';
const MesRoutes = () => {
    return (
        <div className='container-routes'>
            <h1>LES LIENS VERS LES DEFFERENTES PAGES</h1>
            <Link className='routes' to="/ecom">ECOM</Link>
            <Link className='routes' to="/admin/login">ADMIN</Link>
            <Link className='routes' to="/cooperative">COOPERATIVE</Link>
            <Link className='routes' to="/producteur">PRODUCTEUR</Link>
        </div>
    );
}

export default MesRoutes;
