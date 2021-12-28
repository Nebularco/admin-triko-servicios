import http from "../http-common";

const get = (token: string) => {
  return http.get(`/application/service/servicesrequests`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

const ServicesRequestsService = {
  get,
};

export default ServicesRequestsService;
