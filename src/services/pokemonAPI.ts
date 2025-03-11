export const fetchPokemon = async (id: number) => {  
    try {
        const res = await fetch (`https://pokeapi.co/api/v2/pokemon/${id}`);
        if (!res.ok) throw new Error("Falha ao buscar Pokémon");

        const data = await res.json();
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