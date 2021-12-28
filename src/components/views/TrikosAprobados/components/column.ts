interface Column {
  id: "phone" | "eMail" | "ID" | "name" | "lastName" | "state" | "actions";
  label: string;
  minWidth?: number;
  align?: "right";
}

export const columns: readonly Column[] = [
  { id: "phone", label: "Teléfono", minWidth: 150 },
  { id: "eMail", label: "E-mail", minWidth: 100 },
  {
    id: "ID",
    label: "Identificación",
    minWidth: 150,
    align: "right",
  },
  {
    id: "name",
    label: "Nombres",
    minWidth: 150,
    align: "right",
  },
  {
    id: "lastName",
    label: "Apellidos",
    minWidth: 150,
    align: "right",
  },
  {
    id: "state",
    label: "Estado",
    minWidth: 150,
    align: "right",
  },
  {
    id: "actions",
    label: "Acciones",
    minWidth: 150,
    align: "right",
  },
];
