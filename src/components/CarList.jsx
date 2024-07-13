import React, { useEffect } from "react";
import CarItem from "./CarItem";
import { useDispatch, useSelector } from "react-redux";
import { fetchCars } from "../redux/carSlice";

const CarList = () => {
  const dispatch = useDispatch();
  const cars = useSelector((state) => state.cars);

  useEffect(() => {
    dispatch(fetchCars());
  }, []);

  return (
    <div className="car-list">
      <ul>
        {cars.data.length > 0
          ? cars.data.map((car) => <CarItem key={car.id} car={car} />)
          : "Göstəriləcək məlumat yoxdur :/"}
      </ul>
    </div>
  );
};

export default CarList;
