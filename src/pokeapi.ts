export class PokeAPI {
  private static readonly baseURL = "https://pokeapi.co/api/v2";

  constructor() {}

  async fetchLocations(pageURL?: string): Promise<ShallowLocations> {
    try {
      const url = pageURL ? pageURL : `${PokeAPI.baseURL}/location-area/`;
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      return await response.json();
    } catch (err) {
      throw new Error(`Error fetching Location-area: ${err}`);
    }
  }

  async fetchLocation(locationName: string): Promise<Location> {
    try {
      const response = await fetch(`${PokeAPI.baseURL}/${locationName}/`);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const result = await response.json();
      console.log(result);
      return result;
    } catch (err) {
      throw new Error(`Error fetching Location: ${err}`);
    }
  }
}

export type ShallowLocations = {
  count: number;
  next: string | null;
  previous: string | null;
  results: Result[];
};

export type Location = {
  name: string;
};

type Result = {
  name: string;
  url: string;
};
