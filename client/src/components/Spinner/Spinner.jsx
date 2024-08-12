import { ScaleLoader } from "react-spinners";

const Spinner = () => {
  return (
    <div className="flex justify-center items-center h-[60vh] mt-20">
      <ScaleLoader size={300} color="#3B82F6" />
    </div>
  );
};

export default Spinner;
