import React from 'react';
import "../../../styles/ADMIN/OneCooperative.css"
const OneCooperative = () => {
    return (
        <div className='container-one-cooperative'>
            <h2>nom de la cooperative</h2>
            <div className='container-statistique-cooperative'>

                <div className='statistique'>
                    <span className='titre-stat'>Nombre de menbre</span>
                    <div className='stat-datas'>
                        <i className="fa-solid fa-users"></i>
                        <span id='stat-data'>50</span>
                    </div>
                </div>
                <div className='statistique'>
                    <span className='titre-stat'>Stokc en kg (en ligne)</span>
                    <div className='stat-datas'>
                        <i className="fa-solid fa-store"></i>
                        <span id='stat-data'>1000 kg</span>
                    </div>
                </div>
                <div className='statistique'>
                    <span className='titre-stat'>Revenue</span>
                    <div className='stat-datas'>
                        <i className="fa-solid fa-sack-dollar"></i>
                        <span id='stat-data'>800.000 FCFA</span>
                    </div>
                </div>
                <div className='statistique'>
                    <span className='titre-stat'>Stock ecoulé</span>
                    <div className='stat-datas'>
                        <i className="fa-solid fa-hourglass-end"></i>
                        <span id='stat-data'>400 kg</span>
                    </div>
                </div>
                <div className='statistique'>
                    <span className='titre-stat'>Impayé</span>
                    <div className='stat-datas'>
                        <i className="fa-solid fa-xmark"></i>
                        <span id='stat-data'>0 FCFA</span>
                    </div>
                </div>

            </div>
            
        </div>
    );
}

export default OneCooperative;
