import axios, { AxiosError } from "axios";
import { useQuery } from "@tanstack/react-query";

export interface Pokemon {
  name: string;
  url: string;
}

export interface PokemonListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Pokemon[];
}

export function usePokemon() {
  return useQuery<PokemonListResponse, AxiosError>({
    queryKey: ["pokemon-list"],
    queryFn: async () => {
      const { data } = await axios.get<PokemonListResponse>(
        "https://pokeapi.co/api/v2/pokemon?limit=151"
      );
      return data;
    },
    staleTime: 1000 * 60 * 5, 
    retry: 1,
  });
}
