interface Column {
  id: "Codigo" | "Metodo-pago" | "Total" | "Status" | "Creacion";

  label: string;
  minWidth?: number;
  align?: "right";
}

export const columns: readonly Column[] = [
  { id: "Codigo", label: "Codigo", minWidth: 100 },
  { id: "Metodo-pago", label: "Metodo Pago", minWidth: 100 },
  { id: "Total", label: "Total", minWidth: 100 },
  { id: "Status", label: "Estado", minWidth: 100 },
  { id: "Creacion", label: "Fecha creacion", minWidth: 100 },
];
