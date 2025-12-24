import React from "react";
import Container from "./Container";
import Banner from "./Banner";
import Tickets from "./Tickets";
import Task from "./Task";

const Body = () => {
  return (
    <div className="bg-gray-100">
      <Container>
        <Banner></Banner>
        <div className="flex items-center justify-between">
          <Tickets></Tickets>
          <Task></Task>
        </div>
      </Container>
    </div>
  );
};

export default Body;
