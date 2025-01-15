import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const VerifyEmail = ({ email }) => {
  const [otp, setOtp] = useState("");

  const route = useNavigate();
  console.log(otp);
  const handleOTP = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://staging-be-ecom.techserve4u.com/api/user/verifyotp",
        { email, otp }
      );

      //       console.log("otp", response);

      if (response?.data?.success) {
        alert("Registered successfully!");

        route("/sign-in");
      }
      //       console.log("response", response);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="text-center px-10 py-10 drop-shadow-2xl mx-80 my-20 rounded-md bg-emerald-300">
      <h2 className="py-5 text-2xl font-semibold">Verify OTP</h2>
      <form onSubmit={handleOTP} className="">
        <div className="">
          <input
            className="p-3 text-lg rounded-lg "
            type="text"
            name="otp"
            defaultValue={otp}
            onChange={(e) => setOtp(e.target.value)}
            placeholder="Enter OTP"
            required
          />
        </div>

        <button
          type="submite"
          className="p-2 m-6 rounded-lg text-lg font-semibold bg-orange-400"
        >
          Send & Verify
        </button>
      </form>
    </div>
  );
};

export default VerifyEmail;
