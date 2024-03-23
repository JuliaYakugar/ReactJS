import { createSlice } from "@reduxjs/toolkit";
 
export const productSlice = createSlice({
    name: "productsList",
    initialState: {
        array: [
        {
            id: 1,
            name: 'Товар 1',
            description: 'Описание 1 товара',
            price: 2000, 
            available: true
        },
        {
            id: 2,
            name: 'Товар 2',
            description: 'Описание 2 товара',
            price: 1000, 
            available: false
        },
        {
            id: 3,
            name: 'Товар 3',
            description: 'Описание 3 товара',
            price: 200, 
            available: true
        },
        ],
    },
    reducers: {
        addProduct: (state, { payload: newItem }) => {
            console.log(newItem);
            if (state.array.some((item) => item.id === newItem.id)) {
                return;
            }
            state.array.push(newItem);
        },
        deleteProduct: (state, { payload: product }) => {
            console.log(product);
            const filteredArray = state.array.filter(
                (item) => item.id !== product.id
            );
            state.array = filteredArray;
        },
        toggleProductAvailability: (state, { payload: productId }) => {
            const product = state.array.find((item) => item.id === productId);
            if (product) {
                product.available = !product.available;
            }
        },
    },
});
 
export const { addProduct, deleteProduct, toggleProductAvailability } = productSlice.actions;
 
export default productSlice.reducer;