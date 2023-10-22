import React, { useState } from 'react';

import { useRouter } from "next/router";

// styles
import styles from './SearchBar.module.css'

const SearchBar = () => {
    const router = useRouter();

    const [min, setMin] = useState();
    const [max, setMax] = useState();
    const searchHandler = () => {
        if (min && max) {
            router.push(`/filter/${min}/${max}`)
        } else {
            alert("Please enter min and max values")
        }
    };
    return (
        <div className={styles.container}>
            <div>
                <input placeholder='Enter min-price' onChange={e => setMin(e.target.value)} value={min} />
                <input placeholder='Enter max-price' onChange={e => setMax(e.target.value)} value={max} />
            </div>
            <button onClick={searchHandler}>Search</button>
        </div>
    );
};

export default SearchBar;