import http from "../http-common";

const get = (token: string) => {
  return http.get(`/application/service/servicesrequests`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

const getPage = (token: string, rowsPerPage: number, page: number) => {
  return http.get(
    `/application/service/servicesrequests?page[number]=${page}&page[size]=${rowsPerPage}&`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

const ServicesRequestsApi = {
  get,
  getPage,
};

export default ServicesRequestsApi;
