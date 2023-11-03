
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Pagination from '../components/Home/Pagination';
import ProductCard from '../components/Home/ProductCard';
import SideBar from '../components/Home/SideBar/Index';
import SortDropdown from '../components/Home/SortDropdown';
import Spinner from '../components/common/Spinner';
import { setFilteredProducts } from '../redux/productSlice';
import { filterProducts } from '../services/services';

const Home = () => {
    const dispatch = useDispatch();
    const { filteredProducts, searchQuery, loading, selectedCategory, minRating, priceRange } = useSelector((state) => state.product);
    const [isOpenDropdown, setIsOpenDropdown] = useState(false)

    // pagination logic
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 7;
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };
    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };
    let newArray = Array.from({ length: totalPages }, (value, index) => index + 1);



    console.log("filtered products..............", filteredProducts)


    // SORTING
    const [sort, setSort] = useState(null);

    // Function to sort products based on price
    const sortProducts = (sortOrder) => {
        if (sortOrder === 'lowToHigh') {
            const sortedProducts = [...filteredProducts].sort((a, b) => a.price - b.price);
            dispatch(setFilteredProducts(sortedProducts));
        } else if (sortOrder === 'highToLow') {
            const sortedProducts = [...filteredProducts].sort((a, b) => b.price - a.price);
            dispatch(setFilteredProducts(sortedProducts));
        }
        setSort(sortOrder);
    };

    // Function to manage filtering and sorting
    const applyFilterAndSort = () => {
        dispatch(filterProducts(searchQuery, selectedCategory, minRating));
        if (sort) {
            sortProducts(sort);
        }
    };

    // When the search query, selected category, or dispatch function changes, apply filters and sort
    useEffect(() => {
        applyFilterAndSort();
        setCurrentPage(1)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchQuery, selectedCategory, minRating, dispatch]);

    return (
        <div className=' bg-[#ECECEC]'>
            <div className='flex flex-row gap-x-5 pt-10'>
                <SideBar />

                {/* product section */}
                <div className='flex flex-col w-full pr-2'>
                    <div className='flex justify-between items-center'>
                        <span>
                            Page {currentPage} of {totalPages}
                        </span>
                        {/* SORT */}
                        <div className=' flex flex-row gap-x-2 items-center'>
                            Found {filteredProducts.length} results
                            <SortDropdown
                                sortProducts={sortProducts}
                                isOpenDropdown={isOpenDropdown}
                                setIsOpenDropdown={setIsOpenDropdown}
                            />
                        </div>

                    </div>

                    <div
                        className=' mt-2 grid  lg:grid-cols-4  gap-y-5 gap-x-1  min-h-[100vh]'
                    >
                        {
                            !loading ? (
                                currentProducts.length > 0 ? (
                                    currentProducts.map((product, index) => (
                                        <div key={index}>
                                            <ProductCard
                                                title={product.title}
                                                description={product.description}
                                                price={product.price}
                                                thumbnail={product.thumbnail}
                                                brand={product.brand}
                                                category={product.category}
                                                rating={product.rating}
                                                images={product.images}
                                                discountPercentage={product.discountPercentage}
                                            />
                                        </div>
                                    ))
                                ) : (
                                    <div className='flex items-center justify-center'>product not found</div>
                                )
                            ) : (
                                <div className='w-full flex justify-center items-center mt-10'>
                                    <Spinner />
                                </div>
                            )
                        }

                    </div>


                    <div className='h-[40px]'></div>
                    {/* pagination */}
                    <Pagination
                        currentPage={currentPage}
                        handleNextPage={handleNextPage}
                        handlePrevPage={handlePrevPage}
                        newArray={newArray}
                        setCurrentPage={setCurrentPage}
                        totalPages={totalPages}
                    />
                </div>
            </div>
        </div>
    );
};

export default Home;
