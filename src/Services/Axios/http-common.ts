import axios from "axios";
import { STAGING } from "../../config/axios/paths";

export default axios.create({
  baseURL: STAGING,
  headers: {
    "Content-Type": "application/vnd.api+json",
    Accept: "application/vnd.api+json",
  },
});
