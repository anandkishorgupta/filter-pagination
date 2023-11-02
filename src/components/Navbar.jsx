import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { useDispatch } from "react-redux";
import { setSearchQuery } from "../redux/productSlice";
import { filterProducts } from "../services/services";

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
        <div className="border border-red-200 w-full">
            <div className="flex items-center justify-between w-11/12 mx-auto">
                <div>
                    MarketZone
                </div>
                <div>
                    <div className="flex items-center relative">
                        <CiSearch className="absolute top-0 left-0 translate-x-[50%] translate-y-[62%]" />
                        <input
                            type="text"
                            className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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























// import { CiSearch } from "react-icons/ci"
// import { useDispatch, useSelector } from "react-redux"
// import { setSearchQuery } from "../redux/productSlice"
// const Navbar = () => {
//     const { searchQuery } = useSelector((state) => state.product)
//     const dispatch = useDispatch()
//     // useEffect(() => {
//     //     function fun() {
//     //         filterProducts(products, searchQuery, dispatch)
//     //     }
//     //     fun()
//     // }, [searchQuery])
//     return (
//         <div className="border border-red-200 w-full">
//             <div className=" flex items-center justify-between w-11/12 mx-auto">
//                 { /* left side */}
//                 <div className="">
//                     MarketZone
//                 </div>
//                 {/* right side */}
//                 <div>
//                     <div className="flex items-center relative">
//                         <CiSearch className="absolute top-0 left-0 translate-x-[50%] translate-y-[62%]" />
//                         <input type="text" className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                             placeholder="search product"
//                             value={searchQuery}
//                             // onChange={(event) => dispatch(setSearchQuery(event.target.value))}
//                             onChange={(event) => dispatch(setSearchQuery(event.target.value))}
//                         />
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Navbar



// import { CiSearch } from 'react-icons/ci';
// import styled from 'styled-components';

// const NavbarContainer = styled.div`
//   border: 1px solid #fcd5ce;
//   width: 100%;
// `;

// const FlexContainer = styled.div`
//   display: flex;
//   justify-content: space-between;
//   width: 92%;
//   margin: 0 auto;
// `;

// const LeftSide = styled.div``;

// const RightSide = styled.div`
//   display: flex;
//   align-items: center;
//   position: relative;
// `;

// const SearchIcon = styled(CiSearch)`
//   position: absolute;
//   top: 0;
//   left: 0;
//   transform: translate(-50%, 62%);
// `;

// const SearchInput = styled.input`
//   width: 100%;
//   border: 0;
//   border-radius: 0.375rem;
//   padding: 0.375rem 1rem;
//   color: #1a202c;
//   outline: none;
//   border: 1px solid #d1d5db;
//   &::placeholder {
//     color: #9ca3af;
//   }
//   &:focus {
//     outline: 2px solid #4f46e5;
//     border: 1px solid #a3bffa;
//   }
// `;

// const Navbar = () => {
//     return (
//         <NavbarContainer>
//             <FlexContainer>
//                 <LeftSide>MarketZone</LeftSide>
//                 <RightSide>
//                     <SearchIcon />
//                     <SearchInput type="text" placeholder="Search product" />
//                 </RightSide>
//             </FlexContainer>
//         </NavbarContainer>
//     );
// };

// export default Navbar;
