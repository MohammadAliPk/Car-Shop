import React from 'react';

import { useRouter } from 'next/router';

import CarsList from '../../components/templates/CarsList';

// data
import carsData from '../../data/carsData';

const CartCategory = () => {
    const router = useRouter();
    const { carCategory } = router.query;
    const data = carsData.filter(car => car.category === carCategory);
    return (
        <div>
            <CarsList data={data} />
        </div>
    );
};

export default CartCategory;