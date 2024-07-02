import { createListenerMiddleware } from "@reduxjs/toolkit";
import {
  AppFail,
  CategoriesFetched,
  EntitiesFetched,
  EntityFetched,
  FetchCategories,
  FetchEntities,
  FetchEntity,
  NavigatePage,
  SearchCompleted,
  SelectCategory,
  StartSearch,
} from "./app.slice";
import { ICategory } from "../interfaces/category.interface";
import ConfigEnv from "../../assets/config/config.env.json";
import { IRootState } from "./app.reducer";
import { ISwapiResponse } from "../interfaces/response.interface";
import { TEntityCollection } from "../types/types";

export const AppEffects$ = createListenerMiddleware();

AppEffects$.startListening({
  actionCreator: FetchCategories,
  effect: async (action, effectListener) => {
    try {
      const response = await fetch(import.meta.env.VITE_API_ROOT);
      if (response) {
        const data: { [key: string]: string } = await response.json();
        if (data) {
          const categories: ICategory[] = [];
          Object.entries(data).forEach((entity) => {
            let category: ICategory = {
              headerField: "",
              mapFields: [],
              name: "",
              url: "",
            };
            switch (entity[0]) {
              case import.meta.env.VITE_FILMS_ROUTE:
                category = {
                  name: entity[0],
                  url: entity[1],
                  headerField: ConfigEnv.categories.films.headerField,
                  mapFields: ConfigEnv.categories.films.mapFields,
                };
                break;
              case import.meta.env.VITE_PEOPLE_ROUTE:
                category = {
                  name: entity[0],
                  url: entity[1],
                  headerField: ConfigEnv.categories.people.headerField,
                  mapFields: ConfigEnv.categories.people.mapFields,
                };
                break;
              case import.meta.env.VITE_PLANETS_ROUTE:
                category = {
                  name: entity[0],
                  url: entity[1],
                  headerField: ConfigEnv.categories.planets.headerField,
                  mapFields: ConfigEnv.categories.planets.mapFields,
                };
                break;
              case import.meta.env.VITE_SPECIES_ROUTE:
                category = {
                  name: entity[0],
                  url: entity[1],
                  headerField: ConfigEnv.categories.species.headerField,
                  mapFields: ConfigEnv.categories.species.mapFields,
                };
                break;
              case import.meta.env.VITE_STARSHIPS_ROUTE:
                category = {
                  name: entity[0],
                  url: entity[1],
                  headerField: ConfigEnv.categories.starships.headerField,
                  mapFields: ConfigEnv.categories.starships.mapFields,
                };
                break;
              case import.meta.env.VITE_VEHICLES_ROUTE:
                category = {
                  name: entity[0],
                  url: entity[1],
                  headerField: ConfigEnv.categories.vehicles.headerField,
                  mapFields: ConfigEnv.categories.vehicles.mapFields,
                };
                break;
              default:
                break;
            }
            if (category.mapFields.length) categories.push(category);
          });
          effectListener.dispatch(CategoriesFetched(categories));
        }
      } else
        effectListener.dispatch(
          AppFail(
            "Could not get the categories.\nPlease check your internet connection and ensure your API endpoint is valid."
          )
        );
    } catch (err) {
      effectListener.dispatch(
        AppFail(
          "Could not get the categories.\nPlease check your internet connection and ensure your API endpoint is valid."
        )
      );
    }
  },
});

AppEffects$.startListening({
  actionCreator: SelectCategory,
  effect: async (action, effectListener) => {
    try {
      const category = (<IRootState>(
        effectListener.getState()
      )).app.categories?.find((e) => {
        return e.name === action.payload.category;
      });
      effectListener.dispatch(
        NavigatePage({
          category: category ? category.name : action.payload.category,
          page: action.payload.page ? action.payload.page : 1,
        })
      );
    } catch (err) {
      effectListener.dispatch(AppFail(JSON.stringify(err)));
    }
  },
});

AppEffects$.startListening({
  actionCreator: NavigatePage,
  effect: async (action, effectListener) => {
    try {
      const category = (<IRootState>(
        effectListener.getState()
      )).app.categories?.find((e) => {
        return e.name === action.payload.category;
      });
      const endpoint = category
        ? category.url.slice(0, -1) + "?page=" + action.payload.page.toString()
        : import.meta.env.VITE_API_ROOT +
          action.payload.category +
          "?page=" +
          action.payload.page.toString();
      effectListener.dispatch(FetchEntities(endpoint));
    } catch (err) {
      effectListener.dispatch(AppFail(JSON.stringify(err)));
    }
  },
});

AppEffects$.startListening({
  actionCreator: FetchEntities,
  effect: async (action, effectListener) => {
    try {
      const response = await fetch(action.payload);
      if (response) {
        const data: ISwapiResponse = await response.json();
        effectListener.dispatch(EntitiesFetched(data));
      }
    } catch (err) {
      effectListener.dispatch(AppFail(JSON.stringify(err)));
    }
  },
});

AppEffects$.startListening({
  actionCreator: FetchEntity,
  effect: async (action, effectListener) => {
    try {
      const category = (<IRootState>(
        effectListener.getState()
      )).app.categories?.find((e) => {
        return e.name === action.payload.category;
      });
      const endpoint = category
        ? category.url + action.payload.id
        : import.meta.env.VITE_API_ROOT +
          action.payload.category +
          "/" +
          action.payload.id;
      const response = await fetch(endpoint);
      if (response) {
        const data: TEntityCollection = await response.json();
        effectListener.dispatch(EntityFetched(data));
      }
    } catch (err) {
      effectListener.dispatch(AppFail(JSON.stringify(err)));
    }
  },
});

AppEffects$.startListening({
  actionCreator: StartSearch,
  effect: async (action, effectListener) => {
    try {
      const endpoint =
        action.payload.url + "?search=" + action.payload.terms.trim();
      const response = await fetch(endpoint);
      if (response) {
        const data: ISwapiResponse = await response.json();
        effectListener.dispatch(SearchCompleted(data));
      }
    } catch (err) {
      effectListener.dispatch(AppFail(JSON.stringify(err)));
    }
  },
});
