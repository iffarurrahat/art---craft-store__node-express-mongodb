import PropTypes from "prop-types";
import Rating from "react-rating";
import { Link } from "react-router-dom";
import MyCraftUpdateModal from "./MyCraftUpdateModal";
import { useState } from "react";
import Swal from "sweetalert2";
import { Fade } from "react-awesome-reveal";

const MyCraftCard = ({ myEmailCraftData, setMyEmailCraftData }) => {
  const [isOpen, setIsOpen] = useState(false);

  const [selectedItem, setSelectedItem] = useState(null);

  const handleUpdateClick = (craft) => {
    setSelectedItem(craft);
    setIsOpen(true);
  };

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://art-and-craft-server-bice.vercel.app/crafts/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Craft has been deleted.",
                icon: "success",
              });

              const remaining = myEmailCraftData.filter(
                (craft) => craft._id !== _id
              );
              setMyEmailCraftData(remaining);
            }
          });
      }
    });
  };

  return (
    <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {myEmailCraftData.map((item) => (
        <div
          key={item._id}
          className="flex flex-col text-gray-700 shadow-md bg-clip-border rounded-xl"
        >
          <Fade delay={200}>
            <div className="mt-4 text-gray-700 bg-clip-border rounded-xl">
              <img
                src={item.image}
                alt="profile-picture"
                className="h-60 mx-auto"
              />
            </div>
            <div className="flex flex-col mt-6 text-gray-700 shadow-md bg-clip-border rounded-xl">
              <div className="px-6 pb-3">
                <div className="flex justify-between items-center mb-2 font-sans font-semibold text-xl text-blue-gray-900">
                  <h5>{item.item_name}</h5>
                  <p>
                    <Rating
                      initialRating={item.rating}
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
                </div>
                <div className="flex justify-between items-center">
                  <p className="block font-sans text-base antialiased font-semibold leading-relaxed text-inherit">
                    Processing Time: {item.processing_time}
                  </p>
                  <p className="block font-sans text-base antialiased leading-relaxed text-inherit font-semibold mt-1">
                    $ {item.price}
                  </p>
                </div>
                <p className="block font-sans text-sm antialiased font-medium leading-relaxed text-inherit">
                  Subcategory: {item.subcategory_Name}
                </p>
                <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                  {item.short_description}
                </p>
              </div>

              <Link to={`/crafts/${item._id}`}>
                <div className="px-6">
                  <button
                    className="align-middle select-none font-sans font-bold text-center capitalize transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg shadow-gray-900/10 hover:shadow-gray-900/20 focus:opacity-[0.85] active:opacity-[0.85] active:shadow-none block w-full bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100 border"
                    type="button"
                  >
                    View Details
                  </button>
                </div>
              </Link>
              <div className="px-6 my-2">
                <button
                  onClick={() => handleUpdateClick(item)}
                  className="align-middle select-none font-sans font-bold text-center capitalize transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg shadow-gray-900/10 hover:shadow-gray-900/20 focus:opacity-[0.85] active:opacity-[0.85] active:shadow-none block w-full bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100 border"
                  type="button"
                >
                  Update Content
                </button>
                <MyCraftUpdateModal
                  isOpen={isOpen}
                  setIsOpen={setIsOpen}
                  selectedItem={selectedItem}
                />
              </div>
              <div className="px-6 mb-3">
                <button
                  onClick={() => handleDelete(item._id)}
                  className="align-middle select-none font-sans font-bold text-center capitalize transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg shadow-gray-900/10 hover:shadow-red-900/20 focus:opacity-[0.85] active:opacity-[0.85] active:shadow-none block w-full bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100 border hover:bg-red-500 hover:text-white"
                  type="button"
                >
                  Delete
                </button>
              </div>
            </div>
          </Fade>
        </div>
      ))}
    </div>
  );
};

MyCraftCard.propTypes = {
  myEmailCraftData: PropTypes.array.isRequired,
  setMyEmailCraftData: PropTypes.func.isRequired,
};
export default MyCraftCard;
