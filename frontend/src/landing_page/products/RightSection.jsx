import React from "react";

const RightSection = ({
  productHeading,
  productDescription,
  learnMore,
  imageUrl,
}) => {
  return (
    <div className="container mt-5 font-color p-5">
      <div className="row">
        <div className="col-5 p-5 mt-5">
          <h1 className="mb-4 pt-5 mt-5">{productHeading}</h1>
          <p className=" lg-lh mb-3" style={{ fontSize: "20px" }}>
            {productDescription}
          </p>
          <div className="mb-4 ">
            <a
              href={learnMore}
              style={{ textDecoration: "none", fontSize: "20px" }}
            >
              Learn More →
            </a>
          </div>
        </div>
        <div className="col-7 ">
          <img src={imageUrl} />
        </div>
      </div>
    </div>
  );
};

export default RightSection;
