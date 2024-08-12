import { Helmet } from "react-helmet-async";
import EmptyState from "../../components/EmptyState/EmptyState";
import Container from "../../components/ui/Container";
import { useLoaderData } from "react-router-dom";
import AllCraftsCard from "../../components/AllCrafts/AllCraftsCard";

const ALLArtAndCraft = () => {
  const allCrafts = useLoaderData();

  return (
    <>
      <Helmet>
        <title>All Art & Craft</title>
      </Helmet>
      <div className="mt-20">
        <EmptyState title="All Craft & Item" />
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-10">
            {allCrafts.map((craft) => (
              <AllCraftsCard
                key={craft._id}
                craft={{ ...craft, type: "main" }}
              />
            ))}
          </div>
        </Container>
      </div>
    </>
  );
};

export default ALLArtAndCraft;
