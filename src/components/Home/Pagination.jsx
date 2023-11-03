import React from 'react'

const Pagination = ({currentPage,handlePrevPage,newArray,setCurrentPage,totalPages,handleNextPage}) => {
    return (
        <div className="flex items-center justify-center mb-10">
            <button
                className={`${currentPage === 1 ? "opacity-0" : "opacity-100"} mx-1 flex h-9 w-9 items-center justify-center rounded-full border border-blue-gray-100 bg-transparent p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-light-300`}
                onClick={handlePrevPage}
                disabled={currentPage === 1}

            >
                prev
            </button>

            {
                newArray?.map((page, index) => (
                    <li
                        key={index}
                        className={`${currentPage === page ? "bg-pink-500 text-white" : ""} cursor-pointer mx-1 flex h-9 w-9 items-center justify-center rounded-full  p-0 text-sm  shadow-md transition duration-150 ease-in-out`}
                        onClick={() => setCurrentPage(page)}
                    >

                        {page}
                    </li>
                ))
            }

            <button
                className={`${currentPage == totalPages ? "opacity-0" : "opacity-100"} mx-1 flex h-9 w-9 items-center justify-center rounded-full border border-blue-gray-100 bg-transparent p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-light-300`}
                onClick={handleNextPage}
                disabled={currentPage === totalPages}

            >
                next
            </button>
        </div>
    )
}

export default Pagination