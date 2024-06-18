import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { mockData } from "../../mockData";

interface InventoryData {
  id: number;
  date: string;
  newInventory: number;
  newTotalMSRP: number;
  newAvgMSRP: number;
  usedInventory: number;
  usedTotalMSRP: number;
  usedAvgMSRP: number;
  cpoInventory: number;
  cpoTotalMSRP: number;
  cpoAvgMSRP: number;
}

interface InventoryState {
  data: InventoryData[];
  filter: {
    make: string[];
    duration: string;
  };
}

const initialState: InventoryState = {
  data: mockData,
  filter: {
    make: [],
    duration: "Last month",
  },
};

const inventorySlice = createSlice({
  name: "inventory",
  initialState,
  reducers: {
    setInventoryData(state, action: PayloadAction<InventoryData[]>) {
      state.data = action.payload;
    },
    setFilter(
      state,
      action: PayloadAction<{ make: string[]; duration: string }>
    ) {
      state.filter = action.payload;
    },
  },
});

export const { setInventoryData, setFilter } = inventorySlice.actions;
export default inventorySlice.reducer;
