import React from "react";
import { useDispatch } from "react-redux";
import { selectCar } from "../redux/carSlice";

const CarItem = ({ car }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(selectCar(car));
  };

  return (
    <li onClick={handleClick}>
      <div className="image-container">
        <img src={car.imageUrl} alt="carimage" />
      </div>
      <div className="text">
        <p>
          <span>Model : </span>
          {car.model}
        </p>
        <p>
          <span>Vendor: </span>
          {car.vendor}
        </p>
        <p>
          <span>Price: </span>
          {car.price} $
        </p>
      </div>
      <span className="click-update">Click to update item &#8594;</span>
    </li>
  );
};

export default CarItem;
