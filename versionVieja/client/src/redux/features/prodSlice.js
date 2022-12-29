import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getProds = createAsyncThunk('prods/getProds', async () => {
  const resp = await fetch(
    process.env.REACT_APP_API_URL + '/products?populate=*',
    {
      headers: {
        Authorization: 'bearer ' + process.env.REACT_APP_API_TOKEN,
      },
    }
  );
  const data = await resp.json();
  return data.data;
});

const prodsSlice = createSlice({
  name: 'productos',
  initialState: {
    productos: [],
    featured: [],
    loading: false,
  },
  extraReducers: (builder) => {
    builder.addCase(getProds.fulfilled, (state, action) => {
      state.loading = false;
      state.productos = action.payload;
      state.featured = action.payload
        .filter((product) => product.attributes.newArrival === true)
        .slice(0, 3);
    });
    builder.addCase(getProds.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getProds.rejected, (state, action) => {
      state.loading = false;
    });
  },
});

export default prodsSlice.reducer;
