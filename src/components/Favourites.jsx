import { Droppable, Draggable } from '@hello-pangea/dnd';

function Favourites({ favourites, setFavourites }) {
  const handleRemoveFavourite = (propertyId) => {
    setFavourites(favourites.filter(fav => fav.id !== propertyId));
  };

  const handleRemoveAllFavourites = () => {
    setFavourites([]);
  };

  return (
    <div className="favourites">
      <h3>Favourites</h3>
      {favourites.length > 0 && (
        <button
          onClick={handleRemoveAllFavourites}
          className="remove-all-fav-btn"
          style={{
            marginBottom: '10px',
            padding: '5px 10px',
            backgroundColor: '#ff4444',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Remove All
        </button>
      )}
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
