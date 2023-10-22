import React from 'react';
import { useRouter } from 'next/router';


import CarDetails from '../../components/templates/CarDetails';

// data
import carsData from '../../data/carsData';

const CarDetail = () => {

    const router = useRouter();
    const { carId } = router.query;
    const carDetails = carsData[carId - 1];


    return (
        <CarDetails {...carDetails} />
    );
};

export default CarDetail;