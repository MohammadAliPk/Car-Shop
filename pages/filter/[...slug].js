import React from 'react';

import { useRouter } from 'next/router';


// data
import carsData from '../../data/carsdata';
import CarsList from '../../components/templates/CarsList';

const FilterCars = () => {
    const router = useRouter();
    const [min, max] = router.query.slug || [];


    const filteredData = carsData.filter(item => item.price > min && item.price < max);
    if (!filteredData.length) return <h3>NotFound</h3>
    return (
        <div>
            <CarsList data={filteredData} />
        </div>
    );
};

export default FilterCars;