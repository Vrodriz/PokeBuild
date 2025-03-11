import React from "react";
import styled from "styled-components";


const Card = styled.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
  width: 250px;
  text-align: center;
`;

const PokemonImage = styled.img`
  width: 120px;
  height: 120px;
`;

const PokemonName = styled.h2`
  font-size: 18px;
  font-weight: bold;
`;

const PokemonType = styled.span`
  background: #ddd;
  padding: 5px 10px;
  border-radius: 5px;
  display: inline-block;
  margin: 5px;
`;

interface PokemonCardProps {
  name: string;
  image: string;
  types: string[];
}

const PokemonCard: React.FC<PokemonCardProps> = ({ name, image, types }) => {
  return (
    <Card>
      <PokemonImage src={image} alt={name} />
      <PokemonName>{name}</PokemonName>
      <div>
        {types.map((type, index) => (
          <PokemonType key={index}>{type}</PokemonType>
        ))}
      </div>
    </Card>
  );
};

export default PokemonCard;