import { createSlice } from "@reduxjs/toolkit"
import { storeProduct } from "../../type"

interface NextState {
    productData: storeProduct[],
    favoriteData: storeProduct[],
    allProducts: storeProduct[],
    userInfo: null | string
}
const initialState: NextState = {
    productData: [],
    favoriteData: [],
    allProducts: [],
    userInfo: null
}

export const nextSlice = createSlice({
    name: "next",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const existingProduct = state.productData.find((item: storeProduct) => item._id === action.payload._id)

            if (existingProduct) {
                existingProduct.quantity += action.payload.quantity
            } else {
                state.productData.push(action.payload)
            }
        },
        favoriteData: (state, action) => {
            const existingProduct = state.favoriteData.find((item: storeProduct) => item._id === action.payload._id)

            if (existingProduct) {
                existingProduct.quantity += action.payload.quantity
            } else {
                state.favoriteData.push(action.payload)
            }
        },
        increaseQuantity: (state, action) => {
            const existingProduct = state.favoriteData.find((item: storeProduct) => item._id === action.payload._id)
            existingProduct && existingProduct.quantity++
        },
        decreaseQuantity: (state, action) => {
            const existingProduct = state.favoriteData.find((item: storeProduct) => item._id === action.payload._id)
            if (existingProduct?.quantity === 1) {
                existingProduct.quantity = 1;
            } else {
                existingProduct!.quantity--;
            }
        },
        deleteProduct: (state, action) => {
            state.productData = state.productData.filter((item) => item._id != action.payload)
        },
        resetCart: (state) => {
            state.productData = [];
        },
        addUser: (state, action) => {
            state.userInfo = action.payload;
        },
        removeUser: (state, action) => {
            state.userInfo = null
        },
        setAllProducts: (state, action) => {
            state.allProducts = action.payload
        }
    }
}
)

export const { addToCart, increaseQuantity, decreaseQuantity, deleteProduct, addUser, resetCart, removeUser, setAllProducts } = nextSlice.actions
export default nextSlice.reducer