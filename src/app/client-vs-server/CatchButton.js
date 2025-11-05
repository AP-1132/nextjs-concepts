"use client";

import { useState } from "react";

export default function CatchButton({ pokemonName }) {
  const [caught, setCaught] = useState(false);
  return (
    <button
      onClick={() => setCaught(!caught)}
      className={`mt-2 px-4 py-2 rounded ${
        caught ? `bg-green-500 text white` : `bg-blue-500 text-white`
      }hover:opacity-80 transition`}
    >
      {caught ? `${pokemonName} Caught!` : `Catch ${pokemonName}`}
    </button>
  );
}
