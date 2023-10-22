import React from 'react';


// data
import carsData from '../../data/carsdata';
import CarsPage from '../../components/templates/CarsPage';
import Categories from '../../components/module/Categories';

const Details = () => {
    return (
        <div>
            <Categories />
            <CarsPage data={carsData} />
        </div>
    );
};

export default Details;