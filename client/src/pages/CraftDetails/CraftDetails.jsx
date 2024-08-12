import { FaJediOrder } from "react-icons/fa6";
import { BsCalendar2Date } from "react-icons/bs";
import { Link, Outlet, useLoaderData, useNavigation } from "react-router-dom";
import Container from "../../components/ui/Container";
import { useState } from "react";
import Spinner from "../../components/Spinner/Spinner";
import { Helmet } from "react-helmet-async";

const CraftDetails = () => {
  const navigation = useNavigation();
  const [tabIndex, setTabIndex] = useState(0);
  const craft = useLoaderData();
  const { item_name, short_description, postTime, stockStatus } = craft || {};

  return (
    <>
      <Helmet>
        <title>{`${item_name} || Art and craft`}</title>
      </Helmet>

      <div className="mt-16 md:mt-20 lg:mt-28 font-roboto">
        <Container>
          <div className="max-w-5xl md:px-6 py-16 mx-auto space-y-12">
            <article className="space-y-8 ">
              <div className="space-y-6">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold md:tracking-tight">
                  {short_description}
                </h1>
                <div className="flex flex-col items-start justify-between w-full md:flex-row md:items-center text-gray-400">
                  <div className="flex items-center md:space-x-2">
                    <p
                      data-tooltip-id="my-tooltip"
                      data-tooltip-content="Post Time"
                      data-tooltip-place="top"
                      className="flex items-center gap-2 text-sm"
                    >
                      <BsCalendar2Date className="text-primary" /> {postTime}
                    </p>
                  </div>
                  <p
                    data-tooltip-id="my-tooltip"
                    data-tooltip-content="Stock Status"
                    data-tooltip-place="top"
                    className="flex items-center gap-2 flex-shrink-0 mt-3 text-sm md:mt-0"
                  >
                    <FaJediOrder className="text-primary" /> {stockStatus}
                  </p>
                </div>
              </div>

              {/* Tabs section- Start */}
              <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap px-5">
                <Link
                  to=""
                  onClick={() => setTabIndex(0)}
                  className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 border-b border-gray-400  rounded-t-lg  ${
                    tabIndex === 0
                      ? "border border-b-0 "
                      : "border-b text-gray-400"
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-4 h-4"
                  >
                    <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                  </svg>
                  <span>Content</span>
                </Link>
                <Link
                  to={`author`}
                  onClick={() => setTabIndex(1)}
                  className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 rounded-t-lg border-gray-400 ${
                    tabIndex === 1
                      ? "border border-b-0 "
                      : "border-b text-gray-400"
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-4 h-4"
                  >
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                  </svg>
                  <span>Author</span>
                </Link>
              </div>
              {/* Tabs section- Ends */}

              {/*<-!---- outlet---> */}
              {navigation.state === "loading" ? <Spinner /> : <Outlet />}
            </article>
          </div>
        </Container>
      </div>
    </>
  );
};

export default CraftDetails;
