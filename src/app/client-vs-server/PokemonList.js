import CatchButton from "./CatchButton";

export default async function PokemonList() {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=5", {
    cache: "no-store",
  });
  // cache: 'no-store'
  // cache: 'force-cache'
  // cache: 'default'

  const data = await res.json();

  return (
    <ul className="space-y-4">
      {data.results.map((pokemon) => (
        <li
          key={pokemon.name}
          className="flex item-center justify-between p-4 border rounded shadow-sm"
        >
          <span className="font-semibold">{pokemon.name}</span>
          <CatchButton pokemonName={pokemon.name} />
        </li>
      ))}
    </ul>
  );
}
