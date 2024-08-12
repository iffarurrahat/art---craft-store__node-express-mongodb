import Container from "../ui/Container";
import iconImg from "../../assets/wave.svg";
import axios from "axios";
import { useEffect, useState } from "react";
import AllCraftsCard from "../AllCrafts/AllCraftsCard";

const SubCraftsSection = () => {
  const [allCrafts, setAllCrafts] = useState([]);

  //   useEffect(() => {
  //     axios.get("https://art-and-craft-server-bice.vercel.app/subCrafts").then((data) => {
  //       setAllCrafts(data.data);
  //     });
  //   }, []);

  useEffect(() => {
    axios
      .get("https://art-and-craft-server-bice.vercel.app/subCrafts")
      .then((data) => {
        const subCrafts = data.data.map((craft) => ({ ...craft, type: "sub" }));
        setAllCrafts(subCrafts);
      });
  }, []);

  return (
    <div className="mb-10 md:mt-24 lg:mt-32">
      <Container>
        <div className="mb-6 md:mb-8 lg:mb-10">
          <img src={iconImg} alt="" className="w-12 h-12 mx-auto" />
          <h1 className="text-center text-3xl md:text-4xl lg:text-5xl font-bold">
            Subcategory Art and Craft
          </h1>
          <p className="w-full md:w-1/2 lg:w-2/5 mx-auto text-center mt-2">
            Crafts an unfair art subcategory. The distinction between fine art
            and crafts is a highly debated topic in the art world
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allCrafts.map((craft) => (
            <AllCraftsCard key={craft._id} craft={craft} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default SubCraftsSection;
