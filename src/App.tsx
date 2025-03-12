import React, { useEffect, useState } from "react";
import { fetchPokemon } from "./services/pokemonAPI";  // Certifique-se de que o caminho está correto
import { PokemonDTO } from "./api/DTOs/PokemonDTO";
import { TeamContainer, PokemonCard, PokemonImage, PokemonName, PokemonTypes } from "./components/PokemonGrid/PokemonTeam";

const SelectedTeam: React.FC = () => {
  const [selectedPokemons, setSelectedPokemons] = useState<PokemonDTO[]>([]);

  useEffect(() => {
    // Função para buscar Pokémons
    const fetchPokemons = async () => {
      const pokemons = [];
      for (let i = 1; i <= 60; i++) {
        const pokemon = await fetchPokemon(i); 
        if (pokemon) pokemons.push(pokemon);
      }
      setSelectedPokemons(pokemons);  // Atualiza o estado com os Pokémons encontrados
    };

    fetchPokemons();  // Chama a função assim que o componente é montado
  }, []);

  return (
    <TeamContainer>
      {selectedPokemons.map((pokemon) => (
        <PokemonCard key={pokemon.name}>
          <PokemonImage src={pokemon.image} alt={pokemon.name} />
          <PokemonName>{pokemon.name}</PokemonName>
          <PokemonTypes>
            {pokemon.types.map((type) => (
              <span key={type}>{type}</span>
            ))}
          </PokemonTypes>
        </PokemonCard>
      ))}
    </TeamContainer>
  );
};

export default SelectedTeam;