import http from "../http-common";

const get = (token: string) => {
  return http.get(`/application/order/orders`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

const getPage = (token: string, rowsPerPage: number, page: number) => {
  return http.get(
    `/application/order/orders?page[number]=${page}&page[size]=${rowsPerPage}&`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

const OrdersService = {
  get,
  getPage,
};

export default OrdersService;
