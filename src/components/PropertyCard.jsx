import { Link } from "react-router-dom";

function PropertyCard({ property, favourites, setFavourites }) {
  const isFavourite = favourites.some(
    (fav) => fav.id === property.id
  );

  function handleToggleFavourite() {
    if (isFavourite) {
      // Remove from favourites
      setFavourites(favourites.filter(fav => fav.id !== property.id));
    } else {
      // Add to favourites
      setFavourites([...favourites, property]);
    }
  }

  return (
    <div className="property-card">
      <img
        src={property.picture}
        alt={property.location}
        className="property-image"
      />

      <div className="property-info">
        <h3>£{property.price.toLocaleString()}</h3>
        <p>
          {property.bedrooms} bedroom {property.type}
        </p>
        <p>{property.location}</p>

        <div className="property-actions">
          <Link to={`/property/${property.id}`}>
            View Details
          </Link>

          <button
            onClick={handleToggleFavourite}
          >
            {isFavourite ? "Remove Favourite" : "Add to Favourites"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default PropertyCard;
