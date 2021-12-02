import axios from "axios";

const url = "http://localhost:8000";

export const authenticateSignUp = async (user) => {
  try {
    return await axios.post(`${url}/signUp`, user);
  } catch (error) {
    console.log("error while calling signUp", error);
  }
};

export const authenticateLogin = async (user) => {
  try {
    return await axios.post(`${url}/login`, user);
  } catch (error) {
    console.log("error while calling login API: ", error);
  }
};
