import Link from "next/link";
import { ILocation, ICharacter } from "../../interfaces";
import CardCharacter from "../../character/CardCharacter";
import styles from '../CardLocation.module.css';

interface myParams {
    location: ILocation,
    characters: ICharacter[],
}

const getLocations = async () => {
    const res = await fetch('https://rickandmortyapi.com/api/location');
    const data = await res.json();
    return data.results;
}

const getLocation = async (id: number) => {
    const res = await fetch('https://rickandmortyapi.com/api/location/' + id, { next: { revalidate: 60 } });
    const data: ILocation = await res.json();
    return data;
}
const getResidentes = async (residents: string[]) => {
    var residentsArray = await Promise.all(residents.map(async residentUrl => {
        const res = await fetch(residentUrl);
        var data: ICharacter = await res.json();
        return data;
    }));
    return residentsArray;
}

const reduceResidents = (residents: ICharacter[]) => {
    const randomResidents = residents.sort(() => Math.random() - 0.5).slice(0, (residents.length > 5 ? 5 : residents.length));
    return randomResidents;
}

export async function generateStaticParams() {
    var locations = await getLocations();

    return locations.map((_location: ILocation) => ({
        id: _location.id.toString(),
    }));
}


export default async function Location({ params }: { params: { id: string } }) {
    const { id } = params;
    const location = await getLocation(parseInt(id));
    const residents = await getResidentes(location.residents);
    const reducedResidents = reduceResidents(residents);
    return (
        <div className={styles.container}>
            <h5>Location #{location.id}</h5>
            <h1>{location.name}</h1>
            <hr />
            <h5>Type</h5>
            <h2>{location.type}</h2>
            <h5>Dimension</h5>
            <h2>{location.dimension}</h2>
            <h5>Residents ({location.residents.length})</h5>
            <hr />
            <div className={styles.cards}>
                {
                    reducedResidents.length <= 0 ? "No residents found" :
                        reducedResidents.map((resident, i) => (
                            <Link key={i} href={"/character/" + resident.id} style={{ textDecoration: 'none' }}>
                                <CardCharacter character={resident} />
                            </Link>
                        ))
                }
            </div>
        </div>
    )
}