

interface myParams {    
    id: string;    
}

export default function CharacterPage({params}: {params: myParams}) {
    const { id } = params;

    return (
        <div>
            Character: {id}
        </div>
    );
}