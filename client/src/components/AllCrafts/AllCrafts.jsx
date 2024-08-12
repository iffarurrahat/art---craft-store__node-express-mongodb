import PropTypes from "prop-types";
import Container from "../ui/Container";
import iconImg from "../../assets/wave.svg";
import AllCraftsCard from "./AllCraftsCard";

const AllCrafts = ({ allCrafts }) => {
  return (
    <div className="mb-10 md:mt-24 lg:mt-32">
      <Container>
        <div className="mb-6 md:mb-8 lg:mb-10">
          <img src={iconImg} alt="" className="w-12 h-12 mx-auto" />
          <h1 className="text-center text-3xl md:text-4xl lg:text-5xl font-bold">
            Art and Craft
          </h1>
          <p className="w-full md:w-1/2 lg:w-2/5 mx-auto text-center mt-2">
            Easy paint craft ideas await! Find colorful paint arts and crafts
            for toddlers, kids, and adults.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allCrafts?.slice(0, 6).map((craft) => (
            <AllCraftsCard key={craft._id} craft={{ ...craft, type: "main" }} />
          ))}
        </div>
      </Container>
    </div>
  );
};

AllCrafts.propTypes = {
  allCrafts: PropTypes.array.isRequired,
};
export default AllCrafts;
