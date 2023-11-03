import { useRef } from "react";
import { AiOutlineDown } from "react-icons/ai";
import useOnClickOutside from "../../hooks/useOnClickOutside";
const SortDropdown = ({ setIsOpenDropdown, isOpenDropdown, sortProducts }) => {
    const ref = useRef(null);
    console.log("ref", ref)
    useOnClickOutside(ref, () => setIsOpenDropdown(false))
    return (
        <div className="relative inline-block text-left">
            <div>
                <button type="button" className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold  shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 items-center text-gray-600"
                    onClick={() => setIsOpenDropdown(!isOpenDropdown)}
                >
                    Sort by
                    <AiOutlineDown
                        size={12}
                        className={`${isOpenDropdown ? "rotate-180" : ""} transition-transform duration-300 ease-in-out`}
                    />
                </button>
            </div>
            <div
                className={`${isOpenDropdown ? "max-h-96 block" : "h-0 hidden"} transition-all duration-500 ease-linear absolute right-0 z-10 w-36 origin-top-right rounded-md bg-white ring-1 ring-black ring-opacity-5 focus:outline-none shadow-2xl`}
                onClick={(e) => e.stopPropagation()}
                ref={ref}


            >
                <div className="py-1 divide-solid divide-y" >
                    <p className="text-gray-700 block px-4 py-2 text-sm cursor-pointer hover:bg-gray-50"
                        onClick={() => {
                            setIsOpenDropdown(!isOpenDropdown)
                            sortProducts('lowToHigh')
                        }

                        }
                    >price low to high</p>
                    <p className="text-gray-700 block px-4 py-2 text-sm cursor-pointer hover:bg-gray-50"
                        onClick={() => {
                            setIsOpenDropdown(!isOpenDropdown)
                            sortProducts('highToLow')
                        }
                        }
                    >price high to low</p>
                </div>
            </div>
        </div>
    )
}

export default SortDropdown