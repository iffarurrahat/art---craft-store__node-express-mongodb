import PropTypes from "prop-types";
const MyCraftTable = ({ myEmailCraftData }) => {
  return (
    <div className="overflow-x-auto mt-10 md:mt-16">
      <table className="table table-zebra">
        {/* head */}
        <thead className="bg-primary text-white border-x-2 border-primary">
          <tr className="font-bold">
            <th>SI</th>
            <th>Image</th>
            <th>Name</th>
            <th>Date</th>
            <th>Post User</th>
          </tr>
        </thead>
        <tbody className="border-x-2 border-b-2">
          {/* row 1 */}
          {myEmailCraftData.map((item, idx) => (
            <tr key={idx}>
              <th>{idx + 1}</th>
              <th>
                <img src={item?.image} className="w-10 h-10" alt="" />
              </th>
              <td>{item?.item_name}</td>
              <td>{item?.postTime}</td>
              <td>{item?.postUser?.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

MyCraftTable.propTypes = {
  myEmailCraftData: PropTypes.array.isRequired,
};
export default MyCraftTable;
