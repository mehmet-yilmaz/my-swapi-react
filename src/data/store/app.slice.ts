import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialAppState } from "./app.state";
import { ICategory } from "../interfaces/category.interface";
import { ISwapiResponse } from "../interfaces/response.interface";
import { TEntityCollection } from "../types/types";

const appSlice = createSlice({
  name: "app",
  initialState: initialAppState,
  reducers: {
    AppFail: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    AppClearFail: (state) => {
      state.error = null;
    },
    FetchCategories: (state) => {
      state.isLoading = true;
    },
    CategoriesFetched: (state, action: PayloadAction<ICategory[]>) => {
      state.categories = action.payload;
      state.isLoading = false;
      if (state.reserveCategory) {
        const category = state.categories.find((e) => {
          return e.name === state.reserveCategory;
        });
        state.selectedCategory = category ? category : null;
        state.reserveCategory = null;
      }
    },
    SelectCategory: (
      state,
      action: PayloadAction<{ category: string; page?: number }>
    ) => {
      const category = state.categories?.find((e) => {
        return e.name === action.payload.category;
      });
      if (category) {
        state.selectedCategory = category;
        state.reserveCategory = null;
      } else {
        state.selectedCategory = null;
        state.reserveCategory = action.payload.category;
      }
    },
    ShowMenu: (state, action: PayloadAction<boolean>) => {
      if (state.showMenu !== action.payload) {
        state.showMenu = action.payload;
      }
    },
    NavigatePage: (
      state,
      action: PayloadAction<{ category: string; page: number }>
    ) => {
      if (action.payload.category && action.payload.page)
        state.isLoading = true;
      state.records = [];
      state.count = null;
      state.next = null;
      state.previous = null;
    },
    FetchEntities: (state, action: PayloadAction<string>) => {
      if (action.payload) {
        state.isLoading = true;
        state.records = [];
        state.count = null;
        state.next = null;
        state.previous = null;
      }
    },
    EntitiesFetched: (state, action: PayloadAction<ISwapiResponse>) => {
      state.count = action.payload.count;
      state.error = null;
      state.isLoading = false;
      state.next = action.payload.next;
      state.previous = action.payload.previous;
      state.records = action.payload.results;
    },
    FetchEntity: (
      state,
      action: PayloadAction<{ category: string; id: number }>
    ) => {
      if (action.payload) {
        state.isLoading = true;
        state.detailElement = null;
        const category = state.categories?.find((e) => {
          return e.name === action.payload.category;
        });
        state.selectedCategory = category ? category : null;
      }
    },
    EntityFetched: (state, action: PayloadAction<TEntityCollection>) => {
      state.detailElement = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    ReserveCategory: (state, action: PayloadAction<string>) => {
      state.reserveCategory = action.payload;
    },
    DeselectCategory: (state) => {
      state.selectedCategory = null;
    },
    StartSearch: (
      state,
      action: PayloadAction<{ url: string; terms: string }>
    ) => {
      if (action.payload) {
        state.isLoading = true;
        state.searchRecords = null;
        const category = state.categories?.find((e) => {
          return e.url === action.payload.url;
        });
        state.searchCategory = category ? category : null;
      }
    },
    SearchCompleted: (state, action: PayloadAction<ISwapiResponse>) => {
      state.isLoading = false;
      state.searchRecords = action.payload;
    },
  },
});
export const {
  AppFail,
  AppClearFail,
  FetchCategories,
  CategoriesFetched,
  SelectCategory,
  NavigatePage,
  ShowMenu,
  FetchEntities,
  FetchEntity,
  EntitiesFetched,
  EntityFetched,
  DeselectCategory,
  StartSearch,
  SearchCompleted,
} = appSlice.actions;
export default appSlice.reducer;
