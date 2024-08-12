import PropTypes from "prop-types";
import emptyStateImg from "../../assets/emptyState.jpg";

const EmptyState = ({ title }) => {
  return (
    <div
      style={{ backgroundImage: `url(${emptyStateImg})` }}
      className={`relative bg-cover bg-no-repeat h-28 sm:h-32 md:h-36 lg:h-40 w-full flex items-center justify-center font-roboto mt-[83px]`}
    >
      <div className="absolute inset-0 bg-black/50 opacity-70 pointer-events-none"></div>
      <h2 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white z-50">
        {title}
      </h2>
    </div>
  );
};

EmptyState.propTypes = {
  title: PropTypes.string.isRequired,
};

export default EmptyState;
