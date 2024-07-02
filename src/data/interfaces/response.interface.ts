import { TEntityArrayCollection } from "../types/types";

export interface ISwapiResponse {
  count: number;
  previous: string | null;
  next: string | null;
  results: TEntityArrayCollection;
}
