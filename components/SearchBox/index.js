import React from "react";
import cities from "../lib/cities.json";
import Link from "next/link";
import Router from "next/router";

export default function SearchBox({ placeholder }) {
  const [query, setQuery] = React.useState("");
  const [results, setResults] = React.useState([]);

  React.useEffect(() => {
    const clearQuery = () => setQuery("");
    Router.events.on("routeChangeComplete", clearQuery);

    return () => {
      Router.events.off("routeChangeComplete", clearQuery);
    };
  }, []);

  const onChange = (e) => {
    const { value } = e.target;
    setQuery(value);

    let matchingCities = [];

    if (value.length > 3) {
      for (let city of cities) {
        if (matchingCities.length >= 5) {
          break;
        }

        const match = city.city.toLowerCase().startsWith(value.toLowerCase());

        if (match) {
          const cityData = {
            ...city,
            slug: `${city.city.toLowerCase().replace(/ /g, "-")}-${city.id}`,
          };

          matchingCities.push(cityData);
          continue;
        }
      }
    }

    return setResults(matchingCities);
  };

  return (
    <div className="search">
      <input
        type="text"
        value={query}
        onChange={onChange}
        placeholder={placeholder ? placeholder : ""}
      />

      {query.length > 3 && (
        <ul>
          {results.length > 0 ? (
            results.map((city) => {
              return (
                <li key={city.slug}>
                  <Link href={`/location/${city.slug}`}>
                    <a className = 'city-names'>
                      {city.city}{' || '}{city.province}
                    </a>
                  </Link>
                </li>
              );
            })
          ) : (
            <li className="search__no-results">No results found</li>
          )}
        </ul>
      )}
    </div>
  );
}