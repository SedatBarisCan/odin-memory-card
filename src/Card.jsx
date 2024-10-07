export default function Card ({ pokemon, onclick }) {

    return (
        <div 
        role="button" 
        className="card-item" 
        onClick={onclick} 
        data-id={pokemon.id}
        key={pokemon.id}>
            <img className="card-img" src={pokemon.sprite} alt={pokemon.name} />
            <h4 className="card-name">{pokemon.name}</h4>
        </div>
    )
}