import countries from "../../component/Data";
import Link from "next/link";

export default function CountryName({
  params,
}: {
  params: { country_name: string };
}) {
  function findCountry(country_url: string) {
    // console.log(country_url)
    // console.log(countries.find(country => country.name))
    return countries.find(
      (country: { name: string }) =>
        country.name.toLowerCase() === country_url.toLowerCase()
    );
  }

  const result = findCountry(params.country_name);

  return (
    <div className="text-xl font-semibold font">
      {result ? (
        <>
          <h1>Country Name: {result.name}</h1>
          <h2>Country Capital: {result.capital} </h2>
          <h3>Country Population: {result.population} </h3>
          <br />
          <button >
            <Link href={"/country"}>Back To List</Link>
          </button>
          <br />
        </>
      ) : (
        <h1>country not found</h1>
      )}
    </div>
  );
}
