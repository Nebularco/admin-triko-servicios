interface Column {
  id:
    | "id"
    | "order_code"
    | "paymentMethod"
    | "subtotal"
    | "taxtotal"
    | "total"
    | "type"
    | "workflow"
    | "created_at"
    | "acciones";
  label: string;
  minWidth?: number;
  align?: "right";
}

export const columns: readonly Column[] = [
  { id: "id", label: "ID", minWidth: 100 },  
  { id: "order_code", label: "Código", minWidth: 100 },  
  { id: "paymentMethod", label: "Método pago", minWidth: 100 },  
  { id: "subtotal", label: "Subtotal", minWidth: 100 },  
  { id: "taxtotal", label: "Taxtotal", minWidth: 100 },
  { id: "total", label: "Total", minWidth: 100 },  
  { id: "workflow", label: "status", minWidth: 100 },  
  { id: "created_at", label: "Creación", minWidth: 100 },
  { id: "acciones", label: "Acciones", minWidth: 100 },
];
