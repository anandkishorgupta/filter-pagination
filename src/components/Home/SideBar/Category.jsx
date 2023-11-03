import { useState } from "react";
import { AiOutlineDown } from 'react-icons/ai';
import { useDispatch, useSelector } from "react-redux";
import { setSelectedCategory } from "../../../redux/productSlice";
const Category = ({ availableCategories, categoryCounts }) => {
    const [categoryFlag, setCategoryFlag] = useState(false);
    const { selectedCategory } = useSelector((state) => state.product);

    const dispatch = useDispatch();
    const handleCategoryChange = (category) => {
        dispatch(setSelectedCategory(category));
    };
    const toggleCategory = () => {
        setCategoryFlag(!categoryFlag);
    };
    console.log("cat counts ...............", categoryCounts)
    return (
        <div className="py-5 border-b border-green-400 px-2">
            <div
                className="flex justify-between items-center cursor-pointer"
                onClick={toggleCategory}
            >
                <p className="text-green-700">Categories</p>
                <AiOutlineDown
                    size={12}
                    className={`${categoryFlag ? "rotate-180" : ""} transition-transform duration-300 ease-in-out`}
                />
            </div>
            <div
                className={`overflow-hidden transition-max-height duration-200 ease-linear ${categoryFlag ? "max-h-96" : "max-h-0"
                    }`}
            >
                {availableCategories.map((category, index) => (
                    <div key={index} className="flex flex-row gap-x-2 items-center py-1">
                        <input
                            type="radio"
                            id={`category-${index}`}
                            name="category"
                            value={category}
                            onChange={() => handleCategoryChange(category)}
                            checked={selectedCategory === category}
                            className="cursor-pointer"
                        />
                        <label htmlFor={`category-${index}`} className=" cursor-pointer">{category}
                            {" "}
                            ({categoryCounts[category]})
                        </label>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Category