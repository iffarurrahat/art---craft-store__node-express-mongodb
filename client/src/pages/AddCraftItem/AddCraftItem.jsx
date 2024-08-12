import { Helmet } from "react-helmet-async";
import Container from "../../components/ui/Container";
import EmptyState from "../../components/EmptyState/EmptyState";
import useAuth from "../../hooks/useAuth";
import moment from "moment";
import toast from "react-hot-toast";

const AddCraftItem = () => {
  const { user } = useAuth();

  // Get current date and time
  const now = moment();
  // Format the date and time as desired
  const postTime = now.format("dddd, MMMM Do YYYY, h:mm:ss a"); // Example format

  const handleAddCraft = (e) => {
    e.preventDefault();
    const form = e.target;
    const item_name = form.name.value;
    const subcategory_Name = form.subcategory.value;
    const time = form.time.value;
    const stockStatus = form.status.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const customization = form.customization.value;
    const image = form.image.value;
    const short_description = form.shortDes.value;
    const making_details = form.makingDetails.value;

    const craft = {
      item_name,
      subcategory_Name,
      time,
      stockStatus,
      price,
      rating,
      customization,
      image,
      short_description,
      making_details,
      postTime,
      postUser: {
        email: user?.email,
        name: user?.displayName,
        image: user?.photoURL,
      },
    };

    fetch("https://art-and-craft-server-bice.vercel.app/crafts", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(craft),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success("Craft Added Successfully");
        }
        form.reset();
      });
  };

  return (
    <>
      <Helmet>
        <title>Add new craft item</title>
      </Helmet>
      <EmptyState title="Add New Craft Items" />
      <Container>
        <div className="my-20">
          <form onSubmit={handleAddCraft} className="w-full">
            {/* item_name, subCategory */}
            <div className="md:flex mx-auto gap-5 w-full md:w-11/12 lg:w-3/4">
              <div className="w-full">
                <label className="mb-1 text-sm">Item Name</label> <br />
                <input
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
                  required
                  type="number"
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
                  required
                  name="shortDes"
                  placeholder="Short Description"
                  className="border w-full px-4 py-2 rounded placeholder:text-xs focus:outline-none "
                ></textarea>
              </div>
            </div>
            {/* Making Details */}
            <div className="md:flex mx-auto gap-5 w-full md:w-11/12 lg:w-3/4 my-3">
              <div className="w-full mt-3 md:mt-0">
                <label className="mb-1 text-sm">Making Details</label> <br />
                <textarea
                  required
                  name="makingDetails"
                  placeholder="Making Details"
                  className="border w-full px-4 py-2 rounded placeholder:text-xs focus:outline-none "
                ></textarea>
              </div>
            </div>
            <div className="flex justify-center">
              <input
                type="submit"
                value="Add Craft"
                className="w-full md:w-11/12 lg:w-3/4 h-full rounded bg-sky-600 py-2 px-4 text-sm text-white data-[hover]:bg-sky-500 data-[hover]:data-[active]:bg-sky-700 cursor-pointer"
              />
            </div>
          </form>
        </div>
      </Container>
    </>
  );
};

export default AddCraftItem;
