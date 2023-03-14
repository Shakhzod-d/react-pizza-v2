import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { CartItem } from "./cartSlice";

// type FetchPizzaArgs = Record<string, string>;

type Pizza = {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  sizes: number[];
  types: number[];
};

export enum Status {
  LOADING = "LOADING",
  SUCCESS = "SUCCESS",
  ERROR = "ERROR",
}

interface PizzaSliceState {
  items: Pizza[];
  status: Status; // loading | success | error
}

const initialState: PizzaSliceState = {
  items: [],
  status: Status.LOADING, // loading | success | error
};

export type SearchPizzaParams = {
  sortBy: string;
  order: string;
  category: string;
  search: string;
  currentPage: string;
};

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

const pizzaSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
    setSearchPizza(state, action) {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPizzas.pending, (state, action) => {
      state.status = Status.LOADING;
      state.items = [];
    });
    builder.addCase(fetchPizzas.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = Status.SUCCESS;
    });
    builder.addCase(fetchPizzas.rejected, (state, action) => {
      state.status = Status.ERROR;
      state.items = [];
    });
    // [fetchPizzas.pending]: (state, action) => {
    //   state.status = "loading";
    //   state.items = [];
    // },
    // [fetchPizzas.fulfilled]: (state, action) => {
    //   state.items = action.payload;
    //   state.status = "success";
    // },
    // [fetchPizzas.rejected]: (state, action) => {
    //   state.status = "error";
    //   state.items = [];
    // },
  },
});

export const { setItems, setSearchPizza } = pizzaSlice.actions;

export default pizzaSlice.reducer;
