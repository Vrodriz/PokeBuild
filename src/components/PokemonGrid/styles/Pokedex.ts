import styled from "styled-components";

export const PokedexContainer = styled.div`
  background: #d32f2f;  // Vermelho clássico da Pokédex
  padding: 20px;
  border-radius: 12px;
  width: 400px;
  margin: 20px auto;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PokemonSlot = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
  border-radius: 8px;
  padding: 10px;
  margin: 10px 0;
  width: 80%;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
`;

export const PokemonSlotImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 2px solid #333;
`;

export const PokemonSlotName = styled.h3`
  font-size: 16px;
  font-weight: bold;
  margin: 5px 0;
  text-align: center;
`;

export const PokemonSlotTypes = styled.div`
  display: flex;
  gap: 5px;
  font-size: 12px;
  color: white;
  background: #333;
  padding: 5px;
  border-radius: 5px;
`;