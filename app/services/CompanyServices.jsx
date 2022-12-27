import React from 'react'
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
    <div>
      {allServices.map((service) => {
        return (
          <div key={service.id}>
            <h1>{service.title}</h1>
            <Link href={`/services/${service.id}`}>
              <Image
                src={service.image}
                alt={service.title}
                width={200}
                height={200}
              />
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default CompanyServices;