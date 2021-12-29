export type DataOrders = {
  id: string;
  type: string;
  attributes: {
    order_code: string;
    payment_method_id: number;
    subtotal: number;
    taxtotal: number;
    total: number;
    created_at: string;
    workflow: { workflow: string };
    paymentMethod: { name?: { es: string } };
  };
};
