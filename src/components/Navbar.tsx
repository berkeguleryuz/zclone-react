import React from "react";
import Avatar from "react-avatar";
import { CiSearch } from "react-icons/ci";
import { auth } from "../firebase/setup";
import user from "../images/user.png";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="flex justify-between border-orange-100 border-b-2 p-4">
      <h1 className="text-4xl font-extrabold italic ">ZCLone</h1>
      <div className="shadow-lg flex items-center border border-gray-400 w-96 rounded-lg p-1 h-12">
        <CiSearch className="w-5 h-5 " />
        <input
          type="email"
          className="outline-none text-gray-900 text-sm rounded-md sm:w-96 p-2 w-full "
          placeholder="Search for restaurants, food, or cuisines"
          required
        />
      </div>
      {auth.currentUser?.photoURL ? (
        <img src={auth.currentUser?.photoURL} alt="" />
      ) : auth.currentUser?.email ? (
        <Avatar
          name={auth.currentUser?.displayName ?? auth.currentUser?.email}
          round={true}
          size="46"
          className="w-30 h-30"
        />
      ) : (
        <Avatar
          src={user}
          alt=""
          size="46"
          round={true}
          className="w-30 h-30"
        />
      )}
      <h1>
        {auth.currentUser?.displayName ??
          auth.currentUser?.email?.substring(
            0,
            auth.currentUser?.email.indexOf("@"),
          )}
      </h1>
    </div>
  );
};

export default Navbar;
