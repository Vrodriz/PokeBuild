import styled from "styled-components";

export const Card = styled.div`
  background-color: #fff;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

export const PokemonImage = styled.img`
  width: 100px;
  height: 100px;
`;

export const PokemonName = styled.h3`
  font-size: 18px;
  color: #333;
`;

export const PokemonType = styled.span`
  background: #ddd;
  padding: 5px 10px;
  border-radius: 5px;
  display: inline-block;
  margin: 5px;
`;