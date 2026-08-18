import { createInterface, type Interface } from "readline";
import { getCommands } from "./command_registry.js";
import { PokeAPI } from "./pokeapi.js";

export type CLICommand = {
  name: string;
  description: string;
  callback: (state: State) => Promise<void>;
};

export type State = {
  readline: Interface;
  commands: Record<string, CLICommand>;
  API: PokeAPI;
  nextLocationURL: string | null;
  prevLocationURL: string | null;
};

export function initState(): State {
  const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: "Pokedex > ",
  });
  const api = new PokeAPI();

  return {
    readline: rl,
    commands: getCommands(),
    API: api,
    nextLocationURL: null,
    prevLocationURL: null,
  };
}
