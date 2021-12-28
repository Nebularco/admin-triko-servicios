import axios from "axios";

export default axios.create({
  baseURL: `http://api-admin-staging.triko.co/api/v1`,
  headers: {
    "Content-Type": "application/vnd.api+json",
    Accept: "application/vnd.api+json",
  },
});
