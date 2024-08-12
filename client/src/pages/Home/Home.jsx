import { Helmet } from "react-helmet-async";
import Banner from "../../components/Banner/Banner";
import PixartSection from "../../components/PixartSection/PixartSection";
import { useLoaderData } from "react-router-dom";
import AllCrafts from "../../components/AllCrafts/AllCrafts";
import Counter from "../../components/Counter/Counter";
import FAQ from "../../components/FAQ/FAQ";
import EmptyState from "../../components/EmptyState/EmptyState";
import SubCraftsSection from "../../components/SubCraftsSection/SubCraftsSection";

const Home = () => {
  const allCrafts = useLoaderData();

  // Ensure allCrafts is always an array
  // const processedCrafts = Array.isArray(allCrafts) ? allCrafts : [];

  return (
    <>
      <Helmet>
        <title>Art and craft || Acrylic Portrait Canvas</title>
      </Helmet>
      <Banner />
      <PixartSection />
      <AllCrafts allCrafts={allCrafts} />
      <EmptyState title="Decorative Arts" />
      <SubCraftsSection />
      <Counter />
      <FAQ />
    </>
  );
};

export default Home;
