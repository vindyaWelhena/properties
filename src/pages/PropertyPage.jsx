import { useParams, Link } from "react-router-dom";
import propertiesData from "../data/properties.json";
import ImageGallery from "../components/ImageGallery";
import PropertyTabs from "../components/PropertyTabs";

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
    <div className="property-page">
      <Link to="/">← Back to search</Link>

      <h1>{property.location}</h1>
      <h2>£{property.price.toLocaleString()}</h2>

      <p>
        {property.bedrooms} bedroom {property.type} ·{" "}
        {property.tenure}
      </p>
      <ImageGallery
        images={property.thumbnailimages}
        altText={property.location}
      />

      <PropertyTabs
        description={property.description}
        floorplan={property.floorplan}
        mapUrl={property.map}
      />

      <button
        onClick={handleToggleFavourite}
      >
        {isFavourite ? "Remove from Favourites" : "Add to Favourites"}
      </button>
    </div>
  );
}

export default PropertyPage;
