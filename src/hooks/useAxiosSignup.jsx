import axios from "axios";

const axiosSource = axios.post({
  baseURL:
    "https://staging-be-ecom.techserve4u.com/doc/#/User/post_api_user_signup",
});
const useAxiosSignup = () => {
  return axiosSource;
};

export default useAxiosSignup;
