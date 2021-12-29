import http from "../http-common";

const get = (token: string) => {
  return http.get(`/application/client/clients`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

const getPagination = (token: string, rowsPerPage: number, page: number) => {
  return http.get(
    `/application/client/clients?page[number]=${page}&page[size]=${rowsPerPage}&`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

const ClientsService = {
  get,
  getPagination,
};

export default ClientsService;
