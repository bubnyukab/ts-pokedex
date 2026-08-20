import { State } from "./state.js";

export async function commandMap(state: State) {
  const locations = await state.API.fetchLocations(state.nextLocationURL);

  state.nextLocationURL = locations.next;
  state.prevLocationURL = locations.previous;

  for (const location of locations.results) {
    console.log(location.name);
  }
}

export async function commandMapback(state: State) {
  if (!state.prevLocationURL) {
    console.log("you're on the first page");
  }

  const locations = await state.API.fetchLocations(state.prevLocationURL);

  state.nextLocationURL = locations.next;
  state.prevLocationURL = locations.previous;

  for (const location of locations.results) {
    console.log(location.name);
  }
}
