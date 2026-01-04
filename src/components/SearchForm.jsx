import { useState } from "react";

function SearchForm({ properties, setFilteredProperties }) {
  const [type, setType] = useState("any");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [minBeds, setMinBeds] = useState("");
  const [maxBeds, setMaxBeds] = useState("");
  const [postcode, setPostcode] = useState("");
  const [dateFrom, setDateFrom] = useState("");

  function handleSearch(e) {
    e.preventDefault();

    const results = properties.filter((property) => {
      if (type !== "any" && property.type !== type) return false;
      if (minPrice && property.price < minPrice) return false;
      if (maxPrice && property.price > maxPrice) return false;
      if (minBeds && property.bedrooms < minBeds) return false;
      if (maxBeds && property.bedrooms > maxBeds) return false;
      if (
        postcode &&
        !property.location.toLowerCase().includes(postcode.toLowerCase())
      )
        return false;
      if (dateFrom && new Date(property.added) < new Date(dateFrom))
        return false;

      return true;
    });

    setFilteredProperties(results);
  }

  return (
    <form onSubmit={handleSearch} className="search-form">
      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="any">Any</option>
        <option value="house">House</option>
        <option value="flat">Flat</option>
      </select>

      <input
        type="number"
        placeholder="Min Price"
        value={minPrice}
        onChange={(e) => setMinPrice(e.target.value)}
      />

      <input
        type="number"
        placeholder="Max Price"
        value={maxPrice}
        onChange={(e) => setMaxPrice(e.target.value)}
      />

      <input
        type="number"
        placeholder="Min Bedrooms"
        value={minBeds}
        onChange={(e) => setMinBeds(e.target.value)}
      />

      <input
        type="number"
        placeholder="Max Bedrooms"
        value={maxBeds}
        onChange={(e) => setMaxBeds(e.target.value)}
      />

      <input
        type="text"
        placeholder="Postcode area"
        value={postcode}
        onChange={(e) => setPostcode(e.target.value)}
      />

      <input
        type="date"
        value={dateFrom}
        onChange={(e) => setDateFrom(e.target.value)}
      />

      <button type="submit">Search</button>
    </form>
  );
}

export default SearchForm;
