import { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import Category from "./Category";
import Rating from "./Rating";

const SideBar = () => {
    const { allProducts, filteredProducts, selectedCategory } = useSelector((state) => state.product);

    const [availableCategories, setAvailableCategories] = useState([]);

    const [categoryCounts, setCategoryCounts] = useState({});

    useEffect(() => {
        const uniqueCategories = [...new Set(allProducts.map(product => product.category))];
        setAvailableCategories(uniqueCategories);
        const counts = {};
        uniqueCategories.forEach(category => {
            const count = allProducts.filter(product => product.category === category).length;
            counts[category] = count;
        });
        setCategoryCounts(counts);
    }, [allProducts]);

    console.log(categoryCounts)

    return (
        <div className="sidebar-container w-[280px]   bg-white rounded-xl py-6 px-4 ml-5">
            <div className="flex justify-between">
                <p>Filters</p>
                <p className="text-green-700 cursor-pointer">Clear all</p>
            </div>
            <Category
                availableCategories={availableCategories}
                categoryCounts={categoryCounts}
            />
            <Rating />
        </div>
    );
};
export default SideBar;
