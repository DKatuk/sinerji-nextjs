import React from "react";
import FilterComponent from "./FilterComponent";
import CompanyServices from "./CompanyServices";


// const Search = async () => {
//   const response = await fetch(
//     `https://63aabadbfdc006ba604a1753.mockapi.io/services`
//   );
//   const data = await response.json();
//   return data;
// };

function Services() {

  return (
    <div>
      <FilterComponent />
      <CompanyServices />
    </div>
  );
}

export default Services;
