import PropTypes from "prop-types";
import { Zoom } from "react-awesome-reveal";
import Rating from "react-rating";
import { Link } from "react-router-dom";

const AllCraftsCard = ({ craft }) => {
  const { _id, image, item_name, price, short_description, rating, type } =
    craft || {};

  const link = type === "sub" ? `/subCrafts/${_id}` : `/crafts/${_id}`;

  return (
    <>
      <Zoom delay={200}>
        <div className="flex flex-col text-gray-700 shadow-md bg-clip-border rounded-xl">
          <div className="relative mt-4 text-gray-700 bg-clip-border h-80 w-60 mx-auto rounded-xl">
            <img src={image} alt="profile-picture" className="h-80 mx-auto" />
          </div>
          <div className="flex flex-col mt-6 text-gray-700 shadow-md bg-clip-border rounded-xl">
            <div className="px-6 py-2">
              <div className="flex justify-between items-center mb-2 font-sans font-semibold text-xl text-blue-gray-900">
                <h5>{item_name}</h5>
                <p>${price}</p>
              </div>
              <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                {short_description}
              </p>
              <p className="block font-sans text-base antialiased leading-relaxed text-inherit font-bold mt-1">
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
            </div>

            <Link to={link}>
              <div className="p-6 pt-0">
                <button
                  className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-primary text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                  type="button"
                >
                  Read More
                </button>
              </div>
            </Link>
          </div>
        </div>
      </Zoom>
    </>
  );
};

AllCraftsCard.propTypes = {
  craft: PropTypes.object.isRequired,
};
export default AllCraftsCard;
