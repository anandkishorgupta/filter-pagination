import { AiFillStar } from "react-icons/ai"
const ProductCard = ({ title, description, price, thumbnail, brand, category, rating, discountPercentage }) => {
  const oldPrice = (price * 100 / (100 - discountPercentage)).toFixed(2)
  return (
    <div className=" bg-white group relative lg:w-[300px]  shadow-md px-2 py-2 hover:translate-y-[-2%] transition-all duration-200 ease-linear rounded-md">
      <div className="relative w-full rounded-md   group-hover:opacity-75 lg:h-64">
        <img src={thumbnail} className="h-full w-full object-cover rounded-md" alt={title} />
        <div className="absolute flex flex-row gap-x-1 items-center bottom-0 bg-[#CBDCCB] rounded-sm translate-y-[-30%] translate-x-[10%] px-2">
          <AiFillStar className="text-yellow-500" />
          {rating}
        </div>
      </div>  
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <p className="text-sm text-gray-600 mb-2 ">by {brand}</p>
        <p className="text-sm text-gray-600 mb-2"> {description.split(" ").slice(0, 8).join(" ") + "....."}</p>

        <div className="flex flex-row gap-x-4 items-center">
          <p className="text-gray-700 font-semibold line-through">${oldPrice}</p>
          <p className="text-green-600 font-semibold">${price} (${discountPercentage}% off)</p>
        </div>
        <div className="mt-4">
          <span className="w-fit bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 flex items-center">
            {category}
          </span>
        </div>
      </div>
    </div>
  )
}

export default ProductCard



// oldprice-oldprice*dis/100=newPrice
// oldprice=newPrice*100/(100-dis)