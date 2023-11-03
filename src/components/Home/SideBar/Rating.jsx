
import { useState } from "react";
import { AiFillStar, AiOutlineDown } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { setMinRating } from "../../../redux/productSlice";

const Rating = () => {
  const dispatch = useDispatch();
  const [ratingFlag, setRatingFlag] = useState(false);
  const [selectedRating, setSelectedRating] = useState(null);

  const handleRatingChange = (rating) => {
    setSelectedRating(rating);
    dispatch(setMinRating(rating));
  };

  const ratingOptions = [
    { value: 1, label: "1 & above" },
    { value: 2, label: "2 & above" },
    { value: 3, label: "3 & above" },
    { value: 4, label: "4 & above" },
    { value: 4.5, label: "4.5 & above" },
  ];

  const toggleRating = () => {
    setRatingFlag(!ratingFlag);
  };

  return (
    <div className="py-5  border-b border-green-400 px-2">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={toggleRating}
      >
        <p className="text-green-700">Filter by rating</p>
        <AiOutlineDown
          size={12}
          className={`${ratingFlag ? "rotate-180" : ""} transition-transform duration-300 ease-in-out`}
        />
      </div>
      <div
        className={`overflow-hidden transition-max-height duration-200 ease-linear ${ratingFlag ? "max-h-96" : "max-h-0"}`}
      >
        {ratingOptions.map((option, index) => (
          <div
            key={index}
            className="flex flex-row gap-x-1 items-center cursor-pointer py-1"
          >
            <input
              type="radio"
              id={`rating-${option.value}`}
              name="rating"
              value={option.value}
              checked={selectedRating === option.value}
              onChange={() => handleRatingChange(option.value)}
              className="hidden cursor-pointer"
            />
            <label htmlFor={`rating-${option.value}`}>
              <span
                className={`flex items-center gap-x-1 ${selectedRating === option.value ? "text-yellow-500" : "text-gray-600"} rounded-sm cursor-pointer`}
              >
                <AiFillStar />
                {option.label}
              </span>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rating;
