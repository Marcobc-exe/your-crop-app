import { createSlice } from "@reduxjs/toolkit"

interface AreasState {
  layersHighlights: []
}

const INITIAL_STATE: AreasState = {
  layersHighlights: []
}

export const areasMapSlice = createSlice({
  name: 'areas',
  initialState: INITIAL_STATE,
  reducers: {
    handleLayersHighlights: (state, { payload }) => {
      state.layersHighlights = payload;
    }
  }
});

export const { handleLayersHighlights } = areasMapSlice.actions;

export default areasMapSlice.reducer;