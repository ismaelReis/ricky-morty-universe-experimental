
import styles from './Card.module.css'
import { ILocation } from '../interfaces';
import Link from 'next/link';
import CardLocation from './CardLocation';

const getLocations = async () => {
    const res = await fetch('https://rickandmortyapi.com/api/location');
    const data = await res.json();
    return data.results;
}


export default async function Locations() {
    const locations = await getLocations();

    return (
        <>
        <div className={styles.cards}>
            {
                locations.length <= 0 ? "No locations found" :
                    locations.map((location: ILocation, i: number) => (
                        <Link key={i} href={"locations/" + location.id}>
                            <CardLocation location={location} />
                        </Link>
                    ))}
        </div>
    </>
    );
}