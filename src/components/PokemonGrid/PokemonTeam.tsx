import React from "react";
import { TeamContainer, PokemonCard, PokemonImage, PokemonName, PokemonTypes } from "./PokemonTeam";

interface Pokemon {
  id: number;
  name: string;
  image: string;
  types: string[];
}

interface SelectedTeamProps {
  selectedPokemons: Pokemon[];
}

const SelectedTeam: React.FC<SelectedTeamProps> = ({ selectedPokemons }) => {
  return (
    <TeamContainer>
      {selectedPokemons.map((pokemon) => (
        <PokemonCard key={pokemon.id}>
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