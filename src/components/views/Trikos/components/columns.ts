export interface Column {
  id: "Id" | "name" | "phone" | "email" | "state";
  label: string;
  minWidth?: number;
  align?: "right";
}
export const columns: readonly Column[] = [
  { id: "Id", label: "ID", minWidth: 150 },
  { id: "name", label: "Nombre", minWidth: 150 },
  { id: "phone", label: "Telefono", minWidth: 150 },
  { id: "email", label: "Email", minWidth: 150 },
  { id: "state", label: "Estado", minWidth: 150 },
];
