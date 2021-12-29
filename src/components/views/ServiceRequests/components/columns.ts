interface Column {
  id:
    | "id"
    | "address"
    | "duration"
    | "client"
    | "triko"
    | "application_date"
    | "type"
    | "status"
    | "actions";
  label: string;
  minWidth?: number;
  align?: "right";
}

export const columns: readonly Column[] = [
  { id: "id", label: "ID", minWidth: 100 },
  { id: "address", label: "Dirección", minWidth: 100 },
  { id: "duration", label: "Duración (hrs)", minWidth: 100 },
  { id: "client", label: "Cliente", minWidth: 100 },
  { id: "triko", label: "Triko", minWidth: 100 },
  { id: "application_date", label: "Fecha de aplicación", minWidth: 100 },
  { id: "type", label: "Tipo", minWidth: 100 },
  { id: "status", label: "Estado", minWidth: 100 },
  { id: "actions", label: "Acciones", minWidth: 100 },
];
