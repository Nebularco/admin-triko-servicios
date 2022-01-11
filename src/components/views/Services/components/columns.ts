interface Column {
  id: "id" | "client" | "triko" | "status" | "application_date";

  label: string;
  minWidth?: number;
  align?: "right";
}

export const columns: readonly Column[] = [
  { id: "id", label: "ID", minWidth: 100 },
  { id: "client", label: "Cliente", minWidth: 100 },
  { id: "triko", label: "Triko", minWidth: 100 },
  { id: "status", label: "Estado", minWidth: 100 },
  { id: "application_date", label: "Fecha del Servicio", minWidth: 100 },
];
