import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { FcFeedback, FcGoogle } from "react-icons/fc";
import {
  RecaptchaVerifier,
  signInWithPhoneNumber,
  signInWithPopup,
} from "firebase/auth";
import { auth, googleProvider } from "../firebase/setup";
import { Link } from "react-router-dom";
import background2 from "../images/2.jpg";

const Login = () => {
  const [phone, setPhone] = useState("");
  const [user, setUser] = useState<any>(null);
  const [otp, setOtp] = useState("");

  const sendOtp = async () => {
    try {
      const recaptcha = new RecaptchaVerifier(auth, "recaptcha", {});
      const confirmation = await signInWithPhoneNumber(auth, phone, recaptcha);
      setUser(confirmation);
    } catch (err) {
      console.log(err);
    }
  };

  const verifyOtp = async () => {
    try {
      await user.confirm(otp);
    } catch (err) {
      console.log(err);
    }
  };

  const googleSignin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      console.log(err);
    }
  };

  console.log(auth.currentUser);

  return (
    <>
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
            <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-96 sm:max-w-lg">
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
                <div className="mt-5">
                  <PhoneInput
                    inputStyle={{
                      width: "100%",
                      height: "50px",
                    }}
                    placeholder="Phone Number"
                    buttonStyle={{ backgroundColor: "white" }}
                    country={"us"}
                    value={phone}
                    onChange={(phone) => setPhone(phone)}
                    enableAreaCodes={true}
                  />
                </div>
                <button
                  onClick={sendOtp}
                  className="mt-3 bg-rose-500 hover:bg-rose-600 w-full h-12 text-white p- rounded">
                  Send One Time Password
                </button>
                <div className="mt-2 w-full" id="recaptcha"></div>
                {phone && (
                  <input
                    onChange={(e) => setOtp(e.target.value)}
                    className="mt-3 outline-none border border-gray-300 text-gray-900 text-sm rounded-md  block w-full p-2.5 "
                    placeholder="Enter OTP"
                    required
                  />
                )}
                {otp && (
                  <button
                    onClick={verifyOtp}
                    className="mt-3 bg-rose-500 hover:bg-rose-600 w-80 h-12 text-white p- rounded">
                    Verify One Time Password
                  </button>
                )}
                {!phone && (
                  <div>
                    <h2 className="text-center">or</h2>
                    <Link to={"/emaillogin"}>
                      <div className="flex items-center text-center border border-spacing-1 rounded-lg p-2">
                        <FcFeedback className="w-7 h-7 ml-12" />
                        <button className="ml-5">Continue with Mail</button>
                      </div>
                    </Link>
                    <div
                      onClick={googleSignin}
                      className="cursor-pointer mt-3 flex items-center text-center border border-spacing-1 rounded-lg p-2">
                      <FcGoogle className="w-7 h-7 ml-12" />
                      <button className="ml-5">Continue with Google</button>
                    </div>
                  </div>
                )}

                <hr className="mt-4" />
                <h3 className="text-base mt-5">
                  New to Zomato-clone?{" "}
                  <Link to={"/signup"}>
                    <span className="text-red-500">Create Account</span>
                  </Link>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
