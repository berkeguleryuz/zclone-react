import React, { useState } from "react";
import { Link } from "react-router-dom";
import background2 from "../images/2.jpg";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/setup";
import mail from "../images/email.png";

const EmailLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailLogin = async () => {
    try {
      const data = await signInWithEmailAndPassword(auth, email, password);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div
      className="relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true">
      <div
        className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,7)),url(${background2})`,
        }}></div>

      <div className="fixed text-center w-screen sm:inset-0 mt-20 sm:mt-0">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div
            className="relative transform 
           rounded-lg bg-white text-left shadow-xl transition-all my-8 w-96 sm:max-w-lg">
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div className="flex justify-between">
                <h3
                  className="text-3xl font-semibold leading-6 text-gray-600"
                  id="modal-title">
                  Login
                </h3>
                <Link to={"/"}>
                  <h4 className="font-bold border rounded-full p-1 border-black">
                    X
                  </h4>
                </Link>
              </div>
              <img
                src={mail}
                alt=""
                className="w-24 h-24 mx-auto justify-center"
              />
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                className="mt-6 outline-none border border-gray-300 text-gray-900 text-sm rounded-md  block w-full p-2.5 "
                placeholder="E-mail"
                required
              />
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                className="mt-3 outline-none border border-gray-300 text-gray-900 text-sm rounded-md block w-full p-2.5 "
                placeholder="Password"
                required
              />
              <button
                onClick={emailLogin}
                className="mt-3 bg-rose-500 hover:bg-rose-600 h-12 text-white font-bold text-lg rounded w-full text-center">
                Login with email
              </button>
              <hr className="mt-3" />
              <h3 className="mt-5">
                Already have an account?
                <Link to={"/login"}>
                  <span className="text-red-500"> Login</span>
                </Link>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailLogin;
