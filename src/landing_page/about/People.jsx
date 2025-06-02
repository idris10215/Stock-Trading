import React from "react";

const People = () => {
  return (
    <>
      <h1 className="font-color text-center">People</h1>
      <div className="container p-5 mb-5 mt-5">
        <div className="row">
          <div className="col-5 text-center">
            <img
              src="assets\mypic1.jpg"
              className="rounded-circle"
              style={{ height: "20rem"}}
            ></img>
            <p className="mt-3 fs-4">Mohammed Idris</p>
            <p className="opacity-75">Full-Stack Developer | ML Enthusiast</p>
          </div>
          <div className="col-7 fs-6 " style={{fontSize:"17px"}}>
            <p>
              Idris is a passionate full-stack developer and machine learning
              enthusiast who enjoys turning complex problems into simple,
              elegant solutions.</p>
              <p>He is currently building an end-to-end trading platform to
              explore the intersection of web development and financial
              technology. This project is a result of his curiosity to
              understand how real-world trading platforms work behind the
              scenes. </p> 
              <p>When he’s not coding, Mohammed is probably
              tinkering with AI side projects, flying drones, or working on RC
              vehicles.</p>
              <p>He's continuously exploring new technologies and loves
              working on meaningful, user-focused products. </p>
              <p> Connect on : &nbsp;&nbsp;
                <a href="https://www.linkedin.com/in/idris10215/">LinkedIn</a>
              </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default People;
