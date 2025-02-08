import { createSlice } from "@reduxjs/toolkit";
import { API } from "../../constants/constant";

const initialState = { items: [] };

export const swapiSlice = createSlice({
  name: "swapi",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    clearItems: (state) => {
      state.items = [];
    },
  },
});
export const { addItem, clearItems } = swapiSlice.actions;

export const addSwapi = (text) => async (dispatch) => {
  try {
    const response = await fetch(`${API.URL_SWAPI}${text}`);

    const data = await response.json();

  dispatch(addItem({ id: +new Date(), text: data }));
  } catch (error) {
    console.error("Fetch error:", error);
  }
};

export const deleteSwapi = (id) => async (dispatch) => {
  dispatch(fetchStart());
  try {
    const response = await fetch(`${API.URL_SWAPI}${id}`, {
      method: "DELETE",
    });

    const data = await response.json();

     console.log("Response", dada)
  } catch (error) {
    console.error("Fetch error:", error);
  }
};

// export const getSwupi = () => async (dispatch) => {
//   try {
//     const response = await fetch(API.URL_SWUPI);

//     const data = await response.json();

//     dispatch(addItem({ id: data.id, text }));
//   } catch (e) {
//     console.error(e);
//   }
// };
