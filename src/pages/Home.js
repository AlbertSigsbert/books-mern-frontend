import { useState } from "react";
import FilterNav from "../components/Home/FilterNav";
import Main from "../components/Home/Main";
import { Sidebar, SidebarMobile } from "../components/Home/Sidebar";

function Home(props) {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  return (
    <>
      <SidebarMobile mobileFiltersOpen={mobileFiltersOpen} setMobileFiltersOpen={setMobileFiltersOpen} />
      <FilterNav setMobileFiltersOpen={setMobileFiltersOpen} />
      <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4 pb-24">
        <Sidebar />
        <Main />
      </div>
    </>
  );
}

export default Home;
