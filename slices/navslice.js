import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
  origin : null,
  destination : null,
  travelTime: null
}

export const navSlice = createSlice({
  name: 'nav',
  initialState,
  reducers: {
    setOrigin: (state , action) => {
        state.origin = action.payload;
    },
    setDestination: (state) => {
      state.destination = action.payload;
    },
    setTravelTime: (state, action) => {
      state.travelTime = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setOrigin , setDestination , setTravelTime} = navSlice.actions
export const selectOrigin = (state)=>state.nav.origin;
export const selectDestination = (state)=>state.nav.destination;
export const selectTravelTime = (state)=>state.nav.travelTime;

export default navSlice.reducer