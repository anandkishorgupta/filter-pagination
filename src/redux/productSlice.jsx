import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    allProducts: [],
    filteredProducts: [],
    searchQuery: "",
    loading: false,
    selectedCategory: "",
    minRating: null,
    priceRange: []
};

const productSlice = createSlice({
    name: "product",
    initialState: initialState,
    reducers: {
        setAllProducts(state, action) {
            state.allProducts = action.payload;
        },
        setFilteredProducts(state, action) {
            state.filteredProducts = action.payload;
        },
        setSearchQuery(state, action) {
            state.searchQuery = action.payload;
        },
        setLoading(state, action) {
            state.loading = action.payload
        },
        setSelectedCategory(state, action) {
            state.selectedCategory = action.payload
        },
        setMinRating(state, action) {
            state.minRating = action.payload
        },
        setPriceRange(state, action) {
            state.priceRange = action.payload
        }
    }
});

export const { setAllProducts, setSearchQuery, setLoading, setSelectedCategory, setFilteredProducts, setMinRating,setPriceRange } = productSlice.actions;
export default productSlice.reducer;
