import React from 'react';

const CarDetails = (props) => {
  const { car } = props;
  const { brand, model, owner, plate } = car;
  return (
    <div className="car-card detailed">
      <img src="https://dwj199mwkel52.cloudfront.net/assets/lewagon-logo-square-fe76916e1b923ade71e253ae6dc031d936e5e8eebac4e26b0fbac650ea6ee360.png" alt="logo Le Wagon" />
      <div className="car-content">
        <p className="car-type">{brand} - {model}</p>
        <p className="car-owner"><span>Owner: </span>{owner}</p>
        <p className=""><span>Plate: </span>{plate}</p>
      </div>
    </div>
  );
};

export default CarDetails;
