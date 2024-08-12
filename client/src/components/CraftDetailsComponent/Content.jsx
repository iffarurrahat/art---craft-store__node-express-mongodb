import { useLoaderData } from "react-router-dom";
import { FaSitemap } from "react-icons/fa";
import { BiCategory } from "react-icons/bi";
import { MdOutlineAccessTime } from "react-icons/md";
import { FaCreditCard } from "react-icons/fa";
import { RiStockFill } from "react-icons/ri";
import Rating from "react-rating";

import SimilarCraftsCard from "../SubCraftsSection/SimilarCraftsCard";

const Content = () => {
  const craft = useLoaderData();
  const {
    image,
    item_name,
    subcategory_Name,
    making_details,
    customization,
    processing_time,
    rating,
    stockStatus,
    similar_subcategory_data: crafts,
  } = craft || {};

  const tooltipAttributes = {
    "data-tooltip-id": "my-tooltip",
    "data-tooltip-place": "top",
  };

  return (
    <>
      <div className="shadow py-5">
        <img src={image} alt="" className="h-full w-full md:w-96 mx-auto" />
        <div className="px-5 sm:px-8 md:px-10 lg:px-12 mt-10 space-y-3">
          <p
            {...tooltipAttributes}
            data-tooltip-content={rating}
            className="block font-sans text-base antialiased leading-relaxed text-inherit font-bold mt-1 max-w-fit"
          >
            <Rating
              initialRating={rating}
              readonly
              emptySymbol={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 text-yellow-400"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                  />
                </svg>
              }
              fullSymbol={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 text-yellow-400"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
              }
            />
          </p>
          <p
            {...tooltipAttributes}
            data-tooltip-content="Item Name"
            className="flex items-center gap-2 max-w-fit"
          >
            <FaSitemap />
            {item_name}
          </p>
          <p
            {...tooltipAttributes}
            data-tooltip-content="Subcategory Name"
            className="flex items-center gap-2 max-w-fit"
          >
            <BiCategory />
            {subcategory_Name}
          </p>

          <p
            {...tooltipAttributes}
            data-tooltip-content="Customization"
            className="flex items-center gap-2 capitalize max-w-fit"
          >
            <FaCreditCard /> Customization:{" "}
            {customization === true ? "Yes it is" : customization}
          </p>
          <p
            {...tooltipAttributes}
            data-tooltip-content="Processing Time"
            className="flex items-center gap-2 max-w-fit"
          >
            <MdOutlineAccessTime /> Processing Time: {processing_time}
          </p>
          <p
            {...tooltipAttributes}
            data-tooltip-content="Stock Status"
            className="flex items-center gap-2  max-w-fit"
          >
            <RiStockFill /> Stock Status: {stockStatus}
          </p>
        </div>
        <p className="leading-8 px-5 sm:px-8 md:px-10 lg:px-12 mt-4 md:mt-8">
          {making_details}
        </p>
      </div>

      {/* Display similar subcategory data */}
      {crafts && (
        <div className="px-5 sm:px-8 md:px-10 lg:px-12  md:mt-8 space-y-5 pt-10 sm:pt-12 lmd:pt-16 lg:pt-20">
          <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold pb-5">
            Similar Subcategory Crafts
          </h3>
          {crafts.length > 0 && (
            <div className="grid grid-cols-1 space-y-10">
              {crafts.map((subCraft, idx) => (
                <SimilarCraftsCard key={idx} craft={subCraft} />
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Content;
