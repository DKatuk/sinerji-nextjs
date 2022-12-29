import React from "react";
import Image from "next/image";
import Link from "next/link";

const fetchServices = async () => {
     const response = await fetch(
       "https://63aabadbfdc006ba604a1753.mockapi.io/services"
     );
     const data = await response.json();
     return data;
};

async function CompanyServices() {
  const allServices = await fetchServices();
  return (
    <div className="flex justify-center w-screen my-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-6 w-full">
        {allServices.map((service) => {
          return (
            <div
              key={service.id}
              className="flex flex-col gap-4 mx-auto h-90 md:max-w-md px-2 py-4 bg-white rounded-xl shadow-lg justify-center items-center hover:scale-105 transition-all duration-300"
            >
              <Link href={`/services/${service.id}`}>
                <Image
                  src={service.image}
                  alt={service.title}
                  width={300}
                  height={300}
                />
              </Link>
              <h1>{service.title}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CompanyServices;
