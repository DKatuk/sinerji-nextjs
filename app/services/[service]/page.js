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
      <h1>{service.title}</h1>
      <Image src={service.image} alt={service.title} width={200} height={200} />
      <p>{service.description}</p>
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
