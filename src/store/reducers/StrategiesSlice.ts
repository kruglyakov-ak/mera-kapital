import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { StrategieDataset } from "../../types/StrategieDataset";

interface StrategiesState {
  title: string;
  usdData: StrategieDataset[];
  btcData: StrategieDataset[];
  isLoading: boolean;
}

const initialState: StrategiesState = {
  title: "",
  usdData: [],
  btcData: [],
  isLoading: false,
};

export const fetchStrategie = createAsyncThunk<StrategiesState, number>(
  "getStrategie",
  async (numberStratergie, { rejectWithValue }) => {
    const response = await fetch(
      `https://api.1282075-cv69336.tw1.ru/api/dashboard?st_num=${numberStratergie}`
    );
    const data = await response.json();
    if (response.status < 200 || response.status >= 300) {
      return rejectWithValue(data);
    }
    return data;
  }
);

export const StrategiesSlice = createSlice({
  name: "StrategiesSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchStrategie.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchStrategie.fulfilled, (state, action) => {
      state.isLoading = false;
      state.title = action.payload.title;
      state.usdData = action.payload.usdData;
      state.btcData = action.payload.btcData;
    });
    builder.addCase(fetchStrategie.rejected, (state, action) => {
      state.isLoading = false;
    });
  },
});

export default StrategiesSlice.reducer;
