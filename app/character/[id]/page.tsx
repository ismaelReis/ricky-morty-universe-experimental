import Image from "next/image";
import { ICharacter } from "../../interfaces";
import styles from "../CardCharacter.module.css";



interface myParams {
    id: string;
}

const getCharacter = async (id: number) => {
    const res = await fetch('https://rickandmortyapi.com/api/character/' + id);
    const data: ICharacter = await res.json();
    return data;
}

export default async function CharacterPage({ params }: { params: myParams }) {
    const { id } = params;
    const character = await getCharacter(parseInt(id));
    return (
        <div className={styles.container}>
             <h5>Character #{id}</h5>
            <Image
                src={character.image}
                alt="Character"
                width={150}
                height={150}
                priority
            />
            <h1>{character.name}</h1>
            <hr />
            <h5>Specie</h5>
            <h2>{character.species}</h2>
        </div>
    );
}