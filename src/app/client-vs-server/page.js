import PokemonList from "./PokemonList";

export default function ClientVsServerPage() {
  return (
    <div className="p-8 font-san">
      <h1 className="text-3l font-bold mb-6">
        Client vs Server Components Demo
      </h1>
      <h2 className="text-2xl font-semibold mb-4">
        ServerComponent: Pokemon List
      </h2>
      <PokemonList />
    </div>
  );
}
