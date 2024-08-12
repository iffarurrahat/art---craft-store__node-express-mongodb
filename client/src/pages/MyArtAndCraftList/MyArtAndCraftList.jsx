import { Helmet } from "react-helmet-async";
import EmptyState from "../../components/EmptyState/EmptyState";
import Container from "../../components/ui/Container";
import { useLoaderData } from "react-router-dom";
import MyCraftTable from "./MyCraftTable";
import MyCraftCard from "./MyCraftCard";
import { useState } from "react";
import EmptyStateMyCraftList from "../../components/EmptyState/EmptyStateMyCraftList";
import FilterDropdown from "../../components/ui/FilterDropdown";

const MyArtAndCraftList = () => {
  const emailCraftsData = useLoaderData();

  const [myEmailCraftData, setMyEmailCraftData] = useState(emailCraftsData);
  const [sortCriteria, setSortCriteria] = useState(null);

  const handleSort = (criteria) => {
    setSortCriteria(criteria);
    const sortedData = [...myEmailCraftData].sort((a, b) => {
      if (criteria === "price" || criteria === "rating") {
        return parseFloat(a[criteria]) - parseFloat(b[criteria]);
      }
      return a[criteria].localeCompare(b[criteria]);
    });
    setMyEmailCraftData(sortedData);
  };

  return (
    <>
      <Helmet>
        <title>My art and craft list</title>
      </Helmet>
      <div className="my-20">
        {/* <p className="my-96"></p> */}
        <EmptyState title="Your listed Craft, Which are you have added" />
        <Container>
          {/* filter dropdown */}
          {myEmailCraftData && myEmailCraftData.length > 0 && (
            <FilterDropdown onSort={handleSort} />
          )}

          {/* my art and craft */}
          {myEmailCraftData.length > 0 ? (
            <div>
              <MyCraftTable myEmailCraftData={myEmailCraftData} />
              <MyCraftCard
                myEmailCraftData={myEmailCraftData}
                setMyEmailCraftData={setMyEmailCraftData}
              />
            </div>
          ) : (
            <EmptyStateMyCraftList />
          )}
        </Container>
      </div>
    </>
  );
};

export default MyArtAndCraftList;
