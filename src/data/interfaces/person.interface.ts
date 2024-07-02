import { IBase } from "./base.interface";

export interface IPerson extends IBase {
  name: string;
  birth_year: string;
  eye_color: string;
  gender: "Male" | "Female" | "n/a" | "unknown";
  hair_color: string;
  height: number;
  mass: number;
  skin_color: string;
  homeworld: string;
  films: string[];
  species: string[];
  starships: string[];
  vehicles: string[];
  url: string;
  created: Date;
  edited: Date;
}
