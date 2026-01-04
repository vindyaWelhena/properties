import { render, screen } from "@testing-library/react";
import PropertyCard from "../components/PropertyCard";
import { BrowserRouter } from "react-router-dom";

const mockProperty = {
  id: "prop1",
  price: 250000,
  bedrooms: 3,
  type: "House",
  location: "London",
  picture: "test.jpg",
};

test("renders property card details", () => {
  render(
    <BrowserRouter>
      <PropertyCard
        property={mockProperty}
        favourites={[]}
        setFavourites={() => {}}
        index={0}
      />
    </BrowserRouter>
  );

  expect(screen.getByText(/£250,000/i)).toBeInTheDocument();
  expect(screen.getByText(/3 bedroom house/i)).toBeInTheDocument();
  expect(screen.getByText(/london/i)).toBeInTheDocument();
});
test("renders add to favourites button", () => {
  render(
    <BrowserRouter>
      <PropertyCard
        property={mockProperty}
        favourites={[]}
        setFavourites={() => {}}
        index={0}
      />
    </BrowserRouter>
  );

  expect(
    screen.getByText(/add to favourites/i)
  ).toBeInTheDocument();
});
