import { useEffect } from "react";
import apisauce from "apisauce";
import { useNavigate } from "react-router-dom";

const Url = window.location.protocol + "//" + window.location.hostname;
const api = apisauce.create({
  baseURL: Url,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 600000,
});

export const Logout = () => {
  const navigate = useNavigate();

  api
    .post("api/method/logout", {
      Authorization: "Bearer " + localStorage.getItem("sid"),
    })
    .catch((error) => console.log(error));
  localStorage.clear();
  useEffect(() => {
    navigate("/");
  });
};

export default Logout;