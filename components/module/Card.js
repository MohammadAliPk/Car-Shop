import React from 'react';

// icons
import Location from '../icons/Location'

// styles
import styles from './Card.module.css'
import Link from 'next/link';


const Card = (props) => {

    const { id, image, location, model, price, name, year, distance } = props

    return (
        <Link href={`/cars/${id}`}>
            <div className={styles.container}>
                <img src={image} alt={name} className={styles.image} />
                <h4 className={styles.title}>{`${name} ${model}`}</h4>
                <p className={styles.detail}>{`${year} . ${distance}km`}</p>
                <div className={styles.footer}>
                    <p>$ {price}</p>
                    <div className={styles.location}>
                        <p>{location}</p>
                        <Location />
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Card;