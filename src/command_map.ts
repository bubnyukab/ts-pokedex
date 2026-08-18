import { State } from "./state.js";

export async function commandMap(state: State) {
  const locations = await state.API.fetchLocations(
    state.nextLocationURL ?? undefined,
  );
  for (const location of locations.results) {
    console.log(location.name);
  }
  state.nextLocationURL = locations.next;
  state.prevLocationURL = locations.previous;
}

export async function commandMapback(state: State) {
  const locations = await state.API.fetchLocations(
    state.prevLocationURL ?? undefined,
  );
  for (const location of locations.results) {
    console.log(location.name);
  }
  state.nextLocationURL = locations.next;
  state.prevLocationURL = locations.previous;
}
