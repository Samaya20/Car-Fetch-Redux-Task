import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateCar } from "../redux/carSlice";

const Details = () => {
  const dispatch = useDispatch();
  const selectedCar = useSelector((state) => state.cars.selectedCar);

  const [formData, setFormData] = useState({
    model: "",
    vendor: "",
    price: 0,
    imageUrl: "",
  });

  useEffect(() => {
    if (selectedCar) {
      setFormData({
        model: selectedCar.model,
        vendor: selectedCar.vendor,
        price: selectedCar.price,
        imageUrl: selectedCar.imageUrl,
      });
    }
  }, [selectedCar]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedCar) {
      dispatch(
        updateCar({
          ...selectedCar,
          model: formData.model,
          vendor: formData.vendor,
          price: formData.price,
          imageUrl: formData.imageUrl,
        })
      );
    }
  };

  return (
    <div className="details">
      {selectedCar && (
        <form onSubmit={handleSubmit}>
          <label>
            Model:
            <input
              type="text"
              name="model"
              value={formData.model}
              onChange={handleChange}
            />
          </label>
          <label>
            Vendor:
            <input
              type="text"
              name="vendor"
              value={formData.vendor}
              onChange={handleChange}
            />
          </label>
          <label>
            Price:
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
            />
          </label>
          <label>
            Image URL:
            <input
              type="text"
              name="imageUrl"
              value={formData.imageUrl}
              onChange={handleChange}
            />
          </label>
          <button type="submit" className="updateBtn">
            Update
          </button>
        </form>
      )}
    </div>
  );
};

export default Details;
