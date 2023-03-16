import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Pizza, SearchPizzaParams } from "./types";

export const fetchPizzas = createAsyncThunk<Pizza[], SearchPizzaParams>(
  "pizza/fetchPizzasStatus",
  async (params) => {
    const { sortBy, order, category, search, currentPage } = params;

    const url = `/api/pizzas`;
    const { data } = await axios.get(url);

    // TODO: fix params later
    return data.pizzas as Pizza[];
  }
);
