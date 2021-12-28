interface Column {
  id: "phone" | "eMail" | "ID" | "name" | "lastName" | "state" | "actions";
  label: string;
  minWidth?: number;
  align?: "right";
}

export const columns: readonly Column[] = [
  { id: "phone", label: "ID", minWidth: 100 },
  { id: "phone", label: "Dirección", minWidth: 100 },
  { id: "phone", label: "Duración (hrs)", minWidth: 100 },
  { id: "phone", label: "Cliente", minWidth: 100 },
  { id: "phone", label: "Triko", minWidth: 100 },
  { id: "phone", label: "Fecha de aplicación", minWidth: 100 },
  { id: "phone", label: "Tipo", minWidth: 100 },
  { id: "phone", label: "Estado", minWidth: 100 },
  { id: "phone", label: "Acciones", minWidth: 100 },
];
