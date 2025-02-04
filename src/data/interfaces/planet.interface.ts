import { IBase } from "../../data/interfaces/base.interface";

export interface IPlanet extends IBase {
  name: string;
  diameter: string;
  rotation_period: string;
  orbital_period: string;
  gravity: string;
  population: string;
  climate: string;
  terrain: string;
  surface_water: string;
  residents: string[];
  films: string[];
  url: string;
  created: Date;
  edited: Date;
}
