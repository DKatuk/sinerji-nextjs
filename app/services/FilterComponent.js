"use client";
import React, { formEvent, useState } from "react";
import { useRouter } from "next/navigation";



function FilterComponent() {

// SEARCH FUNCTIONALITY LOGIC = NOT WORKING
// get what is written in the search bar, and then filter all services by the title, find the id of the service that matches the search, and then push the id to the router to navigate.
// Server-side and client-side rendering cannot be done at the same time, so I need to figure out how to do this with client-side rendering only.

  const [search, setSearch] = useState("");
  const router = useRouter();


//   const searchedService = allServices.filter((service) =>
//     service.title.toLowerCase().includes(search.toLowerCase())
//   );
//   const searchedServiceId = searchedService.id;

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(e);
    console.log(search)
    // router.push(`/services/${searchedServiceId}`);
    setSearch("");
  };

  const categories = ["private", "corporate", "government affairs"];
  return (
    <div className="w-full h-96 md:h-80 pt-16 px-4 pb-8 bg-primary-100 flex flex-col justify-between items-center shadow-lg">
      <div>
        <p className="font-medium md:font-extrabold text-2xl text-white text-center mx-4 mb-2">
          The virtue of justice consists in moderation as regulated by wisdom
        </p>
        <p className="text-white text-center mt-2">
          Find The Service That Is Best Suited For You
        </p>
      </div>
      <div className="flex gap-3">
        {categories.map((category) => {
          return (
            <button
              key={category}
              className="text-primary-100 font-bold rounded-full bg-white px-4 py-1"
            >
              <p>{category}</p>
            </button>
          );
        })}
      </div>
      <div>
        <p className="text-white font-medium text-center mb-2">
          Search Any Service
        </p>
        <form onSubmit={(e) => handleSearch(e.target.value)}>
          <input
            type="text"
            placeholder="Search"
            className="w-56 rounded-full px-4 h-8"
          />
          <button type="submit" className="hidden"></button>
        </form>
      </div>
    </div>
  );
}

export default FilterComponent;
