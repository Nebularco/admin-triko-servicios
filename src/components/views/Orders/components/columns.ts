interface Column {
  id: "Codigo" | "Metodo-pago" | "Total" | "Status" | "Creacion";

  label: string;
  minWidth?: number;
  align?: "right";
}

export const columns: readonly Column[] = [
  { id: "Codigo", label: "Código", minWidth: 100 },
  { id: "Metodo-pago", label: "Método de pago", minWidth: 100 },
  { id: "Total", label: "Total", minWidth: 100 },
  { id: "Status", label: "Estado", minWidth: 100 },
  { id: "Creacion", label: "Fecha de creación", minWidth: 100 },
];
