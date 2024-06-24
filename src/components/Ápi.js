import React, { useEffect, useState } from "react";

function Ápi() {
  const [heroArray, setHeroArray] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://swapi.dev/api/people/1");
      const hero = await response.json();

      return hero;
    }
    fetchData().then((hero) => {
      setHeroArray(() => {
        return [...heroArray, hero];
      });
    });
  }, []);
  return (
    <div>
      {heroArray.map((item) => {
        return <h2>{item.name}</h2>;
      })}
    </div>
  );
}

export default Ápi;
