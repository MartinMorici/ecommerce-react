import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: [],
    subtotal: 0,
    isOpen: false,
    isLoading: true
}

const cartSlice = createSlice({   
    name: 'cart',                    
    initialState,
    reducers: {
        addToCart: (state,action) => {
            const item = state.cartItems.find(item => item.id === action.payload.id)
            if(item){
                item.cant+= action.payload.cant
            }else{
                state.cartItems.push(action.payload)
            }
        },
        removeItem: (state,action) => {
            state.cartItems = state.cartItems.filter(item => item.id !== action.payload)
        },
        resetCart: (state,action) => {
            state.cartItems = []
        },
        toggleCart: (state,action) => {
            state.isOpen = action.payload
        }
    }
})

export const {addToCart, removeItem, resetCart, toggleCart} = cartSlice.actions

export default cartSlice.reducer  
                                  
																	