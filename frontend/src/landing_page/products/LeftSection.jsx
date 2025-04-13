import React from "react";

const LeftSection = ({
  imageUrl,
  productHeading,
  productDescription,
  playstore,
  appstore,
}) => {
  return (
    <>
      <div className="container mb-5 font-color">
        <div className="row">
          <div className="col-7 p-5">
            <img src={imageUrl}></img>
          </div>
          
          <div className="col-5 p-5 mt-5">
            <h1 className="mb-4">{productHeading}</h1>
            <p className=" lg-lh mb-4" style={{fontSize:"20px"}}>{productDescription}</p>
            
            <div>
              <a href={playstore}>
                {" "}
                <img style={{height:"50px", marginRight:"1.5rem"}} src="assets\googlePlayBadge.svg"></img>{" "}
              </a>
              <a href={appstore}>
                {" "}
                <img style={{height:"50px"}} src="assets\appstoreBadge.svg"></img>{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LeftSection;
