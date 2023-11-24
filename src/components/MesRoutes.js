import React from 'react';
import { Link } from 'react-router-dom';
const MesRoutes = () => {
    return (
        <div>
            <Link to="/ecom">ECOM</Link>
            <Link to="/admin/login">ADMIN</Link>
            <Link to="/cooperative">COOPERATIVE</Link>
            <Link to="/producteur">PRODUCTEUR</Link>
        </div>
    );
}

export default MesRoutes;
