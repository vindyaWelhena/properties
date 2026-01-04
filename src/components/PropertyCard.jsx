import { Link } from "react-router-dom";
import { Draggable } from '@hello-pangea/dnd';

function PropertyCard({ property, favourites, setFavourites, index }) {
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
    <Draggable draggableId={property.id} index={index || 0}>
      {(provided, snapshot) => (
        <div
          className={`property-card ${snapshot.isDragging ? 'dragging' : ''}`}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
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
      )}
    </Draggable>
  );
}

export default PropertyCard;
