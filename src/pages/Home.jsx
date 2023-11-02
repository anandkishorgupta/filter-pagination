
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Spinner from '../common/Spinner';
import Navbar from '../components/Navbar';
import ProductCard from '../components/ProductCard';
import SideBar from '../components/SideBar/Index';
import { filterProducts } from '../services/services';

const Home = () => {
    const dispatch = useDispatch();
    const { filteredProducts, searchQuery, loading, selectedCategory } = useSelector((state) => state.product);

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


    useEffect(() => {
        dispatch(filterProducts(searchQuery, selectedCategory));
    }, [searchQuery, selectedCategory, dispatch]);

    console.log("filtered products..............", filteredProducts)
    return (
        <div>
            <Navbar />
            <div className='flex flex-row gap-x-5 pt-20'>
                <SideBar
                />
                <div className='flex flex-col'>
                    <div>
                        <span>Page {currentPage} of {totalPages} {" "} ({filteredProducts.length} products)</span>
                    </div>
                    <div className='flex flex-row gap-x-3 flex-wrap w-11/12 mx-auto gap-y-5 items-center'>

                        {
                            !loading && currentProducts.length > 0 && currentProducts
                                .map((product, index) => (
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
                        }
                        {
                            loading &&
                            <div>
                                <Spinner />
                            </div>
                        }
                    </div>
                    <div className="pagination flex gap-x-2">
                        <button onClick={handlePrevPage} disabled={currentPage === 1}>
                            Prev
                        </button>
                        {
                            newArray?.map((page, index) => (
                                <li key={index}
                                    onClick={() => setCurrentPage(page)}
                                    className='cursor-pointer list-none'
                                >{page}</li>
                            ))
                        }
                        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
                            Next
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Home;
