import { ICategory } from "../interfaces/category.interface";
import { IState } from "../interfaces/state.interface";

export interface IAppState extends IState {
  showMenu: boolean;
  categories: ICategory[] | null;
  selectedCategory: ICategory | null;
  reserveCategory: string | null;
  searchCategory: ICategory | null;
}

export const initialAppState: IAppState = {
  error: null,
  showMenu: false,
  categories: null,
  selectedCategory: null,
  searchCategory: null,
  isLoading: false,
  count: null,
  detailElement: null,
  reserveCategory: null,
  searchRecords: null,
  endpoint: null,
  headerField: "",
  mapFields: [],
  next: null,
  previous: null,
  records: null,
};
