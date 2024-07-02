import { IBase } from "../../../data/interfaces/base.interface";

export interface IStarship extends IBase {
  name: string;
  model: string;
  starship_class: string;
  manufacturer: string;
  cost_in_credits: string | number;
  length: string;
  crew: number | string;
  passengers: string | number;
  max_athmospheric_speed: string;
  hyperdrive_rating: string;
  MGLT: string;
  cargo_capacity: string;
  consumables: string;
  films: string[];
  pilots: string[];
  url: string;
  edited: Date;
  created: Date;
}
