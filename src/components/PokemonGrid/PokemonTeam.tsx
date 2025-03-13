import React, { useEffect, useState } from "react";
import { fetchPokemon } from "../../services/pokemonAPI";
import { PokemonDTO } from "../../api/DTOs/PokemonDTO";
import { TeamContainer, PokemonCard, PokemonImage, PokemonName, PokemonTypes } from "./styles/PokemonTeam";
import { PokedexContainer, PokemonSlot, PokemonSlotImage, PokemonSlotName, PokemonSlotTypes } from "./styles/Pokedex";

const SelectedTeam: React.FC = () => {
  const [selectedPokemons, setSelectedPokemons] = useState<PokemonDTO[]>([]);
  const [pokedexTeam, setPokedexTeam] = useState<PokemonDTO[]>([]);  

  useEffect(() => {
    const fetchPokemons = async () => {
      const pokemons: PokemonDTO[] = [];
      for (let i = 1; i <= 60; i++) {
        const pokemon = await fetchPokemon(i);
        if (pokemon) pokemons.push(pokemon);
      }
      setSelectedPokemons(pokemons);
    };

    fetchPokemons();
  }, []);

  return (
    <>
      {/* Grid de Pokémons */}
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

      {/* Seção da Pokédex */}
      <PokedexContainer>
        <h2 style={{ color: "white" }}>Pokédex</h2>
        {pokedexTeam.length === 0 ? (
          <p style={{ color: "white" }}>Nenhum Pokémon selecionado</p>
        ) : (
          pokedexTeam.map((pokemon) => (
            <PokemonSlot key={pokemon.name}>
              <PokemonSlotImage src={pokemon.image} alt={pokemon.name} />
              <PokemonSlotName>{pokemon.name}</PokemonSlotName>
              <PokemonSlotTypes>
                {pokemon.types.map((type) => (
                  <span key={type}>{type}</span>
                ))}
              </PokemonSlotTypes>
            </PokemonSlot>
          ))
        )}
      </PokedexContainer>
    </>
  );
};

export default SelectedTeam;