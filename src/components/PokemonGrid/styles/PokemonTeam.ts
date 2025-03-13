import styled from "styled-components";

export const TeamContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 10px;
  padding: 20px;
  background-color: #f8f8f8;
  border-radius: 8px;
  max-width: 600px;
  margin: auto;

  @media (max-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const PokemonCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  border: 2px solid #ccc;
  border-radius: 8px;
  background-color: white;
  cursor: pointer;
  transition: transform 0.2s, border-color 0.2s;

  &:hover {
    transform: scale(1.1);
    border-color: #ffcc00;
  }
`;

export const PokemonImage = styled.img`
  width: 50px;
  height: 50px;
`;

export const PokemonName = styled.h3`
  font-size: 14px;
  font-weight: bold;
  margin: 5px 0;
`;

export const PokemonTypes = styled.div`
  display: flex;
  gap: 5px;
  font-size: 12px;
  color: #666;
`;