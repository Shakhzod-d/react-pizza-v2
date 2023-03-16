import { createSlice } from "@reduxjs/toolkit";
import { fetchPizzas } from "./asyncActions";
import { PizzaSliceState, Status } from "./types";

// type FetchPizzaArgs = Record<string, string>;

const initialState: PizzaSliceState = {
  items: [],
  status: Status.LOADING, // loading | success | error
};



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
