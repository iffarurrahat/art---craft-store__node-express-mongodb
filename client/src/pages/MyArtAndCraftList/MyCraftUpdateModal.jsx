import PropTypes from "prop-types";
import Modal from "../../components/ui/Modal";
import toast from "react-hot-toast";

const MyCraftUpdateModal = ({ isOpen, setIsOpen, selectedItem }) => {
  const {
    customization,
    image,
    item_name,
    making_details,
    price,
    processing_time,
    rating,
    short_description,
    stockStatus,
    subcategory_Name,
    _id,
  } = selectedItem || {};

  const onCancel = (e) => {
    e.preventDefault();
    setIsOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const item_name = form.name.value;
    const subcategory_Name = form.subcategory.value;
    const processing_time = form.time.value;
    const stockStatus = form.status.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const customization = form.customization.value;
    const image = form.image.value;
    const short_description = form.shortDes.value;
    const making_details = form.makingDetails.value;

    const updateCraft = {
      item_name,
      subcategory_Name,
      processing_time,
      stockStatus,
      price,
      rating,
      customization,
      image,
      short_description,
      making_details,
    };

    fetch(`https://art-and-craft-server-bice.vercel.app/crafts/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateCraft),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Craft update successful");
        }
      })
      .catch((error) => {
        toast.error("Error:", error);
      });

    //modal close
    setIsOpen(false);
  };

  return (
    <Modal
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      title={"Update Craft Details 😀"}
    >
      <form onSubmit={handleSubmit} className="w-full">
        {/* item_name, subCategory */}
        <div className="md:flex mx-auto gap-5 w-full md:w-11/12 lg:w-3/4">
          <div className="w-full">
            <label className="mb-1 text-sm">Item Name</label> <br />
            <input
              defaultValue={item_name}
              required
              type="text"
              name="name"
              placeholder="Item Name"
              className="border w-full px-4 py-2 rounded placeholder:text-xs focus:outline-none"
            />
          </div>
          <div className="w-full mt-3 md:mt-0">
            <label className="mb-1 text-sm">Subcategory Name</label> <br />
            <input
              defaultValue={subcategory_Name}
              required
              type="text"
              name="subcategory"
              placeholder="Subcategory Name"
              className="border w-full px-4 py-2 rounded placeholder:text-xs focus:outline-none "
            />
          </div>
        </div>

        {/* processing_time, stockStatus */}
        <div className="md:flex mx-auto gap-5 w-full md:w-11/12 lg:w-3/4 my-3">
          <div className="w-full">
            <label className="mb-1 text-sm">Processing Time</label> <br />
            <input
              defaultValue={processing_time}
              required
              type="text"
              name="time"
              placeholder="days or weeks, month"
              className="border w-full px-4 py-2 rounded placeholder:text-xs focus:outline-none"
            />
          </div>
          <div className="w-full mt-3 md:mt-0">
            <label className="mb-1 text-sm">Stock Status</label> <br />
            <input
              defaultValue={stockStatus}
              required
              type="text"
              name="status"
              placeholder="Made to order, others"
              className="border w-full px-4 py-2 rounded placeholder:text-xs focus:outline-none "
            />
          </div>
        </div>

        {/* price, rating, customization */}
        <div className="md:flex mx-auto gap-5 w-full md:w-11/12 lg:w-3/4 my-3">
          <div className="w-full">
            <label className="mb-1 text-sm">Price</label> <br />
            <input
              defaultValue={price}
              required
              type="text"
              name="price"
              placeholder="Price"
              className="border w-full px-4 py-2 rounded placeholder:text-xs focus:outline-none"
            />
          </div>
          <div className="w-full mt-3 md:mt-0">
            <label className="mb-1 text-sm">Rating</label> <br />
            <input
              min={0}
              max={5}
              step={0.01}
              defaultValue={rating}
              required
              type="number"
              name="rating"
              placeholder="Rating"
              className="border w-full px-4 py-2 rounded placeholder:text-xs focus:outline-none "
            />
          </div>
          <div className="w-full mt-3 md:mt-0">
            <label className="mb-1 text-sm">Customization</label> <br />
            <input
              defaultValue={customization}
              required
              type="text"
              name="customization"
              placeholder="Customization- Yes / No"
              className="border w-full px-4 py-2 rounded placeholder:text-xs focus:outline-none "
            />
          </div>
        </div>

        {/* Image */}
        <div className="md:flex mx-auto gap-5 w-full md:w-11/12 lg:w-3/4 my-3">
          <div className="w-full mt-3 md:mt-0">
            <label className="mb-1 text-sm">Image URL</label> <br />
            <input
              defaultValue={image}
              required
              type="text"
              name="image"
              placeholder="Image"
              className="border w-full px-4 py-2 rounded placeholder:text-xs focus:outline-none "
            />
          </div>
        </div>

        {/* Short Description */}
        <div className="md:flex mx-auto gap-5 w-full md:w-11/12 lg:w-3/4 my-3">
          <div className="w-full mt-3 md:mt-0">
            <label className="mb-1 text-sm">Short Description</label> <br />
            <textarea
              defaultValue={short_description}
              required
              name="shortDes"
              placeholder="Short Description"
              className="border w-full px-4 py-2 rounded placeholder:text-xs focus:outline-none "
            ></textarea>
          </div>
        </div>
        {/* Making Details */}
        <div className="md:flex mx-auto gap-5 w-full md:w-11/12 lg:w-3/4 my-3 ">
          <div className="w-full mt-3 md:mt-0">
            <label className="mb-1 text-sm">Making Details</label> <br />
            <textarea
              defaultValue={making_details}
              required
              name="makingDetails"
              placeholder="Making Details"
              className="border w-full px-4 py-2 rounded placeholder:text-xs focus:outline-none "
            ></textarea>
          </div>
        </div>

        <div className="text-white mt-5 flex gap-5 w-full md:w-11/12 lg:w-3/4 mx-auto">
          <button
            onClick={onCancel}
            className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
          >
            Cancel
          </button>
          <input
            type="submit"
            value="Submit"
            className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-green-500 text-white shadow-md shadow-blue-gray-500/10 hover:shadow-lg hover:shadow-blue-gray-500/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none block hover:scale-[1.02] focus:scale-[1.02] active:scale-100 cursor-pointer"
          />
        </div>
      </form>
    </Modal>
  );
};

MyCraftUpdateModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
  selectedItem: PropTypes.object,
};
export default MyCraftUpdateModal;
