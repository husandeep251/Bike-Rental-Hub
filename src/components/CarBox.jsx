import { useState } from "react";

function CarBox({ data, carID }) {
  const [carLoad, setCarLoad] = useState(true);
  return (
    <>
      {data[carID].map((car, id) => (
        <div key={id} className="box-cars">
          {/* car */}
          <div className="pick-car">
            {carLoad && <span className="loader"></span>}
            <img
              style={{ display: carLoad ? "none" : "block" }}
              src={car.img}
              alt="car_img"
              onLoad={() => setCarLoad(false)}
            />
          </div>
          {/* description */}
          <div className="pick-description">
            <div className="pick-description__price">
              <span>₹{car.price}</span>/ rent per day
            </div>
            <div className="pick-description__table">

              <div className="pick-description__table__col">
                <span>Mark</span>
                <span>{car.mark}</span>
              </div>

              <div className="pick-description__table__col">
                <span>Year</span>
                <span>{car.year}</span>
              </div>

              <div className="pick-description__table__col">
                <span>Engine</span>
                <span>{car.engine}</span>
              </div>

              <div className="pick-description__table__col">
                <span>Fuel Tank</span>
                <span>{car.fuel_tank}</span>
              </div>

              <div className="pick-description__table__col">
                <span>Top Speed</span>
                <span>{car.top_speed}</span>
              </div>

              <div className="pick-description__table__col">
                <span>Horsepower</span>
                <span>{car.horsepower}</span>
              </div>
            </div>
            {/* btn cta */}
            <a className="cta-btn" href="#booking-section">
              Reserve Now
            </a>
          </div>
        </div>
      ))}
    </>
  );
}

export default CarBox;
