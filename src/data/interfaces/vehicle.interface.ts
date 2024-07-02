import { IBase } from "../../../data/interfaces/base.interface";

export interface IVehicle extends IBase {
  name: string;
  model: string;
  vehicle_class: string;
  manufacturer: string;
  length: string;
  cost_in_credits: string;
  crew: string;
  passengers: string;
  max_athmospheric_speed: string;
  cargo_capacity: string;
  consumables: string;
  films: string[];
  pilots: string[];
  url: string;
  created: Date;
  edited: Date;
}
