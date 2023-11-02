import axios from 'axios';
import { setAllProducts, setFilteredProducts, setLoading } from '../redux/productSlice';

export const filterProducts = (query, selectedCategory) => {
    return async (dispatch) => {
        try {
            dispatch(setLoading(true))
            let result = await axios.get("https://dummyjson.com/products");
            let allProducts = result.data.products;
            let filteredProducts = result.data.products;
            dispatch(setAllProducts(allProducts))
            if (query) {
                filteredProducts = filteredProducts.filter((item) =>
                    item.title.toLowerCase().includes(query.toLowerCase()) ||
                    item.category.toLowerCase().includes(query.toLowerCase()) ||
                    item.brand.toLowerCase().includes(query.toLowerCase())
                );
            }
            // category filter
            if (selectedCategory && selectedCategory !== 'All') {
                filteredProducts = filteredProducts.filter(item => item.category.toLowerCase() === selectedCategory.toLowerCase());
            }
            dispatch(setFilteredProducts(filteredProducts));
            dispatch(setLoading(false))
        } catch (error) {
            // Handle error if needed
            console.error('Error filtering products:', error);
            dispatch(setLoading(false))

        }
    };
};
