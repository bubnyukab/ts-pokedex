import { createInterface, type Interface } from "readline";
import { getCommands } from "./command_registry.js";
import { PokeAPI, Pokemon } from "./pokeapi.js";

export type CLICommand = {
  name: string;
  description: string;
  callback: (state: State, ...args: string[]) => Promise<void>;
};

export type State = {
  readline: Interface;
  commands: Record<string, CLICommand>;
  caughtPokemon: Record<string, Pokemon>;
  API: PokeAPI;
  nextLocationURL: string;
  prevLocationURL: string;
};

export function initState(cacheInterval: number): State {
  const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: "Pokedex > ",
  });

  return {
    readline: rl,
    commands: getCommands(),
    caughtPokemon: {},
    API: new PokeAPI(cacheInterval),
    nextLocationURL: "",
    prevLocationURL: "",
  };
}
