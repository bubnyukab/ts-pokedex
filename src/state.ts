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
    API: new PokeAPI(cacheInterval),
    nextLocationURL: "",
    prevLocationURL: "",
  };
}
