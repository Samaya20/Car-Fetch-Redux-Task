import React from "react";
import CarItem from "./CarItem";
import "../styles/Main.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchCars } from "../redux/carSlice";

const CarList = () => {
  const dispatch = useDispatch();
  const cars = useSelector((state) => state.cars);
  dispatch(fetchCars());
  return (
    <div>
      {cars.loading && "fetching data"}
      {cars.error && cars.error}
      {cars.data.length > 0 &&
        cars.data.map((car) => <CarItem key={car.id} car={car} />)}
    </div>
  );
};

export default CarList;
