import React from "react";
import SelectedTeam from "./components/PokemonGrid/PokemonTeam"; // Importa o componente que criamos

const App: React.FC = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "20px" }}>
      <h1 style={{ color: "#D32F2F" }}>Pokédex App</h1>
      <SelectedTeam />  
    </div>
  );
};

export default App;