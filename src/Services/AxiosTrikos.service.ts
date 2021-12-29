import http from "../http-common";

const get = (token: string) => {
  return http.get(`/application/triko/trikos`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
const getPage = (token: string, rowsPerPage: number, page: number) => {
  return http.get(
    `/application/triko/trikos?page[number]=${page}&page[size]=${rowsPerPage}&`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};
const TrikosService = {
  get,
  getPage,
};

export default TrikosService;
