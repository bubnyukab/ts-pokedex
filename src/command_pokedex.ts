import { State } from "./state.js";

export async function commandPokedex(state: State) {
  const pokemon = state.caughtPokemon;

  console.log("Your Pokedex:");
  for (const p in pokemon) {
    console.log(" -", p);
  }
}
