import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import SearchPage from "./pages/SearchPage";
import PropertyPage from "./pages/PropertyPage";

function App() {
  // Global favourites list
  const [favourites, setFavourites] = useState([]);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <SearchPage
              favourites={favourites}
              setFavourites={setFavourites}
            />
          }
        />
        <Route
          path="/property/:id"
          element={
            <PropertyPage
              favourites={favourites}
              setFavourites={setFavourites}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
