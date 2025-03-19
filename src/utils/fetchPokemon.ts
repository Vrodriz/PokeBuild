export const fetchPokemonList = async () => {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
    const data = await response.json();
  
    const pokemonDetails = await Promise.all(
      data.results.map(async (pokemon: { url: string }) => {
        const res = await fetch(pokemon.url);
        return await res.json();
      })
    );
  
    return pokemonDetails;
  };