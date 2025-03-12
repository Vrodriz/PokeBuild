import axios from "axios";
import { PokemonDTO } from "../api/DTOs/PokemonDTO";

export const fetchPokemon = async (id: number): Promise<PokemonDTO | null> => {
  try {
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = res.data;

    return {
      name: data.name,
      image: data.sprites.front_default,
      types: data.types.map((t: any) => t.type.name),
    };
  } catch (error) {
    console.error("Erro ao buscar Pokémon:", error);
    return null; 
  }
};