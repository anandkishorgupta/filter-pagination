import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { useDispatch } from "react-redux";
import { setSearchQuery } from "../../redux/productSlice";
import { filterProducts } from "../../services/services";

const Navbar = () => {
    // const { searchQuery } = useSelector((state) => state.product);
    const dispatch = useDispatch();
    const [input, setInput] = useState("")


    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            if (input) {
                dispatch(setSearchQuery(event.target.value));
                dispatch(filterProducts(event.target.value)); // You'll need to dispatch this action (filterProducts) to perform the search.
            }

        }
    };

    return (
        <div className="border  w-full bg-white py-3">
            <div className="flex items-center gap-x-5 w-11/12 mx-auto">
                <div>
                    MarketZone
                </div>
                <div>
                    <div className="flex items-center relative">
                        <CiSearch className="absolute top-0 right-0 translate-x-[-65%] translate-y-[65%] text-gray-500" />
                        <input
                            type="text"
                            className="block w-[400px] rounded-xl py-1.5 pl-5 pr-10 text-gray-900  placeholder:text-gray-400
                              sm:text-sm sm:leading-6 border border-gray-400 outline-none"
                            placeholder="Search and hit enter"
                            value={input}
                            onChange={(event) => setInput(event.target.value)}
                            onKeyDown={handleKeyPress}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;


