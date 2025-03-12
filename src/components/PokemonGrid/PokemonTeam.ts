import styled from "styled-components";

// Container para a equipe de Pokémon (agora usando grid)
export const TeamContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));  // Grid responsivo
  gap: 15px;
  padding: 20px;
  border-radius: 8px;
  background-color: #f4f4f4;

  @media (max-width: 768px) {
    padding: 10px;
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));  // Ajuste para telas menores
  }
`;

// Cartão de cada Pokémon
export const PokemonCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
  border: 2px solid #ccc;
  border-radius: 10px;
  background-color: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;  // Transição suave ao passar o mouse

  &:hover {
    transform: scale(1.05);  // Efeito de zoom ao passar o mouse
  }
`;

// Imagem do Pokémon
export const PokemonImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 50%;
  margin-bottom: 10px;
`;

// Nome do Pokémon
export const PokemonName = styled.p`
  font-weight: bold;
  font-size: 16px;
  text-align: center;
  margin: 5px 0;
  color: #333;
`;

// Tipos do Pokémon
export const PokemonTypes = styled.div`
  display: flex;
  gap: 5px;
  justify-content: center;
  flex-wrap: wrap;

  span {
    background-color: #ddd;
    padding: 5px 10px;
    border-radius: 5px;
    font-size: 12px;
    color: #333;
    text-transform: capitalize;
  }

  span.fire {
    background-color: #f08030;
    color: #fff;
  }

  span.water {
    background-color: #6890f0;
    color: #fff;
  }

  span.grass {
    background-color: #78c850;
    color: #fff;
  }
`;