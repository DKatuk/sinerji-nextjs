import React from "react";
import Image from "next/image";
import { notFound } from "next/navigation";

// ability to try to server-side render a page. Problem with this, if client types an invalid URL with invalid service id paramter, it will still try to server-side render the page, which will fail. This is why we need to use the notFound() function that I imported from next/navigation to return a 404 error if the page is not found. This will prevent the server-side rendering from failing.
export const dynamicParams = true;

const fetchService = async (id) => {
  // fetch the single service from API and return the data
  // next: { revalidate: 60 } will revalidate the cache and the page every 60 seconds, figure out the initial pages.
  // After 60 seconds, it will server render the page with the new data from the API.
  const response = await fetch(
    `https://63aabadbfdc006ba604a1753.mockapi.io/services/${id}`,
    { next: { revalidate: 60 } }
  );
  const data = await response.json();
  return data;
};

async function ServicePage(props) {
  const service = await fetchService(props.params.service);
  // Returning 404 Pages in Dynamic Routing: if the service id is not found, return a 404 error.
  if (!service.id) return notFound();

  return (
    <div>
      <div className="w-full h-96 md:h-80 bg-primary-100 flex flex-col justify-center items-center shadow-lg">
        <h1 className="text-2xl md:text-3xl text-white w-full text-center">
          {service.title}
        </h1>
        <p className="text-white">One of the branches that Laws. has an expertise in.</p>
      </div>
      <div className="flex flex-col gap-8 bg-slate-100 h-screen justify-center items-center w-screen py-16">
        <div className="overflow-hidden shadow-md rounded-md">
          <Image
            src={service.image}
            alt={service.title}
            width={400}
            height={400}
          />
        </div>
        <h1 className="text-2xl md:text-3xl text-primary-100 w-full text-center">Service Description</h1>
        <p className="w-5/6 mx-auto">{service.description}</p>
      </div>
    </div>
  );
}

export default ServicePage;

export async function generateStaticParams() {
  // fetch all the services from API URL and generate all the pages with the constructed params in the format of { service: '1' }, note: params value must be a string.
  const response = await fetch(
    "https://63aabadbfdc006ba604a1753.mockapi.io/services"
  );
  const data = await response.json();
  const params = data.map((service) => {
    return { service: service.id.toString() };
  });
  return params;
}
