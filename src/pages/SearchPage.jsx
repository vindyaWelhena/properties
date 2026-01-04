import propertiesData from "../data/properties.json";
import { useState } from "react";
import SearchForm from "../components/SearchForm";
import PropertyCard from "../components/PropertyCard";
import Favourites from "../components/Favourites";

function SearchPage({ favourites, setFavourites }) {
  const [filteredProperties, setFilteredProperties] = useState(
    propertiesData.properties
  );

  return (
    <div className="search-page">
      <h1>Property Search</h1>

      <SearchForm
        properties={propertiesData.properties}
        setFilteredProperties={setFilteredProperties}
      />

      <div className="content">
        <div className="results">
          {filteredProperties.map((property) => (
            <PropertyCard
              key={property.id}
              property={property}
              favourites={favourites}
              setFavourites={setFavourites}
            />
          ))}
        </div>

        <Favourites
          favourites={favourites}
          setFavourites={setFavourites}
        />
      </div>
    </div>
  );
}

export default SearchPage;
