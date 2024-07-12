import React from "react";

const CarItem = ({ car }) => {
  return (
    <li>
      <img src={car.imageUrl} alt="carimage"></img>
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
          {car.price}
        </p>
      </div>
    </li>
  );
};

export default CarItem;
