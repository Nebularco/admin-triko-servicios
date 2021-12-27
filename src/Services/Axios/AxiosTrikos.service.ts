import http from "./http-common";

const get = (token: string) => {
  return http.get(`/application/triko/trikos`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

const TrikosService = {
  get,
};

export default TrikosService;
