import http from "../http-common";

const get = (token: string) => {
  return http.get(`/application/setting/servicestypes`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

const ServiceTypesService = {
  get,
};

export default ServiceTypesService;
