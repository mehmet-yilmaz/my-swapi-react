import { IFilm } from "../interfaces/film.interface";
import { IPerson } from "../interfaces/person.interface";
import { IPlanet } from "../interfaces/planet.interface";
import { ISpecy } from "../interfaces/specy.interface";
import { IStarship } from "../interfaces/starship.interface";
import { IVehicle } from "../interfaces/vehicle.interface";

export type TCategory =
  | "films"
  | "people"
  | "planets"
  | "starships"
  | "species"
  | "vehicles";

export type TEntityCollection =
  | IPerson
  | IPlanet
  | IFilm
  | ISpecy
  | IStarship
  | IVehicle;
export type TEntityArrayCollection =
  | IPerson[]
  | IPlanet[]
  | IFilm[]
  | ISpecy[]
  | IStarship[]
  | IVehicle[];
