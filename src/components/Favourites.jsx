import { Droppable, Draggable } from '@hello-pangea/dnd';

function Favourites({ favourites, setFavourites }) {
  const handleRemoveFavourite = (propertyId) => {
    setFavourites(favourites.filter(fav => fav.id !== propertyId));
  };

  return (
    <div className="favourites">
      <h3>Favourites</h3>
      <Droppable droppableId="favourites-droppable">
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className={`favourites-list ${snapshot.isDraggingOver ? 'dragging-over' : ''}`}
          >
            {favourites.length === 0 ? (
              <p>No favourites added yet</p>
            ) : (
              <>
                {favourites.map((property, index) => (
                  <Draggable key={property.id} draggableId={property.id} index={index}>
                    {(provided, snapshot) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className={`favourite-item ${snapshot.isDragging ? 'dragging' : ''}`}
                      >
                        <img
                          src={property.picture}
                          alt={property.location}
                          className="favourite-image"
                        />
                        <div className="favourite-info">
                          <h4>£{property.price.toLocaleString()}</h4>
                          <p>{property.location}</p>
                          <button
                            onClick={() => handleRemoveFavourite(property.id)}
                            className="remove-fav-btn"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </>
            )}
          </div>
        )}
      </Droppable>
    </div>
  );
}

export default Favourites;
