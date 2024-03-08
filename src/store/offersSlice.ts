import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";
import { IOffer, IOffersState } from "../types";



export const fetchOffers = createAsyncThunk(
  "offers/fetchOffers",
  async function (_, { rejectWithValue }) {
    const toastId = toast.loading("Loading...");
    try {
      const response = await axios(
        "http://deayloop.backend.test.starway.agency:8002/api/offers/all/"
      );
      if (response.statusText !== "OK") {
        throw new Error("Server Error!");
      }
      toast.success("succesfull loading");
      return response.data as IOffer[];
    } catch (error:any) {
      toast.error(`An error occured: ${error}`);
      return rejectWithValue(error.message);
    } finally {
      toast.dismiss(toastId);
    }
  }
);

const initialState: IOffersState = { offers: [], status: "idle", error: null };

const offersSlice = createSlice({
  name: "offers",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchOffers.pending, (state) => {
      state.status = "loading";
      state.error = null;
    });
    builder.addCase(fetchOffers.fulfilled, (state, action) => {
      state.status = "resolved";
      state.offers = action.payload;
    });
    builder.addCase(fetchOffers.rejected, (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    });
  },
});

export default offersSlice.reducer;
