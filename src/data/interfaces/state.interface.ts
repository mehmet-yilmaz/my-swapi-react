import { TEntityArrayCollection, TEntityCollection } from "../types/types";
import { ISwapiResponse } from "./response.interface";

export interface IState {
  isLoading: boolean;
  endpoint: string | null;
  error: string | null;
  count: number | null;
  previous: string | null;
  next: string | null;
  records: TEntityArrayCollection | null;
  detailElement: TEntityCollection | null;
  searchRecords: ISwapiResponse | null;
  headerField: string;
  mapFields: string[];
}
