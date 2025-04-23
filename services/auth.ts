import axios from "axios";

const API = "http://127.0.0.1:8000/api";

export const login = async (email: string, password: string) => {
    const res = await axios.post(`${API}/login`, { email, password }, {
      headers: {
        Accept: "application/json",
      },
    });
    const { token, user } = res.data;
    localStorage.setItem("token", token);
    return user;
  };
  

export const getMe = async () => {
  const token = localStorage.getItem("token");
  const res = await axios.get(`${API}/user`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};
