import Card from "./Card";

export default function MemoryBoard ({onClick, pokemonData }) {
    
    //print loading until data fetching
    if (pokemonData.length === 0) {
        return <div>Loading...</div>;
    }

    return (
        <div className="grid-board">
            {pokemonData.map((pokemon) => (
                <Card 
                key={pokemon.id}
                pokemon={pokemon}
                onclick={onClick}
                />
            ))}
        </div>
    )
}