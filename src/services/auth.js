import { axiosInstance as axios } from "../axios/axios";
import { setLocalStorageItem } from "../utilis/helper";
import { LOCAL_STORAGE_KEYS } from "../utilis/constants";

export const Login = async (payload) => {
  try {
    // const response = await axios.post("/auth/login", payload);
    // const { accessToken, user } = response;
    const accessToken = 'test1232443fdfdtddf';
    const user = {
      name: 'test',
      _id: '02030303030',
      userType: 'Default'
    }

    setLocalStorageItem(LOCAL_STORAGE_KEYS.TOKEN, accessToken);
    setLocalStorageItem(LOCAL_STORAGE_KEYS.USER, user);
    return user;
  } catch (err) {
    const { response } = err;
    const { data } = response;
    let error = "";
    if (data.statusCode === 401) {
      error = data.message;
    }
    throw error;
  }
};

export const Register = async (payload) => {
  try {
    const response = await axios.post("/auth/register", payload);
    const { accessToken, user } = response;
    setLocalStorageItem(LOCAL_STORAGE_KEYS.TOKEN, accessToken);
    setLocalStorageItem(LOCAL_STORAGE_KEYS.USER, user);
    return response;
  } catch (err) {
    const { response } = err;
    const { data } = response;
    let error = "";
    if (data.statusCode === 406 || data.statusCode === 409) {
      error = data.message;
    }
    throw error;
  }
};

export const InvitationRegister = async (payload) => {
  try {
    const response = await axios.post("/invitation/register", payload);
    return response;
  } catch (err) {
    const { response } = err;
    const { data } = response;
    let error = "";
    if (data.statusCode === 406) {
      error = data.message;
    }
    throw error;
  }
};

export const ForgotPassword = async (payload) => {
  try {
    const response = await axios.post("/auth/forgot-password", payload);
    return response;
  } catch (err) {
    const { response } = err;
    const { data } = response;
    let error = "";
    if (data.statusCode === 406 || data.statusCode === 409) {
      error = data.message;
    }
    throw error;
  }
};