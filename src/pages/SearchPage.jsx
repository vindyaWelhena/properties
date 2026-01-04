import propertiesData from "../data/properties.json";
import { useState } from "react";
import { DragDropContext, Droppable } from '@hello-pangea/dnd';
import SearchForm from "../components/SearchForm";
import PropertyCard from "../components/PropertyCard";
import Favourites from "../components/Favourites";

function SearchPage({ favourites, setFavourites }) {
  const [filteredProperties, setFilteredProperties] = useState(
    propertiesData.properties
  );

  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    // If there's no destination, do nothing
    if (!destination) {
      return;
    }

    // If dropping in the same place, do nothing
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    // If dragging from property list to favorites
    if (source.droppableId === 'properties-droppable' && destination.droppableId === 'favourites-droppable') {
      const propertyToAdd = propertiesData.properties.find(p => p.id === draggableId);
      if (propertyToAdd) {
        // Check if already in favourites to avoid duplicates
        if (!favourites.some(fav => fav.id === draggableId)) {
          setFavourites([...favourites, propertyToAdd]);
        }
      }
    }
    // If dragging from favorites to property list (removing from favorites)
    else if (source.droppableId === 'favourites-droppable' && destination.droppableId === 'properties-droppable') {
      setFavourites(favourites.filter(fav => fav.id !== draggableId));
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="search-page">
        <h1>Property Search</h1>

        <SearchForm
          properties={propertiesData.properties}
          setFilteredProperties={setFilteredProperties}
        />

        <div className="content">
          <Droppable droppableId="properties-droppable">
            {(provided) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                className="results"
              >
                {filteredProperties.map((property, index) => (
                  <PropertyCard
                    key={property.id}
                    property={property}
                    favourites={favourites}
                    setFavourites={setFavourites}
                    index={index}
                  />
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>

          <Favourites
            favourites={favourites}
            setFavourites={setFavourites}
          />
        </div>
      </div>
    </DragDropContext>
  );
}

export default SearchPage;
