function Favourites({ favourites, setFavourites }) {
  const handleRemoveFavourite = (propertyId) => {
    setFavourites(favourites.filter(fav => fav.id !== propertyId));
  };

  return (
    <div className="favourites">
      <h3>Favourites</h3>
      {favourites.length === 0 ? (
        <p>No favourites added yet</p>
      ) : (
        <div className="favourites-list">
          {favourites.map((property) => (
            <div key={property.id} className="favourite-item">
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
          ))}
        </div>
      )}
    </div>
  );
}

export default Favourites;
