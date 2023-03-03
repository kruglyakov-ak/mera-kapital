import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { StrategieDataset } from "../../types/StrategieDataset";

interface StrategiesState {
  title: string;
  usdData: StrategieDataset[];
  btcData: StrategieDataset[];
}

const initialState: StrategiesState = {
  title: "",
  usdData: [],
  btcData: [],
};

export const StrategiesSlice = createSlice({
  name: "StrategiesSlice",
  initialState,
  reducers: {},
});

export default StrategiesSlice.reducer;
