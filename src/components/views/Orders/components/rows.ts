export type DataOrders = {
  attributes: {
    order_code: string;
    paymentMethod: { attrs?: { type: string } };
    total: number;
    workflow: { workflow: string };
    created_at: string;
  };
};
