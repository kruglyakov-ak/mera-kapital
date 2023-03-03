import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { StrategieDataset } from "../../types/StrategieDataset";

interface StrategiesData {
  title: string;
  data_usd: StrategieDataset[];
  data_btc: StrategieDataset[];
}

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

export const fetchStrategie = createAsyncThunk<StrategiesData, number>(
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
      state.btcData = action.payload.data_btc;
      state.usdData = action.payload.data_usd;
    });
    builder.addCase(fetchStrategie.rejected, (state, action) => {
      state.isLoading = false;
    });
  },
});

export default StrategiesSlice.reducer;
