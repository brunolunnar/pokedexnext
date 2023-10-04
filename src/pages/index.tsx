import { useEffect, useState } from "react";
import { PokeCard } from "@/componts/Card";
import { PokemonContainer } from "@/styles/components/layout";
import Image from "next/image";

export async function getStaticProps() {
  const maxPokemons = 600;
  const api = "https://pokeapi.co/api/v2/pokemon/";

  const res = await fetch(`${api}/?limit=${maxPokemons}`);
  const data = await res.json();

  // Adicione o índice do pokemon
  data.results.forEach((item:any, index:any) => {
    item.id = index + 1;
  });

  return {
    props: {
      pokemons: data.results,
    },
  };
}

export default function Home({ pokemons }: any) {
  const [filterText, setFilterText] = useState("");
  const [filterNumber, setFilterNumber] = useState(0);

  const handleFilterTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterText(e.target.value);
  };

  const handleFilterNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterNumber(parseInt(e.target.value));
  };

  const filteredPokemons = pokemons.filter((pokemon: any) => {
    const filterLowerCase = filterText.toLowerCase();
    return (
      (pokemon.name.toLowerCase().includes(filterLowerCase) ||
        pokemon.id.toString().includes(filterLowerCase)) &&
      (filterNumber === 0 || pokemon.id <= filterNumber)
    );
  });

  return (
    <>
      <h1>Pokedex next js</h1>
      <input
        type="text"
        placeholder="Pesquise aqui"
        value={filterText}
        onChange={handleFilterTextChange}
      />
      <input
        type="range"
        min="0"
        max="600"
        value={filterNumber}
        onChange={handleFilterNumberChange}
      />
      <p>
        {filterNumber === 0
          ? "Todos os Pokémon"
          : `Filtrar até o Pokémon #${filterNumber}`}
      </p>
      <PokemonContainer>
        {filteredPokemons.length > 0 ? (
          filteredPokemons.map((pokemon: any) => (
            <PokeCard key={pokemon.id} pokemon={pokemon} />
          ))
        ) : (
          <h1>Pokémon não encontrado</h1>
        )}
      </PokemonContainer>
    </>
  );
}
