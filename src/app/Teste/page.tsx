'use client';

import React from "react";
import { usePokemon } from "@/hooks/use-pokemon";

export default function PokemonPage() {
  const { data, isLoading, isError, error } = usePokemon();

  if (isLoading) return <p>Carregando pokémon...</p>;
  if (isError)
    return <p className="text-red-600">Erro: {error?.message}</p>;

  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">Pokémon da 1ª Geração</h1>
      <ul className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {data!.results.map((poke) => (
          <li
            key={poke.name}
            className="border rounded-lg p-2 text-center hover:shadow"
          >
            {poke.name}
          </li>
        ))}
      </ul>
    </main>
  );
}
