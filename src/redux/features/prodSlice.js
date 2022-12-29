import { createSlice } from '@reduxjs/toolkit';



const prodsSlice = createSlice({
  name: 'productos',
  initialState: {
    productos: [],
    featured: [],
    loading: false,
  },
  reducers: {
    setProds: (state,action) => {
      state.productos = action.payload
       state.featured = action.payload
       .filter((product) => product.featured === 'yes')
       .slice(0, 3);
    },
}

});


export const {setProds} = prodsSlice.actions
export default prodsSlice.reducer;
