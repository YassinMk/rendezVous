import SideNav from "./SideNav";
import "./style3.css";
import ResearchHome from "./ResearchHome";
import Statistics from "./Statistics";
import TableDasbord from "./TableDashbord";
import { useState } from "react";

const Dashbord = () => {
  const [searchQuery,setSearchQuery]=useState('');
  const handleSearchChange = (query) => {
    setSearchQuery(query);
  };

  return (
    <>
      <div className="row">
        <SideNav />
        <div className="col-12 col-md-9 col-lg-9 py-4">
          <ResearchHome onSearchChange={handleSearchChange}  />
          <Statistics />
          <div className="py-5 px-modified w-modified ">
            <div className="font-regulare border rounded-top-2 bg-primary text-white py-2 px-3 fs-5 ">Liste des client</div>
            <TableDasbord searchQuery={searchQuery} />            
          </div>
        </div>
        </div>
    </>
  );
};

export default Dashbord;
