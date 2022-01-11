export interface Column {
  id: "name" | "phone"| "eMail"| "time";
  label: string;
  minWidth?: number;
  align?: "right";
}
export const columns: readonly Column[] = [
  { id: "name", label: "Nombre", minWidth: 150 },
  { id: "phone", label: "Teléfono", minWidth: 150 },
  { id: "eMail", label: "Email", minWidth: 150 },
  { id: "time", label: "Fecha de registro", minWidth: 150 },

];
