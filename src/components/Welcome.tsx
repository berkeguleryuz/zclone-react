import React from "react";
import background2 from "../images/2.jpg";
import { Link } from "react-router-dom";

type Props = {};

const Welcome = (props: Props) => {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.3)),url(${background2})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="h-screen text-white text-center">
      <div className="justify-end">
        <Link to={"/login"}>
          <button className="mt-4 mr-20 text-lg font-semibold">Login</button>
        </Link>
        <Link to={"/signup"}>
          <button className="text-lg font-semibold">Sign Up</button>
        </Link>
      </div>
      <div className="mt-60 text-center">
        <h1 className="text-6xl font-bold italic">Zclone</h1>
        <h2 className="text-3xl font-semibold">
          Find the best restaurants, cafes and bars.
        </h2>
      </div>
    </div>
  );
};

export default Welcome;
