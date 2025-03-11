import { useEffect, useState } from "react";
import PokemonCard from "./components/PokemonCard/PokemonCard";
import { fetchPokemon } from "./services/pokemonAPI";

interface Pokemon { 
  name: string,
  image: string;
  types: string[];
}

function App() {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);

  useEffect(() => {
    const loadPokemon = async () => {
      const data = await fetchPokemon(150); 
      setPokemon(data);
    };
    loadPokemon();
  }, []);

  return (  
    <div>  
      <h1>Pokemon API test</h1>
      {pokemon ? (  
        <PokemonCard name={pokemon.name} image={pokemon.image} types={pokemon.types}/>
      ) : ( 
        <p>Carregando...</p>
      )}
    </div>
  )}

  export default App;