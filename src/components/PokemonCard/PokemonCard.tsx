import { Card, PokemonImage, PokemonName, PokemonType } from "./PokemonCard.style";

const PokemonCard = ({ name, image, types }: { name: string; image: string; types: string[] }) => {
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