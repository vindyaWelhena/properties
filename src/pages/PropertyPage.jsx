import { useParams, Link } from "react-router-dom";
import propertiesData from "../data/properties.json";

function PropertyPage({ favourites, setFavourites }) {
  const { id } = useParams();

  const property = propertiesData.properties.find(
    (p) => p.id === id
  );

  if (!property) {
    return <p>Property not found</p>;
  }

  const isFavourite = favourites.some(
    (fav) => fav.id === property.id
  );

  function handleAddFavourite() {
    if (!isFavourite) {
      setFavourites([...favourites, property]);
    }
  }

  return (
    <div className="property-page">
      <Link to="/">← Back to search</Link>

      <h1>{property.location}</h1>
      <h2>£{property.price.toLocaleString()}</h2>

      <p>
        {property.bedrooms} bedroom {property.type} ·{" "}
        {property.tenure}
      </p>

      <img
        src={property.picture}
        alt={property.location}
        className="property-main-image"
      />

      <button
        onClick={handleAddFavourite}
        disabled={isFavourite}
      >
        {isFavourite ? "Favourited" : "Add to Favourites"}
      </button>
    </div>
  );
}

export default PropertyPage;
