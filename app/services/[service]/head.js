async function getService(service) {
  const res = await fetch(
    "https://63aabadbfdc006ba604a1753.mockapi.io/services/" + service
  );
  return res.json();
}

export default async function Head({ params }) {
  const service = await getService(params.service);;
  return (
    <>
      <title>{service.title}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta
        name="description"
        content={`Laws. ${service.title} Page Description for SEO`}
      />
    </>
  );
}
