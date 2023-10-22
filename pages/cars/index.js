import React from 'react';


// data
import carsData from '../../data/carsdata';
import CarsPage from '../../components/templates/CarsPage';

const Details = () => {
    return (
        <div>
            <CarsPage data={carsData} />
        </div>
    );
};

export default Details;